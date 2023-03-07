import type { Request, Response } from "express";

export function login(req: Request, res: Response) {
  return res.json({ message: "hello from api" });
}
