import Link from "next/link";
import Reveal from "./Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function WhyOffline({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.whyOffline;

  return (
    <section className="border-b border-border bg-background-subtle py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-3 max-w-xl text-subtext">{t.subheading}</p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {t.points.map((point, i) => (
            <Reveal key={point.num} delayMs={i * 120}>
              <div className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-muted">
                  {point.num}
                </span>
                <div>
                  <h3 className="font-semibold text-text">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-subtext">{point.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Link
          href={`/${lang}/security`}
          className="mt-8 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          {t.seeVerification}
        </Link>
      </div>
    </section>
  );
}
