"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ExternalLink, Calendar, MessageSquare, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "CorePlex.ai built us a working vision pipeline prototype in under two weeks. We went from concept to production monitoring across three warehouses within a quarter.",
    name: "Director of Operations",
    company: "Logistics & Warehousing",
  },
  {
    quote: "Their extraction engine cut our medical coding review time by 90%. What used to take our team 6 hours daily now runs autonomously with higher accuracy.",
    name: "VP of Clinical Operations",
    company: "Healthcare Services",
  },
  {
    quote: "The voice agent they built handles 3,000+ inbound calls monthly. Our patients can't tell they're speaking to AI — and we haven't missed a single appointment booking since.",
    name: "Practice Manager",
    company: "Multi-location Medical Group",
  },
]

const caseStudies = [
  {
    title: "VisionOps for Warehouse Safety",
    metric: "85%",
    metricLabel: "reduction in safety incidents",
    description: "Deployed real-time camera-based monitoring across 12 zones. Automated detection of PPE violations, forklift proximity risks, and restricted area breaches.",
    tags: ["Computer Vision", "YOLOv5", "AWS EKS"],
    href: "/services?service=0",
  },
  {
    title: "Intelligent Document Extraction",
    metric: "50K+",
    metricLabel: "documents processed monthly",
    description: "Built a full-spectrum document intelligence platform processing contracts, invoices, and medical records. Automated classification, extraction, and human-in-the-loop review with 95%+ accuracy.",
    tags: ["Document AI", "OCR", "HITL Review"],
    href: "/services?service=1",
  },
  {
    title: "Voice AI for Patient Onboarding",
    metric: "24/7",
    metricLabel: "autonomous coverage",
    description: "Deployed a natural-sounding voice agent handling appointment scheduling, insurance verification, and new patient intake across five clinic locations.",
    tags: ["Voice AI", "Twilio", "Agentic Workflows"],
    href: "/services?service=2",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function BookDemoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/your-username/demo"

  return (
    <div>
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Let's Talk
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-5">
            Start With a Conversation
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Schedule a 30-minute discovery call. We'll discuss your operational challenge, assess feasibility, and outline how we'd approach building a prototype.
          </p>

          {/* Two action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <motion.a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card glow-hover p-8 text-center group cursor-pointer block"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background mx-auto mb-5 group-hover:border-foreground/15 transition-colors">
                <Calendar className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">
                Book a Slot on Calendly
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pick a time that works for you. 30 minutes, zero pressure.
              </p>
              <span className="inline-flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                Open Calendly
                <ExternalLink className="ml-1.5 h-3 w-3" strokeWidth={1.5} />
              </span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact" className="glass-card glow-hover p-8 text-center group block h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background mx-auto mb-5 group-hover:border-foreground/15 transition-colors">
                  <MessageSquare className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">
                  Share Your Challenge
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Describe your problem in writing. We'll respond within 48 hours.
                </p>
                <span className="inline-flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  Go to Contact
                  <ArrowRight className="ml-1.5 h-3 w-3" strokeWidth={1.5} />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="section-border section-elevated py-24 md:py-28">
        <div className="container">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Client Voices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
              What Our Clients Say
            </h2>
          </motion.div>

          {/* Auto-scrolling carousel */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[hsl(220,8%,3%)] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[hsl(220,8%,3%)] to-transparent" />

            <div className="flex gap-4 animate-carousel hover:[animation-play-state:paused]">
              {/* Duplicate items for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card glow-hover p-7 flex flex-col shrink-0 w-[340px] sm:w-[400px]"
                >
                  <Quote className="h-5 w-5 text-muted-foreground/40 mb-4" strokeWidth={1.5} />
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-border py-24 md:py-28">
        <div className="container">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-14"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Proven Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
              Case Studies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={study.href}
                  className="glass-card glow-hover p-7 group flex flex-col h-full"
                >
                  <div className="text-3xl font-bold text-foreground tracking-tighter mb-1">
                    {study.metric}
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">{study.metricLabel}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-xs text-muted-foreground/0 group-hover:text-muted-foreground transition-colors mt-auto">
                    View service details
                    <ArrowRight className="ml-1.5 h-3 w-3" strokeWidth={1.5} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-border py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground mb-5">
              Ready to see it in action?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every engagement starts with a prototype. No commitment until you've seen results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm font-semibold tracking-wide uppercase"
              >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Schedule on Calendly
                  <ExternalLink className="ml-2 h-4 w-4" strokeWidth={1.5} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:border-foreground/20 bg-transparent px-8 py-6 text-sm font-medium tracking-wide uppercase"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
