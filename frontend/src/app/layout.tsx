import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://textdrop.in"),

  title: "Text Drop – Share Text Online Easily",

  description:
    "Text Drop is a simple online text-sharing tool to share notes, code snippets, links and important information using password-protected text sharing rooms. developed by Md Sahil Alam, a Bangalore based Software Engineer and founder of PG Near (pgnear.in)",

  applicationName: "Text Drop",

  authors: [
    {
      name: "Md Sahil Alam",
      url: "https://www.mdsahilalam.com/",
    },
  ],

  creator: "Md Sahil Alam",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Text Drop",
    "share text online",
    "online text sharing",
    "text sharing tool",
    "share notes online",
    "share code snippets",
    "temporary text sharing",
    "password protected text sharing",
    "online text sharing tool",
    "Md Sahil Alam",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Text Drop – Free Online Text Sharing Tool",
    description:
      "Share text, notes, code snippets and important information online with Text Drop. Simple, fast and password-protected text sharing.",
    url: "/",
    siteName: "Text Drop",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Text Drop – Online Text Sharing Tool",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Text Drop – Share Text Online Easily",
    description: "A simple online tool to share text, notes and code snippets.",
    creator: "@sahil_codex",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
