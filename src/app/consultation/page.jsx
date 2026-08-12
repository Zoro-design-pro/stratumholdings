"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  "Accounting & Bookkeeping",
  "Finance & Analysis",
  "IT & Software Support",
  "Digital Marketing",
  "HR & Recruitment",
  "Customer Support",
  "Stratum Secure (Cybersecurity / AML)",
  "Not sure yet",
];

const controlClass =
  "mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

function ConsultationPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

 async function handleSubmit(e) {
  e.preventDefault();

  setSending(true);
  setSent(false);
  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: String(formData.get("name") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    service: String(formData.get("service") || "").trim(),
    teamSize: String(formData.get("teamSize") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  try {
    const response = await fetch("/api/consultation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.error || "Unable to send your consultation request."
      );
    }

    setSent(true);
    form.reset();
  } catch (err) {
    console.error("Consultation error:", err);

    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setSending(false);
  }
}

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Background */}
      <div
        className="gridlines absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <div
        className="glow-orb -left-40 top-[-12rem] h-[32rem] w-[32rem]"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="relative border-b border-border">
        <div className="shell flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Stratum Holdings logo"
              className="h-10 w-10 shrink-0"
              width={40}
              height={40}
            />

            <span className="font-display text-lg tracking-tight">
              Stratum<span className="text-accent">.</span>{" "}
              <span className="text-muted-foreground">Holdings</span>
            </span>
          </Link>

          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; Back to site
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="shell relative grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        {/* Left side */}
        <div className="lg:col-span-5">
          <span className="eyebrow">Free Consultation</span>

          <h1 className="mt-6 text-[2.5rem] leading-[1.08] md:text-5xl">
            <span className="text-gradient">
              Tell us what you need.
            </span>
            <br />
            We&apos;ll map the team.
          </h1>

          <p className="mt-6 max-w-[46ch] text-muted-foreground">
            Share a few details about your operation and our team will
            come back with a tailored outsourcing plan — scope, roles,
            and cost — usually within one business day.
          </p>

          <div className="mt-10 space-y-6 border-t border-border pt-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Direct
              </p>

              <a
                href="tel:+97471297979"
                className="mt-1 block font-medium"
              >
                +974 7129 7979
              </a>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </p>

              <a
                href="mailto:info@thestratumholdings.com"
                className="mt-1 block font-medium"
              >
                info@thestratumholdings.com
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl border border-border p-7 md:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                required
                placeholder="Your full name"
              />

              <Field
                label="Company"
                name="company"
                placeholder="Company name"
              />

              <Field
                label="Work email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />

              <Field
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+974..."
              />

              <div>
                <Label>Service of interest</Label>

                <select
                  name="service"
                  className={controlClass}
                  defaultValue={services[0]}
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <Field
                label="Team size needed"
                name="teamSize"
                placeholder="e.g. 3–5"
              />

              <div className="sm:col-span-2">
                <Label>What do you need help with?</Label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Briefly describe your current setup and goals."
                  className={controlClass}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-8 w-full rounded-full bg-[image:var(--gradient-royal)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send My Request"}
            </button>

            {sent && (
              <div className="mt-4 rounded-lg border border-border bg-background/50 p-4 text-center">
                <p className="text-sm text-accent">
                  Thank you! Your consultation request has been
                  sent successfully.
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Our team will be in touch shortly.
                </p>
              </div>
            )}

            {error && (
              <div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-center">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Your request will be sent securely to
              info@thestratumholdings.com
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Stratum Holdings
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Powered by{" "}
            <a
              href="https://secure-square.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4"
            >
              Secure Sphere
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function Label({ children }) {
  return (
    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}) {
  return (
    <div>
      <Label>{label}</Label>

      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={controlClass}
      />
    </div>
  );
}

export default ConsultationPage;
