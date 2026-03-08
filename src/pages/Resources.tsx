import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/shared/CTASection";

const Resources = () => {
  const topics = [
    "Funding intelligence",
    "AI at work",
    "Execution friction",
    "Academy building",
    "Future of work",
  ];

  const formats = [
    { name: "Articles and working notes", desc: "Long-form analysis, practical frameworks and observations from the work." },
    { name: "Unlearning in Romanian", desc: "The podcast. Conversations, reflections and useful signals around work, learning, AI and change." },
    { name: "Studies and frameworks", desc: "Research-informed material for teams dealing with complexity." },
    { name: "Guides and practical tools", desc: "Templates, checklists and reusable resources." },
  ];

  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-6">Resources</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Useful material for teams working through AI, funding, execution and change
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Articles, podcast episodes, studies, working notes, frameworks and
              practical tools for teams dealing with opportunity overload, uneven
              AI adoption, execution drag, academy building and the future of work.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-3 font-semibold text-white hover:bg-red-700 gentle-animation"
              >
                Book a free 30-minute working call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Entry paths */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-6">Start here</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Funding intelligence" },
              { name: "AI at work" },
              { name: "Execution friction" },
              { name: "Podcast, tools and working notes" },
            ].map((path) => (
              <div key={path.name} className="rounded-lg border border-border bg-card p-5 text-center text-sm font-medium hover:border-red-500 hover:shadow-sm transition-all cursor-pointer">
                {path.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll find */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6">What you will find here</h2>
          <p className="text-lg text-muted-foreground">
            Everything published here comes from real work with real teams, not
            from content calendars or keyword lists. The material is built to help
            teams think more clearly about the problems they are already facing.
          </p>
        </div>
      </section>

      {/* Browse by topic */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Browse by topic</h2>
          <div className="flex flex-wrap gap-3">
            {topics.map((t) => (
              <span key={t} className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-10">Featured formats</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {formats.map((f) => (
              <div key={f.name} className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">{f.name}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why these exist */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Why these resources exist</h2>
          <p className="text-lg text-muted-foreground">
            Because the best work happens when teams can think clearly about the
            problems they face. These resources are designed to support that
            thinking, not to replace it.
          </p>
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
