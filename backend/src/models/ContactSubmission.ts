import mongoose, { Schema, Document, Model } from "mongoose"

export interface IContactSubmission extends Document {
  name: string
  company?: string
  email: string
  problem: string
  status: "PENDING" | "REVIEWED" | "CONTACTED" | "ARCHIVED"
  createdAt: Date
  updatedAt: Date
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    problem: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "REVIEWED", "CONTACTED", "ARCHIVED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  }
)

// Indexes for faster queries
ContactSubmissionSchema.index({ email: 1 })
ContactSubmissionSchema.index({ status: 1 })
ContactSubmissionSchema.index({ createdAt: -1 })

export const ContactSubmission: Model<IContactSubmission> = mongoose.model<IContactSubmission>(
  "ContactSubmission",
  ContactSubmissionSchema
)
