import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import BootstrapProvider
import BootstrapProvider from "@/components/BootstrapProvider";

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
        <BootstrapProvider />
      </body>
    </html>
  );
}
