import mongoose from "mongoose"

export const connectDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || process.env.DATABASE_URL
    
    if (!mongoUri) {
      throw new Error("MONGODB_URI or DATABASE_URL environment variable is not set")
    }

    await mongoose.connect(mongoUri)
    console.log("✅ Connected to MongoDB")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error)
    process.exit(1)
  }
}

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️  MongoDB disconnected")
})

mongoose.connection.on("error", (error) => {
  console.error("❌ MongoDB error:", error)
})
