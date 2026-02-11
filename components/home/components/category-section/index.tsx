"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { CATEGORIES } from '../category-card/category-card.utils';
import { CategoryCard } from '../category-card';
import { BUSINESSES } from '@/constants';
import { BusinessCard } from '@/components/business-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function CategorySection() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
   <>
   <section className="mb-32 px-2 relative">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black tracking-tight text-[#1E293B] mb-4">Explora por Categoría</h3>
          <p className="text-slate-400 font-medium text-xl">Servicios locales seleccionados para ti</p>
        </div>

        <div className="relative px-12 md:px-24">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            initialSlide={2}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1400: { slidesPerView: 5 },
            }}
            className="categories-swiper"
          >
            {CATEGORIES.map((cat, index) => (
              <SwiperSlide key={cat.name}>
                {({ isActive }) => (
                  <Link href={`/search?category=${encodeURIComponent(cat.name)}`} className="block">
                    <CategoryCard 
                      icon={cat.icon} 
                      name={cat.name} 
                      color={cat.color} 
                      iconColor={cat.iconColor} 
                      isActive={isActive}
                    />
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

      
          <button className="swiper-button-prev-custom absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl font-bold">chevron_left</span>
          </button>
          <button className="swiper-button-next-custom absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-3xl font-bold">chevron_right</span>
          </button>

          <div className="swiper-pagination-custom flex justify-center gap-3 mt-10"></div>
        </div>

        <style jsx global>{`
          .swiper-pagination-custom .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #CBD5E1;
            opacity: 1;
            transition: all 0.3s ease;
            border-radius: 5px;
          }
          .swiper-pagination-custom .swiper-pagination-bullet-active {
            width: 35px;
            background: #FDD475;
          }
          .categories-swiper {
            overflow: visible !important;
          }
        `}</style>
      </section>

      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-black tracking-tight text-slate-800">Gemas Locales Destacadas</h3>
          <div className="flex gap-2">
            <button className="p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all">
              <span className="material-symbols-outlined block">chevron_left</span>
            </button>
            <button className="p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all">
              <span className="material-symbols-outlined block">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESSES.slice(1, 4).map((biz) => (
            <BusinessCard key={biz.id} business={biz} />
          ))}
        </div>
      </section>
      </>
  );
}

export { CategorySection };
