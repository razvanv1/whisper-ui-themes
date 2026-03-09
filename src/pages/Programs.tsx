import { Link } from "react-router-dom";
import { CheckCircle, Search, Brain, TrendingDown, FileX, PackageOpen, ArrowRight, Sparkles } from "lucide-react";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";

const programs = [
  {
    title: "Funding intelligence and opportunity readiness",
    slug: "funding-intelligence",
    pain: "Too many funding options stay open for too long. Time gets spread across routes that never close. Grant cycles pass. Credits expire. Partnerships stall.",
    whatChanges: "Stronger filtering, faster prioritization and clearer commitment to the routes that actually fit.",
    canInclude: ["Opportunity mapping and filtering", "Grant and credit readiness", "Partnership evaluation", "Funding strategy sessions", "Application and proposal planning"],
    bestFit: "NGOs, universities, startups, accelerators and teams exploring new growth or funding routes.",
    accent: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
  },
  {
    title: "AI adoption for teams",
    slug: "ai-adoption",
    pain: "AI gets introduced without stronger habits or role logic. Some people experiment. Others resist. Usage stays uneven.",
    whatChanges: "AI becomes a shared practice, not a scattered experiment. Usage becomes consistent, deliberate and connected to real workflows.",
    canInclude: ["Workflow audit and AI mapping", "Role-specific AI onboarding", "Prompt and tool standardization", "Habit design and adoption tracking", "Team-level AI operating agreements"],
    bestFit: "Companies, NGOs, educators and teams already experimenting with AI but lacking consistency.",
    accent: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  },
  {
    title: "Execution readiness review",
    slug: "execution-readiness",
    pain: "Internal movement slows down while activity keeps increasing. Decisions pile up. Delivery friction compounds.",
    whatChanges: "Clearer priorities, faster decisions and less drag between intention and execution.",
    canInclude: ["Execution audit", "Decision backlog clearing", "Initiative triage", "Stop/fix/continue logic", "Delivery rhythm design"],
    bestFit: "Delivery teams, implementation-heavy organizations and growing teams under pressure.",
    accent: "bg-destructive/10 text-destructive border-destructive/20",
  },
  {
    title: "Proposal support",
    slug: "proposal-support",
    pain: "Proposals absorb time without becoming stronger fast enough. The logic stays unclear. The positioning stays soft.",
    whatChanges: "Stronger proposals, clearer logic, better positioning and less wasted effort on weak-fit applications.",
    canInclude: ["Proposal logic sharpening", "Narrative and positioning review", "Budget alignment", "Reviewer-lens stress testing", "Resubmission strategy"],
    bestFit: "Teams applying for grants, programs, partnerships or institutional funding.",
    accent: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  },
  {
    title: "Academy design and activation",
    slug: "academy-design",
    pain: "Expertise remains scattered instead of becoming a usable academy, asset or offer. Knowledge lives in people but never becomes a program.",
    whatChanges: "Expertise becomes structured, deliverable and ready to activate as an academy, training asset or partner-facing offer.",
    canInclude: ["Knowledge extraction and structuring", "Curriculum architecture", "Delivery model design", "Pilot planning", "Partner and audience mapping"],
    bestFit: "Organizations, consultancies, educators and teams with deep expertise and no structured delivery model.",
    accent: "bg-foreground/10 text-foreground border-foreground/20",
  },
];

const problemBullets = [
  { icon: Search, text: "Too many routes stay open for too long" },
  { icon: Brain, text: "AI gets introduced without stronger habits or role logic" },
  { icon: TrendingDown, text: "Internal movement slows down while activity keeps increasing" },
  { icon: FileX, text: "Proposals absorb time without becoming stronger fast enough" },
  { icon: PackageOpen, text: "Expertise remains scattered instead of becoming a usable academy, asset or offer" },
  { icon: ArrowRight, text: "Teams keep working, but the next move stays harder to choose than it should be" },
];

const Programs = () => {
  return (
    <PageLayout>
      <SEO title="Programs" description="Five structured programs for funding intelligence, AI adoption, execution readiness, proposal support and academy design." path="/programs" />
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Programs
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-4 text-foreground">
                Start where the drag is already costing time, focus or momentum
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg font-bold text-destructive mb-6">What is learned can be unlearned.</p>
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                Each program is built as a practical starting point for teams facing
                funding pressure, uneven AI adoption, execution drag, weak proposals
                or expertise that deserves a stronger academy model.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  Book a call
                </a>
                <Link to="/send-issue"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                  Send a message
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick nav pills */}
      <section className="py-12 md:py-16 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-xl font-bold mb-6">Jump to a program</h2>
            <div className="flex flex-wrap gap-3">
              {programs.map((p) => (
                <Link key={p.slug} to={`/programs/${p.slug}`}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-destructive hover:text-destructive hover:shadow-md hover:scale-105">
                  {p.title}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* Problem patterns — visual grid */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">The patterns that keep showing up</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problemBullets.map((b, i) => (
              <ScrollReveal key={b.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background p-6 transition-all hover:border-destructive/30 hover:shadow-md group h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <b.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-foreground/90 text-sm pt-1">{b.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* Program cards — redesigned with accent colors */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">The programs</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {programs.map((p, idx) => (
              <ScrollReveal key={p.slug} delay={idx * 0.1}>
                <GlowCard className={`rounded-2xl border bg-card p-8 md:p-10 ${p.accent.split(' ')[2]}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${p.accent.split(' ')[0]}`}>
                      <span className={`text-lg font-black ${p.accent.split(' ')[1]}`}>{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight md:text-2xl pt-1">{p.title}</h3>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="rounded-xl bg-secondary p-5 mb-5">
                        <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-destructive">The pain</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.pain}</p>
                      </div>
                      <div className="rounded-xl bg-secondary p-5">
                        <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-accent-emerald">What changes</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{p.whatChanges}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">What it can include</h4>
                      <ul className="mb-6 space-y-2">
                        {p.canInclude.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-lg bg-secondary/80 px-4 py-3">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-bold">Best fit:</span> {p.bestFit}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link to={`/programs/${p.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive px-6 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                      Explore this program <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 font-semibold hover:bg-accent transition-colors">
                      Book a working call
                    </a>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* How programs connect — visual */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full">
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-6 text-foreground">How the programs connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Funding, AI and execution are not separate problems. They tend to show
                  up together. A team chasing funding often also needs execution support.
                  A team adopting AI often faces delivery friction. The programs are
                  designed to work alone or together.
                </p>
              </GlowCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowCard className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 h-full">
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-6 text-foreground">What happens next</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every program starts with a working conversation. The first call is
                  free, focused and designed to pressure-test the live issue.
                </p>
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-destructive font-semibold hover:underline">
                  Book the first call <ArrowRight className="h-4 w-4" />
                </a>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={4} className="hidden md:block left-1/4" />
      </section>

      <CTASection title="Start with the part that is already slowing the work down" />
    </PageLayout>
  );
};

export default Programs;