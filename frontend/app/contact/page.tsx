"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { api } from "@/lib/api"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      problem: formData.get("problem") as string,
    }

    const response = await api.contact.submit(data)
    setResult(response)
    setIsSubmitting(false)

    if (response.success) {
      e.currentTarget.reset()
    }
  }

  return (
    <div className="container py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
            Share Your Challenge
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Tell us about the operational problem you're facing. We'll assess how AI can solve it and get back to you within 48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="glass-card p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span className="text-muted-foreground">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span className="text-muted-foreground">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-foreground/30"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="problem" className="text-sm font-medium text-foreground">
                  Problem Description <span className="text-muted-foreground">*</span>
                </label>
                <Textarea
                  id="problem"
                  name="problem"
                  required
                  placeholder="Describe the operational challenge you're facing..."
                  rows={6}
                  disabled={isSubmitting}
                  className="bg-background border-border focus:border-foreground/30"
                />
                <p className="text-xs text-muted-foreground">
                  No technical jargon required — just describe the problem in your own words.
                </p>
              </div>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 rounded-md p-4 ${
                    result.success
                      ? "bg-green-950/50 text-green-200 border border-green-900/50"
                      : "bg-red-950/50 text-red-200 border border-red-900/50"
                  }`}
                >
                  {result.success ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0" />
                  )}
                  <p className="text-sm">
                    {result.success ? result.message : result.error}
                  </p>
                </motion.div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold tracking-wide uppercase py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Your Challenge"}
              </Button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>
            Prefer to talk directly?{" "}
            <a href="/book-demo" className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
              Book a discovery call
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  )
}
