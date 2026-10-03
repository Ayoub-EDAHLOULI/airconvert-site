"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/useTheme";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const NAV_LINKS = [
    { href: `/${lang}/formats`, label: dict.nav.formats },
    { href: `/${lang}/security`, label: dict.nav.security },
    { href: `/${lang}/faq`, label: dict.nav.faq },
    { href: `/${lang}/about`, label: dict.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 font-mono text-sm text-text"
          onClick={() => setOpen(false)}
        >
          <Image src="/logo.png" alt="" width={24} height={24} priority />
          <span className="font-semibold">airconvert</span>
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-sm text-subtext sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? dict.nav.lightMode : dict.nav.darkMode}
            className="text-subtext transition-colors hover:text-text"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <LanguageSwitcher lang={lang} label={dict.nav.changeLanguage} />

          <a
            href="https://github.com/Ayoub-EDAHLOULI/AirConvert/releases/download/v0.1.0/AirConvert_0.1.0_x64-setup.exe"
            className="border border-primary px-4 py-1.5 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {dict.nav.download}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            aria-expanded={open}
            className="text-text sm:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className="grid overflow-hidden border-border transition-[grid-template-rows] duration-300 ease-out sm:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 border-t border-border">
          <nav className="flex flex-col px-6 py-4 font-mono text-sm text-subtext">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 last:border-b-0 hover:text-text transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
