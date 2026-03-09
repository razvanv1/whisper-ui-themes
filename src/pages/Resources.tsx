import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  FileText, Mic, BookOpen, Wrench, ArrowRight,
  DollarSign, Bot, Zap, GraduationCap, Globe
} from "lucide-react";

const topics = [
  { icon: DollarSign, name: "Funding intelligence", color: "bg-accent-emerald/10 text-accent-emerald" },
  { icon: Bot, name: "AI at work", color: "bg-accent-blue/10 text-accent-blue" },
  { icon: Zap, name: "Execution friction", color: "bg-destructive/10 text-destructive" },
  { icon: GraduationCap, name: "Academy building", color: "bg-accent-purple/10 text-accent-purple" },
  { icon: Globe, name: "Future of work", color: "bg-foreground/10 text-foreground" },
];

const formats = [
  { icon: FileText, name: "Articles and working notes", desc: "Long-form analysis, practical frameworks and observations from the work.", color: "bg-accent-blue/10 text-accent-blue" },
  { icon: Mic, name: "Unlearning in Romanian", desc: "The podcast. Conversations, reflections and useful signals around work, learning, AI and change.", color: "bg-destructive/10 text-destructive" },
  { icon: BookOpen, name: "Studies and frameworks", desc: "Research-informed material for teams dealing with complexity.", color: "bg-accent-purple/10 text-accent-purple" },
  { icon: Wrench, name: "Guides and practical tools", desc: "Templates, checklists and reusable resources.", color: "bg-accent-emerald/10 text-accent-emerald" },
];

const entryPaths = [
  { name: "Funding intelligence", href: "/resources/funding-intelligence", icon: DollarSign },
  { name: "AI at work", href: "/resources/ai-at-work", icon: Bot },
  { name: "Execution friction", href: "/resources/execution-friction", icon: Zap },
  { name: "Podcast, tools and working notes", href: "/resources/podcast-tools", icon: Mic },
];

const Resources = () => {
  return (
    <PageLayout>
      <SEO title="Resources" description="Articles, podcast episodes, guides, frameworks and practical tools on funding, AI adoption, execution and the future of work." path="/resources" />
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-purple/20 bg-accent-purple/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-purple mb-6">
                <BookOpen className="h-3.5 w-3.5" /> Resources
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
                Useful material for teams working through AI, funding, execution and change
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                Everything published here comes from real work with real teams, not
                from content calendars or keyword lists.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/newsletter"
                  className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  Join The Unlearning Pill
                </Link>
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                  Book a call
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* Entry paths — visual cards */}
      <section className="py-16 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-xl font-bold mb-8">Start here</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {entryPaths.map((path, i) => (
              <ScrollReveal key={path.name} delay={i * 0.1}>
                <Link to={path.href}>
                  <GlowCard className="rounded-2xl border border-border bg-card p-6 text-center h-full group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mx-auto mb-4 group-hover:bg-destructive/10 transition-colors">
                      <path.icon className="h-5 w-5 text-muted-foreground group-hover:text-destructive transition-colors" />
                    </div>
                    <p className="text-sm font-semibold group-hover:text-destructive transition-colors">{path.name}</p>
                  </GlowCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* Browse by topic — visual chips */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">Browse by topic</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {topics.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5 transition-all hover:shadow-md hover:border-foreground/20">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.color.split(' ')[0]}`}>
                    <t.icon className={`h-5 w-5 ${t.color.split(' ')[1]}`} />
                  </div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* Featured formats — icon cards */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">Featured formats</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {formats.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.1}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full group">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${f.color.split(' ')[0]} mb-5 group-hover:scale-110 transition-transform`}>
                    <f.icon className={`h-7 w-7 ${f.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter block — visual */}
      <section className="py-14 md:py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-10 md:p-14">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4">The Unlearning Pill</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Selected updates on funding intelligence, AI at work, execution
                friction, academy building and the future of work. Only material
                shaped around the problems teams actually face.
              </p>
              <Link to="/newsletter"
                className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                Join The Unlearning Pill
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why these exist — accent block */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-lg leading-relaxed md:text-xl italic text-muted-foreground">
              "The best work happens when teams can think clearly about the
              problems they face. These resources are designed to support that
              thinking: not to replace it, not to oversimplify it, but to make the
              patterns more visible and the decisions more informed."
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Need more than content?"
        copy="When reading is not enough and the issue needs direct attention, start with a working conversation."
      />
    </PageLayout>
  );
};

export default Resources;