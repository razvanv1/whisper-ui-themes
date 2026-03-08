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
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(redirectTo);
  };

  const update = (field: string, value: string) =>
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
        <div>
          <label className="mb-2 block text-sm font-medium">Organization</label>
          <input
            type="text"
            value={form.organization}
            onChange={(e) => update("organization", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Role</label>
          <input
            type="text"
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Website</label>
          <input
            type="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
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

      <div>
        <label className="mb-2 block text-sm font-medium">
          Preferred contact method
        </label>
        <div className="flex gap-3">
          {contactMethods.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => update("contactMethod", method)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                form.contactMethod === method
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
