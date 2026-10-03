import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
  const t = dict.hero;

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary">{t.badge}</p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            {t.title}
          </h1>

          <p className="mt-4 max-w-lg text-lg text-subtext">{t.body}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirConvert/releases/download/v0.1.0/AirConvert_0.1.0_x64-setup.exe"
              className="bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              {t.downloadWindows}
            </a>
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirConvert/releases/tag/v0.1.0"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              {t.releaseNotes}
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-muted">
            {t.deployNote}{" "}
            <a
              href="https://github.com/Ayoub-EDAHLOULI/AirConvert/releases/download/v0.1.0/AirConvert_0.1.0_x64_en-US.msi"
              className="text-subtext underline underline-offset-2 transition-colors hover:text-primary"
            >
              {t.grabMsi}
            </a>{" "}
            {t.msiSuffix}
          </p>
        </div>

        <div
          className="animate-fade-up border border-border bg-surface font-mono text-sm"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="border-b border-border px-4 py-2 text-xs text-muted">
            verify-offline.ps1
          </div>
          <pre className="overflow-x-auto p-4 leading-relaxed text-subtext" dir="ltr">
            <code>
              <span className="text-muted">{t.terminalComment1}</span>
              {"\n"}
              <span className="text-primary">New-NetFirewallRule</span> `
              {"\n"} -DisplayName{" "}
              <span className="text-text">&quot;Block-AirConvert&quot;</span>{" "}
              `
              {"\n"} -Program{" "}
              <span className="text-text">airconvert-desktop.exe</span>{" "}
              -Action <span className="text-text">Block</span>
              {"\n\n"}
              <span className="text-muted">{t.terminalComment2}</span>
              <span className="animate-caret text-primary">▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
