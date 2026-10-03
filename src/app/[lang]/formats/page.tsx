import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import FormatsShowcase from "@/components/FormatsShowcase";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/formats">): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.formatsTitle,
    description: dict.meta.formatsDescription,
  };
}

export default async function FormatsPage({ params }: PageProps<"/[lang]/formats">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <FormatsShowcase dict={dict} />;
}
