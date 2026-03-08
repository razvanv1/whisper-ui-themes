import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CTASection from "@/components/shared/CTASection";

const supports = [
  { area: "Opportunity scanning", desc: "Monitoring funding sources, vendor credits, partnerships and relevant calls across multiple channels." },
  { area: "Filtering and prioritization", desc: "Scoring and ranking opportunities based on fit, effort and strategic alignment." },
  { area: "Follow-up support", desc: "Tracking open threads, pending actions and follow-up cadences without relying on memory." },
  { area: "Material preparation", desc: "Drafting, structuring and refining documents, proposals, briefs and internal communications." },
  { area: "Content repurposing", desc: "Turning working notes, call summaries and internal material into publishable or shareable formats." },
  { area: "Academy and workflow support", desc: "Supporting curriculum structuring, session planning and repeatable delivery tasks." },
];

const Ink = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-6">INK</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              When repeated work starts slowing everything down, INK is where the system begins
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              INK is the AI-supported operating layer used inside The Unlearning
              School to reduce manual drag across opportunity scanning,
              prioritization, follow-up, content workflows, academy support and
              repeatable execution tasks.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
              >
                Talk to us about pilots and use cases
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">This is probably your situation</h2>
            <p className="text-lg text-muted-foreground">
              The team is doing too much manually. Scanning, filtering, following up,
              preparing materials, repurposing content, tracking opportunities. Each
              task is small on its own, but together they create a drag layer that
              slows everything else down.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">What this is already costing</h2>
            <p className="text-lg text-muted-foreground">
              Opportunities get missed because nobody tracked them closely enough.
              Follow-ups slip because they depend on someone remembering. Materials
              stay in draft. The cost is not dramatic, it is cumulative.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">What INK is built to do</h2>
            <p className="text-lg text-muted-foreground">
              INK takes the repeatable, structured and semi-automated parts of the
              work and turns them into consistent workflows. It does not replace
              judgment. It removes the manual drag that sits between decisions and
              execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-12">What INK supports today</h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supports.map((s) => (
              <ScrollReveal key={s.area}>
                <div className="rounded-lg border border-border bg-background p-6 h-full">
                  <h3 className="text-xl font-bold mb-3">{s.area}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">What INK is not</h2>
            <p className="text-lg text-muted-foreground">
              INK is not a product you can buy off the shelf and it is not a chatbot
              or a replacement for thinking. It is an operating layer designed to
              handle the repeatable parts of the work so the team can focus on
              the parts that genuinely require judgment and creativity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Pilots and use cases</h2>
            <p className="text-lg text-muted-foreground">
              If INK fits your situation, the best next step is a focused
              conversation about the specific workflows creating drag. From there,
              the work can start with a pilot scoped around the area with the
              highest cost-to-fix ratio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Start with the workflow that is already creating drag"
        secondaryLabel="Describe your bottleneck"
        secondaryLink="/contact"
      />
    </PageLayout>
  );
};

export default Ink;
