"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X } from "lucide-react"

type ConsentChoice = "all" | "essential" | null

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay so it doesn't compete with page load
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept(choice: ConsentChoice) {
    localStorage.setItem("cookie-consent", choice ?? "essential")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop — only on mobile or when preferences open */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none sm:pointer-events-none"
            onClick={() => setShowPreferences(false)}
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6"
          >
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.08] bg-[hsl(220,10%,8%)]/95 backdrop-blur-xl shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.6)]">
              {/* Main banner */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                    <Cookie className="h-5 w-5 text-foreground/70" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-foreground mb-1.5">
                      We value your privacy
                    </h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose to accept all cookies or only essential ones.
                    </p>
                  </div>

                  <button
                    onClick={() => accept("essential")}
                    className="sm:hidden shrink-0 p-1.5 rounded-lg hover:bg-white/[0.06] transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </button>
                </div>

                {/* Preference toggles — expandable */}
                <AnimatePresence>
                  {showPreferences && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
                        <PreferenceRow
                          title="Essential"
                          description="Required for the website to function properly"
                          locked
                        />
                        <PreferenceRow
                          title="Analytics"
                          description="Help us understand how visitors interact with the site"
                        />
                        <PreferenceRow
                          title="Marketing"
                          description="Used to deliver relevant advertisements"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="mt-5 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setShowPreferences(!showPreferences)}
                    className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  >
                    {showPreferences ? "Hide" : "Preferences"}
                  </button>
                  <button
                    onClick={() => accept("essential")}
                    className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04]"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => accept("all")}
                    className="text-[13px] font-semibold text-background bg-foreground hover:bg-foreground/90 transition-all px-5 py-2.5 rounded-xl shadow-[0_0_16px_-4px_hsla(0,0%,100%,0.12)] sm:ml-auto"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function PreferenceRow({
  title,
  description,
  locked,
}: {
  title: string
  description: string
  locked?: boolean
}) {
  const [enabled, setEnabled] = useState(locked ? true : false)

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
      <div>
        <p className="text-[13px] font-medium text-foreground">{title}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => !locked && setEnabled(!enabled)}
        className={`relative w-10 h-[22px] rounded-full shrink-0 transition-colors duration-200 ${
          enabled ? "bg-foreground/80" : "bg-white/[0.1]"
        } ${locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-[3px] left-[3px] w-4 h-4 rounded-full bg-background transition-transform duration-200 ${
            enabled ? "translate-x-[18px]" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  )
}
