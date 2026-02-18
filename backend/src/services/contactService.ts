import { Resend } from "resend"
import { ContactSubmission } from "../models/ContactSubmission"

// Lazy initialization of Resend - only create when needed
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

interface CreateSubmissionData {
  name: string
  company?: string
  email: string
  problem: string
}

export const contactService = {
  async createSubmission(data: CreateSubmissionData) {
    // Create submission in database
    const submission = await ContactSubmission.create({
      name: data.name,
      company: data.company,
      email: data.email,
      problem: data.problem,
      status: "PENDING",
    })

    // Send email notification (only if Resend is configured)
    try {
      const resend = getResend()
      if (resend) {
        const contactEmail = process.env.CONTACT_EMAIL || "hello@name.ai"
        
        await resend.emails.send({
          from: "Contact Form <onboarding@resend.dev>", // Update with verified domain
          to: contactEmail,
          replyTo: data.email,
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Problem Description:</strong></p>
            <p>${data.problem.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>Submission ID: ${submission.id}</small></p>
          `,
        })
      } else {
        console.warn("⚠️  Resend API key not configured. Email notification skipped.")
      }
    } catch (error) {
      console.error("Failed to send email notification:", error)
      // Don't fail the request if email fails
    }

    return submission
  },

  async getAllSubmissions() {
    return await ContactSubmission.find().sort({ createdAt: -1 })
  },

  async getSubmissionById(id: string) {
    return await ContactSubmission.findById(id)
  },

  async updateStatus(id: string, status: string) {
    return await ContactSubmission.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )
  },
}
