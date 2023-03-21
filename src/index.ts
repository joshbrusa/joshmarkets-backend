import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRouter";
import errorHandler from "./middleware/errorHandler";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", authRouter);

// error middleware, keep at end
app.use(errorHandler);

app.listen(process.env.PORT);
