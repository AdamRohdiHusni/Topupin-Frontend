"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const specialPromos = [
  {
    id: 1,
    title: "Mobile Legends",
    image: "/images/promo/ml.jpg",
    discount: "50%",
    price: "Rp 50.000",
    originalPrice: "Rp 100.000",
    endTime: "2024-03-20T23:59:59",
  },
  {
    id: 2,
    title: "PUBG Mobile",
    image: "/images/promo/pubg.jpg",
    discount: "30%",
    price: "Rp 70.000",
    originalPrice: "Rp 100.000",
    endTime: "2024-03-20T23:59:59",
  },
  {
    id: 3,
    title: "Free Fire",
    image: "/images/promo/ff.jpg",
    discount: "40%",
    price: "Rp 60.000",
    originalPrice: "Rp 100.000",
    endTime: "2024-03-20T23:59:59",
  },
  {
    id: 4,
    title: "Genshin Impact",
    image: "/images/promo/gi.jpg",
    discount: "25%",
    price: "Rp 75.000",
    originalPrice: "Rp 100.000",
    endTime: "2024-03-20T23:59:59",
  },
];

export default function PromoSpecial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Auto slide every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % specialPromos.length);
    }, 5000);

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const endTime = new Date(specialPromos[currentIndex].endTime).getTime();
      const distance = endTime - now;

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(countdownInterval);
    };
  }, [currentIndex]);

  return (
    <section className="container mb-5">
      <h2 className="text-center mb-4">Promo Spesial</h2>
      <div className="position-relative">
        <div className="card bg-gradient-primary border-0 shadow">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-12 col-md-8">
                <div className="position-relative" style={{ height: "300px" }}>
                  <Image
                    src={specialPromos[currentIndex].image}
                    alt={specialPromos[currentIndex].title}
                    fill
                    className="object-fit-cover rounded"
                  />
                </div>
              </div>
              <div className="col-12 col-md-4 text-center text-md-start">
                <h2 className="h3 fw-bold text-brightwhite mb-3">
                  Flash Sale! {specialPromos[currentIndex].title}
                </h2>
                <div className="mb-3">
                  <span className="badge bg-danger fs-5 mb-2">
                    {specialPromos[currentIndex].discount} OFF
                  </span>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                    <span className="h4 fw-bold text-brightwhite mb-0">
                      {specialPromos[currentIndex].price}
                    </span>
                    <span className="text-brightwhite text-opacity-75 text-decoration-line-through">
                      {specialPromos[currentIndex].originalPrice}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-brightwhite mb-2">Berakhir dalam:</p>
                  <div className="countdown-timer bg-dark bg-opacity-50 rounded p-2">
                    <span className="h5 fw-bold text-brightwhite mb-0">{timeLeft}</span>
                  </div>
                </div>
                <Link href={`/topup/${specialPromos[currentIndex].title.toLowerCase().replace(" ", "-")}`}>
                  <button className="btn btn-action btn-lg w-100">
                    Beli Sekarang
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
          <div className="d-flex gap-2">
            {specialPromos.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle ${
                  index === currentIndex ? "bg-action" : "bg-brightwhite bg-opacity-50"
                }`}
                onClick={() => setCurrentIndex(index)}
                style={{ width: "10px", height: "10px", padding: 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 