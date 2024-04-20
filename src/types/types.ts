import { HttpError } from "http-errors";
import { Request, Response, NextFunction } from 'express'

export interface GlobalErrors {
  (err: HttpError, req: Request, res: Response, next: NextFunction): void
}

export interface UserRequest {
  (req: Request, res: Response, next?: NextFunction): void | Promise<void>
}