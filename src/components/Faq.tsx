"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    question: "Does AirConvert really make zero network calls?",
    answer:
      "Yes, with no exceptions — unlike some offline-first apps, there's no HTTP plugin dependency at all, and no feature has a reason to make a network request. See the Security page for exactly how this is checked.",
  },
  {
    question: "Do I need an internet connection to install or run it?",
    answer:
      "No. Once you have the app built or installed, every conversion works fully offline — no account, no license server, no update check.",
  },
  {
    question: "What formats does it support?",
    answer:
      "Images (jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, avif), Audio (mp3, wav, flac, ogg, m4a, aac, opus, wma), Documents (md, txt, html, rtf, odt, docx), Spreadsheets (csv, xlsx, xls, ods), and Video (mp4, mov, avi, webm, gif). See the Formats page for the full breakdown.",
  },
  {
    question: "Can it convert to PDF?",
    answer:
      "Not currently. PDF export was investigated for the Documents phase but backed out — the lightweight offline LaTeX engine option (Tectonic) turned out to require either a live network dependency or a much larger bundled package archive, neither of which fit the offline-by-design constraint. May be revisited with a different approach.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes — the full source is on GitHub. You're welcome to read it, audit it, or build it yourself instead of trusting a packaged binary.",
  },
  {
    question: "What platforms does it support?",
    answer:
      "Windows, built with Tauri. That's the primary target today; the codebase doesn't rule out other platforms later.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-text">{question}</span>
        <span
          className={`shrink-0 font-mono text-subtext transition-transform duration-500 ease-out ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5 text-sm text-subtext">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Frequently asked questions
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 border-t border-border">
          {QUESTIONS.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
