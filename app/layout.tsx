import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Church Community Website Concept",
  description: "An urban, welcoming church website concept centered on worship, community, and belonging.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
