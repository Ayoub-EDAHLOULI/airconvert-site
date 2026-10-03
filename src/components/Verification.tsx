import Reveal from "./Reveal";
import type { Dictionary } from "@/i18n/types";

export default function Verification({ dict }: { dict: Dictionary }) {
  const t = dict.verification;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <h1 className="text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {t.heading}
          </h1>
          <p className="mt-3 max-w-xl text-subtext">{t.subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal delayMs={100}>
            <div className="divide-y divide-border border-t border-border">
              {t.checks.map((check) => (
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
              <pre className="overflow-x-auto p-4 leading-relaxed text-subtext" dir="ltr">
                <code>
                  <span className="text-muted">$</span> grep -rn{" "}
                  <span className="text-text">
                    &quot;fetch(\|XMLHttpRequest\|WebSocket&quot;
                  </span>{" "}
                  src/
                  {"\n"}
                  <span className="text-muted">{t.noMatches}</span>
                  {"\n\n"}
                  <span className="text-muted">$</span> grep -rn{" "}
                  <span className="text-text">
                    &quot;reqwest\|TcpStream\|UdpSocket&quot;
                  </span>{" "}
                  src-tauri/src/
                  {"\n"}
                  <span className="text-muted">{t.noMatches}</span>
                  {"\n\n"}
                  <span className="text-muted">$</span> New-NetFirewallRule \
                  {"\n"} -Program airconvert-desktop.exe -Action Block
                  {"\n\n"}
                  <span className="text-primary">{t.terminalSuccess}</span>
                  <span className="animate-caret text-primary">▍</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={300}>
          <p className="mt-10 max-w-2xl border-s-2 border-border ps-4 text-sm text-subtext">
            <span className="font-medium text-text">{t.statusLabel}</span>{" "}
            {t.statusBody}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
