import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface CTASectionProps {
  title: string;
  copy?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  supportLine?: string;
  bullets?: string[];
}

const CTASection = ({
  title,
  copy,
  primaryLabel = "Book a call",
  primaryLink = "https://meet.brevo.com/razvan-valceanu",
  secondaryLabel = "Send a message",
  secondaryLink = "/send-issue",
  supportLine,
  bullets,
}: CTASectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-card border-t border-border relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-destructive/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-foreground tracking-tight leading-[1.05]">{title}</h2>
        {copy && <p className="text-lg mb-10 text-muted-foreground max-w-2xl mx-auto">{copy}</p>}
        {bullets && (
          <ul className="mx-auto mb-10 max-w-lg space-y-3.5 text-left">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                {b}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {primaryLink?.startsWith("http") ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ripple-btn inline-flex items-center justify-center rounded-xl bg-destructive px-8 py-3.5 font-semibold text-white hover:bg-destructive/90 transition-all duration-200 hover:shadow-lg hover:shadow-destructive/20 hover:-translate-y-px active:translate-y-0"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              to={primaryLink || "/"}
              className="ripple-btn inline-flex items-center justify-center rounded-xl bg-destructive px-8 py-3.5 font-semibold text-white hover:bg-destructive/90 transition-all duration-200 hover:shadow-lg hover:shadow-destructive/20 hover:-translate-y-px active:translate-y-0"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && (
            <Link
              to={secondaryLink || "/contact"}
              className="inline-flex items-center justify-center rounded-xl border border-border px-8 py-3.5 font-semibold text-foreground hover:bg-muted/60 hover:border-foreground/20 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        {supportLine && (
          <p className="mt-8 text-sm text-muted-foreground/70">{supportLine}</p>
        )}
      </div>
    </section>
  );
};

export default CTASection;
