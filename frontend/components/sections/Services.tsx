"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Eye, FileSearch, Phone, Brain, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { TiltCard } from "@/components/ui/tilt-card"
import { ServiceDialog } from "@/components/ui/service-dialog"
import { ServiceDialogContent } from "@/components/sections/service-dialog-content"

const services = [
  {
    icon: Eye,
    title: "VisionOps: Industrial Video Intelligence",
    description: "End-to-end computer vision pipelines that convert raw camera feeds into real-time operational data. Automated tracking, warehouse safety, and inventory logistics.",
    capabilities: [
      "RTSP stream ingestion with Kafka/MSK",
      "YOLOv5 & ONNX on AWS EKS",
      "Automated compliance audit trails",
    ],
  },
  {
    icon: FileSearch,
    title: "Extraction Engines",
    description: "AI-powered document intelligence that transforms unstructured data into actionable insights. Automated classification, extraction, validation, and human-in-the-loop review workflows.",
  },
  {
    icon: Phone,
    title: "Autonomous Voice",
    description: "Production-grade AI voice agents that manage complex conversations end-to-end. Natural dialogue, real-time decision-making, and seamless system integration.",
  },
  {
    icon: Brain,
    title: "Knowledge Wrappers",
    description: "Enterprise-grade AI layer that unifies your organization's knowledge. Intelligent search, contextual reasoning, and automated workflow execution across all systems.",
  },
  {
    icon: TrendingUp,
    title: "Growth Intelligence",
    description: "AI-driven revenue engine that identifies, scores, and engages high-value prospects. Predictive analytics, multi-channel orchestration, and autonomous pipeline management.",
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const orbX = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const orbY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])

  // Large parallax difference between heading and cards — clearly visible depth
  const headingY = useTransform(scrollYProgress, [0, 1], [100, -60])
  const cardsY = useTransform(scrollYProgress, [0, 1], [150, -30])

  return (
    <section ref={sectionRef} className="py-28 section-border section-blue relative overflow-hidden">
      {/* Floating gradient orb — parallax */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          x: orbX,
          y: orbY,
          width: "600px",
          height: "600px",
          right: "-200px",
          top: "10%",
          background: "radial-gradient(circle, hsla(220, 40%, 20%, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container relative z-10">
        {/* Heading — moves at its own parallax speed */}
        <motion.div
          style={{ y: headingY }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              What We Engineer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">
              Services & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Five pillars of applied AI. Each built for production scale, not demos.
            </p>
          </motion.div>
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            View details
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Cards — move at different parallax speed for depth */}
        <motion.div style={{ y: cardsY }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* VisionOps — Flagship with image + parallax */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <TiltCard className="overflow-hidden cursor-pointer" onClick={() => setSelectedService(0)}>
                <div className="relative h-52 md:h-60 overflow-hidden" style={{ marginBottom: -2 }}>
                  <div className="absolute inset-0" style={{ transform: "translateZ(0)" }}>
                    <video
                      src="/services/visionops-card.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover scale-[1.15] group-hover:scale-[1.2] transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-[hsl(var(--card))]/60 to-transparent" />
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background group-hover:border-foreground/15 transition-colors">
                      <Eye className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tighter">
                        {services[0].title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl">
                        {services[0].description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {services[0].capabilities?.map((cap, i) => (
                          <span key={i} className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                            {cap}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-colors mt-4">
                        Click to learn more
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Remaining services — staggered reveal with TiltCard */}
            {services.slice(1).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                >
                  <TiltCard className="p-8 h-full cursor-pointer" onClick={() => setSelectedService(index + 1)}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background mb-5 group-hover:border-foreground/15 transition-colors">
                      <Icon className="h-[18px] w-[18px] text-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-xs text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-colors mt-3">
                      Click to learn more
                    </p>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      <ServiceDialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {selectedService !== null && (
          <ServiceDialogContent serviceIndex={selectedService} />
        )}
      </ServiceDialog>
    </section>
  )
}
