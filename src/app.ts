import express, { Express } from 'express'
import userRouter from './routes/user'

// creating the app 
const app: Express = express()

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// routes
app.use('/users', userRouter)

export default app