export interface CategoryDef {
  name: string;
  status: "available" | "planned";
  description: string;
  formats: string;
  engine: string;
}

export const CATEGORIES: CategoryDef[] = [
  {
    name: "Images",
    status: "available",
    description:
      "jpg, png, webp, gif, bmp, tiff, svg, ico, tga, pnm, qoi, and avif (output only) — with optional max-dimension resize and JPG/WebP quality control.",
    formats: "jpg · png · webp · gif · bmp · tiff · svg · ico · tga · pnm · qoi · avif",
    engine: "Pure Rust (image, resvg) — no external binaries",
  },
  {
    name: "Audio",
    status: "available",
    description:
      "mp3, wav, flac, ogg, m4a, aac, opus, and wma via a bundled FFmpeg sidecar — the same binary Video uses.",
    formats: "mp3 · wav · flac · ogg · m4a · aac · opus · wma",
    engine: "Bundled FFmpeg sidecar",
  },
  {
    name: "Documents",
    status: "available",
    description:
      "md, txt, html, rtf, odt, and docx via a bundled Pandoc sidecar. Content conversion — not a full-fidelity layout engine.",
    formats: "md · txt · html · rtf · odt · docx",
    engine: "Bundled Pandoc sidecar",
  },
  {
    name: "Spreadsheets",
    status: "available",
    description:
      "csv, xlsx, xls, and ods as input; csv and xlsx as output. First worksheet only, data values only — no formulas, macros, or styling.",
    formats: "csv · xlsx · xls · ods (input only)",
    engine: "Pure Rust (calamine, rust_xlsxwriter, csv)",
  },
  {
    name: "Video",
    status: "available",
    description:
      "mp4, mov, avi, webm, and gif, plus mkv/flv/wmv as extra inputs — including a two-pass palette-based GIF encode for decent color quality.",
    formats: "mp4 · mov · avi · webm · gif",
    engine: "Bundled FFmpeg sidecar",
  },
];
