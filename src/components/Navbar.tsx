"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/lacak", label: "Lacak Pesanan" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-gradient-primary border-bottom border-mintneon sticky-top" style={{zIndex: 1050}}>
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-4 text-brightwhite">TOPUPIN</Link>
        
        <button 
          className="navbar-toggler border-0 bg-sunnyyellow" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <Link 
                  href={item.href} 
                  className={`nav-link px-3 text-brightwhite${item.href === '/' ? ' link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
            {item.label}
          </Link>
              </li>
        ))}
            <li className="nav-item">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="btn btn-cta ms-3 fw-bold">
                  Masuk
                </button>
              </Link>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  );
} 