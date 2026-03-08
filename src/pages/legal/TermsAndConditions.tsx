import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const TermsAndConditions = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-destructive mb-4">Legal</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl mb-6">Terms and Conditions</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions govern your use of The Unlearning School website
                  and services. By accessing or using our website, you agree to be bound by
                  these terms. If you do not agree, please do not use the website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Unlearning School provides consulting, training, and program design
                  services focused on funding intelligence, AI adoption, execution readiness,
                  proposal support, and academy design. The specific scope, deliverables and
                  terms of each engagement are agreed upon individually with each client.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and
                  software, is the property of The Unlearning School and is protected by
                  intellectual property laws. You may not reproduce, distribute, or create
                  derivative works from any content without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">When using our website, you agree to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">• <span>Provide accurate and complete information when submitting forms</span></li>
                  <li className="flex items-start gap-2">• <span>Not use the website for any unlawful purpose</span></li>
                  <li className="flex items-start gap-2">• <span>Not attempt to interfere with the proper functioning of the website</span></li>
                  <li className="flex items-start gap-2">• <span>Respect the intellectual property rights of The Unlearning School</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Working Calls</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The initial 30-minute working call is provided free of charge. Subsequent
                  engagements, programs, and services are subject to separate agreements and
                  pricing. We reserve the right to reschedule or cancel calls with reasonable
                  notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Unlearning School provides information and services on an "as is" basis.
                  We do not guarantee specific outcomes from our programs or consulting services.
                  To the maximum extent permitted by law, we shall not be liable for any
                  indirect, incidental, or consequential damages arising from the use of our
                  website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. External Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible
                  for the content, privacy policies, or practices of any third-party websites.
                  Accessing such links is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms and Conditions are governed by the laws of Romania. Any disputes
                  arising from these terms shall be resolved by the competent courts in
                  Bucharest, Romania.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Changes to These Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes
                  will be posted on this page with an updated revision date. Your continued use
                  of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us
                  at hello@unlearning.ro.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default TermsAndConditions;