import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 font-mono text-sm text-subtext sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} airconvert</span>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link href={`/${lang}/formats`} className="hover:text-text transition-colors">
            {dict.nav.formats}
          </Link>
          <Link href={`/${lang}/security`} className="hover:text-text transition-colors">
            {dict.nav.security}
          </Link>
          <Link href={`/${lang}/faq`} className="hover:text-text transition-colors">
            {dict.nav.faq}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-text transition-colors">
            {dict.nav.about}
          </Link>
          <a
            href="https://github.com/Ayoub-EDAHLOULI/AirConvert"
            target="_blank"
            rel="noreferrer"
            className="hover:text-text transition-colors"
          >
            {dict.footer.github}
          </a>
        </nav>
      </div>
    </footer>
  );
}
