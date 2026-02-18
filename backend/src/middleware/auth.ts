import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "./errorHandler"

export interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
    role: string
  }
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "")

    if (!token) {
      throw new AppError("Authentication required", 401)
    }

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not configured")
    }

    const decoded = jwt.verify(token, jwtSecret) as {
      id: string
      email: string
      role: string
    }

    req.user = decoded
    next()
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new AppError("Invalid token", 401))
    } else {
      next(error)
    }
  }
}

export const requireAdmin = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return next(new AppError("Authentication required", 401))
  }

  if (req.user.role !== "ADMIN") {
    return next(new AppError("Admin access required", 403))
  }

  next()
}
