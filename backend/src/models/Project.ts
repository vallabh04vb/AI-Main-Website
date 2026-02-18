import mongoose, { Schema, Document, Model } from "mongoose"

export interface IProject extends Document {
  name: string
  description?: string
  status: "DRAFT" | "IN_PROGRESS" | "COMPLETED" | "ARCHIVED"
  clientEmail?: string
  createdAt: Date
  updatedAt: Date
}

const ProjectSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["DRAFT", "IN_PROGRESS", "COMPLETED", "ARCHIVED"],
      default: "DRAFT",
    },
    clientEmail: {
      type: String,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

// Indexes for faster queries
ProjectSchema.index({ status: 1 })
ProjectSchema.index({ createdAt: -1 })

export const Project: Model<IProject> = mongoose.model<IProject>("Project", ProjectSchema)
