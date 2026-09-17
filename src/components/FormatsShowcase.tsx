import { CATEGORIES } from "@/lib/categories";
import Reveal from "./Reveal";

export default function FormatsShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Five categories, one app
          </h1>
          <p className="mt-3 max-w-xl text-subtext">
            Everything runs locally, in the same window. Images and
            Spreadsheets are pure Rust; Audio, Documents, and Video use
            bundled sidecar binaries (FFmpeg, Pandoc) rather than a cloud
            service.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-px overflow-hidden border border-border bg-border">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delayMs={i * 100}>
              <div className="bg-surface p-6 transition-colors duration-200 hover:bg-surface-hover">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-text">
                    {category.name}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {category.engine}
                  </span>
                </div>
                <p className="mt-2 text-sm text-subtext">
                  {category.description}
                </p>
                <p className="mt-3 font-mono text-xs text-primary">
                  {category.formats}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
