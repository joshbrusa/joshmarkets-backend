import type { Request, Response } from "express";

export function signUp(req: Request, res: Response) {
  res.json({ message: "hello from api" });
}

export function signIn(req: Request, res: Response) {
  res.cookie("jwt", 1, { httpOnly: true });
  res.end();
}

export function signOut(req: Request, res: Response) {
  res.json({ message: "hello from api" });
}
