import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!consent) {
            setSubmitError("Please accept the Privacy Policy to subscribe.");
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch('/submit-form.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'newsletter',
                    email: email,
                })
            });

            const result = await response.json();
            if (result.status === 'success') {
                navigate("/thank-you");
            } else {
                throw new Error(result.message || 'Failed to subscribe');
            }
        } catch (err) {
            console.error('Newsletter error:', err);
            setSubmitError("There was an issue processing your subscription. Please try again or email us directly at hello@unlearning.ro");
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout>
            <SEO
                title="The Unlearning Pill Newsletter | Signal for High-Performance Teams"
                description="Subscribe to The Unlearning Pill for selected updates on funding intelligence, AI at work, execution friction, and program design. Weekly signal for teams that execute."
                path="/newsletter"
            />

            <section className="min-h-[85vh] flex items-center justify-center py-24 px-6 relative overflow-hidden bg-background">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
                    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply" />
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply" />
                </div>

                <div className="max-w-xl w-full mx-auto relative z-10">
                    <div className="text-center space-y-6 mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-muted/50 border border-border rounded-2xl flex items-center justify-center shadow-sm">
                                <Mail className="w-8 h-8 text-foreground" />
                            </div>
                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
                            The Unlearning Pill
                        </h1>

                        <p className="text-lg text-muted-foreground">
                            Selected updates on funding intelligence, AI at work, execution friction, academy building, and the future of work.
                        </p>
                    </div>

                    <div className="bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">Work Email</label>
                                <input
                                    id="email"
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="w-full rounded-md border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex items-center h-5 mt-1">
                                    <input
                                        id="consent"
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary bg-background"
                                    />
                                </div>
                                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                                    I agree to receive the newsletter and accept the <Link to="/privacy-policy" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors">Privacy Policy</Link>. I understand I can unsubscribe at any time.
                                </label>
                            </div>

                            {submitError && (
                                <div className="rounded-md bg-destructive/10 p-4 text-sm text-destructive font-medium">
                                    {submitError}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
