import mongoose, { Schema } from "mongoose";

// Define the user schema types for type safety
export interface UserSchema {
  firstName: string;
  lastName: string;
  location: string;
  emailId: string;
}

// Define the user schema with strong type safety
const userSchema = new Schema<UserSchema>({
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
}, { timestamps: true });

// Export the User model for further usage
export const Users = mongoose.model('users', userSchema);