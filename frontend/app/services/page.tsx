import type { Metadata } from "next"
import { Suspense } from "react"
import { ServicesList } from "@/components/sections/ServicesList"

export const metadata: Metadata = {
  title: "Services | CorePlex.ai — Elite AI Engineering Studio",
  description: "VisionOps, Intelligent Data Engines, Autonomous Voice, Neural Knowledge Wrappers, and Automated Growth Intelligence. Production-grade AI systems for operational excellence.",
}

export default function ServicesPage() {
  return (
    <div className="container py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
          What We Engineer
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
          Services & Capabilities
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Five pillars of applied AI engineering. Purpose-built for operational scale and measurable impact.
        </p>
      </div>

      <Suspense>
        <ServicesList />
      </Suspense>

      <div className="mt-20 text-center">
        <p className="text-muted-foreground">
          Have a specific operational challenge?{" "}
          <a href="/contact" className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
            Share it with us
          </a>
          {" "}and we&apos;ll assess feasibility within 48 hours.
        </p>
      </div>
    </div>
  )
}
