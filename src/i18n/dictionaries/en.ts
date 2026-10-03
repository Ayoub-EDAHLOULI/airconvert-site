import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirConvert — Offline File Converter, Zero Network Calls",
    siteDescription:
      "A fully offline, local-first file converter for images, audio, documents, spreadsheets, and video. No uploads, no network calls, no cloud dependency — ever.",
    formatsTitle: "Formats — AirConvert",
    formatsDescription:
      "Browse every format category AirConvert supports — Images, Audio, Documents, Spreadsheets, and Video — and which engine powers each.",
    securityTitle: "Security & Verification — AirConvert",
    securityDescription:
      "How AirConvert's zero-network-calls claim is checked: a static code audit, sidecar scope check, and an OS-level firewall/VM test, all reproducible yourself.",
    faqTitle: "FAQ — AirConvert",
    faqDescription:
      "Answers about AirConvert's offline guarantee, supported formats, and open-source availability.",
    aboutTitle: "About — AirConvert",
    aboutDescription:
      "Why AirConvert exists: built for internet-restricted VMs where cloud converters simply aren't an option.",
  },
  nav: {
    formats: "formats",
    security: "security",
    faq: "faq",
    about: "about",
    download: "download",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
    changeLanguage: "Change language",
    scrollToTop: "Scroll to top",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "no uploads · no telemetry · no network calls",
    title: "Convert files. Never leave your machine.",
    body: "AirConvert converts images, audio, documents, spreadsheets, and video entirely on-device — no upload, no cloud service, no network call of any kind. Pick a file, pick a format, done.",
    downloadWindows: "download for windows",
    releaseNotes: "release notes",
    deployNote: "deploying via Group Policy or SCCM?",
    grabMsi: "grab the .msi",
    msiSuffix: "instead",
    terminalComment1: "# block all outbound traffic",
    terminalComment2: "# every conversion still works",
  },
  whyOffline: {
    heading: "Why offline matters",
    subheading:
      "Built because I work on internet-restricted VMs at my day job and needed a converter that actually works with zero connectivity.",
    points: [
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
    ],
    seeVerification: "→ see how this is verified",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        num: "01",
        title: "Pick a category",
        body: "Images, Audio, Documents, Spreadsheets, or Video — each with its own drag-and-drop drop zone and format picker.",
      },
      {
        num: "02",
        title: "Drop your files, pick a format",
        body: "Batch conversion with live per-file progress, and a Cancel button if you change your mind mid-batch.",
      },
      {
        num: "03",
        title: "Verify it yourself",
        body: "Block the app at the firewall and keep converting — nothing in the pipeline touches the network.",
      },
    ],
    browseFormats: "→ browse all formats",
  },
  formats: {
    heading: "Five categories, one app",
    subheading:
      "Everything runs locally, in the same window. Images and Spreadsheets are pure Rust; Audio, Documents, and Video use bundled sidecar binaries (FFmpeg, Pandoc) rather than a cloud service.",
    categories: {
      images: {
        name: "Images",
        description:
          "jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, and avif (output only) — with optional max-dimension resize and JPG/WebP quality control.",
        engine: "Pure Rust (image, resvg) — no external binaries",
      },
      audio: {
        name: "Audio",
        description:
          "mp3, wav, flac, ogg, m4a, aac, opus, and wma via a bundled FFmpeg sidecar — the same binary Video uses.",
        engine: "Bundled FFmpeg sidecar",
      },
      documents: {
        name: "Documents",
        description:
          "md, txt, html, rtf, odt, and docx via a bundled Pandoc sidecar. Content conversion — not a full-fidelity layout engine.",
        engine: "Bundled Pandoc sidecar",
      },
      spreadsheets: {
        name: "Spreadsheets",
        description:
          "csv, xlsx, xls, and ods as input; csv and xlsx as output. First worksheet only, data values only — no formulas, macros, or styling.",
        engine: "Pure Rust (calamine, rust_xlsxwriter, csv)",
        formatsNote: "(input only)",
      },
      video: {
        name: "Video",
        description:
          "mp4, mov, avi, webm, and gif, plus mkv/flv/wmv as extra inputs — including a two-pass palette-based GIF encode for decent color quality.",
        engine: "Bundled FFmpeg sidecar",
      },
    },
  },
  verification: {
    heading: "Verifiable, not just claimed",
    subheading:
      "\"Zero network calls\" is a checkable claim, not a marketing line. Here's exactly how it's checked — reproduce it yourself if you don't take our word for it.",
    checks: [
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
    ],
    noMatches: "(no matches)",
    terminalSuccess: "✓ every conversion keeps working normally",
    statusLabel: "Current status:",
    statusBody:
      "the static audit above has been run against the full codebase with no unexpected matches. The firewall/VM run is a manual step against a signed release build — not yet performed. Treat any offline claim as unverified until this line is updated.",
  },
  faq: {
    heading: "Frequently asked questions",
    questions: [
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
    ],
  },
  about: {
    tag: "# about",
    heading: "Built by someone who needed it first",
    paragraphs: [
      "I'm Ayoub, a software engineer working on internet-restricted VMs at my day job. Cloud converters like Convertio or CloudConvert upload your file to a server, convert it there, and send it back — a non-starter on a locked-down machine, and a real privacy concern for sensitive files even when it isn't.",
      "AirConvert does every conversion on-disk, on your machine, with no network activity at all. It started with images — pure Rust, no external binaries — and grew one format category at a time: audio and video via a bundled FFmpeg sidecar, documents via Pandoc, spreadsheets back to pure Rust. Each phase shipped and was verified working before the next one started.",
    ],
    airToolkitBefore: "It's the same instinct behind",
    airToolkitAfter:
      ", an offline developer toolbox I built earlier — no cloud, no phone-home, the zero-network-calls guarantee treated as a real engineering constraint rather than a tagline.",
    knowMore: "know more",
    sourceGithub: "source on github →",
    howVerified: "how it's verified →",
  },
};

export default dict;
