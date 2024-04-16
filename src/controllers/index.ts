import { Request, Response } from "express";

export const getHomePage = (req: Request, res: Response) => {
  res.json({ msg: 'home page' })
}