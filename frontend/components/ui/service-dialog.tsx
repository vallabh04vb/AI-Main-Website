"use client"

import { useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ServiceDialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function ServiceDialog({ open, onClose, children }: ServiceDialogProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [open, handleEscape])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Dialog panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="dialog-panel relative z-10 w-full max-w-[960px] max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.06] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)]"
            style={{
              background: "linear-gradient(180deg, hsl(220 8% 7%) 0%, hsl(220 6% 5%) 100%)",
            }}
          >
            {/* Top glow accent */}
            <div
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
              style={{
                background: "linear-gradient(90deg, transparent, hsla(220, 30%, 60%, 0.4), transparent)",
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 mt-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-muted-foreground hover:text-foreground hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
