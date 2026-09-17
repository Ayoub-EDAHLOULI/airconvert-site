import Reveal from "./Reveal";

const CHECKS = [
  {
    title: "Static code audit",
    body: "Grep the entire source for fetch/XMLHttpRequest/WebSocket and Rust-side network primitives (reqwest, TcpStream, UdpSocket). No HTTP plugin is even a dependency — there's no exception to carve out.",
  },
  {
    title: "Sidecar scope check",
    body: "Audio, Documents, and Video shell out to bundled binaries (FFmpeg, Pandoc) rather than a Rust crate. The shell-execute capability is scoped to exactly those two named sidecars, nothing else.",
  },
  {
    title: "OS-level firewall block",
    body: "Block all outbound traffic for the packaged binary at the Windows Firewall and confirm every conversion — images, audio, video, documents, spreadsheets — keeps working fully.",
  },
];

export default function Verification() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Verifiable, not just claimed
          </h1>
          <p className="mt-3 max-w-xl text-subtext">
            &quot;Zero network calls&quot; is a checkable claim, not a
            marketing line. Here&apos;s exactly how it&apos;s checked —
            reproduce it yourself if you don&apos;t take our word for it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal delayMs={100}>
            <div className="divide-y divide-border border-t border-border">
              {CHECKS.map((check) => (
                <div key={check.title} className="py-5">
                  <h3 className="font-semibold text-text">{check.title}</h3>
                  <p className="mt-1.5 text-sm text-subtext">{check.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="border border-border bg-surface font-mono text-sm">
              <div className="border-b border-border px-4 py-2 text-xs text-muted">
                verify.sh
              </div>
              <pre className="overflow-x-auto p-4 leading-relaxed text-subtext">
                <code>
                  <span className="text-muted">$</span> grep -rn{" "}
                  <span className="text-text">
                    &quot;fetch(\|XMLHttpRequest\|WebSocket&quot;
                  </span>{" "}
                  src/
                  {"\n"}
                  <span className="text-muted">(no matches)</span>
                  {"\n\n"}
                  <span className="text-muted">$</span> grep -rn{" "}
                  <span className="text-text">
                    &quot;reqwest\|TcpStream\|UdpSocket&quot;
                  </span>{" "}
                  src-tauri/src/
                  {"\n"}
                  <span className="text-muted">(no matches)</span>
                  {"\n\n"}
                  <span className="text-muted">$</span> New-NetFirewallRule \
                  {"\n"} -Program airconvert-desktop.exe -Action Block
                  {"\n\n"}
                  <span className="text-primary">
                    ✓ every conversion keeps working normally
                  </span>
                  <span className="animate-caret text-primary">▍</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={300}>
          <p className="mt-10 max-w-2xl border-l-2 border-border pl-4 text-sm text-subtext">
            <span className="font-medium text-text">Current status:</span> the
            static audit above has been run against the full codebase with no
            unexpected matches. The firewall/VM run is a manual step against
            a signed release build — not yet performed. Treat any offline
            claim as unverified until this line is updated.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
