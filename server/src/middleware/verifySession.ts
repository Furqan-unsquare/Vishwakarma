import express, { NextFunction, Request, Response } from "express";
import { auth } from "../lib/auth.js";
import { fromNodeHeaders } from "better-auth/node";

export const verifySession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });

  if (!session || session.session.expiresAt < new Date(Date.now())) {
    res.status(400).json({ error: "Session expired. Please login again" });
    return;
  }
  res.locals.user = session.user;
  res.locals.session = session.session;
  next();
};
