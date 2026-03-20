import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  TrendingDown, Brain, Search, Layers, FileX, PackageOpen, ArrowRight,
  Snowflake, RefreshCw, Lock, CheckCircle, AlertTriangle, Clock,
  Workflow, GraduationCap, Zap, Target, BarChart3
} from "lucide-react";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const recognitionItems = [
  { icon: Layers, text: "Too many initiatives stay open at the same time" },
  { icon: Brain, text: "Old assumptions keep shaping new decisions" },
  { icon: Clock, text: "Teams stay busy, but momentum gets weaker" },
  { icon: Zap, text: "AI gets added on top of a system that is already overloaded" },
  { icon: Search, text: "Opportunities keep coming in, but selection stays weak" },
  { icon: TrendingDown, text: "People work harder while the work gets harder to move" },
];

const tools = [
  { tool: "Unlearning", desc: "A way to question habits, assumptions, and decisions that no longer match the situation." },
  { tool: "Irrelevance scanning", desc: "A way to spot work, ideas, or initiatives that keep consuming time and attention without enough value." },
  { tool: "Stop, fix, continue logic", desc: "A way to decide what should stop, what needs repair, and what is still worth pushing forward." },
  { tool: "Adoption and resistance mapping", desc: "A way to understand where change gets blocked inside real teams and why." },
  { tool: "Decision-pressure analysis", desc: "A way to improve the quality of choices when time, resources, and attention are limited." },
];

const results = [
  "Weak-fit work gets filtered earlier",
  "Decisions get easier to make under pressure",
  "Priorities stop competing in the dark",
  "AI is introduced with better judgment",
  "Proposals, programs, and academies start from stronger logic",
  "Teams spend less energy carrying what no longer fits",
];

const practiceAreas = [
  { title: "Funding intelligence and opportunity readiness", desc: "Better filtering, stronger prioritization, and less wasted motion across grants, credits, partnerships, and opportunity paths.", icon: Search },
  { title: "AI adoption for teams", desc: "Better judgment, better habits, and less confusion in the way AI enters everyday work.", icon: Zap },
  { title: "Execution readiness", desc: "Clearer friction points, stronger choices, and less drag across delivery, coordination, and internal movement.", icon: Target },
  { title: "Proposal support", desc: "Sharper framing, stronger logic, and materials that hold up better in external conversations and submissions.", icon: FileX },
  { title: "Academy design and activation", desc: "Turning expertise into a usable learning structure, marketing asset, partner offer, and new path for revenue or funding diversification.", icon: GraduationCap },
];

