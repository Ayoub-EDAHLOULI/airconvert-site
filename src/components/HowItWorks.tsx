import Link from "next/link";
import Reveal from "./Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function HowItWorks({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.howItWorks;

  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {t.steps.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 150}>
              <span className="font-mono text-sm text-primary">
                {step.num}
              </span>
              <h3 className="mt-2 font-semibold text-text">{step.title}</h3>
              <p className="mt-1.5 text-sm text-subtext">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Link
          href={`/${lang}/formats`}
          className="mt-10 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          {t.browseFormats}
        </Link>
      </div>
    </section>
  );
}
