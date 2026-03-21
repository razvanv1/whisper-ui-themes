import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import {
  FileText, Mic, BookOpen, Wrench, ArrowRight, CheckCircle,
  DollarSign, Zap, GraduationCap, Globe, Sparkles, Search,
  Brain, Layers, Star, ClipboardList
} from "lucide-react";

const entryPaths = [
  { condition: "If funding is already creating noise", desc: "Read the pieces on funding intelligence, opportunity selection, vendor credits, public and private routes, and diversification of funding sources.", icon: DollarSign },
  { condition: "If AI is already entering the work", desc: "Start with the pieces on AI at work, role-based use, habits, judgment, and what responsible adoption looks like inside real teams.", icon: Sparkles },
  { condition: "If the team is busy but traction is weak", desc: "Go to execution friction, where the focus is on weak-fit initiatives, adoption drag, decision bottlenecks, and work that keeps moving without enough progress.", icon: Zap },
  { condition: "If expertise could become something bigger", desc: "Use the academy and learning systems section for academy design, learning products, partner academies, customer education, and educational offers that can also support visibility and income.", icon: GraduationCap },
];

const contentTypes = [
  { icon: FileText, name: "Articles and analysis", desc: "Sharp pieces on funding, AI, execution, and the future of work, written for people who need usable thinking rather than recycled summaries.", color: "bg-accent-blue/10 text-accent-blue" },
  { icon: Mic, name: "Podcast episodes", desc: "Conversations and solo episodes that take messy themes and turn them into something easier to challenge, use, and apply.", color: "bg-destructive/10 text-destructive" },
  { icon: BookOpen, name: "Guides and working notes", desc: "Practical material for teams that need a starting point, stronger framing, or a better way to move from idea to action.", color: "bg-accent-emerald/10 text-accent-emerald" },
  { icon: Search, name: "Studies, case notes, and references", desc: "Selected research, examples, observations, and supporting material for situations where surface-level content is not enough.", color: "bg-accent-purple/10 text-accent-purple" },
  { icon: Wrench, name: "Tools, templates, and checklists", desc: "Simple assets that can be used inside actual work, not only discussed.", color: "bg-foreground/10 text-foreground" },
  { icon: Layers, name: "Frameworks and methods", desc: "Selected pieces that show how The Unlearning School thinks and works behind the scenes.", color: "bg-destructive/10 text-destructive" },
];

const topics = [
  {icon: Sparkles, name: "INK Agentic Platform", desc: "Scan 944+ active EU calls and manage your funding execution path. Free 14-day trial.", color: "bg-destructive/10 text-destructive" },
  { icon: DollarSign, name: "Funding intelligence", desc: "Grant routes, cascade funding, vendor credits, MDF, public and private funding paths, opportunity filtering, readiness, and diversification of funding sources.", color: "bg-accent-emerald/10 text-accent-emerald" },
  { icon: Sparkles, name: "AI at work", desc: "AI adoption in teams, role-based use, habits, responsible use, judgment, workflows, and educational or mission-driven use cases.", color: "bg-accent-blue/10 text-accent-blue" },
  { icon: Zap, name: "Execution friction", desc: "Why teams stall, why traction drops, where adoption drags, how priorities compete, and where too much motion hides too little progress.", color: "bg-destructive/10 text-destructive" },
  { icon: Globe, name: "Future of work", desc: "Adaptability, resilience, employability, digital skills, entrepreneurship, changing work patterns, and what remains relevant as work keeps shifting.", color: "bg-foreground/10 text-foreground" },
  { icon: GraduationCap, name: "Academies and learning systems", desc: "Academy design, educational products, partner academies, customer academies, learning as a marketing and revenue channel, and content repurposing for learning programs.", color: "bg-accent-purple/10 text-accent-purple" },
  { icon: Wrench, name: "Tools and frameworks", desc: "Practical frameworks, checklists, templates, short diagnostic tools, working models, and planning assets that can be used inside real teams.", color: "bg-foreground/10 text-foreground" },
  { icon: Mic, name: "Podcast and insights", desc: "Unlearning in Romanian, reflections, commentary, cross-topic conversations, and pieces that connect the dots between funding, AI, execution, and change.", color: "bg-destructive/10 text-destructive" },
];

