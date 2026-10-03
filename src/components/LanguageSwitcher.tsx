"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";

function setLocaleCookie(locale: Locale) {
  document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000`;
}

export default function LanguageSwitcher({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    setLocaleCookie(next);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={label}
        aria-expanded={open}
        className="flex items-center gap-1.5 border border-border px-3 py-1.5 font-mono text-sm text-subtext transition-colors hover:border-border-strong hover:text-text"
      >
        <Globe size={14} />
        <span className="hidden sm:inline">{lang}</span>
      </button>

      {open && (
        <div className="absolute inset-e-0 top-full mt-2 min-w-36 border border-border bg-surface py-1 font-mono text-sm shadow-lg shadow-black/20">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => switchTo(locale)}
              className={`block w-full px-4 py-2 text-start transition-colors hover:bg-surface-hover hover:text-text ${
                locale === lang ? "text-primary" : "text-subtext"
              }`}
            >
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
