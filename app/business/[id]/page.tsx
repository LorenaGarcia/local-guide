import React from 'react';
import { BUSINESSES } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BusinessDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const biz = BUSINESSES.find(b => b.id === id);

  if (!biz) {
    notFound();
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 bg-white min-h-screen">

      <div className="flex items-center gap-3 text-[13px] font-bold text-slate-400 mb-10 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-[#2D9C8D] transition-colors shrink-0 uppercase tracking-wide">Inicio</Link>
        <span className="material-symbols-outlined text-[16px] shrink-0 text-slate-300 font-bold">chevron_right</span>
        <span className="hover:text-[#2D9C8D] transition-colors shrink-0 uppercase tracking-wide cursor-pointer">{biz.category}</span>
        <span className="material-symbols-outlined text-[16px] shrink-0 text-slate-300 font-bold">chevron_right</span>
        <span className="text-[#1F4D47] font-black truncate uppercase tracking-wide">{biz.name}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 h-auto">
        <div className="lg:col-span-8 relative rounded-[2.5rem] overflow-hidden group h-[300px] md:h-[500px] xl:h-[600px] shadow-sm">
          <img src={biz.gallery?.[0] || biz.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={biz.name} />
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/20">
            <span className="material-symbols-outlined text-[#F9C365] fill-current text-[18px]">star</span>
            <span className="text-[#1F4D47] font-black text-sm">{biz.rating} ({biz.reviewsCount} reseñas)</span>
          </div>
        </div>
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-6 h-[500px] md:h-[500px] xl:h-[600px]">
          <div className="flex-1 relative rounded-[2.5rem] overflow-hidden shadow-sm">
            <img src={biz.gallery?.[1] || biz.image} className="w-full h-full object-cover" alt="Gallery 1" />
          </div>
          <div className="flex-1 relative rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-sm">
            <img src={biz.gallery?.[2] || biz.image} className="w-full h-full object-cover" alt="Gallery 2" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="text-white text-center">
                <span className="material-symbols-outlined text-4xl mb-2">grid_view</span>
                <p className="font-black text-sm uppercase tracking-widest">Ver las {biz.gallery?.length || 24} fotos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#FF8A71] text-white text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-[0.15em]">{biz.category.toUpperCase()}</span>
                {biz.tags?.map(tag => (
                  <span key={tag} className="bg-[#F9C365] text-white text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-[0.15em]">{tag}</span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-[#1F4D47] mb-6 leading-[1.1] tracking-tight">{biz.name}</h1>
              <div className="flex items-center gap-3 text-slate-400 font-bold">
                <span className="material-symbols-outlined text-[#2D9C8D] text-2xl">location_on</span>
                <p className="text-base md:text-lg">{biz.location?.address}</p>
              </div>
            </div>
            <div className="flex gap-4 pt-10 md:pt-4">
              <button className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-400 hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-2xl">favorite</span>
              </button>
              <button className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#2D9C8D] hover:shadow-lg transition-all">
                <span className="material-symbols-outlined text-2xl">share</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-20">
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-[#1F4D47] font-black text-sm hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all group">
              <span className="material-symbols-outlined text-[#2D9C8D] text-2xl group-hover:scale-110 transition-transform">language</span> Sitio Web
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-[#1F4D47] font-black text-sm hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all group">
              <span className="material-symbols-outlined text-[#FF8A71] text-2xl group-hover:scale-110 transition-transform">photo_camera</span> Instagram
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-[#1F4D47] font-black text-sm hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all group">
              <span className="material-symbols-outlined text-[#4267B2] text-2xl group-hover:scale-110 transition-transform">public</span> Facebook
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white border-2 border-[#E7F7F4] text-[#1F4D47] font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all group">
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px] fill-current">mode_comment</span>
              </div>
              WhatsApp
            </button>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-black text-[#1F4D47] mb-10 flex items-center gap-4">
              Sobre el estudio
            </h2>
            <div className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium mb-16 max-w-4xl">
              <p>{biz.fullDescription || biz.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
              {biz.amenities?.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E7F7F4] flex items-center justify-center shrink-0 border border-[#2D9C8D]/10">
                    <span className="material-symbols-outlined text-[#2D9C8D] text-lg font-black">check</span>
                  </div>
                  <div>
                    <h4 className="font-black text-[#1F4D47] text-xl mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-black text-[#1F4D47]">Próximos Talleres</h2>
              <button className="text-[#2D9C8D] font-bold text-sm hover:underline underline-offset-8">Ver Horarios</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {biz.workshops?.map(ws => (
                <div key={ws.id} className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-10">
                      <span className={`${ws.price === 'GRATIS' ? 'bg-[#E7F7F4] text-[#2D9C8D]' : 'bg-[#FFF2F0] text-[#FF8A71]'} text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest`}>
                        {ws.badge}
                      </span>
                      <span className="text-[#1F4D47] font-black text-2xl uppercase tracking-tighter">{ws.price}</span>
                    </div>
                    <h4 className="text-2xl font-black text-[#1F4D47] mb-4 group-hover:text-[#2D9C8D] transition-colors leading-[1.2]">{ws.title}</h4>
                    <p className="text-slate-400 text-sm font-bold mb-12">{ws.date}</p>
                  </div>
                  <button className={`w-full ${ws.price === 'GRATIS' ? 'bg-[#FDD475]' : 'bg-[#FDD475]'} py-5 rounded-2xl font-black text-sm text-[#1F4D47] hover:brightness-105 shadow-xl shadow-[#FDD475]/20 transition-all`}>
                    {ws.price === 'GRATIS' ? 'Obtener Oferta' : 'Reservar Lugar'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          <div className="sticky top-10 flex flex-col gap-10">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
              <div className="flex items-end justify-between mb-10 pb-10 border-b border-slate-50">
                <span className="text-slate-400 font-bold text-base mb-1">Desde</span>
                <div className="text-right">
                  <span className="text-5xl font-black text-[#1F4D47] tracking-tighter">$35</span>
                  <span className="text-slate-400 font-black text-lg">/clase</span>
                </div>
              </div>
              
              <button className="w-full bg-[#FDD475] py-7 rounded-[2rem] text-[#1F4D47] font-black text-xl hover:brightness-105 transition-all shadow-2xl shadow-[#FDD475]/40 mb-4 active:scale-[0.98]">
                Reservar ahora
              </button>
              <p className="text-center text-[11px] text-slate-300 font-bold mb-12 italic">Asegura tu lugar en segundos</p>
              
              <div className="space-y-6 mb-12 pt-4">
                <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.25em] mb-6">HORARIOS</p>
                <div className="flex justify-between items-center text-base">
                  <div className="flex items-center gap-3 text-slate-400 font-bold">
                    <span className="material-symbols-outlined text-xl">schedule</span> Lunes - Viernes
                  </div>
                  <span className="text-[#1F4D47] font-black">{biz.hours?.weekdays}</span>
                </div>
                <div className="flex justify-between items-center text-base">
                  <div className="flex items-center gap-3 text-slate-400 font-bold">
                    <span className="material-symbols-outlined text-xl">schedule</span> Sáb - Dom
                  </div>
                  <span className="text-[#1F4D47] font-black">{biz.hours?.weekends}</span>
                </div>
              </div>

              <div className="relative h-44 rounded-[2.5rem] overflow-hidden group">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700" alt="Mini Map" />
                <div className="absolute inset-0 bg-blue-50/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-[#2D9C8D]/10">
                    <span className="material-symbols-outlined text-[#2D9C8D] fill-current text-2xl font-black">location_on</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md text-center border-t border-slate-50">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest truncate">
                    ARTS DISTRICT, SAN FRANCISCO
                  </p>
                </div>
              </div>
            </div>

            {biz.featuredReview && (
              <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFF9ED] rounded-bl-[5rem] -mr-8 -mt-8 opacity-50"></div>
                <p className="text-[11px] font-black text-[#F9C365] uppercase tracking-[0.25em] mb-8 relative z-10">DESTACADO DE LA COMUNIDAD</p>
                <p className="text-[#1F4D47] font-bold text-lg leading-relaxed mb-10 relative z-10 italic">
                  "{biz.featuredReview.text.replace(/"/g, '')}"
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <img src={biz.featuredReview.authorImage} className="w-14 h-14 rounded-full object-cover border-4 border-slate-50" alt={biz.featuredReview.author} />
                  <div>
                    <h5 className="font-black text-[#1F4D47] text-sm leading-none mb-1.5">{biz.featuredReview.author}</h5>
                    <p className="text-[11px] text-slate-300 font-black uppercase tracking-widest">{biz.featuredReview.memberSince}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
