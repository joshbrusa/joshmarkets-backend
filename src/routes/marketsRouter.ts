import { Router } from "express";
import { tickers } from "../controllers/marketsController";

const router = Router();

router.get("/tickers", tickers);

export default router;
