import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.listen(process.env.PORT || 80);

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});
