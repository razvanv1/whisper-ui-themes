import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import GlowCard from "@/components/shared/GlowCard";
import ProgramCard from "@/components/shared/ProgramCard";
import { Target, Zap, TrendingDown, FileX, PackageOpen, Search, Brain, Layers, Workflow } from "lucide-react";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero with video background */}
      <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4">The Unlearning School</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-4 text-white">
                What is learned can be unlearned
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-2 text-white/90 font-medium">
                When everything feels important, choosing well matters more than doing more.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-white/70">
                The Unlearning School works with teams that are juggling too many ideas,
                opportunities and demands at once. Instead of adding another layer of
                activity, the work focuses on better choices, stronger programs and a
                more useful way to bring AI into everyday work, while building the
                adaptability and resilience teams need as work keeps changing.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://meet.brevo.com/razvan-valceanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Book a free 30-minute working call
                </a>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore programs
                </Link>
              </div>
              <p className="text-sm mt-6 text-white/50">
                Use the first call to pressure-test the live issue, choose the best
                starting point and avoid burning more time on the wrong next move.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Too much motion */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal direction="left">
            <div className="max-w-2xl text-foreground">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
                Too much motion can look like progress
              </h2>
              <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                Most teams are not short on effort. They are overloaded with moving
                priorities, weak-fit initiatives, repeated work and decisions that stay
                unresolved for too long. That is where time gets burned. Momentum
                drops, good opportunities get missed and AI turns into noise instead
                of support.
              </p>
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a free 30-minute working call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where most work starts */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-3">Where most work starts</h2>
            <p className="text-lg leading-relaxed md:text-xl mb-12 text-muted-foreground">
              Most teams do not need everything at once. They need the right starting point.
            </p>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Funding intelligence and opportunity readiness",
                description: "For teams that need better funding routes, stronger prioritization and less wasted time across grants, vendor credits, partnerships and new opportunity paths.",
                bestFit: "NGOs, universities, startups, accelerators and teams exploring new growth or funding routes.",
                link: "/programs/funding-intelligence",
              },
              {
                title: "AI adoption for teams",
                description: "For organizations that want AI to become useful inside real workflows, not just another layer of confusion, experimentation or uneven habits across the team.",
                bestFit: "Companies, NGOs, educators and teams already experimenting with AI but lacking consistency.",
                link: "/programs/ai-adoption",
              },
              {
                title: "Execution readiness",
                description: "For teams dealing with slow decisions, delivery friction, weak traction or too many initiatives moving at once without enough progress.",
                bestFit: "Delivery teams, implementation-heavy organizations and growing teams under pressure.",
                link: "/programs/execution-readiness",
              },
            ].map((p, i) => (
              <ScrollReveal key={p.link} delay={i * 0.15}>
                <GlowCard className="h-full rounded-2xl border border-border bg-card p-8">
                  <ProgramCard {...p} />
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Not every team */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-foreground">
              Not every team starts in the same place
            </h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground max-w-2xl mx-auto">
              For some, the starting point is funding and opportunity selection. For
              others, it is AI inside the team, delivery friction or the need to turn
              expertise into a stronger program, academy or partner-facing offer. The
              starting point changes. The logic behind the work stays consistent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What this work prevents */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">
              What this work is designed to prevent
            </h2>
          </ScrollReveal>
          <ul className="space-y-5">
            {[
              { icon: Search, text: "Chasing too many opportunities without enough filtering" },
              { icon: Brain, text: "Bringing AI into the team without better habits or judgment" },
              { icon: Layers, text: "Letting parallel initiatives compete until traction drops" },
              { icon: FileX, text: "Spending months on proposals, programs or directions that were never strong enough" },
              { icon: PackageOpen, text: "Leaving valuable expertise unpackaged when it could become an academy, asset or new income channel" },
            ].map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.1}>
                <li className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="pt-2">{item.text}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why clients come */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4 text-foreground">Why clients come to TUS</h2>
            <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
              The work usually starts when teams feel the cost of doing too much
              without enough movement.
            </p>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Target, text: "Funding, AI and execution are treated as connected problems, not separate silos." },
              { icon: Zap, text: "The work is shaped around real constraints, not ideal conditions." },
              { icon: Workflow, text: "Expertise can be turned into stronger programs, academies and partner-facing assets." },
              { icon: Brain, text: "INK supports part of the work behind the scenes through research, prioritization, follow-up and workflow support." },
            ].map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-background/60 p-6 backdrop-blur-sm transition-all hover:bg-background/80 hover:shadow-md">
                  <item.icon className="mb-3 h-6 w-6 text-primary" />
                  <p className="text-foreground">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Start with a call */}
      <CTASection
        title="Start with a free 30-minute working call"
        copy="A focused first conversation to understand the live issue, the pressure around it and the best place to begin."
        bullets={[
          "Pressure-testing the bottleneck",
          "Identifying the most relevant starting point",
          "Deciding whether the next step is a program, a pilot, a narrower follow-up or a direct move into the work",
        ]}
        supportLine="If a call feels too early, send a short description of what is slowing the work down and the response will be shaped around the issue and the strongest next move."
      />

      {/* Authority bands */}
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

      {/* Method teaser */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">The Method</p>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
                  The work starts by removing what no longer fits
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                  Before adding more tools, more initiatives or more activity, the first
                  move is to look at what no longer serves the work. That is the principle
                  behind the method. It helps teams reduce drag, improve judgment and
                  make better use of effort under pressure.
                </p>
                <Link
                  to="/method"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
                >
                  See the method
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border flex items-end p-8">
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  What is learned<br />
                  <span className="text-primary">can be unlearned.</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INK teaser */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-background border border-border" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">INK</p>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
                  INK is the operating layer behind part of the work
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 opacity-80">
                  INK is the AI-supported system used inside The Unlearning School for
                  opportunity scanning, follow-up support, material preparation, content
                  repurposing and repeatable workflow tasks. It connects thinking with
                  execution and supports the parts of the work that are easiest to slow
                  down when everything depends on manual effort.
                </p>
                <Link
                  to="/ink"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  See INK
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
              Built across digital, education and business execution
            </h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              The Unlearning School is founded by Răzvan Vâlceanu, whose work brings
              together entrepreneurship, digital business, education and
              organizational programs. The approach draws from leadership in tech,
              hands-on training, ecosystem building and years spent translating
              change into something people can actually use in real teams. His work
              also extends into selected AI and startup ecosystems, including his
              role as a Lovable Ambassador, which keeps the company close to current
              builder communities, practical AI workflows and emerging product
              thinking.
            </p>
            <a
              href="https://www.linkedin.com/in/razvanvalceanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Răzvan Vâlceanu on LinkedIn →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-foreground">
              Resources, articles, podcast and practical tools
            </h2>
            <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
              The resource library brings together articles, podcast episodes, studies,
              working notes, guides, frameworks and practical tools connected to
              funding intelligence, AI at work, execution friction, academy building
              and the future of work.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {["Funding intelligence", "AI at work", "Execution friction", "Podcast, tools and working notes"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80">{t}</span>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Visit the resource library
              </Link>
              <Link
                to="/newsletter"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
              >
                Join The Unlearning Pill
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Bring the current bottleneck"
        copy="Funding direction, AI inside the team, execution drag, opportunity overload, proposal shaping or academy design. Start with the live issue, not with a generic intro call."
      />
    </PageLayout>
  );
};

export default Home;
