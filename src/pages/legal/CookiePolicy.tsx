import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CookiePolicy = () => {
  return (
    <PageLayout>
      <section className="py-20 md:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-destructive mb-4">Legal</p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl mb-6">Cookie Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a
                  website. They help the website function properly, provide analytics data, and
                  remember your preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-6">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable
                      basic features like page navigation and access to secure areas. The website
                      cannot function properly without these cookies.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies help us understand how visitors interact with the website by
                      collecting and reporting information anonymously. This helps us improve the
                      website experience.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies enable enhanced functionality and personalization, such as
                      remembering your cookie consent preferences and other settings.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some cookies on our website are set by third-party services, including
                  scheduling tools (Brevo), embedded content platforms and analytics providers.
                  These third parties have their own privacy policies governing the use of
                  cookies they set.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you first visit our website, you will be presented with a cookie consent
                  banner that allows you to accept or decline non-essential cookies. You can
                  change your preferences at any time by clearing your browser cookies and
                  revisiting the site. You can also manage cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Your Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By clicking "Accept" on our cookie banner, you consent to the use of
                  non-essential cookies as described in this policy. Essential cookies do not
                  require consent as they are necessary for the website to function.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at
                  hello@unlearning.ro.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;