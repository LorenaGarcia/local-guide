"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { CATEGORIES_BUSINESS } from '../category-card/category-card.utils';
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

        <div className="relative px-4 md:px-24">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={1.2}
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
              modifier: 1.5,
              slideShadows: false,
            }}
            breakpoints={{
              640: { 
                slidesPerView: 2,
                coverflowEffect: { modifier: 2 }
              },
              1024: { 
                slidesPerView: 3,
                coverflowEffect: { modifier: 2.5 }
              },
              1400: { 
                slidesPerView: 5,
                coverflowEffect: { modifier: 2.5 }
              },
            }}
            className="categories-swiper"
          >
            {CATEGORIES_BUSINESS.map((cat, index) => (
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

      
          <button className="swiper-button-prev-custom absolute left-0 md:left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">chevron_left</span>
          </button>
          <button className="swiper-button-next-custom absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-[#2D9C8D] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">chevron_right</span>
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
        <div className="flex items-center justify-between mb-10 px-4 md:px-0">
          <h3 className="text-3xl font-black tracking-tight text-slate-800">Gemas Locales Destacadas</h3>
          <div className="flex gap-2">
            <button className="swiper-button-prev-gems p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all text-slate-400 hover:text-[#2D9C8D]">
              <span className="material-symbols-outlined block">chevron_left</span>
            </button>
            <button className="swiper-button-next-gems p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all text-slate-400 hover:text-[#2D9C8D]">
              <span className="material-symbols-outlined block">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="px-4 md:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1.1}
            navigation={{
              nextEl: '.swiper-button-next-gems',
              prevEl: '.swiper-button-prev-gems',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="featured-swiper"
          >
            {BUSINESSES.slice(1, 4).map((biz) => (
              <SwiperSlide key={biz.id} className="h-auto">
                <BusinessCard business={biz} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      </>
  );
}

export { CategorySection };
