import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
