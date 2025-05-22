"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';

const promos = [
  {
    id: 1,
    image: 'https://via.placeholder.com/120x120?text=DN+Rebirth',
    title: 'Dragon Nest: Rebirth',
    type: 'Voucher',
    desc: '9.99 Voucher',
    discount: 3,
    priceOld: 156200,
    priceIDR: 151514,
    priceMYR: 39.41,
    stock: 5,
    link: '/promo/1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/120x120?text=BP+GI',
    title: 'BP Crystal GI - Login',
    type: 'Battle Pass',
    desc: 'Gnostic Hymn',
    discount: 1,
    priceOld: 140120,
    priceIDR: 138718,
    priceMYR: 36.08,
    stock: 8,
    link: '/promo/2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/120x120?text=Racing+Master',
    title: 'Racing Master',
    type: 'Gems',
    desc: '70 + 4 Gems',
    discount: 3,
    priceOld: 13648,
    priceIDR: 13238,
    priceMYR: 3.44,
    stock: 8,
    link: '/promo/3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/120x120?text=ML+Voucher',
    title: 'ML Voucher',
    type: 'Voucher',
    desc: '50 Diamonds',
    discount: 2,
    priceOld: 80000,
    priceIDR: 78000,
    priceMYR: 20.1,
    stock: 10,
    link: '/promo/4',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/120x120?text=PUBG+UC',
    title: 'PUBG Mobile UC',
    type: 'Voucher',
    desc: '60 UC',
    discount: 4,
    priceOld: 120000,
    priceIDR: 115200,
    priceMYR: 29.5,
    stock: 6,
    link: '/promo/5',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/120x120?text=Valorant',
    title: 'Valorant Points',
    type: 'Voucher',
    desc: '125 Points',
    discount: 2,
    priceOld: 90000,
    priceIDR: 88200,
    priceMYR: 22.6,
    stock: 7,
    link: '/promo/6',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/120x120?text=Free+Fire',
    title: 'Free Fire Diamond',
    type: 'Voucher',
    desc: '100 Diamonds',
    discount: 5,
    priceOld: 110000,
    priceIDR: 104500,
    priceMYR: 27.1,
    stock: 4,
    link: '/promo/7',
  },
];

export default function PromoCarousel() {
  return (
    <section className="py-5 bg-gradient-primary">
      <div className="container">
        <div className="d-flex align-items-center mb-3">
          <div className="position-relative me-2" style={{ width: 48, height: 48 }}>
            <Image 
              src="/flash-icon.png" 
              alt="Flash" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h2 className="mb-0 fw-bold flex-grow-1 text-skyblue">Flash Deal</h2>
          <span className="badge badge-promo fs-6 py-2 px-3">5 hari 03:06:36</span>
        </div>
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          modules={[Autoplay, Pagination]}
          className="promo-swiper"
        >
          {promos.map((promo) => (
            <SwiperSlide key={promo.id}>
              <div className="card card-glass h-100 border-0 shadow-sm position-relative" style={{outline: 'none', border: 'none'}}>
                <span className="position-absolute top-0 end-0 badge badge-promo z-2" style={{borderTopRightRadius:'0.5rem', borderBottomLeftRadius:'0.5rem', fontSize:'0.9rem'}}>
                  -{promo.discount}% OFF
                </span>
                <div className="d-flex align-items-center gap-2 p-3 pb-0">
                  <div className="position-relative" style={{ width: 60, height: 60 }}>
                    <Image 
                      src={promo.image} 
                      alt={promo.title} 
                      fill
                      className="rounded bg-brightwhite"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <div className="fw-bold small mb-1 text-brightwhite">{promo.title}</div>
                    <div className="badge bg-digitalpurple text-brightwhite me-1">{promo.type}</div>
                    <span className="small text-secondary">{promo.desc}</span>
                  </div>
                </div>
                <div className="card-body pt-2 pb-1 px-3">
                  <div className="text-decoration-line-through small mb-1 text-lightred">
                    Rp {promo.priceOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </div>
                  <div className="fw-bold mb-1 text-brightwhite">
                    Rp {promo.priceIDR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </div>
                  <div className="small mb-2 text-skyblue">
                    RM {promo.priceMYR.toFixed(2)}
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="small text-secondary">{promo.stock} tersisa</span>
                    <div className="progress flex-grow-1 ms-2" style={{height:'6px', background:'#222'}}>
                      <div className="progress-bar bg-mintneon" role="progressbar" style={{width: `${Math.max(0, Math.min(100, promo.stock*12))}%`}}></div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0 text-center pb-3">
                  <Link href={promo.link}>
                    <button className="btn btn-cta px-4">Lihat Detail</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 