import { env_variable } from '../config'
import { GlobalErrors } from '../types/types'

// Global Error Handler - middleware
export const globleErrorHandler: GlobalErrors = (err, req, res, next) => {
  const statusCode: number = err.statusCode || 500
  res.status(statusCode).json({
    message: err.message,
    errorStack: env_variable.NODE_EVN === 'production' ? '🤫' : err.stack
  })
}