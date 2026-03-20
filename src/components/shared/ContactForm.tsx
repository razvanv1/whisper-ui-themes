import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ContactFormProps {
  redirectTo?: string;
}

const issueAreas = [
  "Funding intelligence",
  "AI adoption",
  "Execution readiness",
  "Proposal support",
  "Academy design",
  "INK and workflow support",
];

const contactMethods = ["Email", "Call", "LinkedIn"];

const ContactForm = ({ redirectTo = "/thank-you-message" }: ContactFormProps) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    website: "",
    bottleneck: "",
    next90: "",
    area: "",
    contactMethod: "",
    acceptConfidentiality: false,
    acceptNewsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/submit-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...form,
        }),
      });

      const result = await response.json();
      if (result.status === "success") {
        navigate(redirectTo);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitError(
        "There was an issue sending your message. Please try again or email us directly at hello@unlearning.ro"
      );
      setIsSubmitting(false);
    }
  };

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">Organization / Website (Optional)</label>
          <input
            type="text"
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            placeholder="Company name or URL"
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          What is the current bottleneck?
        </label>
        <textarea
          required
          rows={4}
          value={form.bottleneck}
          onChange={(e) => update("bottleneck", e.target.value)}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          What are you trying to move in the next 30 to 90 days?
        </label>
        <textarea
          rows={3}
          value={form.next90}
          onChange={(e) => update("next90", e.target.value)}
          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Which area is closest to your issue?
        </label>
        <div className="flex flex-wrap gap-2">
          {issueAreas.map((area) => (
            <button
              key={area}
              type="button"
              onClick={() => update("area", area)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                form.area === area
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-border/50">
        <label className="relative flex items-start gap-3 cursor-pointer group">
          <div className="flex h-5 items-center">
            <input
              required
              type="checkbox"
              checked={form.acceptConfidentiality}
              onChange={(e) => update("acceptConfidentiality", e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
            />
          </div>
          <div className="text-sm leading-6">
            <span className="font-medium text-foreground">Accept confidentiality terms</span>
            <p className="text-muted-foreground">I agree that my data will be processed according to the privacy policy.</p>
          </div>
        </label>

        <label className="relative flex items-start gap-3 cursor-pointer group">
          <div className="flex h-5 items-center">
            <input
              required
              type="checkbox"
              checked={form.acceptNewsletter}
              onChange={(e) => update("acceptNewsletter", e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
            />
          </div>
          <div className="text-sm leading-6">
            <span className="font-medium text-foreground">Join the newsletter</span>
            <p className="text-muted-foreground">I want to receive the Unlearning Pill weekly updates.</p>
          </div>
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
        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send a message"}
      </button>
    </form>
  );
};

export default ContactForm;
