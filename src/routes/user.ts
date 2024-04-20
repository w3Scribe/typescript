import express, { Router } from "express";
import { getDeletedUserData, getReplaceUserData, getUpdateUserData, getUsers, getUsersPost } from "../controllers";

// creating the Router
const userRouter: Router = express.Router()

// users route
userRouter.route('/')
  .get(getUsers)
  .post(getUsersPost)
  .patch(getUpdateUserData)
  .put(getReplaceUserData)
  .delete(getDeletedUserData)

export default userRouter


