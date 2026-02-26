"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function TiltCard({ children, className, onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -8, y: x * 8 })
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={cn(
        "glass-card glow-hover gradient-border group relative",
        isHovered && "z-10",
        className
      )}
    >
      {/* Glow that follows cursor */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-[var(--radius)] pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${(tilt.y / 8 + 0.5) * 100}% ${(-tilt.x / 8 + 0.5) * 100}%, hsla(220, 20%, 50%, 0.06) 0%, transparent 60%)`,
          }}
        />
      )}
      <div style={{ transform: "translateZ(0)" }}>{children}</div>
    </motion.div>
  )
}
