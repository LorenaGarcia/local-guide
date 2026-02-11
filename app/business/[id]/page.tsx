"use client";

import React, { useState, use } from 'react';
import { BUSINESSES } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GalleryModal } from '@/components/gallery-modal';

export default function BusinessDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const biz = BUSINESSES.find(b => b.id === id);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  if (!biz) {
    notFound();
  }

  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setIsGalleryOpen(true);
  };

  const galleryImages = biz.gallery || [biz.image];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 bg-white min-h-screen">
      <div className="flex items-center gap-3 text-[13px] font-bold text-slate-400 mb-8 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-[#2D9C8D] transition-colors shrink-0">Inicio</Link>
        <span className="text-slate-300 font-normal">›</span>
        <span className="hover:text-[#2D9C8D] transition-colors shrink-0 cursor-pointer">{biz.category}</span>
        <span className="text-slate-300 font-normal">›</span>
        <span className="text-slate-600 truncate">{biz.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-12">
        <div 
          className="lg:col-span-8 relative rounded-[2rem] overflow-hidden group h-[350px] md:h-[500px] lg:h-[600px] cursor-pointer"
        >
          <img src={biz.gallery?.[0] || biz.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={biz.name} />
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm border border-white/20">
            <span className="material-symbols-outlined text-[#F9C365] fill-current text-[16px]">star</span>
            <span className="text-[#1F4D47] font-bold text-[13px]">{biz.rating} ({biz.reviewsCount} reseñas)</span>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-5">
          <div 
            className="flex-1 relative rounded-[2rem] overflow-hidden h-1/2 cursor-pointer group"
          >
            <img src={biz.gallery?.[1] || biz.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Gallery 1" />
          </div>
          <div 
            className="flex-1 relative rounded-[2rem] overflow-hidden group cursor-pointer h-1/2"
          >
            <img src={biz.gallery?.[2] || biz.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Gallery 2" />
            {!!biz.gallery?.length && (
              <div onClick={() => openGallery(biz.gallery?.length || 0)} className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl">grid_view</span>
                  <p className="font-bold text-sm tracking-tight">Ver las {biz.gallery?.length || 0} fotos</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#F1F5F9] text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">{biz.category || 'Fitness y Bienestar'}</span>
                {biz.isFeatured && (
                  <span className="bg-[#FDD475] text-[#1F4D47] text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">MEJOR VALORADO</span>
                )}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-[#1F4D47] mb-4 tracking-tight">{biz.name}</h1>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <span className="material-symbols-outlined text-[#2D9C8D] text-xl">location_on</span>
                <p className="text-sm md:text-base">{biz.location?.address}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">favorite</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-slate-50">
            {[
              { icon: 'language', label: 'Sitio Web', color: 'bg-emerald-50 text-emerald-600', iconColor: 'text-emerald-500' },
              { icon: 'photo_camera', label: 'Instagram', color: 'bg-orange-50 text-orange-600', iconColor: 'text-orange-500' },
              { icon: 'public', label: 'Facebook', color: 'bg-blue-50 text-blue-600', iconColor: 'text-blue-500' },
              { icon: 'forum', label: 'WhatsApp', color: 'bg-green-50 text-green-600', iconColor: 'text-green-500' }
            ].map((social, i) => (
              <button key={i} className="flex items-center gap-3 pl-2 pr-6 py-2.5 rounded-full border border-slate-100 bg-white hover:bg-slate-50 transition-all group shrink-0">
                <div className={`w-8 h-8 rounded-full ${social.color.split(' ')[0]} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-lg ${social.iconColor}`}>{social.icon}</span>
                </div>
                <span className="text-[#1F4D47] font-bold text-[13px]">{social.label}</span>
              </button>
            ))}
          </div>
          <section className="mb-16">
            <h2 className="text-2xl font-black text-[#1F4D47] mb-6">Sobre el estudio</h2>
            <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-3xl">
              {biz.fullDescription || biz.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
              {biz.amenities?.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E7F7F4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#2D9C8D] text-base font-black">check</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F4D47] mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-[13px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-black text-[#1F4D47]">Próximos Talleres</h2>
              <button className="text-[#2D9C8D] font-bold text-[13px] hover:underline">Ver Horarios</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biz.workshops?.map(ws => (
                <div key={ws.id} className="bg-white border border-slate-50 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className={`${ws.price === 'GRATIS' ? 'bg-[#FFF9ED] text-[#D4A017]' : 'bg-[#FFF2F0] text-[#FF8A71]'} text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider`}>
                        {ws.badge}
                      </span>
                      <span className="text-[#1F4D47] font-black text-xl">{ws.price}</span>
                    </div>
                    <h4 className="text-xl font-black text-[#1F4D47] mb-2 leading-tight">{ws.title}</h4>
                    <p className="text-slate-400 text-[13px] font-medium mb-8">{ws.date}</p>
                  </div>
                  <button className="w-full bg-[#C1E1DC] py-4 rounded-2xl font-black text-[13px] text-[#1F4D47] hover:brightness-105 transition-all">
                    {ws.price === 'GRATIS' ? 'Obtener Oferta' : 'Reservar Lugar'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-10 flex flex-col gap-6">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-50 shadow-sm">
              <div className="flex items-end justify-between mb-8 pb-8 border-b border-slate-50">
                <span className="text-slate-400 font-medium text-sm">Desde</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-[#1F4D47]">$35</span>
                  <span className="text-slate-400 font-bold text-sm ml-1">/clase</span>
                </div>
              </div>
              
              <button className="w-full bg-[#FDD475] py-5 rounded-2xl text-[#1F4D47] font-black text-lg hover:brightness-105 transition-all shadow-lg shadow-[#FDD475]/20 mb-3">
                Reservar ahora
              </button>
              <p className="text-center text-[11px] text-slate-300 font-medium mb-10 italic">Asegura tu lugar en segundos</p>
              
              <div className="space-y-5 mb-10">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">HORARIOS</p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span> Lunes - Viernes
                  </div>
                  <span className="text-[#1F4D47] font-black">{biz.hours?.weekdays}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2.5 text-slate-400 font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span> Sáb - Dom
                  </div>
                  <span className="text-[#1F4D47] font-black">{biz.hours?.weekends}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">UBICACIÓN</p>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#2D9C8D] text-xl shrink-0">location_on</span>
                  <div className="text-sm">
                    <p className="text-slate-600 font-medium leading-relaxed">{biz.location?.address}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] mt-3">ARTS DISTRICT, SAN FRANCISCO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        images={galleryImages} 
        businessName={biz.name}
        initialIndex={initialImageIndex}
      />
    </div>
  );
}
