import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import { TrendingDown, Brain, Search, Layers, FileX, PackageOpen } from "lucide-react";

const Method = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500 mb-4">The Unlearning School · Method</p>
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
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Explore programs
                </Link>
                <a
                  href="https://meet.brevo.com/razvan-valceanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
                >
                  Book a free 30-minute working call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What this method solves */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">What this method is built to solve</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { icon: TrendingDown, text: "Teams that keep working hard but struggle to move the right things forward" },
              { icon: Brain, text: "AI adoption that stays uneven, scattered or disconnected from real workflows" },
              { icon: Search, text: "Funding paths that multiply without enough filtering or commitment" },
              { icon: Layers, text: "Initiatives that compete with each other until none of them gets enough traction" },
              { icon: FileX, text: "Proposals that absorb time without improving fast enough" },
              { icon: PackageOpen, text: "Expertise that could be a program, academy or asset but never gets structured" },
            ].map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-red-600/30 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10">
                    <item.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="pt-2 text-foreground/90">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Real issue + First move — merged to reduce sections */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-foreground">The real issue is rarely effort</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              Most teams do not need more effort. They need less drag. Less legacy
              work pulling resources sideways. Fewer initiatives running in parallel
              without clear traction. Better filters for what deserves time and what
              does not. The method is built to solve that layer, not to add more
              activity on top of it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">The first move is not to add more</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              Before introducing new tools, new programs or new processes, the first
              step is to identify what no longer serves the work. That is the core
              principle. Removing what has become irrelevant, redundant or
              counterproductive is almost always more valuable than layering
              something new on top.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kurt Lewin — fixed contrast */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4 text-foreground">How unlearning works</h2>
            <p className="text-muted-foreground mb-10">
              The method draws from Kurt Lewin's change logic, adapted for the kind
              of work teams face now.
            </p>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                phase: "Unfreeze",
                desc: "Identify what the team is holding onto that no longer fits. Surface the assumptions, habits and processes that create drag. Make the cost of keeping them visible.",
              },
              {
                phase: "Change",
                desc: "Introduce better selection, clearer priorities and sharper filters. Replace outdated habits with ones that match the current pressure and opportunity landscape.",
              },
              {
                phase: "Refreeze",
                desc: "Lock the new logic into the work. Make the better habits repeatable. Build the structures that prevent the team from drifting back into the same patterns.",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.phase} delay={i * 0.15}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-red-500">{p.phase}</h3>
                  <p className="text-muted-foreground">{p.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">The tools behind the method</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { tool: "Unlearning", desc: "Identifying and removing what no longer serves the work." },
              { tool: "Irrelevance scanning", desc: "Mapping the habits, initiatives and assumptions that have become counterproductive." },
              { tool: "Stop/fix/continue logic", desc: "A decision framework for triaging what stays, what gets repaired and what needs to go." },
              { tool: "Adoption and resistance mapping", desc: "Understanding where new practices stick, where they fail and why." },
              { tool: "Decision-pressure analysis", desc: "Identifying where decisions pile up, slow down or get avoided." },
            ].map((t, i) => (
              <ScrollReveal key={t.tool} delay={i * 0.08}>
                <div className="border-b border-border pb-6 last:border-0 group">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-red-500 transition-colors">{t.tool}</h3>
                  <p className="text-muted-foreground">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What changes + Where it shows up — merged */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What changes when this method is applied well</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              Teams start making faster decisions because fewer initiatives are
              competing for attention. AI becomes a shared practice instead of a
              scattered experiment. Funding paths get narrowed to the ones that
              genuinely fit. Proposals become sharper earlier in the process.
              Expertise starts turning into structured, deliverable assets. The
              drag drops and momentum becomes something the team can feel again.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Where the method shows up in practice</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              Every program at The Unlearning School uses this method as the
              foundation. Whether the team starts with funding intelligence, AI
              adoption, execution readiness, proposal support or academy design,
              the first move is always the same: identify and remove what no longer
              fits before building what comes next.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 md:py-20 bg-background text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground italic">
              "Complexity does not respond well to more effort. It responds to clearer
              judgment, sharper filtering and more deliberate selection. That
              starts with removing what should no longer be there."
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Where it comes from */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-5">
            <ScrollReveal direction="left" className="md:col-span-2">
              <div className="relative">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
                  <img
                    src="/razvan-valceanu.jpg"
                    alt="Răzvan Vâlceanu, fondator The Unlearning School"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-red-600 px-5 py-3 shadow-lg">
                  <p className="text-sm font-bold text-white">Founder</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="md:col-span-3">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Where this work comes from</h2>
              <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
                The method is built from years of hands-on work across education,
                technology, entrepreneurship and organizational programs. It draws
                from change management theory, behavioral design and the practical
                reality of working with teams that are already stretched thin.
              </p>
              <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
                The Unlearning School is founded by Răzvan Vâlceanu, whose work brings
                together entrepreneurship, digital business, education and
                organizational programs. The approach draws from leadership in tech,
                hands-on training, ecosystem building and years spent translating
                change into something people can actually use in real teams. His work
                also extends into selected AI and startup ecosystems, including his
                role as a Lovable Ambassador.
              </p>
              <a
                href="https://www.linkedin.com/in/razvanvalceanu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600/10 px-5 py-3 text-red-500 font-semibold transition-all hover:bg-red-600/20"
              >
                Răzvan Vâlceanu on LinkedIn →
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
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What The Unlearning School is building</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
              A company that helps teams reduce drag, make better decisions and
              turn effort into actual movement. Through programs, systems and a
              method that starts where most approaches do not: by removing what no
              longer fits.
            </p>
            <p className="mt-8 text-xl font-bold text-red-500 md:text-2xl">
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