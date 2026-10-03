"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/types";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-5 text-start"
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

export default function Faq({ dict }: { dict: Dictionary }) {
  const t = dict.faq;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 border-t border-border">
          {t.questions.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