const featuredFormats = [
  { icon: Star, name: "Featured article", desc: "A sharper take on one live issue, written for teams that need useful thinking, not content for the sake of content." },
  { icon: Mic, name: "Latest podcast episode", desc: "A recent conversation or solo episode that turns a messy topic into something easier to use in real work." },
  { icon: BookOpen, name: "Key guide", desc: "A practical guide built for teams that need structure, not inspiration." },
  { icon: ClipboardList, name: "Featured framework or tool", desc: "A working model, checklist, or template that can be used inside actual projects, programs, or decisions." },
];

const newsletterBullets = [
  "Selected articles and notes",
  "Practical insights from the podcast",
  "Funding and opportunity observations",
  "Working frameworks and useful tools",
  "Updates worth reading, not inbox filler",
];

const Resources = () => {
  return (
    <PageLayout>
      <SEO 
        title="Resources | Guides, Frameworks & Practical Tools for High-Performance Teams" 
        description="Access articles, podcast episodes, guides, and frameworks for teams navigating AI adoption, funding intelligence, and execution friction. Useful thinking for teams that need to unlearn and move fast." 
        path="/resources" 
      />

      {/* 1. Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-x-clip">
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
                Useful material for teams working through AI, funding, execution, and change
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-6 text-muted-foreground">
                Articles, podcast episodes, studies, working notes, frameworks, and practical tools for teams dealing with opportunity overload, uneven AI adoption, execution drag, academy building, and the future of work.
              </p>
              <p className="text-sm text-muted-foreground/80 mb-10">
                Use the newsletter if the issue matters but a call feels too early. Use the call if the issue is already active inside the team.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/newsletter"
                  className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  Join The Unlearning Pill →
                </Link>
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                  Book a call →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-3/4" />
      </section>

      {/* 2. Entry block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">Start here</h2>
          </ScrollReveal>
          <div className="space-y-4">
            {entryPaths.map((s, i) => (
              <ScrollReveal key={s.condition} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-lg group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <s.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground mb-1">{s.condition}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
      </section>

      {/* 3. Content types block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">What you will find here</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contentTypes.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full group">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${f.color.split(' ')[0]} mb-5 group-hover:scale-110 transition-transform`}>
                    <f.icon className={`h-7 w-7 ${f.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{f.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={3} className="left-1/2" />
      </section>

      {/* 4. Topic block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">Browse by topic</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <GlowCard className="rounded-2xl border border-border bg-card p-8 h-full group">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${t.color.split(' ')[0]} mb-4 group-hover:scale-110 transition-transform`}>
                    <t.icon className={`h-6 w-6 ${t.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-destructive transition-colors">{t.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={4} className="left-3/4" />
      </section>

      {/* 5. Featured formats block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">Featured formats</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredFormats.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.1}>
                <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 mb-5 group-hover:bg-destructive/20 transition-colors">
                    <f.icon className="h-7 w-7 text-destructive" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 6. Newsletter block */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-10 md:p-14">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4 text-center">The Unlearning Pill</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-center">
                Selected updates on funding intelligence, AI at work, execution
                friction, academy building, and the future of work. Useful when you want signal, not more noise.
              </p>
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">What you get</h3>
                <ul className="space-y-2">
                  {newsletterBullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle className="h-4 w-4 shrink-0 text-accent-emerald" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <Link to="/newsletter"
                  className="inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  Join The Unlearning Pill →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/2" />
      </section>

      {/* 8. INK CTA */}
      <section className="py-20 bg-slate-50 border-y border-border relative overflow-x-clip">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-amber-200">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" /> Limited Time Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-slate-900 leading-tight">Stop scanning. <br/>Start matching for free.</h2>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">The INK platform is our most advanced resource. Activate your 14-day trial now while it's still available for free for new teams.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/ink#ink-final-cta" className="px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-2xl hover:bg-blue-500 transition-all btn-animate shadow-blue-500/20">
                Start 14-Day Free Trial →
              </Link>
              <div className="text-blue-600 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                <span className="text-lg font-bold">Try full access now</span>
                <span className="text-sm text-slate-400 italic">Limited release · Offer expires soon</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Why this page exists */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Why these resources exist</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              Some resources support funding and opportunity selection. Others support AI adoption, stronger execution, academy building, or program design. Some are useful on their own. Others are there to extend the conversation after a program, workshop, podcast episode, or working call.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg leading-relaxed md:text-xl font-semibold text-foreground">
              The point is not to publish more. The point is to make useful material easier to find, easier to use, and easier to connect back to work that already matters.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Conversion CTA */}
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

export default Resources;
