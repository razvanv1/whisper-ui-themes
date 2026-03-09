import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  Search, Filter, Bell, FileText, RefreshCw, GraduationCap,
  Clock, AlertTriangle, TrendingDown, Zap, ArrowRight,
  CheckCircle, XCircle, Minus, Bot, Workflow, Layers
} from "lucide-react";

const supports = [
  { icon: Search, area: "Opportunity scanning", desc: "Monitoring funding sources, vendor credits, partnerships and relevant calls across multiple channels." },
  { icon: Filter, area: "Filtering and prioritization", desc: "Scoring and ranking opportunities based on fit, effort and strategic alignment." },
  { icon: Bell, area: "Follow-up support", desc: "Tracking open threads, pending actions and follow-up cadences without relying on memory." },
  { icon: FileText, area: "Material preparation", desc: "Drafting, structuring and refining documents, proposals, briefs and internal communications." },
  { icon: RefreshCw, area: "Content repurposing", desc: "Turning working notes, call summaries and internal material into publishable or shareable formats." },
  { icon: GraduationCap, area: "Academy and workflow support", desc: "Supporting curriculum structuring, session planning and repeatable delivery tasks." },
];

const costs = [
  { icon: AlertTriangle, text: "Opportunities get missed because nobody tracked them closely enough" },
  { icon: Clock, text: "Follow-ups slip because they depend on someone remembering" },
  { icon: FileText, text: "Materials stay in draft longer than they should" },
  { icon: TrendingDown, text: "Knowledge that could be repurposed never leaves the original context" },
];

const inkIsNot = [
  { icon: XCircle, text: "A product you can buy off the shelf" },
  { icon: XCircle, text: "A chatbot or replacement for thinking" },
  { icon: XCircle, text: "A standalone tool disconnected from strategy" },
];

const inkIs = [
  { icon: CheckCircle, text: "An operating layer for repeatable work" },
  { icon: CheckCircle, text: "Connected to every TUS program" },
  { icon: CheckCircle, text: "Built to free capacity for judgment work" },
];

const Ink = () => {
  return (
    <PageLayout>
      <SEO title="INK - AI Operating Layer" description="INK is the AI-supported system behind The Unlearning School for opportunity scanning, follow-up, material preparation and workflow tasks." path="/ink" />
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                  <Bot className="h-3.5 w-3.5" /> INK
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
                  When repeated work starts slowing everything down
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                  INK is the AI-supported operating layer used inside The Unlearning
                  School to reduce manual drag across opportunity scanning,
                  prioritization, follow-up, content workflows, academy support and
                  repeatable execution tasks.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                    Talk to us about pilots
                  </a>
                  <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                    Book a call
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "6", label: "Workflow areas", color: "bg-destructive/10 text-destructive" },
                  { num: "∞", label: "Manual hours saved", color: "bg-accent-blue/10 text-accent-blue" },
                  { num: "24/7", label: "Background scanning", color: "bg-accent-emerald/10 text-accent-emerald" },
                  { num: "0", label: "Judgment replaced", color: "bg-accent-purple/10 text-accent-purple" },
                ].map((stat) => (
                  <GlowCard key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <p className={`text-3xl font-black mb-1 ${stat.color.split(' ')[1]}`}>{stat.num}</p>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </GlowCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/2" />
      </section>

      {/* The situation — visual cards */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">This is probably your situation</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-12 max-w-3xl">
              The team is doing too much manually. Each task is small on its own, but together they create a drag layer that slows everything else down.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {costs.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-lg group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <p className="text-foreground/90 pt-1">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.5}>
            <p className="mt-8 text-center text-muted-foreground italic">
              The cost is not dramatic, it is cumulative and it compounds every week.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* What INK does — before/after */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12 text-center">What INK is built to do</h2>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border-2 border-destructive/20 bg-destructive/5 p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-destructive">
                  <Minus className="h-5 w-5" /> Without INK
                </h3>
                <ul className="space-y-4">
                  {["Manual scanning eats calendar slots", "Follow-ups depend on memory", "Materials stuck in draft", "Knowledge stays in one context", "Repeatable tasks slow everything"].map(t => (
                    <li key={t} className="flex items-start gap-3 text-muted-foreground">
                      <XCircle className="h-4 w-4 shrink-0 mt-1 text-destructive/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border-2 border-accent-emerald/20 bg-accent-emerald/5 p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-accent-emerald">
                  <Zap className="h-5 w-5" /> With INK
                </h3>
                <ul className="space-y-4">
                  {["Scanning runs in the background", "Follow-up happens on time, automatically", "Materials move from draft to done faster", "Content gets repurposed systematically", "Team focuses on judgment work"].map(t => (
                    <li key={t} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-1 text-accent-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-3/4" />
      </section>

      {/* What INK supports — icon grid */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">What INK supports today</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supports.map((s, i) => (
              <ScrollReveal key={s.area} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 mb-5 group-hover:bg-destructive/20 transition-colors">
                    <s.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-destructive transition-colors">{s.area}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={4} className="left-1/2" />
      </section>

      {/* What INK is / is not — dual columns */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12 text-center">What INK is and what it is not</h2>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="space-y-4">
                {inkIs.map((item) => (
                  <div key={item.text} className="flex items-center gap-4 rounded-xl bg-card p-5 border border-border">
                    <item.icon className="h-5 w-5 shrink-0 text-accent-emerald" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="space-y-4">
                {inkIsNot.map((item) => (
                  <div key={item.text} className="flex items-center gap-4 rounded-xl bg-card p-5 border border-border">
                    <item.icon className="h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="font-medium text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* Where INK fits + How it connects — combined visual */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 mb-5">
                  <Layers className="h-6 w-6 text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold mb-4">Where INK fits best</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Teams with high operational load, repeatable tasks across multiple
                  channels and limited bandwidth for the manual work that keeps the
                  rest of the system moving. INK is most useful when the bottleneck is
                  not strategy but execution capacity.
                </p>
              </GlowCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-purple/10 mb-5">
                  <Workflow className="h-6 w-6 text-accent-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">How INK connects to the work</h3>
                <p className="text-muted-foreground leading-relaxed">
                  INK is not a standalone product. When a team starts with a program
                  (funding, AI, execution, proposals or academy design) INK supports
                  the parts of that work that benefit from structure, consistency and
                  automation.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={2} className="hidden md:block left-3/4" />
      </section>

      {/* Why this works — accent quote */}
      <section className="py-16 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-10">
              <p className="text-lg leading-relaxed md:text-xl italic text-foreground/80">
                "The biggest productivity loss in most teams is not in the strategic layer.
                It is in the execution layer: the scanning, filtering, following up,
                preparing and tracking that nobody owns systematically."
              </p>
              <p className="mt-4 text-sm font-bold text-destructive">INK makes that layer work.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Start with a free 30-minute working call"
        copy="A focused first conversation to understand the live issue, the pressure around it and the best place to begin."
        bullets={[
          "Pressure-testing the bottleneck",
          "Identifying the most relevant starting point",
          "Deciding whether the next step is a program, a pilot, a narrower follow-up or a direct move into the work",
        ]}
        supportLine="If a call feels too early, send a short description of what is slowing the work down."
      />
    </PageLayout>
  );
};

export default Ink;