import mongoose from "mongoose";
import chalk from 'chalk'

async function connectDB(url: string): Promise<void> {
  try {
    // Registering event listeners
    mongoose.connection.on('connected', () => {
      console.log(chalk.blue("Connected to MongoDB"));
    })

    mongoose.connection.on('error', (err) => {
      console.error(chalk.red("Error connecting to MongoDB:", err));
    })

    // Connecting to MongoDB
    await mongoose.connect(url);

  } catch (error) {
    // If an error occurs, log the error and exit the process
    console.error(chalk.red("Error connecting to MongoDB:", error));
    process.exit(1)
  }
}

export default connectDB;