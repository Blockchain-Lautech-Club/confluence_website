import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Confluence 2025 - Ogbomosho\'s Digital Transformation',
  description: 'The flagship tech conference uniting students, developers, and industry leaders at the intersection of blockchain, Web3, and emerging technologies. November 7-8, 2025 in Ogbomoso, Nigeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
