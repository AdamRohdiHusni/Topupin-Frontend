'use client';
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SliderBanner from "../components/SliderBanner";
import PromoCarousel from "../components/PromoCarousel";
import PromoBanner from "@/components/PromoBanner";
import USP from "@/components/USP";
import GameListSection from "@/components/GameListSection";
import FAQAccordion from "@/components/FAQAccordion";
import SupportSection from "@/components/SupportSection";
import SocialMediaSection from "@/components/SocialMediaSection";

function HeroSection() {
  return (
    <section className="py-5 position-relative overflow-hidden mb-5 bg-gradient-primary">
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-10">
            <h1 className="display-3 fw-bold mb-4 lh-1 text-brightwhite">
              Top-Up Game Favorit Kamu?<br />
              <span className="text-skyblue">Gampang Banget</span> di Topupin!
            </h1>
            <p className="lead mb-5 text-secondary">
              Easier can be <span className="text-digitalpurple fw-bold">Fun</span>.<br />
              Nikmati kemudahan transaksi top up ID game, login, dan voucher dengan harga terbaik!
      </p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
              <Link href="/topup">
                <Button variant="action" className="btn-lg px-5">Mulai Isi Sekarang</Button>
              </Link>
              <Link href="#cara-kerja">
                <Button variant="primary" className="btn-lg px-5">Lihat Cara Kerjanya</Button>
      </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentMethods() {
  const methods = ["BCA", "OVO", "ShopeePay", "QRIS", "BRI", "BNI", "Mandiri", "Alfamart", "Indomaret", "DANA", "GoPay"];
  
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {methods.map((method) => (
              <div key={method} className="border rounded px-3 py-2 small fw-bold shadow-sm" style={{background:'#ffe6a7', color:'#432818', borderColor:'#bb9457'}}>
                {method}
              </div>
            ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SliderBanner />
      <PromoCarousel />
      <HeroSection />
      <USP />
      <GameListSection />
      <FAQAccordion />
      <SupportSection />
      <SocialMediaSection />
      <PaymentMethods />
    </main>
  );
}
