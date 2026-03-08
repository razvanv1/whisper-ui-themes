import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-destructive mb-4">Legal</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg max-w-none">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Unlearning School ("we", "us", "our") is committed to protecting the privacy
                  of visitors and users of our website. This Privacy Policy explains how we collect,
                  use, store and protect your personal data in accordance with the General Data
                  Protection Regulation (GDPR) and applicable Romanian data protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Data Controller</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The data controller responsible for your personal data is:<br />
                  <strong className="text-foreground">The Unlearning School</strong><br />
                  Address: 1, Aleea Pasărea în Văzduh, București, Romania<br />
                  Email: hello@unlearning.ro<br />
                  Phone: +40 722 598 346
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. What Data We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We may collect the following types of personal data:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">• <span>Contact information (name, email address, phone number) when you submit a form or book a call</span></li>
                  <li className="flex items-start gap-2">• <span>Communication data (messages, inquiries sent through our contact forms)</span></li>
                  <li className="flex items-start gap-2">• <span>Technical data (IP address, browser type, device information, cookies) collected automatically when you visit the website</span></li>
                  <li className="flex items-start gap-2">• <span>Usage data (pages visited, time spent on the site, navigation patterns)</span></li>
                  <li className="flex items-start gap-2">• <span>Newsletter subscription data (email address, subscription preferences)</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. How We Use Your Data</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use your personal data for the following purposes:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">• <span>To respond to your inquiries and provide requested services</span></li>
                  <li className="flex items-start gap-2">• <span>To schedule and manage working calls</span></li>
                  <li className="flex items-start gap-2">• <span>To send newsletter updates (only with your explicit consent)</span></li>
                  <li className="flex items-start gap-2">• <span>To improve our website and services through analytics</span></li>
                  <li className="flex items-start gap-2">• <span>To comply with legal obligations</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Legal Basis for Processing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We process your personal data based on:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">• <span><strong className="text-foreground">Consent</strong> — for newsletter subscriptions and non-essential cookies</span></li>
                  <li className="flex items-start gap-2">• <span><strong className="text-foreground">Legitimate interest</strong> — for website analytics and service improvement</span></li>
                  <li className="flex items-start gap-2">• <span><strong className="text-foreground">Contractual necessity</strong> — for providing services you have requested</span></li>
                  <li className="flex items-start gap-2">• <span><strong className="text-foreground">Legal obligation</strong> — for compliance with applicable laws</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal data. We may share your data with trusted
                  third-party service providers who assist us in operating our website and
                  delivering services (e.g., email service providers, analytics tools, scheduling
                  platforms). All third-party processors are bound by data processing agreements
                  that comply with GDPR requirements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal data only for as long as necessary to fulfill the
                  purposes for which it was collected, or as required by law. Contact form data
                  is retained for up to 2 years. Newsletter subscription data is retained until
                  you unsubscribe.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Under the GDPR, you have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">• <span>Access your personal data</span></li>
                  <li className="flex items-start gap-2">• <span>Rectify inaccurate or incomplete data</span></li>
                  <li className="flex items-start gap-2">• <span>Request erasure of your data ("right to be forgotten")</span></li>
                  <li className="flex items-start gap-2">• <span>Restrict the processing of your data</span></li>
                  <li className="flex items-start gap-2">• <span>Object to the processing of your data</span></li>
                  <li className="flex items-start gap-2">• <span>Data portability</span></li>
                  <li className="flex items-start gap-2">• <span>Withdraw consent at any time</span></li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at hello@unlearning.ro.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies. For detailed information about the cookies we use
                  and how to manage them, please see our <a href="/cookie-policy" className="text-destructive hover:underline">Cookie Policy</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your
                  rights, please contact us at:<br />
                  Email: hello@unlearning.ro<br />
                  Phone: +40 722 598 346<br />
                  You also have the right to lodge a complaint with the Romanian National
                  Supervisory Authority for Personal Data Processing (ANSPDCP).
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;