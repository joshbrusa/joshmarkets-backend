import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function get(req: Request, res: Response) {
  const data = await prisma.user.findMany();
  return res.json({ data });
}
