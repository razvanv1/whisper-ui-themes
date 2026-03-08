import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

const COOKIE_CONSENT_KEY = "tus-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card shadow-2xl p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10">
            <Cookie className="h-5 w-5 text-destructive" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">We use cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We use essential cookies to make our website work and analytics cookies to
              understand how you use it. You can accept all cookies or decline non-essential
              ones. Read more in our{" "}
              <Link to="/cookie-policy" className="text-destructive hover:underline font-medium">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-destructive hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAccept}
                className="inline-flex items-center justify-center rounded-md bg-destructive px-6 py-2.5 text-sm font-semibold text-white hover:bg-destructive/90 transition-colors"
              >
                Accept all cookies
              </button>
              <button
                onClick={handleDecline}
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Essential only
              </button>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;