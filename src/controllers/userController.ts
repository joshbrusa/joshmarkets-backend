import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";
import type { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export async function reads(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findMany();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function readsId(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });

    if (data === null) {
      res.status(404).end();
    }

    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function creates(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.body.email.length === 0) {
      res.status(400).json({ message: "email required" });
      return;
    } else if (req.body.password.length === 0) {
      res.status(400).json({ message: "password required" });
      return;
    } else if (req.body.name.length === 0) {
      res.status(400).json({ message: "name required" });
      return;
    }

    req.body.password = hashSync(req.body.password, 10);

    await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
      },
    });

    res.status(201).end();
  } catch (error) {
    next(error);
  }
}

export async function updates(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findMany();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}

export async function deletes(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findMany();
    res.json({ data });
  } catch (error) {
    next(error);
  }
}
