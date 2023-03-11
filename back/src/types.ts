import { Request, Response } from "express";
import { EntityManager } from "typeorm";
import { SessionData, Session } from "express-session";

export type MyContext = {
  em: EntityManager;
  req: Request & { session: Session & Partial<SessionData & { userId: number }> };
  res: Response;
};

export const validationEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
