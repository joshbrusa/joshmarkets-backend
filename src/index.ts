import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const port = 80;

app.use(cors());

app.listen(port);

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});
