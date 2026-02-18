import { Router, Request, Response, NextFunction } from "express"
import { z } from "zod"
import { contactService } from "../services/contactService"
import { AppError } from "../middleware/errorHandler"
import { authenticate, requireAdmin } from "../middleware/auth"

export const contactRoutes = Router()

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  problem: z.string().min(10, "Problem description must be at least 10 characters"),
})

// Submit contact form (public)
contactRoutes.post(
  "/submit",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = contactSchema.parse(req.body)
      const submission = await contactService.createSubmission(validatedData)
      
      res.status(201).json({
        success: true,
        message: "Thank you for reaching out. We'll get back to you soon.",
        data: {
          id: submission.id,
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

// Get all submissions (admin only)
contactRoutes.get(
  "/",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const submissions = await contactService.getAllSubmissions()
      res.json({
        success: true,
        data: submissions,
      })
    } catch (error) {
      next(error)
    }
  }
)

// Get single submission (admin only)
contactRoutes.get(
  "/:id",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const submission = await contactService.getSubmissionById(req.params.id)
      if (!submission) {
        return next(new AppError("Submission not found", 404))
      }
      res.json({
        success: true,
        data: submission,
      })
    } catch (error) {
      next(error)
    }
  }
)

// Update submission status (admin only)
contactRoutes.patch(
  "/:id/status",
  authenticate,
  requireAdmin,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status } = req.body
      const validStatuses = ["PENDING", "REVIEWED", "CONTACTED", "ARCHIVED"]
      
      if (!validStatuses.includes(status)) {
        return next(new AppError("Invalid status", 400))
      }

      const submission = await contactService.updateStatus(
        req.params.id,
        status
      )
      
      if (!submission) {
        return next(new AppError("Submission not found", 404))
      }

      res.json({
        success: true,
        data: submission,
      })
    } catch (error) {
      next(error)
    }
  }
)
