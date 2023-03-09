import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";
import errorHandler from "./middleware/errorHandler";

dotenv.config();
const app = express();

app.use(cors());

// routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

// error middleware, keep at end
app.use(errorHandler);

app.listen(process.env.PORT || 80);
