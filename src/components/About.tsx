import Link from "next/link";
import Reveal from "./Reveal";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function About({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const t = dict.about;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary">{t.tag}</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 flex flex-col gap-5 text-subtext">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p>
            {t.airToolkitBefore}{" "}
            <span className="text-text">AirToolkit</span>
            {t.airToolkitAfter}
          </p>
        </Reveal>

        <Reveal delayMs={200} className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">{t.knowMore}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirConvert"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              {t.sourceGithub}
            </a>
            <Link
              href={`/${lang}/security`}
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              {t.howVerified}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
