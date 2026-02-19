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

  // Layer 1: Background image — slowest (deep)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  // Layer 2: Grid pattern — medium speed
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.8], [0.12, 0])

  // Layer 3: Content — fastest (foreground), fades out
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Layer 4: Ambient glow — drifts independently
  const glowX = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"])
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section ref={ref} className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Layer 1: Parallax Background Image (deepest) */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&h=1080&fit=crop&q=80"
          alt="AI Neural Network Visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070809] via-[#070809]/90 to-[#070809]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-[#070809]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070809]/60 via-transparent to-[#070809]" />
      </motion.div>

      {/* Layer 2: Moving Grid Pattern (mid-depth) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: gridY, opacity: gridOpacity }}
      >
        <div className="absolute inset-0 dot-grid" />
        {/* Fine line grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsla(220, 10%, 25%, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, hsla(220, 10%, 25%, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Layer 3: Ambient gradient glow (drifts on scroll) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: glowX, y: glowY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 40% 30% at 70% 40%, hsla(220, 40%, 25%, 0.1) 0%, transparent 70%),
              radial-gradient(ellipse 30% 25% at 20% 80%, hsla(260, 30%, 20%, 0.06) 0%, transparent 70%)
            `,
          }}
        />
      </motion.div>

      {/* Layer 4: Content (foreground — moves fastest) */}
      <motion.div
        className="relative z-10 container"
        style={{ y: contentY, opacity: contentOpacity }}
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

          {/* Floating Headline — subtle continuous animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.1 },
              y: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[1.05] tracking-tighter mb-8"
            style={{ transform: "translateZ(40px)" }}
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

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
