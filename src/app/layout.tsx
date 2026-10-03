import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: swap /logo.png for a real 1200x630 og-image before launch — the
// square logo works as a stopgap but a proper OG image reads much better
// in link previews (Slack, Twitter, iMessage, etc.).
const SITE_TITLE = "AirConvert — Offline File Converter, Zero Network Calls";
const SITE_DESCRIPTION =
  "A fully offline, local-first file converter for images, audio, documents, spreadsheets, and video. No uploads, no network calls, no cloud dependency — ever.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

// Runs before hydration so the correct theme class is set on first paint —
// otherwise the page would flash the default (dark) theme before React's
// useTheme effect corrects it for light-mode or system-light visitors.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("airconvert-site-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
