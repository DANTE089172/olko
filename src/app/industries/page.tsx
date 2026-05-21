import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const industries = [
  {
    n: "01",
    title: "Packaging",
    body: "Resin supply for film, rigid and flexible packaging converters working at scale.",
  },
  {
    n: "02",
    title: "Construction",
    body: "Polymer and material inputs for pipe, profile, insulation and infrastructure manufacturers.",
  },
  {
    n: "03",
    title: "Industrial Manufacturing",
    body: "Engineered-grade polymers and materials for industrial component producers.",
  },
  {
    n: "04",
    title: "Consumer Goods",
    body: "Reliable supply for housewares, durables and consumer-facing product lines.",
  },
  {
    n: "05",
    title: "Agriculture",
    body: "Materials for film, irrigation, packaging and on-farm industrial applications.",
  },
  {
    n: "06",
    title: "FMCG &amp; Import / Export",
    body: "Procurement and supply support for FMCG producers and trade-driven operations.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors we serve."
        description="OLKO works with manufacturers, converters and industrial buyers across polymer-intensive industries — from packaging to construction to FMCG."
      />

      <section className="py-24">
        <div className="container-page">
          <ul className="grid gap-px bg-stone/10 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((s, i) => (
              <li key={s.title} className="bg-jet">
                <Reveal delay={i * 0.04}>
                  <div className="flex h-full flex-col p-10">
                    <p className="font-heading text-sm text-tan">{s.n}</p>
                    <h3
                      className="mt-8 text-2xl leading-tight"
                      dangerouslySetInnerHTML={{ __html: s.title }}
                    />
                    <p
                      className="mt-4 text-sm leading-relaxed text-stone/60"
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
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
