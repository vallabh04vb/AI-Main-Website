"use client"

import { motion } from "framer-motion"
import { Minus } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "Subtraction of Toil",
    description: "We don't add tools — we subtract manual effort. Every system we build removes human hours from repetitive, error-prone operational processes.",
  },
  {
    number: "02",
    title: "Hard Tech, Not Chatbots",
    description: "Vision pipelines, industrial automation, medical coding engines. We engineer the complex AI systems that other agencies can't touch.",
  },
  {
    number: "03",
    title: "Prototype Before Contract",
    description: "We build a live proof of concept before any commitment. You see it work, test it, and decide — zero risk, full transparency.",
  },
  {
    number: "04",
    title: "Production-Scale Architecture",
    description: "AWS EKS, Kafka/MSK, containerized inference at the edge. Every solution is engineered for enterprise reliability from the first line of code.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function WhatWeDo() {
  return (
    <section className="py-28 section-border section-elevated">
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Not a chatbot shop.
            <br />
            <span className="text-gradient">An AI Engineering Studio.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clients bring operational problems. We engineer intelligence that eliminates them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glow-hover p-8 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono text-muted-foreground">{pillar.number}</span>
                <Minus className="h-3 w-3 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tighter">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
