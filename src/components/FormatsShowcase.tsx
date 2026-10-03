import { CATEGORY_IDS, CATEGORY_FORMATS } from "@/lib/categories";
import type { Dictionary } from "@/i18n/types";
import Reveal from "./Reveal";

export default function FormatsShowcase({ dict }: { dict: Dictionary }) {
  const t = dict.formats;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-xl text-subtext">{t.subheading}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-px overflow-hidden border border-border bg-border">
          {CATEGORY_IDS.map((id, i) => {
            const category = t.categories[id];
            return (
              <Reveal key={id} delayMs={i * 100}>
                <div className="bg-surface p-6 transition-colors duration-200 hover:bg-surface-hover">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-text">{category.name}</h3>
                    <span className="font-mono text-xs text-muted">
                      {category.engine}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-subtext">
                    {category.description}
                  </p>
                  <p className="mt-3 font-mono text-xs text-primary">
                    <span dir="ltr">{CATEGORY_FORMATS[id]}</span>
                    {category.formatsNote && ` ${category.formatsNote}`}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
