import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/shared/CTASection";
import AuthorityBand from "@/components/shared/AuthorityBand";
import GlowCard from "@/components/shared/GlowCard";
import ProgramCard from "@/components/shared/ProgramCard";
import { Target, Zap, TrendingDown, FileX, PackageOpen, Search, Brain, Layers, Workflow } from "lucide-react";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Video */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
        </video>

        <Navbar />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
        >
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
              <span className="block">WHAT IS LEARNED</span>
              <span className="block">CAN BE</span>
              <span className="block text-red-500">UNLEARNED</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl">
              When everything feels important, choosing well matters more than doing more.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Too much motion */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Too much motion can look like progress
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Most teams are not short on effort. They are overloaded with moving
                priorities, weak-fit initiatives, repeated work and decisions that stay
                unresolved for too long. That is where time gets burned.
              </p>
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
              >
                Book a free 30-minute working call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where most work starts */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-3">Where most work starts</h2>
            <p className="text-lg mb-12 text-muted-foreground">
              Most teams do not need everything at once. They need the right starting point.
            </p>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Funding intelligence and opportunity readiness",
                description: "For teams that need better funding routes, stronger prioritization and less wasted time across grants, vendor credits, partnerships and new opportunity paths.",
                bestFit: "NGOs, universities, startups, accelerators and teams exploring new growth or funding routes.",
                link: "/programs",
              },
              {
                title: "AI adoption for teams",
                description: "For organizations that want AI to become useful inside real workflows, not just another layer of confusion, experimentation or uneven habits across the team.",
                bestFit: "Companies, NGOs, educators and teams already experimenting with AI but lacking consistency.",
                link: "/programs",
              },
              {
                title: "Execution readiness",
                description: "For teams dealing with slow decisions, delivery friction, weak traction or too many initiatives moving at once without enough progress.",
                bestFit: "Delivery teams, implementation-heavy organizations and growing teams under pressure.",
                link: "/programs",
              },
            ].map((p) => (
              <ScrollReveal key={p.title} delay={0.15}>
                <GlowCard className="h-full rounded-2xl border border-border bg-card p-8">
                  <ProgramCard {...p} />
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What this work prevents */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-8">
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
                <li className="flex items-start gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-red-500/30 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                    <item.icon className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="pt-2">{item.text}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why clients come */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why clients come to TUS</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              The work usually starts when teams feel the cost of doing too much without enough movement.
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
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md">
                  <item.icon className="mb-3 h-6 w-6 text-red-500" />
                  <p>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
        items={[
          { name: "Microsoft for Startups", url: "https://startups.microsoft.com/" },
          { name: "Lovable Ambassador", url: "https://lovable.dev/" },
          { name: "DEEP Ecosystems", url: "https://www.deep-ecosystems.com/" },
        ]}
        note="Selected startup, builder and technology ecosystem connections relevant to our work."
      />

      {/* Method teaser */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">The Method</p>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  The work starts by removing what no longer fits
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Before adding more tools, more initiatives or more activity, the first
                  move is to look at what no longer serves the work.
                </p>
                <Link
                  to="/method"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card gentle-animation"
                >
                  See the method
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card border border-border flex items-end p-8">
                <p className="font-bagel text-2xl md:text-3xl">
                  What is learned<br />
                  <span className="text-red-500">can be unlearned.</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INK teaser */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-background border border-border" />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">INK</p>
                <h2 className="text-3xl md:text-4xl font-black mb-6">
                  INK is the operating layer behind part of the work
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  INK is the AI-supported system used inside The Unlearning School for
                  opportunity scanning, follow-up support, material preparation, content
                  repurposing and repeatable workflow tasks.
                </p>
                <Link
                  to="/ink"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
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
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Built across digital, education and business execution
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Unlearning School is founded by Răzvan Vâlceanu, whose work brings
              together entrepreneurship, digital business, education and
              organizational programs. The approach draws from leadership in tech,
              hands-on training, ecosystem building and years spent translating
              change into something people can actually use in real teams.
            </p>
            <a
              href="https://www.linkedin.com/in/razvanvalceanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline font-medium"
            >
              Răzvan Vâlceanu on LinkedIn →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Resources, articles, podcast and practical tools
            </h2>
            <p className="text-lg mb-8 text-muted-foreground">
              The resource library brings together articles, podcast episodes, studies,
              working notes, guides, frameworks and practical tools.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              {["Funding intelligence", "AI at work", "Execution friction", "Podcast, tools and working notes"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">{t}</span>
              ))}
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/resources"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
              >
                Visit the resource library
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Bring the current bottleneck"
        copy="Funding direction, AI inside the team, execution drag, opportunity overload, proposal shaping or academy design. Start with the live issue."
      />

      <Footer />
    </div>
  );
};

export default Home;
