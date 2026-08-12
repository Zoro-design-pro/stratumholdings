
import Link from "next/link";
import { Reveal } from "../app/components/Reveal";

export const metadata = {
  title: "Stratum Holdings | Global Business Process Outsourcing",
  description:
    "Stratum Holdings builds dedicated outsourced teams in accounting, finance, IT, marketing, HR and security — so you scale without scaling overhead.",
  openGraph: {
    title: "Stratum Holdings | Global Business Process Outsourcing",
    description:
      "Dedicated, vetted global teams that plug into your operations. Cut costs, move faster, stay focused on growth.",
  },
};

const stats = [
  { value: "9", label: "Service lines under one partner" },
  { value: "Days", label: "Typical time to a live team" },
  { value: "100%", label: "Dedicated, never shared talent" },
  { value: "24/7", label: "Security monitoring coverage" },
];

const differentiators = [
  {
    title: "Dedicated Teams",
    body: "Your Stratum professionals work exclusively for you, not shared across multiple clients.",
  },
  {
    title: "Rigorous Vetting",
    body: "Every team member is screened, tested, and trained before they ever touch your operations.",
  },
  {
    title: "Security-First",
    body: "Client data is handled under strict confidentiality and access-control standards across every engagement.",
  },
  {
    title: "Full Transparency",
    body: "Time tracking, activity reporting, and regular check-ins mean you always know exactly what your team is doing.",
  },
];

const services = [
  {
    name: "Accounting",
    body: "Bookkeeping, AP/AR, reconciliations, and month-end close handled by trained accounting professionals.",
  },
  {
    name: "Finance",
    body: "FP&A support, financial reporting, and CFO-level guidance for businesses that need more than a bookkeeper.",
  },
  {
    name: "IT Services",
    body: "Infrastructure support, helpdesk, and ongoing security monitoring to keep your systems running and protected.",
  },
  {
    name: "Digital Marketing",
    body: "SEO, content, paid media, and brand strategy built to drive real, measurable growth.",
  },
  {
    name: "Sales Support",
    body: "Lead generation, CRM management, and outbound development that keeps your pipeline full.",
  },
  {
    name: "Recruiting",
    body: "Sourcing, screening, and pipeline-building so your open roles don't stay open for months.",
  },
  {
    name: "HR Support",
    body: "Onboarding, compliance support, and day-to-day HR operations handled with care.",
  },
  {
    name: "Administration",
    body: "Scheduling, data entry, and back-office work that keeps everything else moving.",
  },
  {
    name: "Customer Service",
    body: "Multi-channel support teams trained to represent your brand the way you would.",
  },
];

const secureServices = [
  {
    title: "Cybersecurity",
    body: "Threat monitoring, vulnerability management, and incident response support to protect your systems and data around the clock.",
  },
  {
    title: "IT & Infrastructure Security",
    body: "Secure network architecture, access management, and infrastructure hardening built to reduce your organization's attack surface.",
  },
  {
    title: "Anti-Money Laundering (AML) Solutions",
    body: "Transaction monitoring support, compliance program assistance, and regulatory reporting help to support your AML obligations with confidence.",
  },
  {
    title: "AI-Driven Information Security",
    body: "Applying AI and machine learning to detect anomalies, automate threat detection, and strengthen your security posture faster than manual processes alone.",
  },
];

const secureProof = [
  "Dedicated security and compliance specialists — not generalist IT staff wearing a security hat.",
  "Built for regulated industries, including financial services, fintech, insurance, and healthcare.",
  "Combines experienced human analysts with AI-driven detection and automation.",
  "Scales alongside your business as security needs and regulatory requirements evolve.",
];

const benefits = [
  {
    title: "Cost Efficiency",
    body: "Meaningful savings versus traditional in-house hiring — without cutting corners on quality or reliability.",
  },
  {
    title: "Flexibility",
    body: "Scale your team up during growth periods, or down when things slow — without the cost or complexity of hiring and layoffs.",
  },
  {
    title: "Reliability",
    body: "Built-in redundancy for critical roles means your operations don't stall because one person is out sick or on vacation.",
  },
  {
    title: "Speed",
    body: "Most engagements are fully operational within days of kickoff — not the weeks or months a traditional hire takes.",
  },
];

