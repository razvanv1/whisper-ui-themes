import { Link } from "react-router-dom";
import { CheckCircle, Search, Brain, TrendingDown, FileX, PackageOpen, ArrowRight, Sparkles, Zap, Target, GraduationCap, Layers } from "lucide-react";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";

const startHere = [
  { condition: "If the pressure is around funding routes, grants, credits, partnerships, or weak prioritization", program: "Funding intelligence and opportunity readiness", slug: "funding-intelligence", icon: Search },
  { condition: "If AI is already entering the team, but habits, use cases, and judgment are uneven", program: "AI adoption for teams", slug: "ai-adoption", icon: Zap },
  { condition: "If effort is high, but delivery, traction, or internal movement stay weak", program: "Execution readiness review", slug: "execution-readiness", icon: Target },
  { condition: "If the direction is promising, but the proposal, concept note, or partner-facing material is still weak", program: "Proposal support", slug: "proposal-support", icon: FileX },
  { condition: "If your expertise could become an academy, program, marketing asset, partner offer, or new income channel", program: "Academy design and activation", slug: "academy-design", icon: GraduationCap },
];

const problemBullets = [
  { icon: Search, text: "Too many routes stay open for too long" },
  { icon: Brain, text: "AI gets introduced without stronger habits or role logic" },
  { icon: TrendingDown, text: "Internal movement slows down while activity keeps increasing" },
  { icon: FileX, text: "Proposals absorb time without becoming stronger fast enough" },
  { icon: PackageOpen, text: "Expertise remains scattered instead of becoming a usable academy, asset, or offer" },
  { icon: ArrowRight, text: "Teams keep working, but the next move stays harder to choose than it should be" },
];

const programs = [
  {
    title: "Funding intelligence and opportunity readiness",
    slug: "funding-intelligence",
    desc: "Too many possible routes create noise, weak prioritization, and late decisions. Teams lose time chasing grants, credits, partnerships, vendor opportunities, and funding paths without enough filtering, timing, or fit.\n\nThis program is built to improve selection before more effort gets burned in the wrong direction.",
    whatChanges: [
      "Weaker routes are filtered earlier",
      "Stronger routes become easier to prioritize",
      "Funding is seen through a diversification lens, not one narrow source",
      "The next 10 to 30 days become easier to organize around better choices",
    ],
    canInclude: ["Grant and call scanning", "Vendor credits and MDF routes", "Diversification of funding sources", "Accelerator and incubator routes", "Public and private opportunity mapping", "Partner and positioning recommendations", "Next-step planning"],
    bestFit: "NGOs, universities, startups, accelerators, and teams exploring new growth or funding routes.",
    accent: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
  },
  {
    title: "AI adoption for teams",
    slug: "ai-adoption",
    desc: "AI is already present, but the way it is used across the team is uneven, shallow, chaotic, or too dependent on a few people improvising on their own.\n\nThis program is built to turn AI into something more useful inside everyday work, with better judgment, stronger habits, and more grounded use across roles.",
    whatChanges: [
      "AI moves from random experimentation into practical team use",
      "Role-based use cases become easier to identify",
      "Judgment improves around where AI supports the work and where it does not",
      "The team stops treating AI as either magic or threat",
    ],
    canInclude: ["Role-based use cases", "Practical AI workflows", "Prompt patterns", "Team habits", "Internal guidance", "Responsible use", "Educational and mission-driven adaptations where needed"],
    bestFit: "Companies, NGOs, educators, support teams, and teams already experimenting with AI but lacking consistency.",
    accent: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  },
  {
    title: "Execution readiness review",
    slug: "execution-readiness",
    desc: "When teams keep working but traction stays weak, the issue is rarely effort alone. Priorities compete, adoption drags, decisions slow down, and too many initiatives keep moving at the same time without enough progress.\n\nThis review is built to identify where the drag sits and what needs to stop, improve, or move faster.",
    whatChanges: [
      "Friction becomes visible",
      "Weak movement stops hiding behind high effort",
      "Priorities become easier to challenge",
      "Stop, fix, continue decisions become easier to make",
    ],
    canInclude: ["Friction mapping", "Adoption and resistance issues", "Stop, fix, continue decisions", "Pressure points across delivery", "Priority actions for the next phase"],
    bestFit: "Delivery teams, implementation-heavy organizations, partnership-heavy projects, growing teams under pressure, and organizations carrying too many parallel initiatives.",
    accent: "bg-destructive/10 text-destructive border-destructive/20",
  },
  {
    title: "Proposal support",
    slug: "proposal-support",
    desc: "Some proposals fail long before submission. Not because the opportunity is weak, but because the argument, structure, framing, or partner-facing material never becomes strong enough fast enough.\n\nThis program is built to sharpen the story, tighten the logic, and turn rough material into something stronger for real conversations and real submissions.",
    whatChanges: [
      "The direction becomes easier to explain",
      "The narrative holds together better",
      "The problem, outcomes, and structure get stronger",
      "Materials become easier to use with partners, funders, and collaborators",
    ],
    canInclude: ["Concept shaping", "Proposal review", "Argument and structure tightening", "Outputs and outcomes logic", "Partner-facing materials", "Narrative refinement"],
    bestFit: "NGOs, universities, innovation teams, partnerships, and organizations already moving toward a submission, call, or external proposal.",
    accent: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
  },
  {
    title: "Academy design and activation",
    slug: "academy-design",
    desc: "A lot of organizations are already sitting on expertise worth teaching, packaging, and distributing, but they do not yet have an academy model that turns that value into something structured, visible, repeatable, and commercially useful.\n\nThis program is built to turn expertise into an academy that can work as a learning product, marketing engine, partner asset, community vehicle, and new income channel.",
    whatChanges: [
      "Scattered expertise becomes a structured offer",
      "The academy becomes easier to explain, position, and launch",
      "Learning is organized into a format people can actually follow",
      "Content stops being rebuilt from scratch each time",
    ],
    canInclude: ["Academy positioning", "Audience and offer design", "Modular curriculum structure", "Delivery model", "Trainer or facilitator architecture", "Partner or learner journey", "Content and repurposing system", "Landing page and messaging direction", "Activation logic", "Revenue and funding diversification angle", "INK-supported workflow for structure, content, and delivery support"],
    bestFit: "NGOs, universities, accelerators, incubators, companies with customer or partner education needs, and expert-led organizations with IP worth packaging.",
    accent: "bg-foreground/10 text-foreground border-foreground/20",
  },
];

