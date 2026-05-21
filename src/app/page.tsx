import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const capabilities = [
  {
    n: "01",
    title: "Polymer Sourcing",
    body: "Resin and polymer procurement across global supply networks.",
  },
  {
    n: "02",
    title: "Procurement Support",
    body: "Strategic buying intelligence for manufacturers and converters.",
  },
  {
    n: "03",
    title: "Supply-Chain Coordination",
    body: "End-to-end coordination from origin to plant floor.",
  },
  {
    n: "04",
    title: "Market Intelligence",
    body: "Pricing trends, supply risk and alternate-material insight.",
  },
];

const stats = [
  { v: "Global", l: "Supply network" },
  { v: "Polymers", l: "Specialist focus" },
  { v: "Strategic", l: "Procurement lens" },
  { v: "Technical", l: "Commercial depth" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone/10 pt-40 pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, rgba(194,129,17,0.18), transparent), radial-gradient(50% 50% at 0% 100%, rgba(38,40,40,0.6), transparent)",
          }}
        />
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Procurement &middot; Supply Intelligence</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 max-w-5xl text-5xl leading-[1.02] md:text-7xl lg:text-[88px]">
              Strategic Sourcing.
              <br />
              Intelligent Supply.
              <br />
              <span className="text-tan">Real Results.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-stone/65 md:text-lg">
              OLKO supports plastic manufacturers, packaging converters and
              industrial buyers with strategic procurement, polymer sourcing
              and global supply-chain intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Request Supply Support
              </Link>
              <Link href="/contact" className="btn-secondary">
                Speak With OLKO
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-stone/10">
        <div className="container-page grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="border-r border-stone/10 last:border-r-0 px-2 py-12 first:pl-0 md:px-6"
            >
              <p className="font-heading text-3xl text-stone md:text-4xl">
                {s.v}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone/50">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-stone/10 py-32">
        <div className="container-page">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <p className="eyebrow">What we do</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-6 text-3xl leading-tight md:text-5xl">
                  A modern lens on industrial procurement.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  href="/solutions"
                  className="mt-8 inline-block link-underline text-sm text-tan"
                >
                  Explore solutions &rarr;
                </Link>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <ul className="grid gap-px bg-stone/10 sm:grid-cols-2">
                {capabilities.map((c, i) => (
                  <li key={c.title} className="bg-jet">
                    <Reveal delay={i * 0.05}>
                      <div className="p-8">
                        <p className="font-heading text-sm text-tan">{c.n}</p>
                        <h3 className="mt-6 text-xl">{c.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-stone/60">
                          {c.body}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning quote */}
      <section className="border-b border-stone/10 py-32">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Position</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-8 max-w-5xl font-heading text-2xl leading-snug text-stone md:text-4xl lg:text-5xl">
              OLKO is not a generic plastic trading company. We operate as a
              strategic, technical and globally-connected supply
              intelligence partner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 border border-stone/10 bg-steel/40 p-10 md:flex-row md:items-center md:p-16">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Sourcing a polymer or planning a supply program?
              </h2>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Request Supply Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
