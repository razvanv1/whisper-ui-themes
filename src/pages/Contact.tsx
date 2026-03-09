import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import ContactForm from "@/components/shared/ContactForm";
import {
  Search, Brain, TrendingDown, FileX, PackageOpen, Workflow,
  Mail, Linkedin, MessageCircle, Calendar, ArrowRight,
  CheckCircle, XCircle, Send
} from "lucide-react";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const painPoints = [
  { icon: Search, text: "Too many funding or growth routes with weak prioritization" },
  { icon: Brain, text: "AI already entering the team without strong habits or good judgment" },
  { icon: TrendingDown, text: "Delivery slowing down under too many moving priorities" },
  { icon: FileX, text: "A proposal, concept note, or partner-facing offer that needs sharper structure" },
  { icon: PackageOpen, text: "Expertise that could become an academy, learning product, or new channel" },
  { icon: Workflow, text: "Repeated work that may need better workflow support or an INK-related pilot" },
];

const callIsFor = [
  "Pressure-testing the bottleneck",
  "Identifying the most relevant starting point",
  "Deciding whether the next step is a program, a pilot, a narrower follow-up, or a direct move into the work",
];

const callIsNot = [
  "Not a generic intro call",
  "Not a sales script",
  "Not a long discovery meeting",
  "Not a vague conversation without a real next step",
];

const Contact = () => {
  return (
    <PageLayout>
      <SEO title="Contact" description="Book a free 30-minute working call or send a message about what is slowing the work down. Start with the live issue." path="/contact" />

      {/* 1. Hero */}
      <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive mb-6">
                <MessageCircle className="h-3.5 w-3.5" /> Contact
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
                Start with the issue that is already slowing the work down
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg leading-relaxed md:text-xl mb-6 text-muted-foreground">
                Funding direction, AI inside the team, execution drag, proposal
                shaping, academy design, or repeated workflow pressure. The first
                conversation works best when it starts from something real, not from a generic introduction.
              </p>
              <p className="text-sm text-muted-foreground/80 mb-10">
                Use the call if the issue is already active. Use the message if you want to describe the situation first and get a response shaped around it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                  <Calendar className="h-4 w-4" /> Book a call
                </a>
                <Link to="/send-issue"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                  <Send className="h-4 w-4" /> Send a message
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Recognition block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">What usually brings people here</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-destructive/30 hover:shadow-md group h-full">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <span className="text-foreground/90 text-sm leading-relaxed pt-1">{item.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <ConnectingArrow variant={1} className="left-1/4" />
      </section>

      {/* 3. Free call block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">Start with a free 30-minute working call</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-10">
              A focused first conversation to pressure-test the live issue, understand what is creating drag, and decide the best place to begin.
            </p>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-2xl border border-accent-emerald/20 bg-accent-emerald/5 p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-accent-emerald">
                  <CheckCircle className="h-5 w-5" /> What this call is for
                </h3>
                <ul className="space-y-3">
                  {callIsFor.map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-accent-emerald" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-destructive">
                  <XCircle className="h-5 w-5" /> What this call is not
                </h3>
                <ul className="space-y-3">
                  {callIsNot.map(t => (
                    <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-destructive/60" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                <Calendar className="h-4 w-4" /> Book a free 30-minute working call
              </a>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/2" />
      </section>

      {/* 4. Send the live issue block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">If a call feels too early, send the live issue</h2>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-10">
              If the issue is real but you are not ready for a conversation yet, send a short description of what is slowing the work down. The response will be shaped around the issue, the likely fit, and the strongest next move.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactForm redirectTo="/contact" />
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={3} className="left-3/4" />
      </section>

      {/* 5. What happens next */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What happens next</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
              The first step is either a working call or a direct response to the issue you send.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground mb-4">From there, the next move may be:</p>
            <ul className="space-y-2 mb-6">
              {["The right program", "A pilot", "A narrower follow-up", "A direct move into the work if the fit is already clear"].map(t => (
                <li key={t} className="flex items-center gap-3 text-sm text-foreground/80">
                  <ArrowRight className="h-4 w-4 shrink-0 text-destructive" />
                  {t}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-muted-foreground">
              If the case still needs shaping, the response will help narrow the issue before more time gets burned in the wrong direction.
            </p>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={4} className="left-1/4" />
      </section>

      {/* 6. Newsletter block */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-secondary p-10">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4">If you are not ready yet, stay close to the work</h2>
              <p className="text-muted-foreground mb-8">
                The Unlearning Pill brings selected updates on funding intelligence, AI at work, execution friction, academy building, and the future of work.
              </p>
              <Link to="/newsletter"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
                Join the newsletter
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={1} className="left-1/2" />
      </section>

      {/* 7. Direct contact block */}
      <section className="py-14 md:py-20 bg-card relative">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">Or reach out directly</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <ScrollReveal>
              <a href="mailto:hello@unlearning.ro" className="flex items-center gap-4 rounded-2xl border border-border bg-background p-6 hover:border-destructive/30 hover:shadow-md transition-all group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary group-hover:bg-destructive/10 transition-colors">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-destructive transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground">hello@unlearning.ro</p>
                </div>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-background p-6 hover:border-destructive/30 hover:shadow-md transition-all group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary group-hover:bg-destructive/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-destructive transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                  <p className="font-medium text-foreground">Răzvan Vâlceanu</p>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-3/4" />
      </section>

      {/* 8. Credibility block */}
      <section className="py-14 md:py-20 bg-secondary relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12 items-center md:grid-cols-5">
            <ScrollReveal direction="left" className="md:col-span-2">
              <div className="relative max-w-[260px]">
                <div className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl">
                  <img src={razvanPhoto} alt="Răzvan Vâlceanu" loading="lazy" className="w-full aspect-[3/4] object-cover object-top" />
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl bg-destructive px-5 py-3 shadow-lg">
                  <p className="text-sm font-bold text-white">Founder</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} className="md:col-span-3">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Who you will be speaking with</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The Unlearning School is founded by Răzvan Vâlceanu. The work brings together digital experience, entrepreneurship, education, funding intelligence, AI adoption, execution support, academy design, and INK-supported workflows.
              </p>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-5 py-3 text-destructive font-semibold transition-all hover:bg-destructive/20">
                Răzvan Vâlceanu on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
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

export default Contact;