const Method = () => {
  return (
    <PageLayout>
      <SEO title="The Method" description="The Unlearning School method starts by removing what no longer fits, clearing friction before adding new tools, initiatives or activity." path="/method" />

      {/* 1. Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                The Unlearning School · Method
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
                Not all drag looks like a problem at first
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                The Unlearning School is built on a simple idea. A lot of teams are
                not blocked because they lack effort, ideas, or ambition. They are
                blocked because too much work keeps moving after it has stopped being
                useful.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/programs"
                  className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  Explore programs
                </Link>
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                  Book a call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Recognition block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What this method is built to solve</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recognitionItems.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-lg group h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <span className="pt-2 text-foreground/90 text-sm leading-relaxed">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 3. Core problem block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">The real issue is rarely effort</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              Most teams are not short on drive. What slows them down is the amount of work, assumptions, habits, and priorities that keep taking up time long after they have stopped helping.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              That creates a pattern that looks productive from the outside. New tools arrive. More ideas get added. More work gets started. Yet progress becomes harder to sustain because too much of what is inside the system no longer fits the context.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              That is where the method begins. Not with adding more. With seeing more clearly.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* 4. Core principle block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">The first move is not to add more</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              Before adding another tool, another initiative, another program, or another layer of activity, the first move is to look at what no longer serves the work.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              That may mean outdated assumptions, weak-fit projects, repeated effort, poor role logic, or decisions that stayed unresolved for too long. Once those become visible, the work becomes easier to reset, easier to prioritize, and easier to move forward.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              This is what unlearning means here. Not forgetting. Not rejecting experience. It means noticing what no longer fits, replacing it with something more useful, and making that new pattern strong enough to last in real work.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* 5. How unlearning works (3-phase) */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4 text-foreground">How unlearning works</h2>
            <p className="text-muted-foreground mb-12">
              At The Unlearning School, unlearning follows a practical three-step logic inspired by Kurt Lewin.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Snowflake, phase: "Unfreeze", desc: "The first step is to make visible what no longer fits the current context. That may mean habits, assumptions, routines, tools, or decision patterns that once worked well but now slow the work down.", color: "bg-accent-blue/10 text-accent-blue" },
              { icon: RefreshCw, phase: "Change", desc: "Once the old pattern is visible, the next step is to test a better one. This is where teams try new ways of deciding, working, learning, prioritizing, or using AI, without pretending that awareness alone changes behavior.", color: "bg-destructive/10 text-destructive" },
              { icon: Lock, phase: "Refreeze", desc: "What works needs to become stable enough to hold under pressure. The final step is to turn better choices into repeatable practice, so the team does not slide back into the same pattern the moment speed, stress, or ambiguity return.", color: "bg-accent-emerald/10 text-accent-emerald" },
            ].map((p, i) => (
              <ScrollReveal key={p.phase} delay={i * 0.15}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-7xl font-black text-foreground/5">{i + 1}</span>
                  <div className="relative">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${p.color.split(' ')[0]} mb-5`}>
                      <p.icon className={`h-6 w-6 ${p.color.split(' ')[1]}`} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${p.color.split(' ')[1]}`}>{p.phase}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={4} className="left-1/2" />
      </section>

      {/* 6. Tools block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">The tools behind the method</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {tools.map((t, i) => (
              <ScrollReveal key={t.tool} delay={i * 0.08}>
                <div className="flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-md group">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-sm font-black text-foreground/40 group-hover:bg-destructive/10 group-hover:text-destructive transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-1 group-hover:text-destructive transition-colors">{t.tool}</h3>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 7. Results block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What changes when this method is applied well</h2>
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
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* 8. Practice block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">Where the method shows up in practice</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 mb-5 group-hover:bg-destructive/20 transition-colors">
                    <p.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-destructive transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* 9. Complex work block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Why this matters when the work gets complex</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              This approach becomes even more useful when the work involves multiple actors, limited resources, shifting priorities, and pressure to turn activity into results.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              That applies to organizations building new programs, partnerships shaping proposals, teams balancing funding and delivery at the same time, and groups trying to introduce AI or new learning models without making the system heavier than it already is.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              In those settings, the issue is rarely a lack of effort. The issue is usually weak selection, poor fit, unresolved friction, and too much motion without enough traction.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/4" />
      </section>

      {/* 10. Founder and origin block */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-5">
            <ScrollReveal direction="left" className="md:col-span-2">
              <div className="relative max-w-[260px]">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
                  <img src={razvanPhoto} alt="Răzvan Vâlceanu, fondator The Unlearning School" loading="eager"
                    className="w-full aspect-[3/4] object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-destructive px-5 py-3 shadow-lg">
                  <p className="text-sm font-bold text-white">Founder</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="md:col-span-3">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Where this work comes from</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Unlearning School grew out of years spent working with teams, founders, educators, and organizations dealing with change that looked manageable on paper and messy in practice.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                It is founded by Răzvan Vâlceanu, whose background includes technology leadership, entrepreneurship education, digital skills, partnerships, and hands-on program building. The method did not come out of theory alone. It came out of repeated exposure to teams trying to move forward while carrying too much that no longer served the work.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                His work also extends into selected AI and startup ecosystems, including his role as a Lovable Ambassador. That keeps the company close to builder communities, practical AI workflows, and emerging product thinking.
              </p>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-5 py-3 text-destructive font-semibold transition-all hover:bg-destructive/20">
                Răzvan Vâlceanu on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 11. Authority: European */}
      <AuthorityBand
        title="Connected to major European organizations, learning networks, and innovation initiatives"
        copy="The work is informed by participation in selected memberships, networks, and initiatives connected to education, skills, innovation, entrepreneurship, and the future of work."
        variant="european"
        items={[
          { name: "Pact for Skills", subtitle: "European Commission", url: "https://pact-for-skills.ec.europa.eu/" },
          { name: "EPALE", subtitle: "Adult Learning in Europe", url: "https://epale.ec.europa.eu/" },
          { name: "Enterprise Europe Network", subtitle: "SME Support Network", url: "https://een.ec.europa.eu/" },
          { name: "Community for Educational Innovation", subtitle: "Erasmus+ Initiative, DG EAC", url: "https://www.heinnovate.eu/en/news-events-cei" },
        ]}
        note="Selected memberships, networks and initiatives relevant to our work."
      />

      {/* 12. Authority: Startup */}
      <AuthorityBand
        title="Connected to startup and technology ecosystems"
        copy="The work is also shaped through selected startup and builder ecosystems that keep the company close to practical AI workflows, current product thinking, and fast-moving technology communities."
        variant="startup"
        items={[
          { name: "Microsoft for Startups", url: "https://startups.microsoft.com/" },
          { name: "Lovable Ambassador", url: "https://lovable.dev/" },
          { name: "DEEP Ecosystems", url: "https://www.deep-ecosystems.com/" },
        ]}
        note="Selected startup, builder and technology ecosystem connections relevant to our work."
      />

      {/* 13. Company direction block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What The Unlearning School is building</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              The Unlearning School is not a traditional training company, and it is not a consulting brand built on abstract frameworks.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              It is building a practical model that brings together focused programs, a working method, academy design, funding intelligence, AI adoption, and an operating layer that supports the work behind the scenes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              The goal is simple. Reduce wasted effort. Improve the quality of choices. Make it easier for teams to adapt, build, and move with more sense under pressure.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={3} className="left-1/4" />
      </section>

      {/* 14. Final CTA */}
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

export default Method;
