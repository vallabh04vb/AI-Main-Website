"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ParallaxDividerProps {
  src: string
  alt: string
  overlayText?: string
  overlaySubtext?: string
}

export function ParallaxDivider({ src, alt, overlayText, overlaySubtext }: ParallaxDividerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Very large movement range — this will be clearly visible
  const imageY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.1, 1.3])
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden section-border"
    >
      {/* Parallax image — moves dramatically against scroll */}
      <motion.div
        className="absolute inset-[-25%]"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#070809]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070809] via-transparent to-[#070809]" />

      {/* Floating text — moves opposite to image for double parallax effect */}
      {overlayText && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter">
              {overlayText}
            </h3>
            {overlaySubtext && (
              <p className="text-lg md:text-xl text-foreground/50 mt-4 tracking-wide">
                {overlaySubtext}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </section>
  )
}
