import { Router, Request, Response, NextFunction } from "express"
import { z } from "zod"
import { authService } from "../services/authService"
import { AppError } from "../middleware/errorHandler"
import { authenticate } from "../middleware/auth"

export const authRoutes = Router()

const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

// Register new user
authRoutes.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = registerSchema.parse(req.body)
      const result = await authService.register(validatedData)
      
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          user: {
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
            role: result.user.role,
          },
          token: result.token,
        },
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return next(new AppError(error.errors[0].message, 400))
      }
      next(error)
    }
  }
)

// Login
authRoutes.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = loginSchema.parse(req.body)
      const result = await authService.login(validatedData)
      
      res.json({
        success: true,
        message: "Login successful",
        data: {
          user: {
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
            role: result.user.role,
          },
          token: result.token,
        },
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return next(new AppError(error.errors[0].message, 400))
      }
      next(error)
    }
  }
)

// Get current user
authRoutes.get(
  "/me",
  authenticate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authReq = req as any
      const user = await authService.getUserById(authReq.user.id)
      
      if (!user) {
        return next(new AppError("User not found", 404))
      }

      res.json({
        success: true,
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      })
    } catch (error) {
      next(error)
    }
  }
)
