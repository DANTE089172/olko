import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-stone/10 pt-40 pb-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone/60 md:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
