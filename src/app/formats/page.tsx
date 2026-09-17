import type { Metadata } from "next";
import FormatsShowcase from "@/components/FormatsShowcase";

export const metadata: Metadata = {
  title: "Formats — AirConvert",
  description:
    "Browse every format category AirConvert supports — Images, Audio, Documents, Spreadsheets, and Video — and which engine powers each.",
};

export default function FormatsPage() {
  return <FormatsShowcase />;
}
