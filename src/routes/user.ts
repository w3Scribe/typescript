import express, { Router, Request, Response } from "express";
import { getHomePage } from "../controllers";

// creating the Router
const userRouter: Router = express.Router()

// home page route
userRouter.route('/')
  .get(getHomePage)

export default userRouter