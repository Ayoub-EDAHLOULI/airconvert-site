import type { CategoryId } from "@/lib/categories";

export interface CategoryDict {
  name: string;
  description: string;
  engine: string;
  /** Appended to the format list, e.g. "(input only)" on Spreadsheets. */
  formatsNote?: string;
}

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    formatsTitle: string;
    formatsDescription: string;
    securityTitle: string;
    securityDescription: string;
    faqTitle: string;
    faqDescription: string;
    aboutTitle: string;
    aboutDescription: string;
  };
  nav: {
    formats: string;
    security: string;
    faq: string;
    about: string;
    download: string;
    openMenu: string;
    closeMenu: string;
    lightMode: string;
    darkMode: string;
    changeLanguage: string;
    scrollToTop: string;
  };
  footer: {
    github: string;
  };
  hero: {
    badge: string;
    title: string;
    body: string;
    downloadWindows: string;
    releaseNotes: string;
    deployNote: string;
    grabMsi: string;
    msiSuffix: string;
    terminalComment1: string;
    terminalComment2: string;
  };
  whyOffline: {
    heading: string;
    subheading: string;
    points: { num: string; title: string; body: string }[];
    seeVerification: string;
  };
  howItWorks: {
    heading: string;
    steps: { num: string; title: string; body: string }[];
    browseFormats: string;
  };
  formats: {
    heading: string;
    subheading: string;
    categories: Record<CategoryId, CategoryDict>;
  };
  verification: {
    heading: string;
    subheading: string;
    checks: { title: string; body: string }[];
    noMatches: string;
    terminalSuccess: string;
    statusLabel: string;
    statusBody: string;
  };
  faq: {
    heading: string;
    questions: { question: string; answer: string }[];
  };
  about: {
    tag: string;
    heading: string;
    paragraphs: string[];
    /** Paragraph that links AirToolkit, split around the product name. */
    airToolkitBefore: string;
    airToolkitAfter: string;
    knowMore: string;
    sourceGithub: string;
    howVerified: string;
  };
}
