import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — AirConvert",
  description:
    "Why AirConvert exists: built for internet-restricted VMs where cloud converters simply aren't an option.",
};

export default function AboutPage() {
  return <About />;
}
