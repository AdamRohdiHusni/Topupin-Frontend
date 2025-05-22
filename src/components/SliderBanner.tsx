"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Top Up Game Favorit",
    desc: "Isi saldo game dengan harga terbaik",
    link: "/topup",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    title: "Promo Spesial",
    desc: "Dapatkan cashback hingga 50%",
    link: "/promo",
  },
  {
    id: 3,
    image: "/banner3.jpg",
    title: "Voucher Game",
    desc: "Beli voucher game digital",
    link: "/voucher",
  },
  {
    id: 4,
    image: "/banner4.jpg",
    title: "Event Terbaru",
    desc: "Ikuti event dan menangkan hadiah menarik!",
    link: "/event",
  },
  {
    id: 5,
    image: "/banner5.jpg",
    title: "Diskon Akhir Tahun",
    desc: "Nikmati diskon spesial akhir tahun!",
    link: "/diskon",
  },
];

export default function SliderBanner() {
  return (
    <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="banner-swiper"
        style={{ width: '100vw', margin: 0, padding: 0 }}
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            className="banner-slide"
            style={{
              width: '65vw',
              maxWidth: '1280px',
              minWidth: '320px',
              margin: 0,
              padding: 0,
              borderRadius: 0,
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div className="position-relative w-100 h-100" style={{height: "45vw", maxHeight: "720px"}}>
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-fit-cover"
                priority={banner.id === 3}
                style={{ border: 'none', outline: 'none' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="text-center px-3 px-md-5">
                  <h2 className="display-4 fw-bold mb-3 text-brightwhite">{banner.title}</h2>
                  <p className="lead mb-4 text-brightwhite">{banner.desc}</p>
                  <Link href={banner.link}>
                    <button className="btn btn-cta btn-lg">Lihat Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .banner-swiper {
          width: 100vw !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .banner-slide {
          width: 65vw !important;
          max-width: 1280px !important;
          min-width: 320px !important;
          height: 45vw;
          max-height: 720px;
          border-radius: 0 !important;
          overflow: hidden;
          outline: none !important;
          border: none !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #00B2FF;
        }
        @media (max-width: 1200px) {
          .banner-slide {
            width: 96vw !important;
            max-width: 98vw !important;
            min-width: 0 !important;
            height: 40vw;
            max-height: 420px;
          }
        }
        @media (max-width: 768px) {
          .banner-slide {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 0 !important;
            height: 260px;
            max-height: 260px;
          }
        }
      `}</style>
    </div>
  );
} 