import express, { Router } from "express";
import { getUsers, getUsersPost } from "../controllers";

// creating the Router
const userRouter: Router = express.Router()

// users route
userRouter.route('/')
  .get(getUsers)
  .post(getUsersPost)

export default userRouter