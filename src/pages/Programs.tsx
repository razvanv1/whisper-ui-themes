import { Link } from "react-router-dom";
import { CheckCircle, Search, Brain, TrendingDown, FileX, PackageOpen, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";

const programs = [
  {
    title: "Funding intelligence and opportunity readiness",
    slug: "funding-intelligence",
    pain: "Too many funding options stay open for too long. Time gets spread across routes that never close.",
    whatChanges: "Stronger filtering, faster prioritization and clearer commitment to the routes that actually fit.",
    canInclude: ["Opportunity mapping and filtering", "Grant and credit readiness", "Partnership evaluation", "Funding strategy sessions", "Application and proposal planning"],
    bestFit: "NGOs, universities, startups, accelerators and teams exploring new growth or funding routes.",
  },
  {
    title: "AI adoption for teams",
    slug: "ai-adoption",
    pain: "AI gets introduced without stronger habits or role logic. Some people experiment. Others resist. Usage stays uneven.",
    whatChanges: "AI becomes a shared practice, not a scattered experiment. Usage becomes consistent, deliberate and connected to real workflows.",
    canInclude: ["Workflow audit and AI mapping", "Role-specific AI onboarding", "Prompt and tool standardization", "Habit design and adoption tracking", "Team-level AI operating agreements"],
    bestFit: "Companies, NGOs, educators and teams already experimenting with AI but lacking consistency.",
  },
  {
    title: "Execution readiness review",
    slug: "execution-readiness",
    pain: "Internal movement slows down while activity keeps increasing. Decisions pile up. Delivery friction compounds.",
    whatChanges: "Clearer priorities, faster decisions and less drag between intention and execution.",
    canInclude: ["Execution audit", "Decision backlog clearing", "Initiative triage", "Stop/fix/continue logic", "Delivery rhythm design"],
    bestFit: "Delivery teams, implementation-heavy organizations and growing teams under pressure.",
  },
  {
    title: "Proposal support",
    slug: "proposal-support",
    pain: "Proposals absorb time without becoming stronger fast enough. The logic stays unclear. The positioning stays soft.",
    whatChanges: "Stronger proposals, clearer logic, better positioning and less wasted effort on weak-fit applications.",
    canInclude: ["Proposal logic sharpening", "Narrative and positioning review", "Budget alignment", "Reviewer-lens stress testing", "Resubmission strategy"],
    bestFit: "Teams applying for grants, programs, partnerships or institutional funding.",
  },
  {
    title: "Academy design and activation",
    slug: "academy-design",
    pain: "Expertise remains scattered instead of becoming a usable academy, asset or offer.",
    whatChanges: "Expertise becomes structured, deliverable and ready to activate as an academy, training asset or partner-facing offer.",
    canInclude: ["Knowledge extraction and structuring", "Curriculum architecture", "Delivery model design", "Pilot planning", "Partner and audience mapping"],
    bestFit: "Organizations, consultancies, educators and teams with deep expertise and no structured delivery model.",
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
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">The Unlearning School · Programs</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Start where the drag is already costing time, focus or momentum
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-bagel text-lg text-red-500 mb-6">What is learned can be unlearned.</p>
              <p className="text-lg text-muted-foreground mb-10">
                Each program is built as a practical starting point for teams facing
                funding pressure, uneven AI adoption, execution drag, weak proposals
                or expertise that deserves a stronger academy model.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://meet.brevo.com/razvan-valceanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
                >
                  Book a free 30-minute working call
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card gentle-animation"
                >
                  Describe your bottleneck
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem block */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-background">The patterns that keep showing up</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {problemBullets.map((b, i) => (
              <ScrollReveal key={b.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-xl border border-background/10 bg-background/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/15">
                    <b.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="pt-2 text-background/80">{b.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-12">The programs</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {programs.map((p, idx) => (
              <ScrollReveal key={p.slug} delay={idx * 0.1}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 md:p-12">
                  <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">The pain</h4>
                      <p className="text-muted-foreground mb-6">{p.pain}</p>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">What changes</h4>
                      <p className="text-muted-foreground">{p.whatChanges}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">What it can include</h4>
                      <ul className="mb-6 space-y-2">
                        {p.canInclude.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Best fit:</span> {p.bestFit}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="https://meet.brevo.com/razvan-valceanu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
                    >
                      Book a working call
                    </a>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How programs connect */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">How the programs connect</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Funding, AI and execution are not separate problems. They tend to show
              up together. The programs are designed to work alone or together.
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">What happens next</h2>
            <p className="text-lg text-muted-foreground">
              Every program starts with a working conversation. The first call is
              free, focused and designed to pressure-test the live issue.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection title="Start with the part that is already slowing the work down" />
    </PageLayout>
  );
};

export default Programs;
