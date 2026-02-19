"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TiltCard } from "@/components/ui/tilt-card"

const metrics = [
  { value: "90%", label: "Reduction in Manual Data Entry", context: "Healthcare & Finance" },
  { value: "24/7", label: "Autonomous Voice Coverage", context: "Zero Missed Calls" },
  { value: "50K+", label: "Documents Processed Monthly", context: "Real-time Extraction" },
  { value: "<200ms", label: "Inference Latency", context: "Edge-to-Cloud Pipeline" },
  { value: "95%", label: "Retrieval Accuracy", context: "Enterprise RAG Systems" },
  { value: "2 Wks", label: "Prototype to Live Demo", context: "Average Delivery" },
]

export function CaseStudies() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Depth parallax — heading and cards at different speeds
  const headingY = useTransform(scrollYProgress, [0, 1], [50, -30])
  const cardsY = useTransform(scrollYProgress, [0, 1], [70, -10])
  const orbY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"])

  return (
    <section ref={ref} className="py-28 section-border section-purple relative overflow-hidden">
      {/* Floating gradient orb */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          y: orbY,
          width: "500px",
          height: "500px",
          left: "-150px",
          top: "20%",
          background: "radial-gradient(circle, hsla(260, 30%, 20%, 0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        {/* Heading — own parallax layer */}
        <motion.div style={{ y: headingY }} className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Engineered Results
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">
              Numbers That Speak
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Measurable impact from production-grade AI systems.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards — different parallax layer with TiltCards */}
        <motion.div style={{ y: cardsY }}>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <TiltCard className="p-7 md:p-8 h-full">
                  <div className="text-3xl md:text-4xl font-bold text-foreground tracking-tighter mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground/80 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.context}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
