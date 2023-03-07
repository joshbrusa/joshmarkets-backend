import express from "express";
import { get } from "../controllers/userController";

const router = express.Router();

router.get("/get", get);

export default router;
