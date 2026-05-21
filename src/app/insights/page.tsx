import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

const themes = [
  "Polymer market updates",
  "Supply-chain risks",
  "Pricing trends",
  "Alternate materials",
  "Procurement insights",
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Polymer market, supply and procurement intelligence."
        description="A briefing space for buyers and supply teams. Coverage focused on what moves polymer markets and what it means for procurement."
      />

      <section className="border-b border-stone/10 py-24">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow">Coverage</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl leading-tight md:text-4xl">
                What we track.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-stone/10 border-y border-stone/10">
              {themes.map((t, i) => (
                <li key={t}>
                  <Reveal delay={i * 0.04}>
                    <div className="flex items-center justify-between py-6">
                      <span className="font-heading text-lg md:text-xl">
                        {t}
                      </span>
                      <span className="font-heading text-xs text-tan">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="container-page text-center">
          <Reveal>
            <p className="eyebrow">Briefings</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-8 max-w-3xl text-3xl leading-tight md:text-5xl">
              Insight publishing programme launching shortly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base text-stone/60">
              In the interim, request a tailored briefing for your category or
              supply position.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="/contact" className="mt-10 inline-flex btn-primary">
              Request a briefing
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
