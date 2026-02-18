"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export function CTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1.05, 1])
  const contentY = useTransform(scrollYProgress, [0.2, 0.8], [60, -20])
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.85, 1], [0, 1, 1, 0.6])

  return (
    <section ref={ref} className="relative py-40 md:py-48 section-border overflow-hidden">
      {/* Parallax background — more visible */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80"
          alt="Global intelligence network"
          fill
          className="object-cover"
        />
        {/* Lighter overlays — image stays visible */}
        <div className="absolute inset-0 bg-[#050505]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-[#050505]/70" />
      </motion.div>

      <div className="container relative z-10">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground/50 mb-6 block">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6">
            Ready to Subtract the Toil?
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a discovery call to discuss your operational challenge. We'll assess feasibility and build a live prototype — before any commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              className="border-foreground/20 hover:border-foreground/40 bg-white/5 backdrop-blur-sm px-8 py-6 text-sm font-medium tracking-wide uppercase transition-all duration-200 text-foreground"
            >
              <Link href="/contact">Share Your Challenge</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
