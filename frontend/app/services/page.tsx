import type { Metadata } from "next"
import { Eye, FileSearch, Phone, Brain, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | CorePlex.ai — Elite AI Engineering Studio",
  description: "VisionOps, Intelligent Data Engines, Autonomous Voice, Neural Knowledge Wrappers, and Automated Growth Intelligence. Production-grade AI systems for operational excellence.",
}

const services = [
  {
    icon: Eye,
    badge: "Flagship Service",
    title: "VisionOps: Industrial Video Intelligence",
    description: "We engineer end-to-end computer vision pipelines that convert raw camera feeds into real-time operational data. Automated tracking of production lines, warehouse safety monitoring, and inventory logistics — without human supervision.",
    outcome: "Real-time operational visibility across your entire physical infrastructure.",
    capabilities: [
      "High-throughput RTSP stream ingestion with Kafka/MSK for zero frame-loss processing",
      "Edge-to-Cloud inference with containerized YOLOv5 & ONNX deployments on AWS EKS",
      "Automated audit trails — annotated frame generation with secure cloud archiving for compliance",
      "Multi-camera orchestration for warehouse, production line, and safety monitoring",
    ],
  },
  {
    icon: FileSearch,
    title: "Extraction-as-a-Service: Intelligent Data Engines",
    description: "We deploy intelligent extraction systems that read, understand, and structure data from high-volume, messy documents. Purpose-built models for healthcare, finance, and legal verticals.",
    outcome: "90% reduction in manual data entry across document-heavy operations.",
    capabilities: [
      "Specialized models for ICD-10-CM medical coding extraction and financial statement analysis",
      "Layered resume filtering and candidate scoring for high-volume HR automation",
      "Multimodal processing — simultaneous intelligence extraction from PDFs, images, and audio files",
      "Configurable extraction schemas that adapt to your document formats",
    ],
  },
  {
    icon: Phone,
    title: "Autonomous Voice & Onboarding Systems",
    description: "We build non-robotic, high-EQ voice agents that handle real-time phone interactions and execute backend tasks. A 24/7 receptionist or onboarding agent that never misses a call and never makes a mistake.",
    outcome: "Full conversational coverage with zero staffing overhead.",
    capabilities: [
      "Low-latency telephony — real-time speech-to-text and text-to-speech integration via Twilio",
      "Agentic workflows — AI that doesn't just talk, but books appointments, updates CRMs, and triggers actions",
      "Sophisticated prompt engineering to eliminate the robotic delay in voice responses",
      "Seamless human handoff protocols for edge cases that require personal attention",
    ],
  },
  {
    icon: Brain,
    title: "Neural Knowledge Wrappers & Automation",
    description: "We wrap your existing internal systems in a private AI layer that knows everything about your company's data. An internal Genius Assistant that automates debugging, answers team queries, and orchestrates workflows.",
    outcome: "Instant, accurate answers from your entire knowledge base — zero searching.",
    capabilities: [
      "Enterprise RAG — high-accuracy retrieval-augmented generation using optimized vector databases",
      "System debugging AI trained on your specific codebase and documentation",
      "Workflow orchestration connecting your chat interface to existing software tools",
      "Continuous learning — the system gets smarter as your team uses it",
    ],
  },
  {
    icon: TrendingUp,
    title: "Automated Growth & Marketing Intelligence",
    description: "We deploy autonomous marketing agents that handle lead generation, qualification, and personalized outreach at scale. Constant pipeline growth without increasing your marketing headcount.",
    outcome: "Scalable, intelligent pipeline growth on autopilot.",
    capabilities: [
      "Predictive lead scoring — identifying high-value targets before you even contact them",
      "Dynamic personalization — large-scale outreach that feels like a 1-on-1 human interaction",
      "Automated nurture sequences that adapt based on prospect behavior and engagement signals",
    ],
  },
]

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

      <div className="max-w-5xl mx-auto space-y-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.title} className="glass-card glow-hover gradient-border p-8 md:p-10 group">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background group-hover:border-foreground/15 transition-colors">
                  <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 space-y-4">
                  {service.badge && (
                    <span className="inline-block text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground border border-border px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tighter">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                  <div className="glass-card p-4 inline-block">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Outcome: </span>
                    <span className="text-sm text-foreground">{service.outcome}</span>
                  </div>
                  <ul className="space-y-3 pt-2">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-20 text-center">
        <p className="text-muted-foreground">
          Have a specific operational challenge?{" "}
          <a href="/contact" className="font-medium text-foreground underline underline-offset-4 hover:text-foreground/80 transition-colors">
            Share it with us
          </a>
          {" "}and we'll assess feasibility within 48 hours.
        </p>
      </div>
    </div>
  )
}
