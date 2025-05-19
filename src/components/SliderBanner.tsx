"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
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
];

export default function SliderBanner() {
  return (
    <div className="w-100 bg-gradient-primary" style={{margin:0, padding:0}}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
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
              width: '100vw',
              margin: 0,
              padding: 0,
              borderRadius: 0,
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="position-relative w-100 h-100" style={{height: "500px"}}>
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-fit-cover"
                priority={banner.id === 1}
                style={{ opacity: 0.7, border: 'none', outline: 'none' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background:'rgba(30,30,30,0.6)'}}>
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
          width: 100vw !important;
          max-width: 100vw !important;
          height: 500px;
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
        @media (max-width: 768px) {
          .banner-slide {
            width: 100vw !important;
            height: 260px;
          }
        }
      `}</style>
    </div>
  );
} 