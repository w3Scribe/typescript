import express, { Express } from 'express'
import userRouter from './routes/user'
import { globleErrorHandler } from './middleware'

// creating the app 
const app: Express = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/users', userRouter)

// Global Error Handler - middleware
app.use(globleErrorHandler);

export default app;