"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Eye, FileSearch, Phone, Brain, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const services = [
  {
    icon: Eye,
    label: "Flagship",
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
    description: "Intelligent systems that read, understand, and structure data from messy documents. ICD-10-CM coding, financial parsing, multimodal extraction.",
  },
  {
    icon: Phone,
    title: "Autonomous Voice",
    description: "High-EQ voice agents for real-time phone interactions. Low-latency telephony, agentic workflows, zero robotic delay.",
  },
  {
    icon: Brain,
    title: "Knowledge Wrappers",
    description: "Private AI layer across your internal systems. Enterprise RAG, system debugging, workflow orchestration.",
  },
  {
    icon: TrendingUp,
    title: "Growth Intelligence",
    description: "Autonomous agents for lead gen, qualification, and personalized outreach at scale.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export function Services() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={sectionRef} className="py-28 section-border section-elevated">
      <div className="container">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              What We Engineer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-4">
              Services & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Five pillars of applied AI. Each built for production scale, not demos.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
          >
            View details
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* VisionOps — Flagship with image + parallax */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card glow-hover overflow-hidden group"
          >
            <div className="relative h-52 md:h-60 overflow-hidden">
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=500&fit=crop&q=80"
                  alt="Industrial automation and computer vision"
                  fill
                  className="object-cover scale-110 group-hover:scale-[1.15] transition-transform duration-700 ease-out"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_5%)] via-[hsl(0_0%_5%/0.6)] to-[hsl(0_0%_5%/0.2)]" />
              <div className="absolute top-5 left-5">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-foreground/80 bg-background/40 backdrop-blur-sm border border-border/40 px-3 py-1 rounded-full">
                  Flagship
                </span>
              </div>
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
                </div>
              </div>
            </div>
          </motion.div>

          {/* Remaining 4 services */}
          {services.slice(1).map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                {...fadeInUp}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="glass-card glow-hover p-8 group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background mb-5 group-hover:border-foreground/15 transition-colors">
                  <Icon className="h-[18px] w-[18px] text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
