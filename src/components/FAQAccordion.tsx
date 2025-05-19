"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara top up di TOPUPIN?",
    answer: "Pilih produk, masukkan data, lakukan pembayaran, saldo langsung masuk!"
  },
  {
    id: 2,
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami mendukung transfer bank, e-wallet, dan gerai retail."
  },
  {
    id: 3,
    question: "Apakah transaksi aman?",
    answer: "TOPUPIN menggunakan sistem keamanan modern dan data Anda terjaga."
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="container mb-5">
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="h4 fw-bold text-skyblue mb-4">Pertanyaan yang Sering Diajukan</h2>
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq) => (
              <div key={faq.id} className="accordion-item border-0 mb-3">
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button ${openId === faq.id ? "" : "collapsed"} fw-semibold`}
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    {faq.question}
                  </button>
                </h3>
                <div
                  className={`accordion-collapse collapse ${openId === faq.id ? "show" : ""}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 