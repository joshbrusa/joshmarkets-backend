import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter";
import errorHandler from "./middleware/errorHandler";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/auth", authRouter);

// error middleware, keep at end
app.use(errorHandler);

app.listen(process.env.PORT || 80);
