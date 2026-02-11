"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { CATEGORIES } from '../category-card/category-card.utils';
import { CategoryCard } from '../category-card';
import { BUSINESSES } from '@/constants';

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
                  <CategoryCard 
                    icon={cat.icon} 
                    name={cat.name} 
                    color={cat.color} 
                    iconColor={cat.iconColor} 
                    isActive={isActive}
                  />
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link href={`/business/${BUSINESSES[0].id}`} className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 min-h-[500px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${BUSINESSES[0].image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-8 right-8 bg-butterscotch text-slate-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Destacado</div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex text-butter">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-base fill-current">star</span>)}
                </span>
                <span className="text-white/80 text-sm font-bold">4.9 (240 reseñas)</span>
              </div>
              <h4 className="text-white text-4xl font-black mb-4">{BUSINESSES[0].name}</h4>
              <p className="text-white/70 text-lg mb-8 max-w-md">{BUSINESSES[0].description}</p>
              <button className="inline-block bg-white text-slate-800 px-8 py-4 rounded-2xl font-black text-sm hover:bg-baby-blue transition-all shadow-xl">
                Ver Detalles
              </button>
            </div>
          </Link>

          {BUSINESSES.slice(1, 5).map(biz => (
            <Link href={`/business/${biz.id}`} key={biz.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${biz.image})` }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-black text-slate-800 truncate text-lg">{biz.name}</h5>
                  <span className="text-slate-800 bg-butter px-2 py-1 rounded-lg text-xs font-black">{biz.rating}</span>
                </div>
                <p className="text-xs text-slate-400 font-bold mb-4 uppercase tracking-widest">{biz.category} • {biz.subCategory}</p>
                <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">{biz.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      </>
  );
}

export { CategorySection };
