import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const solutions = [
  {
    n: "01",
    title: "Polymer Sourcing",
    body: "Strategic sourcing of resins and polymers across global producing regions, with a focus on consistency, specification fit and commercial value.",
  },
  {
    n: "02",
    title: "Procurement Support",
    body: "Hands-on procurement intelligence for buyers — supplier qualification, negotiation support and category strategy.",
  },
  {
    n: "03",
    title: "Supply-Chain Coordination",
    body: "Coordination across origin, freight, customs and inland logistics, with a single point of accountability for the buyer.",
  },
  {
    n: "04",
    title: "Logistics Solutions",
    body: "Containerised and bulk logistics planning aligned to production schedules and inventory positions.",
  },
  {
    n: "05",
    title: "Market Intelligence",
    body: "Polymer pricing trends, supply risk monitoring and alternate-material analysis for procurement teams.",
  },
  {
    n: "06",
    title: "Technical Sourcing Support",
    body: "Material qualification and grade matching for converters, manufacturers and product engineers.",
  },
  {
    n: "07",
    title: "Quality & Compliance Advisory",
    body: "Operational and supply-chain support for businesses requiring structured quality, compliance and procurement systems — including GMP, GDP, TGA and pharmaceutical logistics.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Sourcing, supply and intelligence — under one roof."
        description="A focused suite of capabilities for procurement, supply-chain and engineering teams operating in polymer-intensive industries."
      />

      <section className="border-b border-stone/10 py-24">
        <div className="container-page">
          <ul className="grid gap-px bg-stone/10 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <li key={s.title} className="bg-jet">
                <Reveal delay={i * 0.04}>
                  <div className="flex h-full flex-col p-10">
                    <p className="font-heading text-sm text-tan">{s.n}</p>
                    <h3 className="mt-8 text-2xl leading-tight">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone/60">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regulated Industries & Compliance Support */}
      <section className="border-b border-stone/10 py-28">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Regulated Industries</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                Regulated Industries &amp; Compliance Support
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-stone/65">
                OLKO supports businesses operating within regulated manufacturing,
                healthcare, pharmaceutical and food environments.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">Experience includes</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "GMP (Good Manufacturing Practice)",
                  "TGA regulated environments",
                  "GDP (Good Distribution Practice)",
                  "Pharmaceutical logistics",
                  "Clinical trial logistics support",
                  "Food manufacturing supply chains",
                  "Supplier qualification programs",
                  "Quality Management Systems (QMS)",
                  "Inventory traceability and compliance",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-stone/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality & Compliance Advisory detail */}
      <section className="border-b border-stone/10 py-28">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Advisory</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                Quality &amp; Compliance Advisory
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-stone/65">
                OLKO provides operational and supply-chain support for businesses
                requiring structured quality, compliance and procurement systems.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4">Services include</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Pharmaceutical 3PL setup support",
                  "Warehouse operational readiness",
                  "Supplier qualification frameworks",
                  "SOP development",
                  "Procurement governance",
                  "Inventory traceability systems",
                  "Supply-chain risk management",
                  "GMP / GDP process implementation support",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-stone/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 border border-stone/10 bg-steel/40 p-10 md:flex-row md:items-center md:p-16">
            <div>
              <p className="eyebrow">Engage</p>
              <h2 className="mt-4 max-w-2xl text-3xl md:text-4xl">
                Tell us what you source — we&rsquo;ll map a supply approach.
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
