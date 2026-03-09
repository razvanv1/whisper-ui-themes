import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import { TrendingDown, Brain, Search, Layers, FileX, PackageOpen, ArrowRight, Snowflake, RefreshCw, Lock } from "lucide-react";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const Method = () => {
  return (
    <PageLayout>
      <SEO title="The Method" description="The Unlearning School method starts by removing what no longer fits, clearing friction before adding new tools, initiatives or activity." path="/method" />
      {/* Hero */}
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
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-4 text-foreground">
                What is learned can be unlearned
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-2 text-foreground/90 font-medium">
                Some of the biggest slowdowns don't look like problems.
              </p>
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                The Unlearning School is built on a simple idea. A lot of teams are
                not blocked because they lack effort, ideas or ambition. They are
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

      {/* What this method solves — icon grid */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What this method is built to solve</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: TrendingDown, text: "Teams that keep working hard but struggle to move the right things forward" },
              { icon: Brain, text: "AI adoption that stays uneven, scattered or disconnected from real workflows" },
              { icon: Search, text: "Funding paths that multiply without enough filtering or commitment" },
              { icon: Layers, text: "Initiatives that compete with each other until none of them gets enough traction" },
              { icon: FileX, text: "Proposals that absorb time without improving fast enough" },
              { icon: PackageOpen, text: "Expertise that could be a program, academy or asset but never gets structured" },
            ].map((item, i) => (
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
      </section>

      {/* Real issue + First move — visual cards */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 mb-5">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-xl font-bold mb-4">The real issue is rarely effort</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Most teams do not need more effort. They need less drag. Less legacy
                  work pulling resources sideways. Fewer initiatives running in parallel
                  without clear traction. Better filters for what deserves time and what does not.
                </p>
              </GlowCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowCard className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/20 mb-5">
                  <Search className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-xl font-bold mb-4">The first move is not to add more</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Before introducing new tools, new programs or new processes, the first
                  step is to identify what no longer serves the work. Removing what has become
                  irrelevant is almost always more valuable than layering something new on top.
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Kurt Lewin — 3-phase visual */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4 text-foreground">How unlearning works</h2>
            <p className="text-muted-foreground mb-12">
              The method draws from Kurt Lewin's change logic, adapted for the kind of work teams face now.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Snowflake, phase: "Unfreeze", desc: "Identify what the team is holding onto that no longer fits. Surface the assumptions, habits and processes that create drag.", color: "bg-accent-blue/10 text-accent-blue" },
              { icon: RefreshCw, phase: "Change", desc: "Introduce better selection, clearer priorities and sharper filters. Replace outdated habits with ones that match current pressures.", color: "bg-destructive/10 text-destructive" },
              { icon: Lock, phase: "Refreeze", desc: "Lock the new logic into the work. Make the better habits repeatable. Build structures that prevent drifting back.", color: "bg-accent-emerald/10 text-accent-emerald" },
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
      </section>

      {/* Tools — numbered list with hover */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">The tools behind the method</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { tool: "Unlearning", desc: "Identifying and removing what no longer serves the work." },
              { tool: "Irrelevance scanning", desc: "Mapping the habits, initiatives and assumptions that have become counterproductive." },
              { tool: "Stop/fix/continue logic", desc: "A decision framework for triaging what stays, what gets repaired and what needs to go." },
              { tool: "Adoption and resistance mapping", desc: "Understanding where new practices stick, where they fail and why." },
              { tool: "Decision-pressure analysis", desc: "Identifying where decisions pile up, slow down or get avoided." },
            ].map((t, i) => (
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
      </section>

      {/* What changes + Where it shows up — visual cards */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <GlowCard className="rounded-2xl border border-accent-emerald/20 bg-accent-emerald/5 p-8 h-full">
                <h2 className="text-xl font-bold mb-4">What changes when this method is applied well</h2>
                <ul className="space-y-3">
                  {["Faster decisions: fewer initiatives competing for attention", "AI becomes shared practice, not scattered experiment", "Funding paths narrowed to genuine fit", "Proposals sharper earlier in the process", "Expertise turning into structured, deliverable assets"].map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-accent-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full">
                <h2 className="text-xl font-bold mb-4">Where the method shows up in practice</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every program at The Unlearning School uses this method as the
                  foundation. The first move is always the same: identify and remove
                  what no longer fits before building what comes next.
                </p>
                <Link to="/programs" className="inline-flex items-center gap-2 text-destructive font-semibold hover:underline">
                  See the programs <ArrowRight className="h-4 w-4" />
                </Link>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-10">
              <p className="text-lg leading-relaxed md:text-xl italic text-foreground/80">
                "Complexity does not respond well to more effort. It responds to clearer
                judgment, sharper filtering and more deliberate selection. That
                starts with removing what should no longer be there."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where it comes from — founder */}
      <section className="py-14 md:py-20 bg-secondary">
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
                The method is built from years of hands-on work across education,
                technology, entrepreneurship and organizational programs. It draws
                from change management theory, behavioral design and the practical
                reality of working with teams that are already stretched thin.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Unlearning School is founded by Răzvan Vâlceanu. His work also
                extends into selected AI and startup ecosystems, including his
                role as a Lovable Ambassador.
              </p>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-5 py-3 text-destructive font-semibold transition-all hover:bg-destructive/20">
                Răzvan Vâlceanu on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <AuthorityBand
        title="Connected to major European organizations, learning networks and innovation initiatives"
        copy="The work is also informed by participation in selected memberships, networks and initiatives connected to education, skills, innovation, entrepreneurship and the future of work."
        variant="european"
        items={[
          { name: "Pact for Skills", subtitle: "European Commission", url: "https://pact-for-skills.ec.europa.eu/" },
          { name: "EPALE", subtitle: "Adult Learning in Europe", url: "https://epale.ec.europa.eu/" },
          { name: "Enterprise Europe Network", subtitle: "SME Support Network", url: "https://een.ec.europa.eu/" },
          { name: "Community for Educational Innovation", subtitle: "Erasmus+ Initiative, DG EAC", url: "https://www.heinnovate.eu/en/news-events-cei" },
        ]}
        note="Selected memberships, networks and initiatives relevant to our work."
      />
      <AuthorityBand
        title="Connected to startup and technology ecosystems"
        copy="The work is also shaped through selected startup and builder ecosystems that keep the company close to practical AI workflows, current product thinking and fast-moving technology communities."
        variant="startup"
        items={[
          { name: "Microsoft for Startups", url: "https://startups.microsoft.com/" },
          { name: "Lovable Ambassador", url: "https://lovable.dev/" },
          { name: "DEEP Ecosystems", url: "https://www.deep-ecosystems.com/" },
        ]}
        note="Selected startup, builder and technology ecosystem connections relevant to our work."
      />

      {/* What TUS is building */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What The Unlearning School is building</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A company that helps teams reduce drag, make better decisions and
              turn effort into actual movement. Through programs, systems and a
              method that starts where most approaches do not.
            </p>
            <p className="mt-8 text-2xl font-black text-destructive md:text-3xl">
              What is learned can be unlearned.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="If the issue is already visible, start there"
        primaryLabel="Explore programs"
        primaryLink="/programs"
        secondaryLabel="Describe your bottleneck"
        secondaryLink="/send-issue"
      />
    </PageLayout>
  );
};

export default Method;