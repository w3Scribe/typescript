import { Request, Response } from "express";
import { appendFile, readFile } from "fs/promises";
import { Users, UserSchema } from "../models/user";
import { MongooseError } from "mongoose";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await Users.find()
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send('error getting users')
  }
}

export const getUsersPost = async (req: Request, res: Response) => {
  try {
    const newUser = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      location: req.body.location
    })
    await newUser.save()
    res.status(201).json({ msg: "user created successfully", user: newUser })
  } catch (error) {  
    res.status(500).json({ msg: "error creating user", error: error })
  }
}