import type { Metadata } from "next";
import Verification from "@/components/Verification";

export const metadata: Metadata = {
  title: "Security & Verification — AirConvert",
  description:
    "How AirConvert's zero-network-calls claim is checked: a static code audit, sidecar scope check, and an OS-level firewall/VM test, all reproducible yourself.",
};

export default function SecurityPage() {
  return <Verification />;
}
