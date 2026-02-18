"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -40])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Parallax Background — AI Neural Network */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&q=80"
          alt="AI Neural Network Visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]" />
      </motion.div>

      {/* Parallax dot grid */}
      <motion.div
        className="absolute inset-0 dot-grid pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
      />

      <motion.div
        className="relative z-10 container"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-5xl py-32 md:py-40 lg:py-48">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-8 border border-border/60 px-4 py-1.5 rounded-full backdrop-blur-sm bg-background/20">
              Elite Applied AI Engineering Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tighter mb-8"
          >
            Engineering Intelligence
            <br />
            <span className="text-gradient">for Operational Excellence.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            We analyze, prototype, and deploy high-scale AI systems that subtract
            manual toil from your core logic. Vision pipelines. Intelligent data engines.
            Autonomous voice. Production-ready from day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm font-semibold tracking-wide uppercase transition-all duration-200"
            >
              <Link href="/book-demo">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" strokeWidth={1.5} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/60 hover:border-foreground/20 bg-background/10 backdrop-blur-sm px-8 py-6 text-sm font-medium tracking-wide uppercase transition-all duration-200"
            >
              <Link href="/contact">Share Your Challenge</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
