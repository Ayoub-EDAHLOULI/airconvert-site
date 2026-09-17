import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ — AirConvert",
  description:
    "Answers about AirConvert's offline guarantee, supported formats, and open-source availability.",
};

export default function FaqPage() {
  return <Faq />;
}
