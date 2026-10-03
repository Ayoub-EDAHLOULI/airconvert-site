import "./globals.css";

// <html> and <body> are rendered by app/[lang]/layout.tsx so each locale
// can set its own `lang` and `dir`.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
}
