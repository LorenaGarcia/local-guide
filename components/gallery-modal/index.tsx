"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs, FreeMode, EffectFade } from 'swiper/modules';
import { GalleryModalProps } from '@/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';

function GalleryModal({ isOpen, onClose, images, businessName, initialIndex = 0 }: GalleryModalProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl flex flex-col animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-700"
        style={{ 
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-between px-8 py-8">
        <div>
          <h2 className="text-white text-xl font-black tracking-tight">{businessName}</h2>
          <p className="text-white/60 text-sm font-medium mt-1">
            {currentIndex + 1} de {images.length} fotos
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all border border-white/10">
            <span className="material-symbols-outlined text-[20px]">share</span>
            Compartir
          </button>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
          >
            <span className="material-symbols-outlined text-2xl font-bold">close</span>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative flex items-center justify-center px-4 md:px-20">
        <Swiper
          modules={[Navigation, Thumbs, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          initialSlide={initialIndex}
          navigation={{
            nextEl: '.modal-next',
            prevEl: '.modal-prev',
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src={img} 
                  alt={`${businessName} gallery ${i}`}
                  className="max-w-full max-h-full object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="modal-prev absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10 active:scale-95">
          <span className="material-symbols-outlined text-3xl font-bold">chevron_left</span>
        </button>
        <button className="modal-next absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10 active:scale-95">
          <span className="material-symbols-outlined text-3xl font-bold">chevron_right</span>
        </button>
      </div>

      <div className="relative z-10 flex flex-col items-center pb-12 gap-10">
        <div className="w-full max-w-4xl px-8">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView={'auto'}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbs-swiper"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} style={{ width: '80px', height: '80px' }}>
                <div className={`w-full h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${currentIndex === i ? 'border-[#FDD475] scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                  <img src={img} className="w-full h-full object-cover" alt="thumbnail" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .thumbs-swiper {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .thumbs-swiper .swiper-slide {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}

export { GalleryModal };
