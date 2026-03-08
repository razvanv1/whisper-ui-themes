import { Link } from "react-router-dom";
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
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">INK</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
              When repeated work starts slowing everything down, INK is where the system begins
            </h1>
            <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
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
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Talk to us about pilots and use cases
              </a>
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
              >
                Book a free 30-minute working call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">This is probably your situation</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            The team is doing too much manually. Scanning, filtering, following up,
            preparing materials, repurposing content, tracking opportunities. Each
            of these tasks is small on its own, but together they create a drag
            layer that slows everything else down. Important work waits because
            repeatable work keeps taking up capacity.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What this is already costing</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            Opportunities get missed because nobody tracked them closely enough.
            Follow-ups slip because they depend on someone remembering. Materials
            stay in draft. Knowledge that could be repurposed never leaves the
            original context. The cost is not dramatic, it is cumulative and it
            compounds every week.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What INK is built to do</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            INK takes the repeatable, structured and semi-automated parts of the
            work and turns them into consistent workflows. It does not replace
            judgment. It removes the manual drag that sits between decisions and
            execution.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What changes when INK is applied well</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            Follow-up starts happening on time, without someone chasing it
            manually. Scanning runs in the background instead of eating up
            calendar slots. Materials move from draft to done faster. The
            team spends less time on tasks that should be systematic, freeing
            up capacity for the work that actually requires judgment and presence.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-12">What INK supports today</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supports.map((s) => (
              <div key={s.area} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold mb-3">{s.area}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What can come out of the work</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
            A structured workflow layer that reduces manual drag, improves
            follow-through and creates capacity for the work that actually
            requires human attention. For some teams, INK becomes the foundation
            of a broader operating system.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Where INK fits best</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            Teams with high operational load, repeatable tasks across multiple
            channels and limited bandwidth for the manual work that keeps the
            rest of the system moving. INK is most useful when the bottleneck is
            not strategy but execution capacity.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">How INK connects to the rest of the work</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            INK is not a standalone product. It is part of how The Unlearning
            School operates. When a team starts with a program (funding, AI,
            execution, proposals or academy design) INK supports the parts of
            that work that benefit from structure, consistency and automation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What INK is not</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            INK is not a product you can buy off the shelf and it is not a chatbot
            or a replacement for thinking. It is an operating layer designed to
            handle the repeatable parts of the work so the team can focus on
            the parts that genuinely require judgment and creativity.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Why this approach works</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            Because the biggest productivity loss in most teams is not in the
            strategic layer. It is in the execution layer: the scanning,
            filtering, following up, preparing and tracking that nobody owns
            systematically. INK makes that layer work.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Pilots and use cases</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            If INK fits your situation, the best next step is a focused
            conversation about the specific workflows creating drag. From there,
            the work can start with a pilot scoped around the area with the
            highest cost-to-fix ratio.
          </p>
        </div>
      </section>

      <CTASection
        title="Start with the workflow that is already creating drag"
        secondaryLabel="Describe your bottleneck"
        secondaryLink="/send-issue"
      />
    </PageLayout>
  );
};

export default Ink;
