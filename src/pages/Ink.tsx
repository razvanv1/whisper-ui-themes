import { Link } from "react-router-dom";
import octopusInk from "@/assets/octopus-ink.png";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  Search, Filter, Bell, FileText, RefreshCw, GraduationCap,
  Clock, AlertTriangle, TrendingDown, Zap, ArrowRight,
  CheckCircle, XCircle, Minus, Sparkles, Workflow, Layers
} from "lucide-react";

const supports = [
  { icon: Search, area: "Opportunity scanning", desc: "Tracking funding routes, calls, vendor credits, ecosystem programs, and new opportunity paths that need filtering before they deserve attention." },
  { icon: Filter, area: "Filtering and prioritization", desc: "Reducing noise across options, inputs, and moving pieces so the next step becomes easier to choose." },
  { icon: Bell, area: "Follow-up support", desc: "Supporting outreach, relationship tracking, next-step logic, and repeated work behind pipeline movement." },
  { icon: FileText, area: "Material preparation", desc: "Helping shape briefs, offer structures, summaries, working documents, and reusable assets without rebuilding everything from zero each time." },
  { icon: RefreshCw, area: "Content repurposing", desc: "Turning conversations, notes, podcasts, and longer material into useful assets that can move across formats." },
  { icon: GraduationCap, area: "Academy and workflow support", desc: "Supporting curriculum structure, learning assets, content packaging, activation flows, and repeatable workflows behind academies, programs, and educational offers." },
];

const costs = [
  { icon: AlertTriangle, text: "Opportunities get missed because nobody tracked them closely enough" },
  { icon: Clock, text: "Follow-ups slip because they depend on someone remembering" },
  { icon: FileText, text: "Materials stay in draft longer than they should" },
  { icon: TrendingDown, text: "Knowledge that could be repurposed never leaves the original context" },
  { icon: RefreshCw, text: "The same research keeps getting redone in slightly different forms" },
  { icon: Clock, text: "Follow-up is important, but too easy to delay or lose" },
  { icon: FileText, text: "Material preparation eats more time than it should" },
  { icon: Search, text: "Information is scattered across notes, tabs, chats, docs, and memory" },
  { icon: Layers, text: "Content exists, but turning it into reusable assets takes too much effort" },
  { icon: GraduationCap, text: "Academy ideas, workflows, or internal processes depend too much on manual coordination" },
  { icon: AlertTriangle, text: "The team is small, the context is heavy, and repeated work keeps eating attention" },
];

const results = [
  "Repeated work becomes easier to structure",
  "Scanning and filtering stop relying only on manual effort",
  "Follow-up becomes easier to support consistently",
  "Content and materials become easier to reuse",
  "Academy and program workflows become lighter to operate",
  "Small teams get more continuity without adding more internal drag",
];

const outputs = [
  "A better workflow structure",
  "A lighter follow-up process",
  "Cleaner opportunity tracking",
  "Reusable content and material systems",
  "Academy support flows",
  "Stronger internal coordination around repeated tasks",
  "A pilot path for a more useful operating layer",
];

const bestFit = [
  "Accelerators and incubators",
  "Startup support teams",
  "Lean internal teams",
  "Vendor-linked ecosystems",
  "Organizations building academies or learning systems",
  "Teams testing AI-supported workflows",
  "Organizations with repeated research, coordination, and follow-up work",
];

const programConnections = [
  { title: "Funding intelligence and opportunity readiness", desc: "INK supports scanning, filtering, tracking, and organizing opportunities before they turn into wasted motion." },
  { title: "Proposal support", desc: "INK supports preparation, structure, reuse of material, and working inputs needed for concept work, draft shaping, and partner-facing documents." },
  { title: "Academy design and activation", desc: "INK supports curriculum structure, content repurposing, learning assets, messaging support, and repeated tasks behind academy building." },
  { title: "Resources and content systems", desc: "INK supports the transformation of ideas, notes, audio, and working material into reusable articles, guides, tools, frameworks, and newsletter assets." },
  { title: "Internal execution workflows", desc: "INK reduces part of the repeated work that slows small teams down between idea, decision, and delivery." },
];

