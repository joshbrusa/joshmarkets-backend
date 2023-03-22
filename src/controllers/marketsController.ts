import type { Request, Response, NextFunction } from "express";

const ploygonBaseUrl = "https://api.polygon.io/";
const ploygonAPIParam = "apiKey=" + process.env.POLYGON_API_KEY;

export async function tickers(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await fetch(
      ploygonBaseUrl + "v3/reference/tickers?active=true&" + ploygonAPIParam
    );

    if (data.ok) {
      res.json(await data.json());
    } else {
      res.status(400).end();
    }
  } catch (error) {
    next(error);
  }
}