const Programs = () => {
  return (
    <PageLayout>
      <SEO title="Programs" description="Five structured programs for funding intelligence, AI adoption, execution readiness, proposal support and academy design." path="/programs" />

      {/* 1. Hero */}
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
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
                Start where it is costing you time, focus, or momentum
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-6 text-muted-foreground">
                Each program is built as a practical starting point for teams facing
                funding pressure, uneven AI adoption, execution drag, weak proposals,
                or expertise that deserves a stronger academy model.
              </p>
              <p className="text-sm text-muted-foreground/80 mb-10">
                Use the first call to pressure-test the issue, identify the best starting point, and avoid wasting more time on the wrong next move.
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

      {/* 2. Start here */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">Start here</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {startHere.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.08}>
                <Link to={`/programs/${s.slug}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-lg group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <s.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{s.condition}</p>
                    <p className="font-bold text-foreground group-hover:text-destructive transition-colors">Start with {s.program}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-destructive transition-colors hidden sm:block" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 3. Problem block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What usually goes wrong before teams reach out</h2>
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

      {/* 4-8. Program cards */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
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
                        {p.desc.split('\n\n').map((para, pi) => (
                          <p key={pi} className={`text-muted-foreground text-sm leading-relaxed ${pi > 0 ? 'mt-3' : ''}`}>{para}</p>
                        ))}
                      </div>
                      <div className="rounded-xl bg-secondary p-5">
                        <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent-emerald">What changes</h4>
                        <ul className="space-y-2">
                          {p.whatChanges.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-emerald" />
                              {item}
                            </li>
                          ))}
                        </ul>
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

      {/* 9. Program flow + 10. What happens next */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full">
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-6 text-foreground">How the programs connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some teams begin with funding intelligence, then move into proposal support. Others begin with AI adoption and later need execution work. In other cases, expertise turns into an academy that becomes a new channel for education, visibility, partnerships, or income. The starting point changes. The logic behind the work stays consistent.
                </p>
              </GlowCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowCard className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 h-full">
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-6 text-foreground">What happens next</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The first step is a free 30-minute working call focused on the live issue.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From there, the next move may be: the right program, a pilot, a narrower follow-up, or a direct move into the work if the fit is already clear.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If a call feels too early, send the live issue instead and the response can be shaped around the pressure, the likely fit, and the strongest next move.
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

      {/* 11. Final CTA */}
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

export default Programs;
