import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import WhyOffline from "@/components/WhyOffline";
import HowItWorks from "@/components/HowItWorks";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <WhyOffline lang={lang} dict={dict} />
      <HowItWorks lang={lang} dict={dict} />
    </>
  );
}
