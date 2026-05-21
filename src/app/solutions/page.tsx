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
