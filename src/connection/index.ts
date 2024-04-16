import mongoose from "mongoose";

async function connectDB(url: string): Promise<typeof mongoose> {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    return mongoose;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

export default connectDB;