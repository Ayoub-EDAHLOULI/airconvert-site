import type { Dictionary } from "../types";

const dict: Dictionary = {
  meta: {
    siteTitle: "AirConvert — Offline-Dateikonverter, null Netzwerkaufrufe",
    siteDescription:
      "Ein vollständig offline und lokal arbeitender Dateikonverter für Bilder, Audio, Dokumente, Tabellen und Video. Keine Uploads, keine Netzwerkaufrufe, keine Cloud-Abhängigkeit — niemals.",
    formatsTitle: "Formate — AirConvert",
    formatsDescription:
      "Alle von AirConvert unterstützten Formatkategorien — Bilder, Audio, Dokumente, Tabellen und Video — und welche Engine jeweils dahintersteckt.",
    securityTitle: "Sicherheit & Verifizierung — AirConvert",
    securityDescription:
      "Wie das Versprechen von AirConvert, null Netzwerkaufrufe zu machen, geprüft wird: statisches Code-Audit, Prüfung des Sidecar-Umfangs und ein Firewall-/VM-Test auf Betriebssystemebene — alles selbst reproduzierbar.",
    faqTitle: "FAQ — AirConvert",
    faqDescription:
      "Antworten zur Offline-Garantie von AirConvert, zu den unterstützten Formaten und zur Verfügbarkeit als Open Source.",
    aboutTitle: "Über — AirConvert",
    aboutDescription:
      "Warum es AirConvert gibt: entwickelt für VMs ohne Internetzugang, auf denen Cloud-Konverter schlicht keine Option sind.",
  },
  nav: {
    formats: "formate",
    security: "sicherheit",
    faq: "faq",
    about: "über",
    download: "download",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    lightMode: "Zum hellen Modus wechseln",
    darkMode: "Zum dunklen Modus wechseln",
    changeLanguage: "Sprache ändern",
    scrollToTop: "Nach oben scrollen",
  },
  footer: {
    github: "github",
  },
  hero: {
    badge: "keine uploads · keine telemetrie · keine netzwerkaufrufe",
    title: "Dateien konvertieren. Ohne Ihren Rechner zu verlassen.",
    body: "AirConvert konvertiert Bilder, Audio, Dokumente, Tabellen und Video vollständig auf dem Gerät — kein Upload, kein Cloud-Dienst, keinerlei Netzwerkaufruf. Datei wählen, Format wählen, fertig.",
    downloadWindows: "für windows herunterladen",
    releaseNotes: "versionshinweise",
    deployNote: "Verteilung per Group Policy oder SCCM?",
    grabMsi: "nimm die .msi",
    msiSuffix: "stattdessen",
    terminalComment1: "# gesamten ausgehenden Verkehr blockieren",
    terminalComment2: "# jede Konvertierung funktioniert weiterhin",
  },
  whyOffline: {
    heading: "Warum offline wichtig ist",
    subheading:
      "Entstanden, weil ich im Job auf VMs ohne Internetzugang arbeite und einen Konverter brauchte, der wirklich ganz ohne Verbindung funktioniert.",
    points: [
      {
        num: "01",
        title: "Abgeschottete Rechner erreichen keinen Cloud-Konverter",
        body: "Air-gapped VMs und VMs mit eingeschränktem Internetzugang sind bei sicherheits- und zugriffskontrollorientierter Arbeit üblich. Ein Convertio oder CloudConvert im Browser ist dort schlicht nicht erreichbar.",
      },
      {
        num: "02",
        title: "Eine Datei hochzuladen ist ein Datenschutzproblem, nicht nur lästig",
        body: "Cloud-Konverter laden Ihre Datei auf einen Server, konvertieren sie dort und schicken sie zurück. Bei sensiblen Dokumenten ist genau dieser Hin- und Rückweg das eigentliche Problem — nicht nur die Netzwerkabhängigkeit.",
      },
      {
        num: "03",
        title: "Keine Netzwerkabhängigkeit, Punkt",
        body: "AirConvert führt jede Konvertierung auf der Festplatte durch, auf Ihrem Rechner, ganz ohne Netzwerkaktivität. Das ist eine überprüfbare Aussage, kein Slogan.",
      },
    ],
    seeVerification: "→ so wird das verifiziert",
  },
  howItWorks: {
    heading: "So funktioniert es",
    steps: [
      {
        num: "01",
        title: "Kategorie wählen",
        body: "Bilder, Audio, Dokumente, Tabellen oder Video — jede mit eigener Drag-and-drop-Zone und Formatauswahl.",
      },
      {
        num: "02",
        title: "Dateien ablegen, Format wählen",
        body: "Stapelkonvertierung mit Live-Fortschritt pro Datei und einer Abbrechen-Schaltfläche, falls Sie es sich mittendrin anders überlegen.",
      },
      {
        num: "03",
        title: "Selbst überprüfen",
        body: "Blockieren Sie die App in der Firewall und konvertieren Sie weiter — nichts in der Verarbeitung berührt das Netzwerk.",
      },
    ],
    browseFormats: "→ alle formate ansehen",
  },
  formats: {
    heading: "Fünf Kategorien, eine App",
    subheading:
      "Alles läuft lokal, im selben Fenster. Bilder und Tabellen sind reines Rust; Audio, Dokumente und Video nutzen mitgelieferte Sidecar-Binärdateien (FFmpeg, Pandoc) statt eines Cloud-Dienstes.",
    categories: {
      images: {
        name: "Bilder",
        description:
          "jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi und avif (nur Ausgabe) — mit optionaler Skalierung auf eine Maximalgröße und Qualitätseinstellung für JPG/WebP.",
        engine: "Reines Rust (image, resvg) — keine externen Binärdateien",
      },
      audio: {
        name: "Audio",
        description:
          "mp3, wav, flac, ogg, m4a, aac, opus und wma über einen mitgelieferten FFmpeg-Sidecar — dieselbe Binärdatei, die auch Video nutzt.",
        engine: "Mitgelieferter FFmpeg-Sidecar",
      },
      documents: {
        name: "Dokumente",
        description:
          "md, txt, html, rtf, odt und docx über einen mitgelieferten Pandoc-Sidecar. Inhaltskonvertierung — keine layoutgetreue Satz-Engine.",
        engine: "Mitgelieferter Pandoc-Sidecar",
      },
      spreadsheets: {
        name: "Tabellen",
        description:
          "csv, xlsx, xls und ods als Eingabe; csv und xlsx als Ausgabe. Nur das erste Arbeitsblatt, nur Datenwerte — keine Formeln, Makros oder Formatierung.",
        engine: "Reines Rust (calamine, rust_xlsxwriter, csv)",
        formatsNote: "(nur Eingabe)",
      },
      video: {
        name: "Video",
        description:
          "mp4, mov, avi, webm und gif, dazu mkv/flv/wmv als zusätzliche Eingaben — inklusive einer zweistufigen, palettenbasierten GIF-Kodierung für ordentliche Farbqualität.",
        engine: "Mitgelieferter FFmpeg-Sidecar",
      },
    },
  },
  verification: {
    heading: "Überprüfbar, nicht nur behauptet",
    subheading:
      "„Null Netzwerkaufrufe“ ist eine überprüfbare Aussage, kein Marketingspruch. So wird es genau geprüft — reproduzieren Sie es selbst, wenn Sie uns nicht einfach glauben wollen.",
    checks: [
      {
        title: "Statisches Code-Audit",
        body: "Den gesamten Quellcode nach fetch/XMLHttpRequest/WebSocket und Rust-seitigen Netzwerkprimitiven (reqwest, TcpStream, UdpSocket) durchsuchen. Kein HTTP-Plugin ist überhaupt eine Abhängigkeit — es gibt keine Ausnahme, die man begründen müsste.",
      },
      {
        title: "Prüfung des Sidecar-Umfangs",
        body: "Audio, Dokumente und Video rufen mitgelieferte Binärdateien (FFmpeg, Pandoc) auf statt eines Rust-Crates. Die Berechtigung zur Ausführung ist auf genau diese zwei benannten Sidecars beschränkt, auf nichts sonst.",
      },
      {
        title: "Firewall-Sperre auf Betriebssystemebene",
        body: "Den gesamten ausgehenden Verkehr der paketierten Binärdatei in der Windows-Firewall blockieren und bestätigen, dass jede Konvertierung — Bilder, Audio, Video, Dokumente, Tabellen — weiterhin vollständig funktioniert.",
      },
    ],
    noMatches: "(keine Treffer)",
    terminalSuccess: "✓ jede Konvertierung funktioniert weiterhin normal",
    statusLabel: "Aktueller Stand:",
    statusBody:
      "das statische Audit oben wurde über die gesamte Codebasis ausgeführt, ohne unerwartete Treffer. Der Firewall-/VM-Test ist ein manueller Schritt mit einem signierten Release-Build — noch nicht durchgeführt. Betrachten Sie jede Offline-Aussage als unbestätigt, bis diese Zeile aktualisiert wird.",
  },
  faq: {
    heading: "Häufig gestellte Fragen",
    questions: [
      {
        question: "Macht AirConvert wirklich null Netzwerkaufrufe?",
        answer:
          "Ja, ohne Ausnahme — anders als manche Offline-first-Apps gibt es überhaupt keine Abhängigkeit von einem HTTP-Plugin, und keine Funktion hat einen Grund, eine Netzwerkanfrage zu stellen. Auf der Sicherheitsseite steht genau, wie das geprüft wird.",
      },
      {
        question: "Brauche ich eine Internetverbindung, um es zu installieren oder zu nutzen?",
        answer:
          "Nein. Sobald die App gebaut oder installiert ist, funktioniert jede Konvertierung vollständig offline — kein Konto, kein Lizenzserver, keine Update-Prüfung.",
      },
      {
        question: "Welche Formate werden unterstützt?",
        answer:
          "Bilder (jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, avif), Audio (mp3, wav, flac, ogg, m4a, aac, opus, wma), Dokumente (md, txt, html, rtf, odt, docx), Tabellen (csv, xlsx, xls, ods) und Video (mp4, mov, avi, webm, gif). Die vollständige Übersicht steht auf der Formate-Seite.",
      },
      {
        question: "Kann es in PDF konvertieren?",
        answer:
          "Derzeit nicht. Der PDF-Export wurde in der Dokumente-Phase untersucht, aber wieder verworfen — die schlanke Offline-LaTeX-Engine (Tectonic) hätte entweder eine aktive Netzwerkabhängigkeit oder ein deutlich größeres mitgeliefertes Paketarchiv erfordert, und beides passt nicht zur Vorgabe „offline by design“. Das wird eventuell mit einem anderen Ansatz neu aufgegriffen.",
      },
      {
        question: "Ist es Open Source?",
        answer:
          "Ja — der gesamte Quellcode liegt auf GitHub. Sie können ihn lesen, prüfen oder selbst bauen, statt einer paketierten Binärdatei zu vertrauen.",
      },
      {
        question: "Welche Plattformen werden unterstützt?",
        answer:
          "Windows, gebaut mit Tauri. Das ist heute die Hauptplattform; die Codebasis schließt andere Plattformen für später nicht aus.",
      },
    ],
  },
  about: {
    tag: "# über",
    heading: "Gebaut von jemandem, der es zuerst selbst brauchte",
    paragraphs: [
      "Ich bin Ayoub, Softwareentwickler, und arbeite im Job auf VMs ohne Internetzugang. Cloud-Konverter wie Convertio oder CloudConvert laden Ihre Datei auf einen Server, konvertieren sie dort und schicken sie zurück — auf einem abgeschotteten Rechner ausgeschlossen, und selbst sonst ein echtes Datenschutzproblem bei sensiblen Dateien.",
      "AirConvert führt jede Konvertierung auf der Festplatte durch, auf Ihrem Rechner, ganz ohne Netzwerkaktivität. Es begann mit Bildern — reines Rust, keine externen Binärdateien — und wuchs Formatkategorie um Formatkategorie: Audio und Video über einen mitgelieferten FFmpeg-Sidecar, Dokumente über Pandoc, Tabellen wieder in reinem Rust. Jede Phase wurde ausgeliefert und als funktionierend verifiziert, bevor die nächste begann.",
    ],
    airToolkitBefore: "Es ist derselbe Instinkt wie hinter",
    airToolkitAfter:
      ", einer Offline-Werkzeugsammlung für Entwickler, die ich davor gebaut habe — keine Cloud, kein Nach-Hause-Telefonieren, die Garantie von null Netzwerkaufrufen als echte technische Vorgabe statt als Slogan.",
    knowMore: "mehr erfahren",
    sourceGithub: "quellcode auf github →",
    howVerified: "wie es verifiziert wird →",
  },
};

export default dict;
