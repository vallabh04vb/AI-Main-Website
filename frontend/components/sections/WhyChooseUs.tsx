"use client"

import { motion } from "framer-motion"
import { Target, Shield, Code2, MessagesSquare } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Outcome-First Engineering",
    description: "We start with your business problem, not a technology searching for a use case. Every system is engineered to deliver measurable operational impact.",
  },
  {
    icon: Code2,
    title: "Hard Tech Expertise",
    description: "Vision pipelines, Kafka streams, EKS orchestration, ONNX inference. We handle the engineering complexity that generalist agencies avoid.",
  },
  {
    icon: Shield,
    title: "Zero-Risk Prototype Model",
    description: "See it work before you commit. We build production-grade proofs of concept — not proposals, not mockups. You decide after the demo.",
  },
  {
    icon: MessagesSquare,
    title: "Precision Communication",
    description: "No buzzwords. No hype. We communicate with technical precision about what works, what doesn't, and what the real constraints are.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function WhyChooseUs() {
  return (
    <section className="py-28 section-border">
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Built Different
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Not a chatbot shop. Not a dev shop. An elite AI engineering studio focused on solving real operational problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card glow-hover p-8 group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background group-hover:border-foreground/20 transition-colors">
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
