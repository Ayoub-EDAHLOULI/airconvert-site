// Language-neutral category data. Names, descriptions and engine labels
// live in the i18n dictionaries under `formats.categories[id]`.
export const CATEGORY_IDS = [
  "images",
  "audio",
  "documents",
  "spreadsheets",
  "video",
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export const CATEGORY_FORMATS: Record<CategoryId, string> = {
  images: "jpg · png · webp · gif · bmp · tiff · svg · ico · tga · pnm · qoi · avif",
  audio: "mp3 · wav · flac · ogg · m4a · aac · opus · wma",
  documents: "md · txt · html · rtf · odt · docx",
  spreadsheets: "csv · xlsx · xls · ods",
  video: "mp4 · mov · avi · webm · gif",
};
