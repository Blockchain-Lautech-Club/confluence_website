import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google"; // ✅ use Montserrat
import "./globals.css";
import AOSWrapper from "./providers/AOSWrapper";
import "bootstrap-icons/font/bootstrap-icons.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // optional custom CSS variable
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Confluence 2.0",
  description:
    "The Largest Student Web3 Conference in Africa. Powered by Blockchain LAUTECH.",
  icons: {
    icon: "/newfavicon.jpg",
    shortcut: "/newfavicon.jpg",
    apple: "/newfavicon.jpg",
  },
  openGraph: {
    title: "Confluence 2.0",
    description:
      "The Largest Student-Led Web3 Conference in Africa. Powered by Blockchain LAUTECH.",
    url: "https://confluence.blockchainlautech.club/",
    siteName: "Confluence 2.0",
    images: [
      {
        url: "/CONFLUENCEprev.jpg",
        width: 800,
        height: 800,
        alt: "Confluence 2.0 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confluence 2.0",
    description:
      "The Largest Student Web3 Conference in Africa. Powered by Blockchain LAUTECH.",
    images: ["/CONFLUENCEprev.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
