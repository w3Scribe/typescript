import createHttpError from "http-errors";
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

export const getUpdateUserData: UserRequest = async (req, res, next): Promise<void> => {
  const { oldData, newData } = req.body;
  try {
    // Ensure the query uses the _id field to find the document
    const query = { _id: oldData._id };
    const update = { $set: newData }; // Use $set to specify the fields to update
    const options = { new: true }; // Return the updated document

    const updatedUserData = await Users.findOneAndUpdate(query, update, options);
    if (!updatedUserData) {
      res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({ updatedUserData });
  } catch (error) {
    next?.(error);
  }
};

export const getReplaceUserData: UserRequest = async (req, res, next): Promise<void> => {
  const { oldData, newData } = req.body
  try {
    const query = { _id: oldData._id }
    const replace = newData
    const option = { new: true }

    const ReplacedUserData = await Users.findOneAndReplace(query, replace, option)
    if (!ReplacedUserData) throw createHttpError(404, 'use not found in database')
    res.status(201).json({ ReplacedUserData })
  }
  catch (error) {
    next?.(error)
  }
}

export const getDeletedUserData: UserRequest = async (req, res, next): Promise<void> => {
  try {
    await Users.deleteOne(req.body)
    res.status(202).json({ message: 'user succefully deleted', UserId: req.body._id })
  } catch (error) {
    next?.(error)
  }
}