const process = [
  {
    title: "Consultation",
    body: "We learn about your business, your goals, and where you're feeling the most pressure.",
  },
  {
    title: "Team Building",
    body: "We source and match the right professionals to your specific needs — not a generic pool of available staff.",
  },
  {
    title: "Process Mapping",
    body: "We document how your business actually works, so your team operates your way from day one, not a generic playbook.",
  },
  {
    title: "Launch",
    body: "Your team goes live — integrated into your existing tools, systems, and communication channels.",
  },
  {
    title: "Ongoing Optimization",
    body: "Regular performance reviews and check-ins keep your team aligned with your business as it evolves.",
  },
];

const industries = [
  "Accounting Firms",
  "Private Equity",
  "Property Management",
  "Restaurant Management",
  "Hotel Management",
  "Healthcare",
  "Construction",
  "Insurance",
  "Non-Profit",
];

function Home() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="shell flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={"/favicon.png"}
              alt="Stratum Holdings logo"
              className="h-10 w-10 shrink-0"
              width={40}
              height={40}
            />
            <span className="font-display text-lg tracking-tight">
              Stratum<span className="text-accent">.</span>{" "}
              <span className="text-muted-foreground">Holdings</span>
            </span>
          </a>
          <nav className="hidden gap-9 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Stratum Secure", "#secure"],
              ["Process", "#process"],
              ["Industries", "#industries"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <Link
            href="/consultation"
            className="rounded-full bg-primary px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            Book a Consultation
          </Link>
        </div>
      </header>

      <main id="top">
        {/* Hero — magazine masthead */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="gridlines absolute inset-0 opacity-40" aria-hidden />
          <div
            className="glow-orb -left-40 top-[-10rem] h-[34rem] w-[34rem]"
            aria-hidden
          />
          <div
            className="glow-orb right-[-12rem] top-40 h-[28rem] w-[28rem] opacity-30"
            aria-hidden
          />

          <div className="shell relative grid items-end gap-14 pb-16 pt-20 lg:grid-cols-12 lg:pb-24 lg:pt-28">
            <div className="reveal lg:col-span-7">
              <span className="eyebrow">Global Business Process Outsourcing</span>
              <h1 className="mt-8 text-[2.75rem] leading-[1.05] md:text-6xl xl:text-[4.25rem]">
                <span className="text-gradient">Scale Your Business</span>
                <br />
                Without Scaling
                <br />
                Your <em className="italic text-accent">Overhead</em>
              </h1>
              <p className="mt-8 max-w-[54ch] text-lg leading-relaxed text-muted-foreground">
                Stratum Holdings connects growing companies with expert, vetted global
                talent — so you can cut costs, move faster, and stay focused on what
                actually grows your business.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/consultation"
                  className="rounded-full bg-[image:var(--gradient-royal)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </Link>
                <a
                  href="#services"
                  className="rounded-full border border-border px-8 py-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="glass relative overflow-hidden rounded-3xl p-2">
                <img
                  src="/hero-strata.jpg"
                  alt="Layered glass tower facade lit in indigo at night"
                  width={1600}
                  height={1408}
                  className="h-[26rem] w-full rounded-[1.25rem] object-cover lg:h-[32rem]"
                />
                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.25rem] bg-[image:var(--gradient-veil)] p-6 pt-24">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent">
                    Strata of capability
                  </p>
                  <p className="mt-2 max-w-[30ch] font-display text-lg leading-snug">
                    Layered teams, engineered to hold weight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat rail */}
          <div className="relative border-t border-border">
            <div className="shell grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 80}
                  className="px-2 py-8 md:px-8 md:first:pl-0 md:last:pr-0"
                >
                  <p className="font-display text-4xl text-accent">{stat.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-b border-border bg-secondary/40 py-4">
          <div className="marquee-track gap-12 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 gap-12 pr-12">
                {services.map((s) => (
                  <span key={s.name} className="flex items-center gap-12">
                    {s.name}
                    <span className="text-accent">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mission — editorial feature */}
        <section id="about" className="relative border-b border-border">
          <div className="shell grid gap-14 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-4">
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-6 text-4xl leading-tight">
                Built for Businesses Ready to Grow
              </h2>
              <div className="mt-8 h-px w-24 bg-[image:var(--gradient-royal)]" />
            </Reveal>
            <Reveal delay={120} className="md:col-span-7 md:col-start-6">
              <p className="font-display text-2xl leading-relaxed">
                Every business deserves access to world-class talent without the overhead
                of traditional hiring.
              </p>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Stratum Holdings builds dedicated outsourced teams that plug directly
                  into your operations — so you get the expertise you need, exactly when
                  you need it, without the cost and complexity of building it in-house.
                </p>
                <p>
                  We're not a staffing agency, and we're not a call center. We're a
                  long-term operating partner for the parts of your business that need to
                  run reliably, every day, without your constant oversight.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Differentiators — bento */}
        <section className="relative border-b border-border">
          <div
            className="glow-orb left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 opacity-20"
            aria-hidden
          />
          <div className="shell relative py-24 md:py-32">
            <Reveal>
              <span className="eyebrow">A Different Kind of Partner</span>
              <h2 className="mt-6 max-w-[22ch] text-4xl leading-tight md:text-5xl">
                Built on Structure, Not Just Headcount
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {differentiators.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className={`glass group rounded-2xl p-8 transition-colors hover:border-accent/50 ${
                    i % 3 === 0 ? "md:p-12" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-10 text-2xl">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services — index */}
        <section id="services" className="border-b border-border bg-secondary/30">
          <div className="shell py-24 md:py-32">
            <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
              <div>
                <span className="eyebrow">Our Services</span>
                <h2 className="mt-6 text-4xl md:text-5xl">
                  One Partner, End-to-End Coverage
                </h2>
              </div>
              <p className="max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                Nine disciplines, one accountable relationship — staffed, trained, and
                managed by Stratum.
              </p>
            </Reveal>
            <ul className="divide-y divide-border">
              {services.map((service, i) => (
                <Reveal
                  as="li"
                  key={service.name}
                  delay={Math.min(i * 45, 300)}
                  className="group grid gap-4 py-7 transition-colors hover:bg-card/60 md:grid-cols-12 md:items-baseline md:px-4"
                >
                  <span className="font-mono text-[11px] text-accent md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-1 md:col-span-4">
                    {service.name}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground md:col-span-7">
                    {service.body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Stratum Secure */}
        <section id="secure" className="relative overflow-hidden border-b border-border">
          <img
            src="/secure-mesh.jpg"
            alt=""
            aria-hidden
            loading="lazy"
            width={1408}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[image:var(--gradient-veil)]" aria-hidden />
          <div className="shell relative py-28 md:py-36">
            <div className="grid gap-16 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <span className="eyebrow">Stratum Secure</span>
                <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
                  Specialized Security & Compliance for a Higher-Risk World
                </h2>
                <p className="mt-8 max-w-[46ch] leading-relaxed text-muted-foreground">
                  As cyber threats, financial crime, and AI-driven risk continue to
                  evolve, businesses need more than a helpdesk — they need a dedicated
                  security and compliance partner. Stratum Secure is our specialized
                  division delivering focused protection across cybersecurity, IT
                  infrastructure, anti-money laundering compliance, and AI-driven
                  information security.
                </p>
                <Link
                  href="/consultation"
                  className="mt-10 inline-block rounded-full bg-[image:var(--gradient-royal)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
                >
                  Book a Security Consultation
                </Link>
              </Reveal>
              <div className="grid gap-6 md:col-span-6 md:col-start-7">
                {secureServices.map((item, i) => (
                  <Reveal
                    key={item.title}
                    delay={i * 90}
                    className="glass rounded-2xl p-7 transition-colors hover:border-accent/50"
                  >
                    <h3 className="text-xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-20 border-t border-border pt-12">
              <span className="eyebrow">Why Stratum Secure</span>
              <ul className="mt-8 grid gap-8 md:grid-cols-4">
                {secureProof.map((proof, i) => (
                  <Reveal
                    as="li"
                    key={proof}
                    delay={i * 80}
                    className="border-l border-accent/40 pl-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {proof}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-b border-border">
          <div className="shell py-24 md:py-32">
            <Reveal>
              <span className="eyebrow">The Benefits</span>
              <h2 className="mt-6 text-4xl md:text-5xl">More Capacity, Less Overhead</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 80}
                  className="glass rounded-2xl p-8 transition-transform hover:-translate-y-1"
                >
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-b border-border bg-secondary/30">
          <div className="shell grid gap-16 py-24 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-4">
              <span className="eyebrow">Our Process</span>
              <h2 className="mt-6 text-4xl leading-tight">
                A Clear Path From Conversation to Launch
              </h2>
              <div className="mt-8 h-px w-24 bg-[image:var(--gradient-royal)]" />
            </Reveal>
            <div className="md:col-span-7 md:col-start-6">
              <ol className="relative space-y-14 border-l border-border pl-10">
                {process.map((step, i) => (
                  <Reveal as="li" key={step.title} delay={i * 90} className="relative">
                    <span className="absolute -left-[52px] top-1 grid size-8 place-items-center rounded-full bg-[image:var(--gradient-royal)] font-mono text-[11px] text-primary-foreground shadow-[var(--shadow-glow)]">
                      {i + 1}
                    </span>
                    <h3 className="text-2xl">{step.title}</h3>
                    <p className="mt-3 max-w-[52ch] leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="border-b border-border">
          <div className="shell py-24 md:py-32">
            <Reveal>
              <span className="eyebrow">Industries</span>
              <h2 className="mt-6 max-w-[22ch] text-4xl leading-tight md:text-5xl">
                Deep Experience Where It Matters Most
              </h2>
              <p className="mt-8 max-w-[62ch] leading-relaxed text-muted-foreground">
                While our team structure is flexible enough to support almost any
                industry, we bring particular depth in sectors that depend on strong
                back-office and administrative execution:
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, i) => (
                <Reveal
                  as="li"
                  key={industry}
                  delay={Math.min(i * 60, 300)}
                  className="glass flex items-center justify-between rounded-xl px-6 py-5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-accent/50"
                >
                  {industry}
                  <span className="text-accent">→</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted-foreground">
              Don't see your industry listed?{" "}
              <a href="#contact" className="text-accent underline underline-offset-4">
                Reach out
              </a>{" "}
              — we build custom solutions for businesses outside our core sectors too.
            </p>
          </div>
        </section>

        {/* Client results */}
        <section className="border-b border-border bg-secondary/30">
          <div className="shell py-24 md:py-32">
            <Reveal>
              <span className="eyebrow">What Clients Say</span>
              <h2 className="mt-6 text-4xl md:text-5xl">
                Real Feedback From Real Partnerships
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <Reveal key={i} delay={i * 90} className="glass rounded-2xl p-10">
                  <span className="font-display text-4xl text-accent">“</span>
                  <div className="mt-6 space-y-3">
                    <div className="h-2.5 w-full rounded-full bg-card" />
                    <div className="h-2.5 w-11/12 rounded-full bg-card" />
                    <div className="h-2.5 w-8/12 rounded-full bg-card" />
                  </div>
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Client testimonial — coming soon
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="relative overflow-hidden">
          <div
            className="glow-orb left-1/2 top-0 h-[30rem] w-[46rem] -translate-x-1/2 opacity-40"
            aria-hidden
          />
          <div className="shell relative flex flex-col items-start gap-10 py-28 md:flex-row md:items-end md:justify-between md:py-36">
            <Reveal>
              <span className="eyebrow">Let's Talk</span>
              <h2 className="mt-6 max-w-[18ch] text-4xl leading-tight md:text-6xl">
                Ready to Build Your <span className="text-gradient">Global Team?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Get a custom plan for your business — no commitment, no pressure.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/consultation"
                className="inline-block rounded-full bg-[image:var(--gradient-royal)] px-8 py-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
              >
                Book Your Free Consultation
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="shell flex flex-col justify-between gap-10 py-16 md:flex-row">
          <div>
            <img
              src={"/favicon.png"}
              alt="Stratum Holdings logo"
              className="h-16 w-16"
              width={64}
              height={64}
              loading="lazy"
            />
            <p className="mt-5 font-display text-2xl">
              Stratum<span className="text-accent">.</span> Holdings
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Global Business Process Outsourcing
            </p>
          </div>
          <div className="grid gap-6 text-sm sm:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Direct
              </p>
              <a href="tel:+97471297979" className="mt-1 block font-medium">
                +974 7129 7979
              </a>
              <p className="mt-1.5 text-xs text-muted-foreground">
                Locations in Qatar & Pakistan
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Inquiries
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
        <div className="border-t border-border">
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
        </div>
      </footer>
    </div>
  );
}

export default Home;


