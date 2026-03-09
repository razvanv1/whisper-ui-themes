import { Link } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import GlowCard from "@/components/shared/GlowCard";
import CTASection from "@/components/shared/CTASection";
import {
  Search, Brain, TrendingDown, FileX, PackageOpen, Workflow,
  Phone, Mail, MapPin, Linkedin, MessageCircle, Calendar,
  ArrowRight, CheckCircle, Send
} from "lucide-react";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const painPoints = [
  { icon: Search, text: "Too many funding paths open without clear filtering" },
  { icon: Brain, text: "AI inside the team but without shared habits or standards" },
  { icon: TrendingDown, text: "Execution that feels heavy despite constant activity" },
  { icon: FileX, text: "Proposals that absorb time without getting stronger fast enough" },
  { icon: PackageOpen, text: "Expertise that could become an academy or asset but stays unstructured" },
  { icon: Workflow, text: "Workflow drag that keeps compounding" },
];

const steps = [
  { num: "01", title: "Book or write", desc: "Pick the format that fits: a live call or a short message about what is slowing the work down." },
  { num: "02", title: "Pressure-test the issue", desc: "The first conversation is focused on understanding the real bottleneck, not delivering a pitch." },
  { num: "03", title: "Get a shaped response", desc: "The response is built around your specific situation, not a generic template or sales sequence." },
];

const Contact = () => {
  return (
    <PageLayout>
      <SEO title="Contact" description="Book a free 30-minute working call or send a message about what is slowing the work down. Start with the live issue." path="/contact" />
      {/* Hero */}
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
              <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
                Funding direction, AI inside the team, execution drag, proposal
                shaping, academy design or repeated workflow pressure. The first
                conversation works best when it starts from something real.
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

      {/* What brings people — icon cards */}
      <section className="py-14 md:py-20 bg-background">
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
      </section>

      {/* How it works — numbered steps */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">How it works</h2>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.15}>
                <GlowCard className="rounded-2xl border border-border bg-background p-8 h-full relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-6xl font-black text-foreground/5">{step.num}</span>
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-widest text-destructive mb-3">Step {step.num}</p>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working call CTA — visual block */}
      <section className="py-14 md:py-20 bg-secondary">
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
                Răzvan Vâlceanu, founder of The Unlearning School. His work brings
                together entrepreneurship, digital business, education and
                organizational programs. Active in selected AI and startup
                ecosystems, including as a Lovable Ambassador.
              </p>
              <a href="https://www.linkedin.com/in/razvanvalceanu/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-destructive/10 px-5 py-3 text-destructive font-semibold transition-all hover:bg-destructive/20">
                Răzvan Vâlceanu on LinkedIn <ArrowRight className="h-4 w-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Direct contact — visual cards */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-10">Direct contact</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail, label: "Email", value: "hello@unlearning.ro", href: "mailto:hello@unlearning.ro" },
              { icon: Phone, label: "Phone", value: "+40 722 598 346", href: "tel:+40722598346" },
              { icon: MapPin, label: "Address", value: "1, Aleea Pasărea în Văzduh, București", href: null },
              { icon: MessageCircle, label: "WhatsApp", value: "Send a message", href: "https://api.whatsapp.com/message/SZZCJNB5GSGJP1?autoload=1&app_absent=0" },
            ].map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.1}>
                <GlowCard className="rounded-2xl border border-border bg-card p-6 text-center h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary mx-auto mb-4">
                    <c.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-destructive transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
                  )}
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex justify-center gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/the-unlearning-school" },
                { label: "Facebook", href: "https://www.facebook.com/theunlearningschool" },
                { label: "Instagram", href: "https://www.instagram.com/the.unlearning.school" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="rounded-full border border-border px-5 py-2 text-sm font-medium hover:border-destructive hover:text-destructive transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 md:py-20 bg-card">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-secondary p-10">
              <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl mb-4">The Unlearning Pill</h2>
              <p className="text-muted-foreground mb-8">
                Not ready for a conversation yet? Stay connected through selected
                updates on funding intelligence, AI at work, execution friction,
                academy building and the future of work.
              </p>
              <Link to="/newsletter"
                className="inline-flex items-center justify-center rounded-md bg-foreground px-8 py-3 font-semibold text-background hover:bg-foreground/90 transition-colors">
                Join The Unlearning Pill
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection title="Start with the issue, not with a generic introduction" />
    </PageLayout>
  );
};

export default Contact;