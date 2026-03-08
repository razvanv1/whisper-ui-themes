import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    <section className="py-20 md:py-28 bg-card border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 text-foreground">{title}</h2>
        {copy && <p className="text-lg mb-8 text-muted-foreground">{copy}</p>}
        {bullets && (
          <ul className="mx-auto mb-8 max-w-lg space-y-3 text-left">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
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
              className="ripple-btn inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link
              to={primaryLink || "/"}
              className="ripple-btn inline-flex items-center justify-center rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors"
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && (
            <Link
              to={secondaryLink || "/contact"}
              className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3 font-semibold text-foreground hover:bg-background transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
        {supportLine && (
          <p className="mt-6 text-sm text-muted-foreground">{supportLine}</p>
        )}
      </div>
    </section>
  );
};

export default CTASection;
