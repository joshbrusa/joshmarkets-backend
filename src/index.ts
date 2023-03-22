import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter";
import marketsRouter from "./routes/marketsRouter";
import errorHandler from "./middleware/errorHandler";
import tickerCron from "./cron/tickerCron";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", authRouter);
app.use("/markets", marketsRouter);

// error middleware, keep at end
app.use(errorHandler);

// cron
tickerCron();

app.listen(process.env.PORT, () => {
  console.log("server listening on port", process.env.PORT);
});
