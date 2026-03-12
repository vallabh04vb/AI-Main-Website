"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Eye, FileSearch, Phone, Brain, Radar } from "lucide-react"
import { ServiceDialog } from "@/components/ui/service-dialog"
import { ServiceDialogContent } from "@/components/sections/service-dialog-content"

const services = [
  {
    icon: Eye,
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
    description: "AI-powered document intelligence that ingests any document type, extracts structured data with contextual understanding, validates against business rules, and routes exceptions to human reviewers — creating a continuous feedback loop that improves over time.",
    outcome: "95%+ extraction accuracy with 80% reduction in manual document processing.",
    capabilities: [
      "Universal ingestion — PDFs, scans, images, emails, spreadsheets, and handwritten forms",
      "Contextual AI extraction that understands document structure, tables, and semantic relationships",
      "Smart routing with auto-classification and configurable extraction pipelines per document type",
      "Human-in-the-loop review dashboard with highlighted fields and suggested corrections",
    ],
  },
  {
    icon: Phone,
    title: "Autonomous Voice & Onboarding Systems",
    description: "Production-grade AI voice agents that handle complex, multi-turn conversations with natural dialogue and real-time decision-making. They listen, reason, execute actions across your systems, and hand off to humans with full context when needed.",
    outcome: "70% of inbound calls resolved autonomously with 4.8/5 customer satisfaction.",
    capabilities: [
      "Sub-200ms latency with natural turn-taking, interruption handling, and emotional tone awareness",
      "Multi-turn reasoning that maintains context, resolves ambiguity, and navigates complex decision trees",
      "Mid-conversation system integration — books appointments, processes orders, updates CRM records",
      "Intelligent escalation with full context handoff, sentiment summary, and recommended next actions",
    ],
  },
  {
    icon: Brain,
    title: "Neural Knowledge Wrappers & Automation",
    description: "Enterprise-grade AI layer that unifies your organization's knowledge across codebases, wikis, CRMs, and ticketing systems. Goes beyond search — contextual reasoning, cross-system intelligence, and automated workflow execution.",
    outcome: "50% faster information retrieval with zero data leaving your infrastructure.",
    capabilities: [
      "Pre-built connectors for Confluence, Notion, GitHub, Jira, Slack, Salesforce, and 50+ systems",
      "Source-cited responses with relevance scoring and confidence indicators for every answer",
      "Agentic workflows — create tickets, update records, trigger deployments across systems",
      "Knowledge analytics — track query patterns, surface gaps, and measure organizational knowledge health",
    ],
  },
  {
    icon: Radar,
    title: "Autonomous Lead Intelligence",
    description: "Fully autonomous lead generation agent that scrapes Google Maps and business directories across any city or country, enriches each lead with contact details and website data, scores them using AI, then sends hyper-personalised outreach emails — all without human intervention.",
    outcome: "500+ qualified leads contacted per month on full autopilot — zero sales hires needed.",
    capabilities: [
      "Google Maps scraping across US, Europe, and beyond with real-time business data enrichment",
      "AI-scored lead qualification per business category — dental, restaurant, salon, clinic, and more",
      "Personalised email generation per business type using Claude AI for human-quality messaging",
      "Automated outreach via your own domain — zero platform fees, full deliverability control",
      "Real-time reply notifications via Slack or WhatsApp the moment a prospect responds",
      "Runs 24/7 on autopilot with configurable targeting, pacing, and follow-up sequences",
    ],
  },
]

export function ServicesList() {
  const searchParams = useSearchParams()
  const [selectedService, setSelectedService] = useState<number | null>(null)

  // Auto-open dialog from URL param (e.g. /services?service=0)
  useEffect(() => {
    const param = searchParams.get("service")
    if (param !== null) {
      const index = parseInt(param, 10)
      if (index >= 0 && index < services.length) {
        setSelectedService(index)
      }
    }
  }, [searchParams])

  return (
    <>
      <div className="max-w-5xl mx-auto space-y-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              onClick={() => setSelectedService(index)}
              className="glass-card glow-hover gradient-border p-8 md:p-10 group cursor-pointer"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-background group-hover:border-foreground/15 transition-colors">
                  <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1 space-y-4">
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
                  <p className="text-xs text-muted-foreground/0 group-hover:text-muted-foreground/60 transition-colors pt-2">
                    Click to see full details
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <ServiceDialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {selectedService !== null && (
          <ServiceDialogContent serviceIndex={selectedService} />
        )}
      </ServiceDialog>
    </>
  )
}
