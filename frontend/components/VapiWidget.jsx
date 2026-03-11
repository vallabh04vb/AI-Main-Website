"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const VAPI_PUBLIC_KEY = "b2dcc8f3-cb83-4fe6-8f58-7fd87c6072e6"
const VAPI_ASSISTANT_ID = "b8341d88-51fc-4381-99b0-d9a5d0f84f3f"

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="1" width="6" height="12" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}

function PhoneHangupIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: "vapi-spin 1s linear infinite" }}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  )
}

function UnmutedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="1" width="6" height="12" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    </svg>
  )
}

function MutedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="1" width="6" height="12" rx="3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  CSS Keyframes (injected once)                                      */
/* ------------------------------------------------------------------ */

const WIDGET_CSS = `
@keyframes vapi-ripple {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.4); opacity: 0; }
}
@keyframes vapi-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes vapi-fadeUp {
  0% { transform: translateY(8px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes vapi-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
`

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function VapiWidget() {
  const [status, setStatus] = useState("idle") // idle | connecting | active
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(0)
  const [scrolledPastHero, setScrolledPastHero] = useState(false)
  const vapiRef = useRef(null)
  const cssInjected = useRef(false)

  // Hide floating widget while hero is visible
  useEffect(() => {
    function onScroll() {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Inject keyframe CSS once
  useEffect(() => {
    if (cssInjected.current) return
    cssInjected.current = true
    const style = document.createElement("style")
    style.textContent = WIDGET_CSS
    document.head.appendChild(style)
  }, [])

  // Initialize VAPI SDK
  useEffect(() => {
    let instance = null

    async function init() {
      try {
        const { default: Vapi } = await import("@vapi-ai/web")
        instance = new Vapi(VAPI_PUBLIC_KEY)

        instance.on("call-start", () => {
          setStatus("active")
          setMuted(false)
        })

        instance.on("call-end", () => {
          setStatus("idle")
          setVolume(0)
          setMuted(false)
        })

        instance.on("volume-level", (level) => {
          setVolume(typeof level === "number" ? level : 0)
        })

        instance.on("error", (err) => {
          console.error("[VapiWidget] error:", err)
          setStatus("idle")
          setVolume(0)
        })

        vapiRef.current = instance
      } catch (err) {
        console.error("[VapiWidget] init failed:", err)
      }
    }

    init()

    return () => {
      if (instance) {
        try { instance.stop() } catch (_) { /* ignore */ }
      }
    }
  }, [])

  const handleClick = useCallback(async () => {
    const vapi = vapiRef.current
    if (!vapi) return

    if (status === "idle") {
      setStatus("connecting")
      try {
        await vapi.start(VAPI_ASSISTANT_ID)
      } catch (err) {
        console.error("[VapiWidget] start failed:", err)
        setStatus("idle")
      }
    } else if (status === "active") {
      vapi.stop()
    }
  }, [status])

  // Expose start function globally so other components can trigger calls
  useEffect(() => {
    window.__vapiStart = handleClick
    return () => { delete window.__vapiStart }
  }, [handleClick])

  const toggleMute = useCallback((e) => {
    e.stopPropagation()
    const vapi = vapiRef.current
    if (!vapi || status !== "active") return
    const next = !muted
    vapi.setMuted(next)
    setMuted(next)
  }, [muted, status])

  const isActive = status === "active"
  const isConnecting = status === "connecting"

  // Volume-scaled ripple size (0 → 1)
  const rippleScale = Math.min(volume * 2.5, 1)

  /* ---- Styles ---- */

  // Always show when call is active, otherwise only after scrolling past hero
  const showWidget = isActive || isConnecting || scrolledPastHero

  const containerStyle = {
    position: "fixed",
    bottom: 24,
    right: 24,
    zIndex: 9997,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
    fontFamily: "'DM Mono', 'Fira Code', monospace",
    opacity: showWidget ? 1 : 0,
    pointerEvents: showWidget ? "auto" : "none",
    transform: showWidget ? "translateY(0)" : "translateY(16px)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  }

  const statusPillStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(5,5,5,0.92)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: "6px 14px 6px 12px",
    animation: "vapi-fadeUp 0.3s ease",
    backdropFilter: "blur(12px)",
  }

  const liveDotStyle = {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#00ffaa",
    animation: "vapi-blink 1.4s ease infinite",
    flexShrink: 0,
  }

  const muteButtonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: muted ? "rgba(255,77,77,0.15)" : "rgba(255,255,255,0.08)",
    border: `1px solid ${muted ? "rgba(255,77,77,0.3)" : "rgba(255,255,255,0.1)"}`,
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginLeft: 4,
  }

  const buttonStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "12px 22px",
    borderRadius: 50,
    border: isActive
      ? "1px solid rgba(0,255,170,0.25)"
      : "1px solid rgba(255,255,255,0.12)",
    background: isActive
      ? "linear-gradient(135deg, rgba(0,255,170,0.08), rgba(5,5,5,0.95))"
      : "linear-gradient(135deg, #0a0a0a, #111)",
    color: isActive ? "#00ffaa" : "rgba(255,255,255,0.88)",
    cursor: isConnecting ? "not-allowed" : "pointer",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.02em",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    boxShadow: isActive
      ? "0 0 0 1px rgba(0,255,170,0.25), 0 8px 32px rgba(0,255,170,0.12)"
      : "0 4px 20px rgba(0,0,0,0.5)",
    outline: "none",
    WebkitTapHighlightColor: "transparent",
  }

  const rippleContainerStyle = {
    position: "absolute",
    inset: 0,
    borderRadius: 50,
    overflow: "visible",
    pointerEvents: "none",
  }

  function ringStyle(index) {
    const delay = index * 0.15
    const baseScale = 1 + rippleScale * (0.3 + index * 0.25)
    return {
      position: "absolute",
      inset: -4 - index * 6,
      borderRadius: 50,
      border: "1px solid rgba(0,255,170,0.18)",
      opacity: Math.max(0.5 - index * 0.15, 0.1) * rippleScale,
      transform: `scale(${baseScale})`,
      transition: "transform 0.15s ease, opacity 0.15s ease",
      animationDelay: `${delay}s`,
    }
  }

  return (
    <div style={containerStyle}>
      {/* Status pill — visible only when active */}
      {isActive && (
        <div style={statusPillStyle}>
          <span style={liveDotStyle} />
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em" }}>
            Live · Connected
          </span>
          <button
            onClick={toggleMute}
            style={muteButtonStyle}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <MutedIcon /> : <UnmutedIcon />}
          </button>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={handleClick}
        disabled={isConnecting}
        style={buttonStyle}
        aria-label={isActive ? "End call" : "Talk to Us"}
      >
        {/* Ripple rings when active */}
        {isActive && (
          <div style={rippleContainerStyle}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={ringStyle(i)} />
            ))}
          </div>
        )}

        {/* Icon */}
        <span style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 1 }}>
          {isConnecting ? <SpinnerIcon /> : isActive ? <PhoneHangupIcon /> : <MicIcon />}
        </span>

        {/* Label */}
        <span style={{ position: "relative", zIndex: 1 }}>
          {isConnecting ? "Connecting…" : isActive ? "End Call" : "Talk to Us"}
        </span>
      </button>
    </div>
  )
}
