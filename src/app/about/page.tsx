import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const principles = [
  {
    title: "Strategic",
    body: "Procurement is treated as a strategic lever, not a transactional cost line.",
  },
  {
    title: "Technical",
    body: "Polymer-grade fluency and material expertise underpin every decision.",
  },
  {
    title: "Global",
    body: "Sourcing access across producing regions and trade lanes.",
  },
  {
    title: "Reliable",
    body: "Supply continuity is engineered, not assumed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OLKO"
        title="A modern procurement company for industrial materials."
        description="OLKO sits at the intersection of strategic procurement, supply-chain coordination and polymer market intelligence — built for manufacturers and buyers who need more than a trader."
      />

      <section className="border-b border-stone/10 py-28">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Our position</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                Built around the buyer, not the broker.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-stone/70">
            <Reveal delay={0.1}>
              <p>
                OLKO partners with plastic manufacturers, packaging converters,
                FMCG producers and industrial buyers to source polymers and
                industrial materials with strategic intent.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                We blend technical material knowledge with commercial discipline
                — covering procurement, supply-chain coordination, logistics
                and market intelligence under a single point of accountability.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The result is a procurement partner that sources strategically,
                manages supply continuity and gives buyers the intelligence
                they need to make confident commercial decisions.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-stone/10 py-28">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Principles</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-3xl text-3xl leading-tight md:text-5xl">
              How we operate.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-px bg-stone/10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <li key={p.title} className="bg-jet">
                <Reveal delay={i * 0.05}>
                  <div className="p-8">
                    <h3 className="font-heading text-xl text-tan">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-stone/60">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
