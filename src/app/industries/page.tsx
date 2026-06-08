import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const industries = [
  {
    n: "01",
    title: "Plastics Manufacturing",
    body: "Resin and polymer supply for plastic manufacturers working across injection moulding, extrusion and blow moulding.",
  },
  {
    n: "02",
    title: "Packaging Converters",
    body: "Resin supply for film, rigid and flexible packaging converters working at scale.",
  },
  {
    n: "03",
    title: "Industrial Manufacturing",
    body: "Engineered-grade polymers and materials for industrial component producers.",
  },
  {
    n: "04",
    title: "Construction Materials",
    body: "Polymer and material inputs for pipe, profile, insulation and infrastructure manufacturers.",
  },
  {
    n: "05",
    title: "Recycling &amp; Circular Economy",
    body: "Supply-chain support for recyclers, compounders and circular-economy operations.",
  },
  {
    n: "06",
    title: "Pharmaceutical &amp; Healthcare",
    body: "Procurement and supply support for pharmaceutical, healthcare and TGA-regulated environments.",
  },
  {
    n: "07",
    title: "Food Manufacturing",
    body: "Materials and supply-chain solutions for food-grade manufacturing and packaging operations.",
  },
  {
    n: "08",
    title: "Logistics &amp; Distribution",
    body: "Procurement and operational support for logistics providers, 3PLs and distribution networks.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries we support."
        description="OLKO works with manufacturers, converters and industrial buyers across polymer-intensive and regulated industries — from plastics and packaging to pharmaceutical and food manufacturing."
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
