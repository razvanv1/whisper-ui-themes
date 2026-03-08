import { Link, useLocation } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/shared/CTASection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { CheckCircle } from "lucide-react";

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
}

const Section = ({
  children,
  warm = false,
}: {
  children: React.ReactNode;
  warm?: boolean;
}) => (
  <section
    className={`py-20 md:py-28 ${warm ? "bg-card" : "bg-background"}`}
  >
    <div className="max-w-3xl mx-auto px-6">{children}</div>
  </section>
);

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
}: ProgramPageProps) => {
  const location = useLocation();

  return (
    <PageLayout>
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
      <section className="py-20 md:py-28 border-b border-border bg-card">
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
                  Book a free 30-minute working call
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-foreground hover:bg-accent gentle-animation"
                >
                  Describe your bottleneck
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">You probably recognize this</h2>
          <p className="text-lg text-muted-foreground">{recognitionCopy}</p>
        </ScrollReveal>
      </Section>

      <Section warm>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this is already costing</h2>
          <p className="text-lg text-muted-foreground">{costCopy}</p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this program is built to do</h2>
          <p className="text-lg text-muted-foreground">{builtToDo}</p>
        </ScrollReveal>
      </Section>

      <Section warm>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What changes after the work</h2>
          <p className="text-lg text-muted-foreground">{whatChanges}</p>
        </ScrollReveal>
      </Section>

      <Section>
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

      <Section warm>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What comes out of the work</h2>
          <p className="text-lg text-muted-foreground">{comesOut}</p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Best fit</h2>
          <p className="text-lg text-muted-foreground">{bestFit}</p>
        </ScrollReveal>
      </Section>

      <Section warm>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this is not</h2>
          <p className="text-lg text-muted-foreground">{notThis}</p>
        </ScrollReveal>
      </Section>

      <Section>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">How the work usually starts</h2>
          <p className="text-lg text-muted-foreground">{howStarts}</p>
        </ScrollReveal>
      </Section>

      <Section warm>
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-black mb-6">What this can lead to next</h2>
          <p className="text-lg text-muted-foreground">{leadsTo}</p>
        </ScrollReveal>
      </Section>

      <CTASection title="Start with the issue that is already slowing the work down" />
    </PageLayout>
  );
};

export default ProgramPageTemplate;
