import express, { Express } from 'express'
import userRouter from './routes/user'

// creating the app 
const app: Express = express()

// middlewares
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/users', userRouter)

export default app