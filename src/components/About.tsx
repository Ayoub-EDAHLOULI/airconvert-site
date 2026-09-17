import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-primary"># about</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Built by someone who needed it first
          </h1>
        </Reveal>

        <Reveal delayMs={100} className="mt-10 flex flex-col gap-5 text-subtext">
          <p>
            I&apos;m Ayoub, a software engineer working on internet-restricted
            VMs at my day job. Cloud converters like Convertio or
            CloudConvert upload your file to a server, convert it there, and
            send it back — a non-starter on a locked-down machine, and a real
            privacy concern for sensitive files even when it isn&apos;t.
          </p>

          <p>
            AirConvert does every conversion on-disk, on your machine, with
            no network activity at all. It started with images — pure Rust,
            no external binaries — and grew one format category at a time:
            audio and video via a bundled FFmpeg sidecar, documents via
            Pandoc, spreadsheets back to pure Rust. Each phase shipped and
            was verified working before the next one started.
          </p>

          <p>
            It&apos;s the same instinct behind{" "}
            <span className="text-text">AirToolkit</span>, an offline
            developer toolbox I built earlier — no cloud, no phone-home, the
            zero-network-calls guarantee treated as a real engineering
            constraint rather than a tagline.
          </p>
        </Reveal>

        <Reveal delayMs={200} className="mt-12 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted">know more</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/airconvert-desktop"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              source on github →
            </a>
            <Link
              href="/security"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              how it&apos;s verified →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
