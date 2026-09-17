export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary">
            no uploads · no telemetry · no network calls
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Convert files. Never leave your machine.
          </h1>

          <p className="mt-4 max-w-lg text-lg text-subtext">
            AirConvert converts images, audio, documents, spreadsheets, and
            video entirely on-device — no upload, no cloud service, no
            network call of any kind. Pick a file, pick a format, done.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Ayoub-EDAHLOULI/airconvert-desktop"
              target="_blank"
              rel="noreferrer"
              className="bg-primary px-5 py-2.5 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              view on github
            </a>
            <a
              href="https://github.com/Ayoub-EDAHLOULI/airconvert-desktop#development"
              target="_blank"
              rel="noreferrer"
              className="border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition-colors hover:border-border-strong hover:bg-surface"
            >
              build from source
            </a>
          </div>

          <p className="mt-4 font-mono text-xs text-muted">
            no packaged installer yet — the app is fully working and
            open source, just not built into a signed release binary yet.
          </p>
        </div>

        <div
          className="animate-fade-up border border-border bg-surface font-mono text-sm"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="border-b border-border px-4 py-2 text-xs text-muted">
            verify-offline.ps1
          </div>
          <pre className="overflow-x-auto p-4 leading-relaxed text-subtext">
            <code>
              <span className="text-muted"># block all outbound traffic</span>
              {"\n"}
              <span className="text-primary">New-NetFirewallRule</span> `
              {"\n"} -DisplayName{" "}
              <span className="text-text">&quot;Block-AirConvert&quot;</span>{" "}
              `
              {"\n"} -Program{" "}
              <span className="text-text">airconvert-desktop.exe</span>{" "}
              -Action <span className="text-text">Block</span>
              {"\n\n"}
              <span className="text-muted"># every conversion still works</span>
              <span className="animate-caret text-primary">▍</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
