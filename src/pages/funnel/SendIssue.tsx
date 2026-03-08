import SEO from "@/components/shared/SEO";
import PageLayout from "@/components/layout/PageLayout";
import ContactForm from "@/components/shared/ContactForm";

const SendIssue = () => (
  <PageLayout>
    <SEO title="Send an Issue" description="Describe what is slowing the work down. The response will be shaped around the issue and the strongest next move." path="/send-issue" />
    <section className="py-20 md:py-28 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">Send a message</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
          Describe what is slowing the work down
        </h1>
        <p className="text-lg leading-relaxed md:text-xl text-muted-foreground">
          The response will be shaped around the issue and the strongest next move — not a generic reply.
        </p>
      </div>
    </section>
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <ContactForm redirectTo="/contact" />
      </div>
    </section>
  </PageLayout>
);

export default SendIssue;
