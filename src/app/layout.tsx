import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Dynamic import for Bootstrap JavaScript on client-side only
import dynamic from 'next/dynamic';
const BootstrapClient = dynamic(
  () => import('@/components/BootstrapClient'),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TOPUPIN - Marketplace Top Up Game",
  description: "Marketplace top up game tercepat dan terpercaya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="container py-4">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
