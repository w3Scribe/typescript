import app from "./src/app";
import { env_variable } from "./src/config";
import connectDB from "./src/connection";
import chalk from "chalk";

const PORT: number = env_variable.PORT
const MONGO_DB_BASE_URL: string = env_variable.MONGO_DB_BASE_URL as string
const COLLECTION_NAME: string = 'myapp'

app.listen(PORT, async () : Promise<void> => {     
  await connectDB(`${MONGO_DB_BASE_URL}/${COLLECTION_NAME}`)
  console.log(chalk.green(`Server it started http://localhost:${PORT}`))
})  
    
