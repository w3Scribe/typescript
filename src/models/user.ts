import mongoose, { Schema, SchemaOptions, SchemaType } from "mongoose";

// Specifing the types to the schema for the type safety
type userTypes = SchemaType & SchemaOptions & {
  firstName: string
  lastName: string
  location: string
  emailId: string
}

// this is the user schem the with the strong user types safety
const user_schema = new Schema<userTypes>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
});

// exporting the user module for the further usage  
export const Users = mongoose.model('users', user_schema);