const inkIsNot = [
  "Not a magic AI product",
  "Not a replacement for judgment",
  "Not a promise of full automation",
  "Not a generic chatbot layer",
  "Not a finished platform pretending to do everything",
];

const pilots = [
  "Funding and opportunity monitoring",
  "Outreach and follow-up support",
  "Academy content and structure support",
  "Content repurposing workflows",
  "Internal execution support for lean teams",
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
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(210,60%,50%)]/20 bg-[hsl(210,60%,50%)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(210,60%,50%)] mb-6">
                  <Sparkles className="h-3.5 w-3.5" /> INK
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
              <div className="flex items-center justify-center">
                <img src={octopusInk} alt="Octopus releasing ink" className="w-full max-w-md h-auto drop-shadow-2xl" />
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
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* What this is already costing */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What this is already costing</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              Repeated manual work rarely looks dramatic at first. It just keeps draining time from decisions, delivery, and movement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              That cost shows up as slower follow-up, weaker continuity, scattered opportunity tracking, delayed materials, unfinished repurposing, and too much energy spent rebuilding what should already have structure behind it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              When that keeps happening, the issue is no longer productivity. The issue is operating drag.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* 5. Results block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What changes when INK is applied well</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r, i) => (
              <ScrollReveal key={r} delay={i * 0.08}>
                <div className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background p-6">
                  <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-accent-emerald" />
                  <p className="text-foreground/90">{r}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-3/4" />
      </section>

      {/* 6. Use cases block */}
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

      {/* 7. Outputs block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">What can come out of the work</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-8">Depending on the use case, the work may lead to:</p>
          </ScrollReveal>
          <div className="space-y-3">
            {outputs.map((o, i) => (
              <ScrollReveal key={o} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-4">
                  <ArrowRight className="h-4 w-4 shrink-0 text-destructive" />
                  <span className="text-foreground/90">{o}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 8. Best fit block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">Where INK fits best</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-8">
              INK makes the most sense where repeated work is already costing too much time, but the team is still too small or too overloaded to solve it by adding more people.
            </p>
            <h3 className="text-lg font-bold mb-4">Strong fit includes</h3>
          </ScrollReveal>
          <div className="space-y-3">
            {bestFit.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent-emerald" />
                  <span className="text-foreground/90">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* 9. Program connection block */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">How INK connects to the rest of the work</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programConnections.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(210,60%,50%)]/10 mb-5 group-hover:bg-[hsl(210,60%,50%)]/20 transition-colors">
                    <Workflow className="h-6 w-6 text-[hsl(210,60%,50%)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[hsl(210,60%,50%)] transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/4" />
      </section>

      {/* 10. Clarity block — What INK is not */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">What INK is not</h2>
          </ScrollReveal>
          <div className="space-y-3 mb-10">
            {inkIsNot.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-4">
                  <XCircle className="h-4 w-4 shrink-0 text-destructive/60" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="rounded-2xl border border-[hsl(210,60%,50%)]/20 bg-[hsl(210,60%,50%)]/5 p-8">
              <p className="text-lg leading-relaxed text-foreground/90">
                INK is an operating layer built to reduce repeated work, support better structure, and make movement easier where manual effort keeps becoming the bottleneck.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/2" />
      </section>

      {/* 11. Why it works block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Why this approach works</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              The point is not to automate everything. The point is to reduce the kind of manual drag that keeps slowing real work down.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              That means identifying the repeated load, deciding what deserves structure, and building support around the workflows that already matter — instead of inventing technology with no operational role.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* 12. Pilots block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">Pilots and use cases</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-8">
              INK can support focused pilots where repeated work is already visible and already expensive.
            </p>
            <h3 className="text-lg font-bold mb-4">Current directions</h3>
          </ScrollReveal>
          <div className="space-y-3">
            {pilots.map((p, i) => (
              <ScrollReveal key={p} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-4">
                  <Zap className="h-4 w-4 shrink-0 text-[hsl(210,60%,50%)]" />
                  <span className="text-foreground/90">{p}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
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