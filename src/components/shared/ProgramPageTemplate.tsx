import { Link, useLocation } from "react-router-dom";
import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/shared/CTASection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { CheckCircle } from "lucide-react";
import { ConnectingArrow } from "@/components/shared/ConnectingArrow";

const allPrograms = [
  { label: "Funding intelligence", slug: "funding-intelligence" },
  { label: "AI adoption", slug: "ai-adoption" },
  { label: "Execution readiness", slug: "execution-readiness" },
  { label: "Proposal support", slug: "proposal-support" },
  { label: "Academy design", slug: "academy-design" },
];

interface ProgramPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  recognitionCopy: string;
  costCopy: string;
  builtToDo: string;
  whatChanges: string;
  canInclude: string[];
  comesOut: string;
  bestFit: string;
  notThis: string;
  howStarts: string;
  leadsTo: string;
  showInkCTA?: boolean;
}

const Section = ({
  children,
  warm = false,
  arrowVariant,
  arrowPosition = "center",
}: {
  children: React.ReactNode;
  warm?: boolean;
  arrowVariant?: 1 | 2 | 3 | 4;
  arrowPosition?: "left" | "center" | "right";
}) => {
  const posClass = 
    arrowPosition === "left" ? "left-1/4" : 
    arrowPosition === "right" ? "left-3/4" : "left-1/2";

  return (
    <section
      className={`py-14 md:py-20 relative ${warm ? "bg-card" : "bg-background"}`}
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10 touch-manipulation">{children}</div>
      {arrowVariant && (
        <ConnectingArrow variant={arrowVariant} className={posClass} />
      )}
    </section>
  );
};

const ProgramPageTemplate = ({
  eyebrow,
  title,
  subtitle,
  recognitionCopy,
  costCopy,
  builtToDo,
  whatChanges,
  canInclude,
  comesOut,
  bestFit,
  notThis,
  howStarts,
  leadsTo,
  showInkCTA = false,
}: ProgramPageProps) => {
  const location = useLocation();

  return (
    <PageLayout>
      <SEO title={eyebrow} description={subtitle} path={location.pathname} />
      {/* Program selector */}
      <section className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto overflow-x-auto py-3 px-6">
          <nav className="flex gap-2" aria-label="Program navigation">
            {allPrograms.map((p) => {
              const isActive = location.pathname === `/programs/${p.slug}`;
              return (
                <Link
                  key={p.slug}
                  to={`/programs/${p.slug}`}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-red-500 bg-red-600 text-white"
                      : "border-border bg-card text-muted-foreground hover:border-red-500 hover:text-red-400"
                  }`}
                >
                  {p.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">
                {eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-sm italic text-muted-foreground/70 mb-6">
                What is learned can be unlearned.
              </p>
              <p className="text-lg text-muted-foreground mb-10">{subtitle}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://meet.brevo.com/razvan-valceanu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
                >
                  Book a call →
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-foreground hover:bg-accent gentle-animation"
                >
                  Send a Message →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {showInkCTA && (
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-white/10">
                <span className="w-2 rounded-full h-2 bg-amber-400 animate-pulse" /> Limited Release · Trial Offer
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">Included in the program: <br className="hidden md:block"/>Move from strategy to <br className="hidden md:block"/>execution with INK</h2>
              <p className="text-xl text-blue-100/90 mb-12 max-w-2xl mx-auto leading-relaxed">Most funding initiatives stall in the "scanning" phase. INK is built to automate the tracking and drafting load so your team focuses only on decisions.</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/ink#ink-final-cta" className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl shadow-2xl hover:bg-blue-50 transition-all btn-animate">
                  Start 14-Day Free Trial →
                </Link>
                <div className="text-blue-100 flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                  <span className="text-lg font-bold">Limited Release Opportunity</span>
                  <span className="text-sm opacity-60">Activate while it's completely free · No card required</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <Section arrowVariant={1} arrowPosition="right">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">You probably recognize this</h2>
          <p className="text-lg text-muted-foreground">{recognitionCopy}</p>
        </ScrollReveal>
      </Section>

      <Section warm arrowVariant={2} arrowPosition="left">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this is already costing</h2>
          <p className="text-lg text-muted-foreground">{costCopy}</p>
        </ScrollReveal>
      </Section>

      <Section arrowVariant={3} arrowPosition="center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this program is built to do</h2>
          <p className="text-lg text-muted-foreground">{builtToDo}</p>
        </ScrollReveal>
      </Section>

      <Section warm arrowVariant={4} arrowPosition="right">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What changes after the work</h2>
          <p className="text-lg text-muted-foreground">{whatChanges}</p>
        </ScrollReveal>
      </Section>

      <Section arrowVariant={1} arrowPosition="left">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-8">What the work can include</h2>
          <ul className="space-y-4">
            {canInclude.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Section>

      <Section warm arrowVariant={2} arrowPosition="center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What comes out of the work</h2>
          <p className="text-lg text-muted-foreground">{comesOut}</p>
        </ScrollReveal>
      </Section>

      <Section arrowVariant={3} arrowPosition="right">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Best fit</h2>
          <p className="text-lg text-muted-foreground">{bestFit}</p>
        </ScrollReveal>
      </Section>

      <Section warm arrowVariant={4} arrowPosition="left">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this is not</h2>
          <p className="text-lg text-muted-foreground">{notThis}</p>
        </ScrollReveal>
      </Section>

      <Section arrowVariant={1} arrowPosition="center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">How the work usually starts</h2>
          <p className="text-lg text-muted-foreground">{howStarts}</p>
        </ScrollReveal>
      </Section>

      <Section warm arrowVariant={2} arrowPosition="right">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this can lead to next</h2>
          <p className="text-lg text-muted-foreground">{leadsTo}</p>
        </ScrollReveal>
      </Section>

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

export default ProgramPageTemplate;
