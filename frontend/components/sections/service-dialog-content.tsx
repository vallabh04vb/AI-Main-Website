"use client"

import Link from "next/link"
import {
  ArrowRight, Eye, FileSearch, Phone, Brain, TrendingUp,
  Camera, BarChart3, Shield, Layers, Cpu, FileText, Mic,
  Database, Search, Target, Mail, Users, Zap, Lock, Bell,
  Gauge, Globe, Settings, ChevronRight, Sparkles,
  CheckCircle2, GitBranch, Workflow, ScanLine, FileCheck,
  MessageSquare, Headphones, LayoutDashboard, Network,
  BrainCircuit, BookOpen, Plug, Bot, LineChart, UserCheck,
  type LucideIcon,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FlowStep {
  label: string
  detail?: string
}

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface UseCase {
  industry: string
  description: string
}

interface ServiceContent {
  icon: LucideIcon
  title: string
  badge?: string
  tagline: string
  overview: string[]
  flow: FlowStep[]
  features: Feature[]
  useCases: UseCase[]
  metrics: { value: string; label: string }[]
  outcome: string
}

/* ------------------------------------------------------------------ */
/*  Content data                                                       */
/* ------------------------------------------------------------------ */

const serviceContents: ServiceContent[] = [
  /* 0 — VisionOps */
  {
    icon: Eye,
    title: "VisionOps",
    tagline: "Industrial Video Intelligence",
    overview: [
      "VisionOps transforms your existing camera infrastructure into a fully autonomous operational intelligence layer. It connects to any IP or CCTV camera, ingests live video streams through a distributed processing pipeline, and applies real-time AI models for detection, classification, and tracking — delivering structured operational insights at scale.",
      "The platform goes beyond simple detection. It provides zone-based behavioral analytics, cross-camera object re-identification, temporal pattern recognition, and predictive alerting. Every frame is analyzed, every anomaly is quantified, and every insight is routed to the right team through configurable dashboards and automated workflows.",
      "Built for environments where downtime costs and compliance failures are measured in millions — warehouses, manufacturing floors, logistics hubs, retail networks, and critical infrastructure.",
    ],
    flow: [
      { label: "Camera Network", detail: "RTSP feeds" },
      { label: "Stream Ingestion", detail: "Kafka / MSK" },
      { label: "AI Detection", detail: "YOLOv5 + ONNX" },
      { label: "Dashboard", detail: "Live analytics" },
      { label: "Alerts", detail: "Real-time" },
    ],
    features: [
      { icon: Camera, title: "Universal Camera Integration", description: "Connect any IP, CCTV, or edge camera — zero hardware changes, instant onboarding" },
      { icon: Cpu, title: "Multi-Model Detection", description: "Object, person, vehicle, PPE, gesture, and anomaly detection running concurrently at 30 fps" },
      { icon: BarChart3, title: "Operational Dashboard", description: "Live camera feeds, heatmaps, zone occupancy, dwell times, and custom KPI tracking" },
      { icon: Bell, title: "Predictive Alert System", description: "Context-aware alerts with severity scoring, escalation chains, and automated incident routing" },
      { icon: Shield, title: "Compliance & Audit Engine", description: "Annotated frame archives, automated compliance reports, and regulatory audit trails" },
      { icon: Layers, title: "Multi-Site Orchestration", description: "Centralized management of hundreds of cameras across distributed facilities" },
    ],
    useCases: [
      { industry: "Warehouse & Logistics", description: "Detect missing PPE, forklift proximity violations, blocked exits, and inventory movement anomalies across the entire floor" },
      { industry: "Manufacturing", description: "Inline quality inspection with sub-second defect detection, production line monitoring, and throughput optimization" },
      { industry: "Retail & Hospitality", description: "Foot traffic analytics, queue management, shelf availability tracking, and customer behavior insights" },
      { industry: "Critical Infrastructure", description: "Perimeter intrusion detection, unauthorized access alerts, and 24/7 environmental monitoring with tamper detection" },
    ],
    metrics: [
      { value: "60%", label: "Fewer safety incidents" },
      { value: "40%", label: "Faster incident response" },
      { value: "100%", label: "Audit readiness" },
    ],
    outcome: "Customers report up to 60% reduction in safety incidents, 40% faster incident response, and full regulatory audit readiness — all without adding headcount or replacing existing camera infrastructure.",
  },

  /* 1 — Extraction Engines */
  {
    icon: FileSearch,
    title: "Extraction Engines",
    tagline: "Intelligent Document Processing & Insights",
    overview: [
      "Extraction Engines is a full-spectrum document intelligence platform that ingests any document type — PDFs, scanned images, spreadsheets, emails, handwritten forms, contracts, medical records, invoices, and more — and transforms them into structured, actionable data. The system doesn't just extract text; it understands document context, classifies content semantically, and maps relationships across fields and pages.",
      "What sets it apart is the end-to-end workflow. Documents are automatically classified, routed through the appropriate extraction pipeline, validated against business rules, and surfaced in an insights dashboard where teams can review, approve, or flag exceptions. Low-confidence extractions are intelligently queued for human review with highlighted fields and suggested corrections — creating a feedback loop that makes the system smarter over time.",
      "Whether you're processing 100 documents a day or 100,000, the platform scales elastically with configurable accuracy thresholds, custom extraction schemas, and full audit trails for every document that passes through the system.",
    ],
    flow: [
      { label: "Ingest", detail: "Any document type" },
      { label: "Classify & Parse", detail: "AI categorization" },
      { label: "Extract & Validate", detail: "Smart extraction" },
      { label: "Insights & Review", detail: "Dashboard + HITL" },
    ],
    features: [
      { icon: ScanLine, title: "Universal Document Ingestion", description: "PDFs, scans, photos, emails, spreadsheets, handwritten forms — any format, any quality" },
      { icon: BrainCircuit, title: "Contextual AI Extraction", description: "Goes beyond OCR — understands document structure, tables, relationships, and semantic meaning" },
      { icon: GitBranch, title: "Smart Document Routing", description: "Auto-classifies documents and routes them through the right extraction pipeline" },
      { icon: FileCheck, title: "Human-in-the-Loop Review", description: "Low-confidence extractions queued with highlighted fields and suggested corrections for human approval" },
      { icon: LayoutDashboard, title: "Insights Dashboard", description: "Visualize extraction trends, accuracy rates, processing volumes, and flag bottlenecks in real time" },
      { icon: CheckCircle2, title: "Validation & Compliance", description: "Business rule validation, cross-field consistency checks, and complete audit trails" },
    ],
    useCases: [
      { industry: "Healthcare & Life Sciences", description: "Extract clinical data, lab results, and diagnosis codes from medical records; automate prior authorization and claims processing with full compliance tracking" },
      { industry: "Financial Services", description: "Process loan applications, bank statements, tax documents, and KYC forms — validate data integrity and surface risk indicators automatically" },
      { industry: "Legal & Compliance", description: "Analyze contracts, regulatory filings, and policy documents at scale — extract key clauses, dates, obligations, and flag deviations" },
      { industry: "Supply Chain & Operations", description: "Digitize purchase orders, shipping manifests, invoices, and inspection reports — reconcile across systems and eliminate manual data entry" },
    ],
    metrics: [
      { value: "95%+", label: "Extraction accuracy" },
      { value: "80%", label: "Less manual processing" },
      { value: "10x", label: "Faster document throughput" },
    ],
    outcome: "Organizations achieve 95%+ extraction accuracy, 80% reduction in manual document processing, and complete visibility into their document pipeline — with human reviewers focused only on genuine exceptions.",
  },

  /* 2 — Autonomous Voice */
  {
    icon: Phone,
    title: "Autonomous Voice",
    tagline: "AI Voice Agents for Complex Conversations",
    overview: [
      "Autonomous Voice deploys production-grade AI agents that handle real-time phone conversations with the nuance, context awareness, and decision-making ability of your best human representatives. These aren't scripted bots — they're reasoning agents that listen, understand intent, navigate complex multi-turn dialogues, and execute actions across your business systems in real time.",
      "Each voice agent is purpose-built on your domain knowledge, brand tone, compliance requirements, and escalation protocols. They manage inbound and outbound calls, handle interruptions naturally, resolve ambiguity through clarifying questions, and seamlessly transfer to human agents when the situation demands it — with full context handoff so customers never repeat themselves.",
      "Built on sub-200ms latency infrastructure, every conversation feels natural. Every interaction is logged, transcribed, analyzed for sentiment, and available for QA — giving you complete visibility into what your customers experience.",
    ],
    flow: [
      { label: "Inbound / Outbound", detail: "SIP / PSTN / VoIP" },
      { label: "Real-Time STT", detail: "Speech understanding" },
      { label: "AI Reasoning", detail: "Context + intent" },
      { label: "Action & Handoff", detail: "Execute or escalate" },
    ],
    features: [
      { icon: Mic, title: "Natural Dialogue Engine", description: "Sub-200ms response latency with natural turn-taking, interruption handling, and emotional tone awareness" },
      { icon: BrainCircuit, title: "Multi-Turn Reasoning", description: "Maintains conversation context, resolves ambiguity, and navigates complex decision trees autonomously" },
      { icon: Workflow, title: "System Integration", description: "Books appointments, processes orders, updates CRM records, and triggers workflows — all mid-conversation" },
      { icon: Headphones, title: "Intelligent Escalation", description: "Transfers to human agents with full context, sentiment summary, and recommended next actions" },
      { icon: MessageSquare, title: "Conversation Analytics", description: "Real-time transcription, sentiment tracking, intent classification, and QA scoring for every call" },
      { icon: Shield, title: "Compliance & Recording", description: "PCI-compliant call handling, automated consent management, and full audit-ready recordings" },
    ],
    useCases: [
      { industry: "Healthcare", description: "Appointment scheduling, prescription refill verification, insurance eligibility checks, and post-visit follow-ups — fully HIPAA-compliant" },
      { industry: "Financial Services", description: "Account inquiries, payment processing, fraud alert verification, and loan application intake with identity verification" },
      { industry: "E-commerce & Retail", description: "Order management, returns processing, product recommendations, and proactive outbound notifications at scale" },
      { industry: "Real Estate & Services", description: "Lead qualification, property inquiries, appointment scheduling, and 24/7 availability without staffing overhead" },
    ],
    metrics: [
      { value: "70%", label: "Calls resolved autonomously" },
      { value: "<200ms", label: "Response latency" },
      { value: "4.8/5", label: "Customer satisfaction" },
    ],
    outcome: "Voice agents resolve 70% of inbound calls end-to-end with customer satisfaction scores matching top-performing human agents — while providing 24/7 availability and complete conversation analytics.",
  },

  /* 3 — Knowledge Wrappers */
  {
    icon: Brain,
    title: "Knowledge Wrappers",
    tagline: "Enterprise AI That Knows Your Business",
    overview: [
      "Knowledge Wrappers creates an intelligent AI layer that sits across your entire organization's knowledge — codebases, documentation, CRMs, ticketing systems, wikis, communication archives, databases, and APIs. Using advanced retrieval-augmented generation, it delivers precise, source-cited answers from your own data while keeping everything within your security perimeter.",
      "But it goes far beyond search. Knowledge Wrappers powers contextual copilots for engineering, support, legal, and operations teams — agents that don't just find information but reason over it, connect dots across systems, and take action. An engineer gets debugging assistance that cross-references logs, code, and past incident reports. A support agent gets resolution recommendations backed by historical ticket data and product documentation.",
      "The platform continuously learns from interactions, surfaces knowledge gaps, identifies stale documentation, and provides organizational intelligence metrics — turning your company's collective knowledge into a compounding strategic asset.",
    ],
    flow: [
      { label: "Data Sources", detail: "All internal systems" },
      { label: "Indexing & Embedding", detail: "Semantic chunking" },
      { label: "RAG Engine", detail: "Retrieval + reasoning" },
      { label: "AI Copilot", detail: "Answers + actions" },
    ],
    features: [
      { icon: Plug, title: "Universal Connectors", description: "Pre-built integrations for Confluence, Notion, GitHub, Jira, Slack, Salesforce, and 50+ enterprise systems" },
      { icon: Lock, title: "Zero-Trust Security", description: "Data never leaves your infrastructure — fully air-gapped deployment with role-based access controls" },
      { icon: BookOpen, title: "Source-Cited Responses", description: "Every answer links directly to source documents with relevance scoring and confidence indicators" },
      { icon: Bot, title: "Agentic Workflows", description: "Create tickets, update records, trigger deployments, and orchestrate cross-system automations" },
      { icon: Network, title: "Cross-System Reasoning", description: "Connects information across multiple systems to provide contextual, comprehensive answers" },
      { icon: LayoutDashboard, title: "Knowledge Analytics", description: "Track query patterns, surface knowledge gaps, identify stale docs, and measure organizational knowledge health" },
    ],
    useCases: [
      { industry: "Engineering & DevOps", description: "Instant answers from internal docs, runbooks, code repos, and incident history — cut onboarding time in half and resolve issues faster" },
      { industry: "Customer Support", description: "AI copilot surfaces relevant KB articles, past resolutions, and product context — reducing average handle time and escalation rates" },
      { industry: "Legal & Compliance", description: "Natural language search across contracts, policies, regulatory filings, and internal memos with clause-level precision" },
      { industry: "Executive & Strategy", description: "Cross-functional intelligence that surfaces insights from sales data, product metrics, customer feedback, and market research in one query" },
    ],
    metrics: [
      { value: "50%", label: "Faster information access" },
      { value: "35%", label: "Fewer escalations" },
      { value: "0", label: "Data leaves your infra" },
    ],
    outcome: "Teams report 50% faster information retrieval, 35% reduction in internal escalations, and measurably faster onboarding — with all data remaining fully within the organization's security boundary.",
  },

  /* 4 — Growth Intelligence */
  {
    icon: TrendingUp,
    title: "Growth Intelligence",
    tagline: "AI-Driven Revenue Acceleration",
    overview: [
      "Growth Intelligence deploys autonomous AI agents across your entire revenue pipeline — from prospect identification and scoring to personalized multi-channel outreach and pipeline management. The system continuously analyzes thousands of signals from public data, intent data, technographic profiles, and your CRM history to identify the highest-probability opportunities before your competitors do.",
      "Each prospect receives a dynamically generated outreach sequence tailored to their company context, pain points, technology stack, and buying signals. The AI crafts unique messages — not templates — across email, LinkedIn, and phone, adapting tone and timing based on engagement patterns and response behavior. Every touchpoint is coordinated, every follow-up is strategic.",
      "Beyond outreach, the platform provides real-time pipeline analytics, conversion funnel optimization, rep performance insights, and predictive revenue forecasting — giving leadership complete visibility into growth trajectory and bottlenecks.",
    ],
    flow: [
      { label: "Signal Analysis", detail: "Intent + firmographic" },
      { label: "AI Scoring", detail: "Predictive models" },
      { label: "Outreach", detail: "Multi-channel AI" },
      { label: "Pipeline", detail: "Qualified & managed" },
    ],
    features: [
      { icon: Target, title: "Intelligent Prospecting", description: "AI identifies ideal prospects from firmographic, technographic, and intent signals across millions of data points" },
      { icon: Gauge, title: "Predictive Lead Scoring", description: "Machine learning models rank prospects by conversion probability, deal size potential, and timing signals" },
      { icon: Mail, title: "Hyper-Personalized Outreach", description: "Every message is uniquely generated for each prospect — their context, pain points, and buying signals" },
      { icon: Globe, title: "Multi-Channel Orchestration", description: "Email, LinkedIn, phone, and ads — coordinated sequences with intelligent timing and channel optimization" },
      { icon: LineChart, title: "Pipeline Analytics", description: "Real-time funnel visualization, conversion rate tracking, bottleneck identification, and revenue forecasting" },
      { icon: UserCheck, title: "Rep Enablement", description: "AI-generated briefings, talk tracks, and objection handling for every prospect meeting" },
    ],
    useCases: [
      { industry: "B2B SaaS", description: "Identify companies showing buying signals, auto-enroll in personalized sequences, and hand off sales-ready leads with full context to AEs" },
      { industry: "Professional Services", description: "Target decision-makers at organizations matching your ideal client profile with thought leadership-driven outreach" },
      { industry: "Recruiting & Staffing", description: "Source and engage passive candidates at scale with personalized outreach that reflects their career trajectory and interests" },
      { industry: "Financial Services", description: "Identify businesses with financing needs through market signals and engage with tailored, compliance-approved messaging" },
    ],
    metrics: [
      { value: "3x", label: "More qualified pipeline" },
      { value: "50%", label: "Lower cost per lead" },
      { value: "90 days", label: "Time to measurable ROI" },
    ],
    outcome: "Clients see 3x increase in qualified pipeline, 50% reduction in cost per lead, and measurable ROI within 90 days — with sales teams spending their time closing, not prospecting.",
  },
]

/* ------------------------------------------------------------------ */
/*  Flow Diagram                                                       */
/* ------------------------------------------------------------------ */

function FlowDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(220 20% 60%) 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Desktop: horizontal */}
      <div className="hidden sm:flex items-center gap-3 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="contents">
            <div className="flex-1 text-center">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/[0.1] bg-white/[0.05] text-xs font-semibold text-foreground/70 mb-2.5">
                {i + 1}
              </div>
              <p className="text-[13px] font-semibold text-foreground leading-tight">{step.label}</p>
              {step.detail && (
                <p className="text-[11px] text-muted-foreground mt-1">{step.detail}</p>
              )}
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="h-4 w-4 text-white/[0.15] shrink-0" strokeWidth={1.5} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="sm:hidden space-y-0 relative z-10">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/[0.1] bg-white/[0.05] text-[11px] font-semibold text-foreground/70 shrink-0">
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-6 bg-white/[0.06]" />
              )}
            </div>
            <div className="pb-4">
              <p className="text-[13px] font-semibold text-foreground leading-tight">{step.label}</p>
              {step.detail && (
                <p className="text-[11px] text-muted-foreground mt-0.5">{step.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Metrics bar                                                        */
/* ------------------------------------------------------------------ */

function MetricsBar({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="text-center rounded-xl border border-white/[0.06] bg-white/[0.02] py-4 px-3"
        >
          <p className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{m.value}</p>
          <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{m.label}</p>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section label                                                      */
/* ------------------------------------------------------------------ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">
        {children}
      </h3>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function ServiceDialogContent({ serviceIndex }: { serviceIndex: number }) {
  const data = serviceContents[serviceIndex]
  if (!data) return null

  const Icon = data.icon

  return (
    <div className="relative">
      {/* ---- Hero header ---- */}
      <div className="relative px-6 sm:px-8 pt-8 pb-6 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsla(220, 40%, 50%, 0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] mb-5">
            <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tighter">
              {data.title}
            </h2>
            {data.badge && (
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 text-blue-300/90 px-3 py-1 rounded-full">
                {data.badge}
              </span>
            )}
          </div>

          <p className="text-[15px] text-muted-foreground">{data.tagline}</p>
        </div>
      </div>

      <div className="mx-6 sm:mx-8 h-px bg-white/[0.06]" />

      {/* ---- Body ---- */}
      <div className="px-6 sm:px-8 py-8 space-y-10">
        <div className="space-y-4">
          {data.overview.map((para, i) => (
            <p key={i} className="text-[14px] text-muted-foreground leading-[1.75]">
              {para}
            </p>
          ))}
        </div>

        <MetricsBar metrics={data.metrics} />

        <div>
          <SectionLabel>How It Works</SectionLabel>
          <FlowDiagram steps={data.flow} />
        </div>

        <div>
          <SectionLabel>Key Features</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.features.map((feature, i) => {
              const FIcon = feature.icon
              return (
                <div
                  key={i}
                  className="group/f flex gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] group-hover/f:border-white/[0.12] transition-colors">
                    <FIcon className="h-4 w-4 text-foreground/80" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">{feature.title}</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <SectionLabel>Use Cases</SectionLabel>
          <div className="space-y-3">
            {data.useCases.map((uc, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/[0.05] text-[11px] font-semibold text-foreground/50 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-foreground">{uc.industry}</p>
                  <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{uc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-xl border border-white/[0.08] overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, hsla(220, 60%, 60%, 0.5), hsla(260, 60%, 60%, 0.3), transparent)",
            }}
          />
          <div className="p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2.5">
              <Sparkles className="h-4 w-4 text-blue-400/70" strokeWidth={1.5} />
              <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Outcome
              </h3>
            </div>
            <p className="text-[14px] text-foreground leading-relaxed">{data.outcome}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 pb-2">
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-foreground text-background text-sm font-semibold h-12 px-8 hover:bg-foreground/90 transition-all duration-200 shadow-[0_0_20px_-4px_hsla(0,0%,100%,0.15)]"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <span className="text-[12px] text-muted-foreground">
            Free consultation — no commitment required
          </span>
        </div>
      </div>
    </div>
  )
}
