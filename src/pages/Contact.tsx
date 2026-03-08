import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import CTASection from "@/components/shared/CTASection";
import { Search, Brain, TrendingDown, FileX, PackageOpen, Workflow } from "lucide-react";

const Contact = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">The Unlearning School · Contact</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
              Start with the issue that is already slowing the work down
            </h1>
            <p className="text-lg leading-relaxed md:text-xl mb-10 text-muted-foreground">
              Funding direction, AI inside the team, execution drag, proposal
              shaping, academy design or repeated workflow pressure. The first
              conversation works best when it starts from something real, not from
              a generic introduction.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://meet.brevo.com/razvan-valceanu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a call
              </a>
              <Link
                to="/send-issue"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What brings people */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-8">What usually brings people here</h2>
          <ul className="space-y-4">
            {[
              { icon: Search, text: "Too many funding paths open without clear filtering" },
              { icon: Brain, text: "AI inside the team but without shared habits or standards" },
              { icon: TrendingDown, text: "Execution that feels heavy despite constant activity" },
              { icon: FileX, text: "Proposals that absorb time without getting stronger fast enough" },
              { icon: PackageOpen, text: "Expertise that could become an academy or asset but stays unstructured" },
              { icon: Workflow, text: "Workflow drag that keeps compounding" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-4">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Working call */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Start with a free 30-minute working call</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
            A focused first conversation to understand what is actually going on,
            the pressure around it and the best place to begin. Think of it as
            a working session, not a sales call.
          </p>
          <a
            href="https://meet.brevo.com/razvan-valceanu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a free 30-minute working call
          </a>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">
            If a call feels too early, describe your bottleneck
          </h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-10">
            Describe what is slowing the work down and the response will be
            shaped around the issue and the strongest next move.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">What happens next</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
            After submitting, expect a response shaped around your specific
            situation, not a generic template. The goal is to identify the
            strongest next move, whether that is a call, a program, a pilot or
            a narrower follow-up.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-4">The Unlearning Pill</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-8">
            Not ready for a conversation yet? Stay connected through selected
            updates on funding intelligence, AI at work, execution friction,
            academy building and the future of work.
          </p>
          <Link
            to="/newsletter"
            className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors"
          >
            Join The Unlearning Pill
          </Link>
        </div>
      </section>

      {/* Direct contact */}
      <section className="py-20 md:py-28 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Direct contact</h2>
          <div className="space-y-2 text-muted-foreground">
            <p>hello@dezvatare.ro</p>
            <p>+40 722 598 346</p>
            <p>1, Aleea Pasărea în Văzduh, București, RO</p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.linkedin.com/company/the-unlearning-school" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <a href="https://www.facebook.com/theunlearningschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
              <a href="https://www.instagram.com/the.unlearning.school" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
              <a href="https://api.whatsapp.com/message/SZZCJNB5GSGJP1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* Who you speak with */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl mb-6">Who you will be speaking with</h2>
          <p className="text-lg leading-relaxed md:text-xl text-muted-foreground mb-6">
            Răzvan Vâlceanu, founder of The Unlearning School. His work brings
            together entrepreneurship, digital business, education and
            organizational programs. The approach draws from leadership in tech,
            hands-on training, ecosystem building and years spent translating
            change into something people can actually use in real teams. Active
            in selected AI and startup ecosystems, including as a Lovable
            Ambassador.
          </p>
          <a
            href="https://www.linkedin.com/in/razvanvalceanu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Răzvan Vâlceanu on LinkedIn →
          </a>
        </div>
      </section>

      <CTASection title="Start with the issue, not with a generic introduction" />
    </PageLayout>
  );
};

export default Contact;
