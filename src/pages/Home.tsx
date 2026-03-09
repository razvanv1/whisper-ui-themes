import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal, { StaggerReveal } from "@/components/shared/ScrollReveal";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import GlowCard from "@/components/shared/GlowCard";
import ProgramCard from "@/components/shared/ProgramCard";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  Target, Zap, TrendingDown, FileX, PackageOpen, Search, Brain,
  Layers, Workflow, ArrowRight, Sparkles
} from "lucide-react";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const Home = () => {
  const heroRef = useRef(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const CUT_SECONDS = 10;
    let cutPoint = 45;

    const updateCutPoint = () => {
      const d = video.duration;
      if (Number.isFinite(d) && d > CUT_SECONDS + 1) cutPoint = d - CUT_SECONDS;
    };

    let rafId = 0;
    const tick = () => {
      if (video.currentTime >= cutPoint) {
        video.currentTime = 0.05;
        video.play().catch(() => {});
      }
      rafId = requestAnimationFrame(tick);
    };

    const startVideo = () => {
      video.preload = "auto";
      video.load();
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", updateCutPoint);
    video.addEventListener("durationchange", updateCutPoint);
    updateCutPoint();
    rafId = requestAnimationFrame(tick);

    if (document.readyState === "complete") {
      startVideo();
    } else {
      window.addEventListener("load", startVideo, { once: true });
    }

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", updateCutPoint);
      video.removeEventListener("durationchange", updateCutPoint);
      window.removeEventListener("load", startVideo);
    };
  }, []);

  return (
    <PageLayout>
      <SEO
        title="The Unlearning School - Programs for funding, AI adoption & execution"
        description="The Unlearning School builds programs, systems and useful ways of working for teams dealing with funding pressure, AI adoption, execution drag and the future of work."
        path="/"
      />

      {/* Hero — video + slogan only */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden -mt-16 md:-mt-20">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="none"
        >
          <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl text-white animate-fade-in">
            What is learned<br />can be unlearned.
          </h1>
        </div>
      </section>

      {/* 1. Intro */}
      <section className="py-16 md:py-24 bg-background relative">
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
                  opportunities, and demands at once. Instead of adding another layer of
                  activity, the work focuses on better choices, stronger programs, and a
                  more useful way to bring AI into everyday work, while building the
                  adaptability and resilience teams need as work keeps changing.
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
                  starting point, and avoid burning more time on the wrong next move.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5", label: "Programs", icon: Layers, tip: "Funding, AI, Execution, Proposals, Academy" },
                  { num: "AI", label: "Powered by INK", icon: Sparkles, tip: "AI-supported research, scanning & workflow" },
                  { num: "EU", label: "Connected networks", icon: Target, tip: "European Commission, EEN, Pact for Skills" },
                  { num: "1:1", label: "Working calls", icon: Zap, tip: "Free 30-min focused working sessions" },
                ].map(stat => (
                  <GlowCard key={stat.label} className="rounded-2xl border border-border bg-card p-6 text-center group relative">
                    <stat.icon className="h-5 w-5 mx-auto mb-2 text-destructive" />
                    <p className="text-2xl font-black text-foreground"><AnimatedCounter value={stat.num} /></p>
                    <p className="text-xs text-muted-foreground font-medium mt-1">{stat.label}</p>
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none scale-95 group-hover:scale-100 shadow-lg">
                      {stat.tip}
                    </span>
                  </GlowCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/2" />
      </section>

      {/* 2. Tension block */}
      <section className="py-16 md:py-24 bg-card section-divider relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-gradient-subtle">
              Too much motion can look like progress
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl mb-6 text-muted-foreground">
              Most teams are not short on effort. They are overloaded with moving
              priorities, weak-fit initiatives, repeated work, and decisions that stay
              unresolved for too long.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl mb-6 text-muted-foreground">
              That is where time gets burned. Momentum drops. Good opportunities get missed. AI turns into noise instead of support. New work keeps entering the system while old work never really leaves.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg leading-relaxed md:text-xl mb-8 font-semibold text-foreground">
              More effort does not fix that. Better selection does.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
              Book a call
            </a>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* 3. Entry points */}
      <section className="py-16 md:py-24 bg-background section-divider-dot relative">
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
                description: "For teams that need better funding routes, stronger prioritization, and less wasted time across grants, vendor credits, partnerships, and new opportunity paths.",
                bestFit: "NGOs, universities, startups, accelerators, and teams exploring new growth or funding routes.",
                link: "/programs/funding-intelligence",
              },
              {
                title: "AI adoption for teams",
                description: "For organizations that want AI to become useful inside real workflows, not just another layer of confusion, experimentation, or uneven habits across the team.",
                bestFit: "Companies, NGOs, educators, and teams already experimenting with AI but lacking consistency.",
                link: "/programs/ai-adoption",
              },
              {
                title: "Execution readiness",
                description: "For teams dealing with slow decisions, delivery friction, weak traction, or too many initiatives moving at once without enough progress.",
                bestFit: "Delivery teams, implementation-heavy organizations, and growing teams under pressure.",
                link: "/programs/execution-readiness",
              },
            ].map((p) => (
              <GlowCard key={p.link} className="h-full rounded-2xl border border-border bg-card p-8">
                <ProgramCard {...p} />
              </GlowCard>
            ))}
          </StaggerReveal>
        </div>
        <ConnectingArrow variant={3} className="left-1/4" />
      </section>

      {/* 4. Bridge block */}
      <section className="py-12 md:py-16 bg-card section-divider relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-secondary p-10">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4 text-foreground">
                Not every team starts in the same place
              </h2>
              <p className="text-muted-foreground">
                For some, the starting point is funding and opportunity selection. For
                others, it is AI inside the team, delivery friction, or the need to turn
                expertise into a stronger program, academy, or partner-facing offer.
              </p>
              <p className="text-muted-foreground mt-4 font-medium">
                The starting point changes. The logic behind the work stays consistent.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/2" />
      </section>

      {/* 5. Cost of inaction */}
      <section className="py-16 md:py-24 bg-background section-divider-dot relative">
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
              { icon: FileX, text: "Spending months on proposals, programs, or directions that were never strong enough" },
              { icon: PackageOpen, text: "Leaving valuable expertise unpackaged when it could become an academy, asset, or new income channel" },
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
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* 6. Why TUS */}
      <section className="py-16 md:py-24 bg-card section-divider relative">
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
              { icon: Target, title: "Connected problems", text: "Funding, AI, and execution are treated as connected problems, not separate silos." },
              { icon: Zap, title: "Real constraints", text: "The work is shaped around real constraints, not ideal conditions." },
              { icon: Workflow, title: "Structured expertise", text: "Expertise can be turned into stronger programs, academies, and partner-facing assets." },
              { icon: Brain, title: "INK support", text: "INK supports part of the work behind the scenes through research, prioritization, follow-up, and workflow support." },
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

      {/* 7. Free call CTA */}
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

      {/* 8-9. Authority bands */}
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
        note="Selected memberships, networks, and initiatives relevant to our work."
      />
      <AuthorityBand
        title="Connected to startup and technology ecosystems"
        copy="The work is also shaped through selected startup and builder ecosystems that keep the company close to practical AI workflows, current product thinking, and fast-moving technology communities."
        variant="startup"
        items={[
          { name: "Microsoft for Startups", url: "https://startups.microsoft.com/" },
          { name: "Lovable Ambassador", url: "https://lovable.dev/" },
          { name: "DEEP Ecosystems", url: "https://www.deep-ecosystems.com/" },
        ]}
        note="Selected startup, builder, and technology ecosystem connections relevant to our work."
      />

      {/* 10. Method teaser */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              The Method
            </span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
              The work starts by removing what no longer fits
            </h2>
            <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
              Before adding more tools, more initiatives, or more activity, the first
              move is to look at what no longer serves the work. That is the principle behind
              the method. It helps teams reduce drag, improve judgment, and make better use
              of effort under pressure.
            </p>
            <Link to="/method"
              className="inline-flex items-center gap-2 justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
              See the method <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* 11. INK teaser */}
      <section className="py-16 md:py-24 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-4">
                {["Scanning", "Filtering", "Follow-up", "Materials"].map((t) => (
                  <div key={t} className="rounded-2xl border border-border bg-background p-6 text-center">
                    <Sparkles className="h-5 w-5 mx-auto mb-2 text-[hsl(210,60%,50%)]" />
                    <p className="text-sm font-semibold">{t}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(210,60%,50%)]/20 bg-[hsl(210,60%,50%)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(210,60%,50%)] mb-6">
                  <Sparkles className="h-3.5 w-3.5" /> INK
                </span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">
                  INK is the operating layer behind part of the work
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-8 text-muted-foreground">
                  INK is the AI-supported system used inside The Unlearning School for
                  opportunity scanning, follow-up support, material preparation, content
                  repurposing, and repeatable workflow tasks. It connects thinking with
                  execution and supports the parts of the work that are easiest to slow
                  down when everything depends on manual effort.
                </p>
                <Link to="/ink"
                  className="inline-flex items-center gap-2 justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  See INK <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* 12. Founder block */}
      <section className="py-16 md:py-24 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-5">
            <ScrollReveal direction="left" className="md:col-span-2">
              <div className="relative max-w-[260px]">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
                  <img src={razvanPhoto} alt="Răzvan Vâlceanu, fondator The Unlearning School" loading="lazy"
                    className="w-full aspect-[3/4] object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-destructive px-5 py-3 shadow-lg">
                  <p className="text-sm font-bold text-white">Founder</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="md:col-span-3">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Built across digital, education, and business execution</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Unlearning School is founded by Răzvan Vâlceanu, whose work brings together entrepreneurship, digital business, education, and organizational programs. The approach draws from leadership in tech, hands-on training, ecosystem building, and years spent translating change into something people can actually use in real teams.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                His work also extends into selected AI and startup ecosystems, including his role as a Lovable Ambassador, which keeps the company close to current builder communities, practical AI workflows, and emerging product thinking.
              </p>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-5 py-3 text-destructive font-semibold transition-all hover:bg-destructive/20">
                Răzvan Vâlceanu on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={4} className="left-1/4" />
      </section>

      {/* 13. Resources and newsletter */}
      <section className="py-16 md:py-24 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6 text-foreground">
                  Resources, articles, podcast, and practical tools
                </h2>
                <p className="text-lg leading-relaxed md:text-xl mb-4 text-muted-foreground">
                  The resource library brings together articles, podcast episodes, studies,
                  working notes, guides, frameworks, and practical tools connected to funding
                  intelligence, AI at work, execution friction, academy building, and the future of work.
                </p>
                <p className="text-muted-foreground mb-4">
                  Including <span className="font-semibold text-foreground">The Unlearning Pill</span>, the newsletter for selected updates on funding intelligence, AI at work, execution friction, academy building, and the future of work.
                </p>
                <p className="text-muted-foreground mb-8">
                  Including <span className="font-semibold text-foreground">Unlearning in Romanian</span>, the podcast for conversations, reflections, and useful signals around work, learning, AI, and change.
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
                {["Funding intelligence", "AI at work", "Execution friction", "Podcast, tools, and working notes"].map(t => (
                  <div key={t} className="rounded-xl border border-border bg-card p-5 text-center text-sm font-medium hover:border-destructive hover:shadow-sm transition-all">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* 14. Final CTA */}
      <CTASection
        title="We are here to help."
        copy="Tell us about the challenge slowing down your team, whether it's execution drag, AI adoption, or funding strategy. We'll start with the live issue and map out the strongest next move."
      />
    </PageLayout>
  );
};

export default Home;
