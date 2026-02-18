import { Router } from "express"

export const healthRoutes = Router()

healthRoutes.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  })
})
