import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export async function reads(req: Request, res: Response, next) {
  try {
    const data = await prisma.user.findMany();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function readsId(req: Request, res: Response) {
  const data = await prisma.user.findMany();
  res.json({ data });
}

export async function creates(req: Request, res: Response) {
  const data = await prisma.user.findMany();
  res.json({ data });
}

export async function updates(req: Request, res: Response) {
  const data = await prisma.user.findMany();
  res.json({ data });
}

export async function deletes(req: Request, res: Response) {
  const data = await prisma.user.findMany();
  res.json({ data });
}
