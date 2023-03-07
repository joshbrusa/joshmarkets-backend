import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";

dotenv.config();
const app = express();

app.use(cors());
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT || 80);
