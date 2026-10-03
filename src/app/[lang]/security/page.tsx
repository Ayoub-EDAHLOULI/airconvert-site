import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import Verification from "@/components/Verification";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/security">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.securityTitle,
    description: dict.meta.securityDescription,
  };
}

export default async function SecurityPage({ params }: PageProps<"/[lang]/security">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <Verification dict={dict} />;
}
