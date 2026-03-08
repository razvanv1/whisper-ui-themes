import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal, { StaggerReveal } from "@/components/shared/ScrollReveal";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import GlowCard from "@/components/shared/GlowCard";
import ProgramCard from "@/components/shared/ProgramCard";
import {
  Target, Zap, TrendingDown, FileX, PackageOpen, Search, Brain,
  Layers, Workflow, ArrowRight, Bot, Sparkles
} from "lucide-react";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

  return (
    <PageLayout>
      {/* Hero — video + slogan only */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden -mt-16 md:-mt-20">
        <motion.video
          style={{ y: videoY }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
        >
          <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
        </motion.video>
        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black" />
        <motion.div style={{ y: textY }} className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <ScrollReveal>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl text-white">
              What is learned<br />can be unlearned.
            </h1>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                  <Sparkles className="h-3.5 w-3.5" /> The Unlearning School
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg leading-relaxed md:text-xl mb-2 text-foreground font-medium">
                  When everything feels important, choosing well matters more than doing more.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                  The Unlearning School works with teams that are juggling too many ideas,
                  opportunities and demands at once. Instead of adding another layer of
                  activity, the work focuses on better choices, stronger programs and a
                  more useful way to bring AI into everyday work.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                    className="ripple-btn inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                    Book a call
                  </a>
                  <Link to="/programs"
                    className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-foreground hover:bg-card transition-colors">
                    Explore programs
                  </Link>
                </div>
                <p className="text-sm mt-6 text-muted-foreground/70">
                  Use the first call to pressure-test the live issue, choose the best
                  starting point and avoid burning more time on the wrong next move.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5", label: "Programs", icon: Layers },
                  { num: "AI", label: "Powered by INK", icon: Bot },
                  { num: "EU", label: "Connected networks", icon: Target },
                  { num: "1:1", label: "Working calls", icon: Zap },
                ].map(stat => (
                  <GlowCard key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <stat.icon className="h-5 w-5 mx-auto mb-2 text-destructive" />
                    <p className="text-2xl font-black text-foreground">{stat.num}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
                  </GlowCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Too much motion — visual treatment */}
      <section className="py-28 md:py-36 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-gradient-subtle">
                  Too much motion can look like progress
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                  Most teams are not short on effort. They are overloaded with moving
                  priorities, weak-fit initiatives, repeated work and decisions that stay
                  unresolved for too long.
                </p>
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
                  Book a call
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
                <ul className="space-y-4">
                  {["Moving priorities", "Weak-fit initiatives", "Repeated work", "Unresolved decisions", "Momentum drops"].map(t => (
                    <li key={t} className="flex items-center gap-3 text-foreground/80">
                      <TrendingDown className="h-4 w-4 text-destructive shrink-0" />
                      <span className="font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Where most work starts */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-3 text-gradient">Where most work starts</h2>
            <p className="text-lg leading-relaxed md:text-xl mb-12 text-muted-foreground">
              Most teams do not need everything at once. They need the right starting point.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {[
              {
                title: "Funding intelligence and opportunity readiness",
                description: "For teams that need better funding routes, stronger prioritization and less wasted time across grants, vendor credits, partnerships and new opportunity paths.",
                bestFit: "NGOs, universities, startups, accelerators.",
                link: "/programs/funding-intelligence",
              },
              {
                title: "AI adoption for teams",
                description: "For organizations that want AI to become useful inside real workflows, not just another layer of confusion.",
                bestFit: "Companies, NGOs, educators and teams already experimenting with AI.",
                link: "/programs/ai-adoption",
              },
              {
                title: "Execution readiness",
                description: "For teams dealing with slow decisions, delivery friction, weak traction or too many initiatives moving at once.",
                bestFit: "Delivery teams and growing teams under pressure.",
                link: "/programs/execution-readiness",
              },
            ].map((p) => (
              <GlowCard key={p.link} className="h-full rounded-2xl border border-border bg-card p-8">
                <ProgramCard {...p} />
              </GlowCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Not every team — centered accent block */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-secondary p-10">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4 text-foreground">
                Not every team starts in the same place
              </h2>
              <p className="text-muted-foreground">
                For some, the starting point is funding and opportunity selection. For
                others, it is AI inside the team, delivery friction or the need to turn
                expertise into a stronger program. The starting point changes. The logic stays consistent.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What this work prevents — icon grid */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10 text-gradient-subtle">
              What this work is designed to prevent
            </h2>
          </ScrollReveal>
          <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {[
              { icon: Search, text: "Chasing too many opportunities without enough filtering" },
              { icon: Brain, text: "Bringing AI into the team without better habits or judgment" },
              { icon: Layers, text: "Letting parallel initiatives compete until traction drops" },
              { icon: FileX, text: "Spending months on proposals that were never strong enough" },
              { icon: PackageOpen, text: "Leaving valuable expertise unpackaged" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-md group h-full interactive">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-5 w-5 text-destructive group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <span className="text-foreground/90 text-sm pt-1">{item.text}</span>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Why clients come — cards grid */}
      <section className="py-28 md:py-36 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4 text-gradient">Why clients come to TUS</h2>
            <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
              The work usually starts when teams feel the cost of doing too much
              without enough movement.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {[
              { icon: Target, title: "Connected problems", text: "Funding, AI and execution are treated as connected problems, not separate silos." },
              { icon: Zap, title: "Real constraints", text: "The work is shaped around real constraints, not ideal conditions." },
              { icon: Workflow, title: "Structured expertise", text: "Expertise can be turned into stronger programs, academies and partner-facing assets." },
              { icon: Brain, title: "INK support", text: "INK supports part of the work behind the scenes through research, prioritization and workflow support." },
            ].map((item) => (
              <GlowCard key={item.title} className="rounded-2xl border border-border bg-background p-6 h-full group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary mb-4 group-hover:bg-destructive/10 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-5 w-5 text-foreground group-hover:text-destructive group-hover:-rotate-6 transition-all duration-300" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.text}</p>
              </GlowCard>
            ))}
          </StaggerReveal>
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
        supportLine="If a call feels too early, send a short description of what is slowing the work down."
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
        copy="The work is also shaped through selected startup and builder ecosystems."
        variant="startup"
        items={[
          { name: "Microsoft for Startups", url: "https://startups.microsoft.com/" },
          { name: "Lovable Ambassador", url: "https://lovable.dev/" },
          { name: "DEEP Ecosystems", url: "https://www.deep-ecosystems.com/" },
        ]}
        note="Selected startup, builder and technology ecosystem connections relevant to our work."
      />

      {/* Method teaser */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              The Method
            </span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
              The work starts by removing what no longer fits
            </h2>
            <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
              Before adding more tools, more initiatives or more activity, the first
              move is to look at what no longer serves the work.
            </p>
            <Link to="/method"
              className="inline-flex items-center gap-2 justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
              See the method <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* INK teaser — visual */}
      <section className="py-28 md:py-36 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                {["Scanning", "Filtering", "Follow-up", "Materials"].map((t, i) => (
                  <div key={t} className="rounded-2xl border border-border bg-background p-6 text-center">
                    <Bot className="h-5 w-5 mx-auto mb-2 text-destructive" />
                    <p className="text-sm font-semibold">{t}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                  <Bot className="h-3.5 w-3.5" /> INK
                </span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
                  INK is the operating layer behind part of the work
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                  INK is the AI-supported system used inside The Unlearning School for
                  opportunity scanning, follow-up support, material preparation and
                  repeatable workflow tasks.
                </p>
                <Link to="/ink"
                  className="inline-flex items-center gap-2 justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  See INK <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Resources teaser */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-foreground">
                  Resources, articles, podcast and practical tools
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                  The resource library brings together articles, podcast episodes, studies,
                  working notes, guides, frameworks and practical tools.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link to="/resources"
                    className="inline-flex items-center gap-2 justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
                    Visit the resource library <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/newsletter"
                    className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                    Join The Unlearning Pill
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Funding intelligence", "AI at work", "Execution friction", "Podcast & tools"].map(t => (
                  <div key={t} className="rounded-xl border border-border bg-card p-5 text-center text-sm font-medium hover:border-destructive hover:shadow-sm transition-all">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Bring the current bottleneck"
        copy="Funding direction, AI inside the team, execution drag, opportunity overload, proposal shaping or academy design. Start with the live issue."
      />
    </PageLayout>
  );
};

export default Home;