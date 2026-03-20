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
import razvanPhoto from "@/assets/razvan-valceanu.jpg";
import ScanTool from "@/components/shared/ScanTool";
import {
  Target, Zap, TrendingDown, FileX, PackageOpen, Search, Brain,
  Layers, Workflow, ArrowRight, Sparkles, Check, Globe, Shield, MessageSquare, CheckCircle
} from "lucide-react";

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
        title="The Unlearning School | AI Adoption, Funding Intelligence & Execution Readiness" 
        description="The Unlearning School helps teams solve execution friction through AI adoption, funding intelligence, and readiness programs. Move beyond scanning into active execution with the INK Agentic Platform." 
        path="/" 
      />

      {/* Hero: video + slogan only */}
      <section ref={heroRef} className="relative h-screen flex items-end overflow-hidden -mt-16 md:-mt-20">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="none"
          poster="/hero-poster.jpg"
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

      {/* 1. THE UNLEARNING SCHOOL INTEGRATED SHOWCASE */}
      <section className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(192,58,30,0.03),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.02),transparent_40%)]">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-destructive mb-8 text-nowrap">
                  <Sparkles className="h-4 w-4 animate-pulse" /> The Unlearning School
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] tracking-tight text-slate-900">
                  When everything feels important, <br/>
                  <em className="text-destructive font-serif italic font-medium">choosing well</em> matters more than doing more.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-xl md:text-2xl mb-12 text-slate-500 font-sans leading-relaxed border-l-4 border-destructive/10 pl-8 italic">
                  The Unlearning School works with teams that are juggling too many ideas, opportunities, and demands at once. Instead of adding another layer of activity, we focus on better choices, stronger programs, and a more useful way to bring AI into everyday work.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col gap-6 sm:flex-row items-center">
                  <a href="https://meet.brevo.com/razvan-valceanu" 
                    target="_blank" rel="noopener noreferrer"
                    className="btn-brand-primary px-10 py-5 text-lg shadow-[0_20px_40px_rgba(192,58,30,0.15)] w-full sm:w-auto text-center">
                    Book a call →
                  </a>
                  <Link to="/programs#programs-list"
                    className="px-10 py-5 rounded-2xl border-2 border-slate-100 font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all btn-animate bg-white/50 w-full sm:w-auto text-center">
                    Explore Programs
                  </Link>
                </div>
                <div className="mt-8 flex items-start gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 max-w-lg">
                  <Zap className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    <span className="font-bold text-slate-700">Immediate impact:</span> Use the first call to pressure-test the live issue, choose the best starting point, and avoid burning more time on the wrong next move.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* Visual mesh behind cards */}
              <div className="absolute inset-0 bg-destructive/5 blur-[120px] rounded-full scale-110 pointer-events-none" />
              
              <ScrollReveal direction="right" delay={0.2} className="sm:translate-y-12">
                <div className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-14 w-14 bg-red-50 rounded-2xl flex items-center justify-center text-destructive mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Layers className="h-7 w-7" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2">5</h4>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-4">Core Programs</p>
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100 group-hover:border-red-100 transition-colors">
                    Funding, AI, Execution, Proposals, Academy Building.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <div className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Sparkles className="h-7 w-7" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2">AI</h4>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-4">Powered by INK</p>
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed bg-blue-50/50 rounded-xl p-4 border border-blue-100/50 group-hover:border-blue-200 transition-colors">
                    AI-supported research, scanning & bespoke funding execution workflows.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4} className="sm:translate-y-12">
                <div className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-14 w-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Target className="h-7 w-7" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2">EU</h4>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-4">Connected Networks</p>
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50 group-hover:border-emerald-200 transition-colors">
                    European Commission, EEN, Pact for Skills & Strategic Partnerships.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.5}>
                <div className="group relative bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div>
                    <div className="h-14 w-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform shadow-inner">
                      <Zap className="h-7 w-7" />
                    </div>
                    <h4 className="text-3xl font-black text-slate-900 mb-2">1:1</h4>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-[10px] mb-4">Working Calls</p>
                  </div>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed bg-amber-50/50 rounded-xl p-4 border border-amber-100/50 group-hover:border-amber-200 transition-colors">
                    Free 30-min focused sessions to pressure-test any live organizational issue.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="mb-20"></div>
        </div>
      </section>

      {/* NEW INK SHOWCASE - PROMINENT POSITION */}
      <section id="ink-showcase" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-50 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-6 font-sans">
                <Zap className="h-3.5 w-3.5" /> Agentic AI Operating Layer
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] tracking-tight text-slate-900">
                Find more funding. <br/><span className="text-blue-600">Submit better apps.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                INK is the agentic platform that handles the manual overhead between spotting an opportunity and submitting a finished application.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 border-b border-blue-100 pb-1 mb-2 inline-block">Scout Agent</h4>
                    <p className="text-sm text-slate-500 font-sans leading-snug">Monitors 944+ EU calls 24/7</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 shadow-sm">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-1 mb-2 inline-block">Coordinator Agent</h4>
                    <p className="text-sm text-slate-500 font-sans leading-snug">Tracks deadlines & partners</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5">
                <Link to="/ink" className="btn-ink-primary inline-flex items-center gap-2 group shadow-xl shadow-blue-500/10">
                  View INK Platform <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/ink#ink-scan" className="px-8 py-4 rounded-xl border border-blue-100 font-bold text-blue-600 hover:bg-blue-50/50 transition-all btn-animate">
                   Live Opportunity Scan →
                </Link>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-blue-50/50 border border-blue-100 rounded-xl w-fit">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-blue-700 italic underline decoration-blue-200 decoration-2">Limited: 14-Day Free Trial</span>
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enroll while available</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative">
              <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-blue-200 transition-all text-center md:text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-blue-600">Free Funding Scan</div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight text-slate-900 leading-tight">Spot your perfect grant<br className="hidden md:block" /> in under 60 seconds.</h3>
                  <p className="text-slate-500 text-lg mb-8 max-w-md">The INK engine monitors 944+ active EU and national funding calls. Scan your profile against all of them instantly.</p>
                  <Link to="/ink#ink-scan" className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm hover:underline group">
                    Live Opportunity Scan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing Row */}
          <div className="mt-24 pt-24 border-t border-slate-100">
            <ScrollReveal>
              <h3 className="text-3xl font-black mb-12 text-center tracking-tight text-slate-900">Simple Pricing. Agentic Execution.</h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  tier: "Starter",
                  price: "€49",
                  desc: "For small teams starting up",
                  features: ["1 active workflow", "Bi-weekly scanning", "Standard AI assistance"]
                },
                {
                  tier: "Pro",
                  price: "€149",
                  desc: "For active funding streams",
                  features: ["Up to 5 active workflows", "Continuous EU scanning", "Advanced AI context", "Knowledge reuse"],
                  featured: true
                },
                {
                  tier: "Enterprise",
                  price: "Custom",
                  desc: "For large organizations",
                  features: ["Unlimited workflows", "Fine-tuned local models", "API & White-label", "Dedicated support"]
                }
              ].map((plan, i) => (
                <ScrollReveal key={plan.tier} delay={0.1 * i}>
                  <div className={`h-full p-8 rounded-[2.5rem] border relative transition-all duration-500 flex flex-col bg-slate-50/50 ${
                    plan.featured 
                      ? 'border-blue-500 shadow-[0_20px_50px_rgba(59,130,246,0.12)] scale-[1.03] z-10' 
                      : 'border-slate-100 text-slate-900 shadow-sm'
                  }`}>
                    {plan.featured && (
                      <div className="bg-blue-600 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-xl text-white flex items-center gap-1.5">
                        <Zap className="h-3 w-3" /> Most Popular
                      </div>
                    )}
                    <h4 className="text-xl font-bold mb-1 text-slate-900">{plan.tier}</h4>
                    <div className="flex items-baseline gap-1 mb-4 text-slate-900">
                      <span className="text-4xl font-black">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-xs text-slate-400">/ month</span>}
                    </div>
                    <p className="text-sm mb-8 font-sans leading-relaxed text-slate-500">{plan.desc}</p>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {plan.features.map(f => (
                        <li key={f} className="flex gap-3 items-start text-sm">
                          <Check className={`h-5 w-5 shrink-0 ${plan.featured ? 'text-blue-600' : 'text-emerald-500'}`} />
                          <span className="text-slate-700 font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={plan.tier === "Enterprise" ? "/contact" : "/ink#ink-final-cta"} 
                      className={`w-full py-4 rounded-xl font-black text-center flex justify-center transition-all btn-animate ${
                        plan.featured 
                          ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' 
                          : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {plan.tier === "Enterprise" ? "Contact Us →" : "Start 14-Day Free Trial →"}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
        <ConnectingArrow variant={2} className="left-3/4 bottom-0" />
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
            <Link to="/contact"
              className="btn-brand-primary inline-flex items-center justify-center gap-2 group">
              Book a call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
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
              className="inline-flex items-center gap-2 justify-center rounded-xl border border-border px-8 py-3 font-semibold hover:bg-card transition-all btn-animate">
              See the method <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
        <ConnectingArrow variant={2} className="left-1/4" />
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
                className="inline-flex items-center gap-2 rounded-xl bg-destructive/10 px-6 py-3 text-destructive font-bold transition-all hover:bg-destructive/20 btn-animate">
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
                    className="inline-flex items-center gap-2 justify-center rounded-xl bg-foreground px-8 py-3 font-bold text-background hover:bg-foreground/90 transition-all btn-animate">
                    Visit the resource library <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/newsletter"
                    className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3 font-semibold hover:bg-card transition-all btn-animate">
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
