import { Users } from "../models/user";
import { UserRequest } from "../types/types";

export const getUsers: UserRequest = async (_req, res, next) => {
  try {
    const data = await Users.find();
    res.status(200).send(data);
  } catch (error) {
    // If an error occurs, pass it to the global error handler
    next?.(error)
  }
}

export const getUsersPost: UserRequest = async (req, res) => {
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