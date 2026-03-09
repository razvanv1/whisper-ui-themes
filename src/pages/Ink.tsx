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
  CheckCircle, XCircle, Sparkles, Workflow, Layers, Target
} from "lucide-react";

const dragItems = [
  { icon: AlertTriangle, text: "Opportunities are noticed, but not tracked well enough to act on time" },
  { icon: Clock, text: "Follow-up slips because it depends on someone remembering" },
  { icon: FileText, text: "Materials stay in draft longer than they should" },
  { icon: RefreshCw, text: "Useful notes, calls, and internal knowledge never become reusable assets" },
  { icon: TrendingDown, text: "Repeated tasks keep taking time away from the work that needs judgment" },
  { icon: Layers, text: "Small delays accumulate until they become a real operating problem" },
];

const changesItems = [
  { title: "Opportunity scanning becomes more consistent", desc: "Relevant calls, vendor routes, and ecosystem opportunities are easier to monitor without relying on fragmented manual checks." },
  { title: "Follow-up becomes easier to sustain", desc: "Open threads, pending actions, and next steps stop depending entirely on memory and ad hoc effort." },
  { title: "Materials move faster", desc: "Drafts, briefs, proposals, summaries, and working documents become easier to shape and move forward." },
  { title: "Content becomes reusable", desc: "Useful knowledge does not stay trapped in one call, one note, or one document. It can be repurposed into formats that support visibility, delivery, and follow-through." },
  { title: "Teams recover capacity", desc: "Less time goes into repeated coordination and rebuilding. More time stays available for better decisions and stronger execution." },
];

const supports = [
  { icon: Search, area: "Opportunity scanning", desc: "Monitoring funding sources, vendor credits, partnerships, and relevant calls across multiple channels." },
  { icon: Filter, area: "Filtering and prioritization", desc: "Comparing options based on fit, effort, timing, and strategic relevance." },
  { icon: Bell, area: "Follow-up support", desc: "Tracking open threads, pending actions, and follow-up rhythms without relying only on memory." },
  { icon: FileText, area: "Material preparation", desc: "Drafting, structuring, and refining proposals, briefs, summaries, internal documents, and working assets." },
  { icon: RefreshCw, area: "Content repurposing", desc: "Turning notes, conversations, recordings, and internal material into usable formats that can travel further." },
  { icon: GraduationCap, area: "Academy and workflow support", desc: "Supporting curriculum structure, session planning, content packaging, and repeatable delivery tasks behind academies and learning systems." },
];

const inkIs = [
  "A support system for repeated operational work",
  "Part of how The Unlearning School reduces drag behind the scenes",
  "Useful when structure, continuity, and follow-through matter",
  "Strongest when connected to real programs, real workflows, and real pressure",
];

const inkIsNot = [
  "Not a generic chatbot",
  "Not a product pretending to solve everything",
  "Not a replacement for judgment",
  "Not a disconnected tech layer with no link to the actual work",
];

const callBullets = [
  "Pressure-test the bottleneck",
  "Identify where the drag is really sitting",
  "Decide whether the next move is a pilot, a program, a narrower follow-up, or direct implementation",
];

const Ink = () => {
  return (
    <PageLayout>
      <SEO title="INK - AI Operating Layer" description="INK is the AI-supported system behind The Unlearning School for opportunity scanning, follow-up, material preparation and workflow tasks." path="/ink" />

      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(210,60%,50%)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
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
                  INK supports the work that usually slows everything else down
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                  INK is the AI-supported system used inside The Unlearning School to
                  handle the repeated work that keeps teams overloaded: scanning
                  opportunities, tracking follow-up, shaping materials, repurposing
                  content, and supporting academy and workflow delivery.
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

      {/* The problem INK is built for */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">The problem INK is built for</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              Most teams do not lose momentum only in strategy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              They lose it in the repeated work that sits underneath strategy and quietly eats attention every week. Opportunities are tracked inconsistently. Follow-up depends on memory. Drafts stay open too long. Useful knowledge never leaves the conversation where it first appeared. Repetitive tasks keep piling up until the work starts feeling heavier than it should.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              That is the layer INK is built for.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* Where the drag usually shows up */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">Where the drag usually shows up</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dragItems.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background p-6 transition-all hover:border-destructive/30 hover:shadow-lg group h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <p className="text-foreground/90 pt-1 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-3/4" />
      </section>

      {/* What INK is built to do */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What INK is built to do</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              INK is built to reduce the repeated manual load behind work that needs structure, consistency, and speed.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              It does not replace thinking. It supports the parts of the work that are too important to ignore, too repetitive to keep rebuilding manually, and too easy to leave half-done when the team is already stretched.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/2" />
      </section>

      {/* What changes with INK */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">What changes with INK</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {changesItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(210,60%,50%)]/10 mb-5 group-hover:bg-[hsl(210,60%,50%)]/20 transition-colors">
                    <CheckCircle className="h-5 w-5 text-[hsl(210,60%,50%)]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-[hsl(210,60%,50%)] transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* What INK supports today */}
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
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* What INK is / is not */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="rounded-2xl border border-[hsl(210,60%,50%)]/20 bg-[hsl(210,60%,50%)]/5 p-8">
                <h3 className="text-lg font-bold mb-5 text-[hsl(210,60%,50%)]">What INK is</h3>
                <ul className="space-y-3">
                  {inkIs.map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-[hsl(210,60%,50%)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
                <h3 className="text-lg font-bold mb-5 text-destructive">What INK is not</h3>
                <ul className="space-y-3">
                  {inkIsNot.map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-destructive/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* Where INK fits best */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Where INK fits best</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              INK fits best in teams that already know what needs to move, but keep losing time in the repeated work around it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              That includes teams dealing with opportunity overload, proposal preparation, content bottlenecks, academy delivery, follow-up pressure, and small operational tasks that keep slowing bigger work down.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              It is most useful when the bottleneck is no longer ambition, but execution capacity.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/4" />
      </section>

      {/* How INK connects to the work */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">How INK connects to the work</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              INK is not meant to stand alone.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              It supports the work inside funding intelligence, proposal support, academy design, execution support, and the resource systems around them. It is part of the same logic. Reduce wasted effort. Keep the useful work moving. Stop letting repeated manual drag decide the speed of the whole system.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* Free call block */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">Start with a free 30-minute working call</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-8">
              A focused first conversation to understand the live issue, the pressure around it, and whether INK belongs in the next step.
            </p>
          </ScrollReveal>
          <div className="space-y-2 mb-8">
            {callBullets.map((b, i) => (
              <ScrollReveal key={b} delay={i * 0.08}>
                <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4">
                  <ArrowRight className="h-4 w-4 shrink-0 text-[hsl(210,60%,50%)]" />
                  <span className="text-foreground/90 text-sm">{b}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                Book a call
              </a>
              <Link to="/send-issue"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                Send the live issue
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-10">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4">The Unlearning Pill</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Selected updates on funding intelligence, AI at work, execution friction, academy building, and the future of work.
              </p>
              <Link to="/newsletter"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
                Join The Unlearning Pill
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Ink;
