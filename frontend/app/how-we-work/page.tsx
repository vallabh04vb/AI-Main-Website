import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "The Prototype-First Journey | name.ai",
  description: "We build a live proof of concept before any commitment. Four steps from operational problem to production-grade AI system. Zero-risk, prototype-first.",
}

const steps = [
  {
    number: "01",
    title: "Share Your Challenge",
    description: "Describe the operational problem in your own words. No technical jargon required — just tell us where the manual toil lives.",
    details: [
      "Submit through our contact form or book a discovery call",
      "We ask clarifying questions to understand the full operational context",
      "Share documents, workflows, or examples if it helps paint the picture",
      "Zero commitment at this stage — this is purely exploratory",
    ],
  },
  {
    number: "02",
    title: "Feasibility Analysis",
    description: "We assess how AI can solve your specific problem, evaluate the impact potential, and identify any technical constraints or risks.",
    details: [
      "Technical feasibility assessment against your infrastructure",
      "Business impact evaluation with projected ROI metrics",
      "Risk identification and mitigation strategies mapped out",
      "Transparent recommendation — including if AI isn't the right fit",
    ],
  },
  {
    number: "03",
    title: "Live Prototype Build",
    description: "We create a functional proof of concept that demonstrates the solution in action. Not a proposal. Not a mockup. A working system.",
    details: [
      "Rapid development of a functional, testable prototype",
      "Real data and real scenarios wherever possible",
      "Full documentation of architecture and approach",
      "Clear technical path from prototype to production scale",
    ],
  },
  {
    number: "04",
    title: "Demo & Decision",
    description: "See the solution working live. Test it. Stress it. Then decide whether to proceed with full production implementation.",
    details: [
      "Live demonstration and hands-on testing session",
      "Transparent discussion of results, limitations, and next steps",
      "Your call — proceed to production, iterate, or walk away",
      "No pressure. No lock-in. Prototype first, commit later.",
    ],
  },
]

export default function HowWeWorkPage() {
  return (
    <div className="container py-20 md:py-32">
      {/* Centered header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
          Our Process
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
          The Prototype-First Journey
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          We build a live PoC before any commitment. Four steps from problem to proof.
        </p>
      </div>

      {/* Centered steps grid — 2 columns */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {steps.map((step) => (
          <div key={step.number} className="glass-card glow-hover p-8 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-foreground font-mono text-xs font-bold mb-6 group-hover:border-foreground/20 transition-colors">
              {step.number}
            </div>
            <h2 className="text-xl font-bold text-foreground tracking-tighter mb-3">{step.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
            <ul className="space-y-2">
              {step.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span className="text-xs text-muted-foreground leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground tracking-tighter mb-3">Ready to start?</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Book a discovery call or share your challenge directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-sm font-semibold tracking-wide uppercase"
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
            className="border-border hover:border-foreground/20 bg-transparent px-8 py-6 text-sm font-medium tracking-wide uppercase"
          >
            <Link href="/contact">Share Your Challenge</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
