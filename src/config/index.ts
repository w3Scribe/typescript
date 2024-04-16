import { config } from 'dotenv';

// accessing the all the env variables by calling this following config function
config()

// providing the PORT from the env as well as dynamic PORT 
export const env_variable = Object.freeze({
  PORT: Number(process.env.PORT) || 3000,
  MONGO_DB_BASE_URL: process.env.MONGO_DB_BASE_URL
})