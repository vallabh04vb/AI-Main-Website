"use client"

import { motion } from "framer-motion"
import { MessageSquare, Search, Zap, Play } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Challenge",
    description: "Describe the operational problem you're facing. No jargon needed — just tell us where the manual toil lives. We'll ask the right questions.",
  },
  {
    number: "02",
    icon: Search,
    title: "Feasibility Analysis",
    description: "We assess AI applicability, evaluate the technical landscape, identify risks, and map a clear path to a working solution. You get a transparent recommendation.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Live Prototype Build",
    description: "We build a functional proof of concept with real data and real scenarios. Not a mockup — a working system you can test, stress, and validate.",
  },
  {
    number: "04",
    icon: Play,
    title: "Demo & Decision",
    description: "You see the prototype in action. Then decide — proceed to production, iterate further, or walk away. No long-term contract required until you're satisfied.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function HowWeWork() {
  return (
    <section className="py-28 section-border">
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            The Prototype-First Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We build a live PoC before any commitment. Four steps from problem to proof.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    {...fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative flex gap-8 items-start group"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-foreground/20 transition-colors">
                        <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-card glow-hover p-8">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2 block">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tighter">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
