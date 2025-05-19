'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 mt-auto bg-card-dark text-brightwhite">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="h2 fw-bold mb-3 text-sunnyyellow">TOPUPIN</div>
            <p className="mb-3">Platform Top Up Game & Voucher Murah, Cepat dan Terpercaya</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-decoration-none text-brightwhite hover-mintneon" aria-label="Instagram">Instagram</a>
              <a href="#" className="text-decoration-none text-brightwhite hover-mintneon" aria-label="WhatsApp">WhatsApp</a>
              <a href="#" className="text-decoration-none text-brightwhite hover-mintneon" aria-label="YouTube">YouTube</a>
              <a href="#" className="text-decoration-none text-brightwhite hover-mintneon" aria-label="Discord">Discord</a>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><Link href="/" className="text-decoration-none text-brightwhite hover-mintneon link-active">Beranda</Link></li>
                  <li className="mb-2"><Link href="/promo" className="text-decoration-none text-brightwhite hover-mintneon">Promo</Link></li>
                  <li className="mb-2"><Link href="/lacak" className="text-decoration-none text-brightwhite hover-mintneon">Lacak Pesanan</Link></li>
                  <li className="mb-2"><Link href="/about" className="text-decoration-none text-brightwhite hover-mintneon">Tentang</Link></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><Link href="#" className="text-decoration-none text-brightwhite hover-mintneon">Syarat & Ketentuan</Link></li>
                  <li className="mb-2"><Link href="#" className="text-decoration-none text-brightwhite hover-mintneon">Kebijakan Privasi</Link></li>
                  <li className="mb-2"><Link href="#" className="text-decoration-none text-brightwhite hover-mintneon">Affiliate Program</Link></li>
                  <li className="mb-2"><Link href="#" className="text-decoration-none text-brightwhite hover-mintneon">Reseller Program</Link></li>
                  <li className="mb-2"><Link href="#" className="text-decoration-none text-brightwhite hover-mintneon">Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 pt-3 border-top border-mintneon">
          <small>&copy; {new Date().getFullYear()} TOPUPIN. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
} 