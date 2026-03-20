import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ThankYou() {
    return (
        <PageLayout>
            <SEO
                title="Thank You"
                description="Your message has been sent successfully."
                path="/thank-you"
            />

            <div className="min-h-[80vh] flex items-center justify-center py-24 px-6 relative overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl mix-blend-multiply" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply" />
                </div>

                <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-background border border-border rounded-full flex items-center justify-center shadow-md">
                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                        Message Sent!
                    </h1>

                    <p className="text-lg text-muted-foreground">
                        Thank you for reaching out to The Unlearning School. We have received your message and will get back to you shortly.
                    </p>

                    <div className="pt-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold transition-colors hover:bg-primary/90"
                        >
                            Return Home
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
