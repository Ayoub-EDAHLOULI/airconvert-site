import Link from "next/link";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Pick a category",
    body: "Images, Audio, Documents, Spreadsheets, or Video — each with its own drag-and-drop drop zone and format picker.",
  },
  {
    title: "Drop your files, pick a format",
    body: "Batch conversion with live per-file progress, and a Cancel button if you change your mind mid-batch.",
  },
  {
    title: "Verify it yourself",
    body: "Block the app at the firewall and keep converting — nothing in the pipeline touches the network.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            How it works
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delayMs={i * 150}>
              <span className="font-mono text-sm text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-semibold text-text">{step.title}</h3>
              <p className="mt-1.5 text-sm text-subtext">{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Link
          href="/formats"
          className="mt-10 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          → browse all formats
        </Link>
      </div>
    </section>
  );
}
