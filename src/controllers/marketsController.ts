import type { Request, Response, NextFunction } from "express";

export async function tickers(req: Request, res: Response, next: NextFunction) {
  try {
    res.end();
  } catch (error) {
    next(error);
  }
}
