import Link from "next/link";
import Reveal from "./Reveal";

const POINTS = [
  {
    num: "01",
    title: "Locked-down machines can't reach a cloud converter",
    body: "Air-gapped and internet-restricted VMs are common on security- and access-control-focused work. A browser-based Convertio or CloudConvert simply isn't reachable there.",
  },
  {
    num: "02",
    title: "Uploading a file is a privacy concern, not just a hassle",
    body: "Cloud converters upload your file to a server, convert it there, and send it back. For sensitive documents, that round-trip is the actual problem — not just the network dependency.",
  },
  {
    num: "03",
    title: "No network dependency, period",
    body: "AirConvert does every conversion on-disk, on your machine, with no network activity at all. This is a checkable claim, not a tagline.",
  },
];

export default function WhyOffline() {
  return (
    <section className="border-b border-border bg-background-subtle py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Why offline matters
          </h2>
          <p className="mt-3 max-w-xl text-subtext">
            Built because I work on internet-restricted VMs at my day job and
            needed a converter that actually works with zero connectivity.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {POINTS.map((point, i) => (
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
          href="/security"
          className="mt-8 inline-block font-mono text-sm text-primary transition-colors hover:text-primary-hover"
        >
          → see how this is verified
        </Link>
      </div>
    </section>
  );
}
