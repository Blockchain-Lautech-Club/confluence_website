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
  title: "Confluence 2025",
  description:
    "The flagship tech conference uniting students, developers, and industry leaders at the intersection of blockchain, Web3, and emerging technologies.",
  icons: {
    icon: "/con-img (1).jpg",
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
