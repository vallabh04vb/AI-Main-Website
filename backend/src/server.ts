import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import { connectDatabase } from "./config/database"
import { errorHandler } from "./middleware/errorHandler"
import { contactRoutes } from "./routes/contact"
import { authRoutes } from "./routes/auth"
import { healthRoutes } from "./routes/health"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/health", healthRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/auth", authRoutes)

// Error handling
app.use(errorHandler)

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDatabase()
    
    app.listen(PORT, () => {
      console.log(`🚀 Backend server running on http://localhost:${PORT}`)
      console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`)
    })
  } catch (error) {
    console.error("Failed to start server:", error)
    process.exit(1)
  }
}

startServer()

export default app
