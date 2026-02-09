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
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 bg-white min-h-screen">

      <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8 overflow-hidden whitespace-nowrap">
        <Link href="/" className="hover:text-slate-600 shrink-0">Inicio</Link>
        <span className="material-symbols-outlined text-sm shrink-0">chevron_right</span>
        <span className="shrink-0">{biz.category}</span>
        <span className="material-symbols-outlined text-sm shrink-0">chevron_right</span>
        <span className="text-slate-900 font-bold truncate">{biz.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[300px] md:h-[500px]">
        <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
          <img src={biz.gallery?.[0] || biz.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={biz.name} />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-xl border border-white/20">
            <span className="material-symbols-outlined text-butterscotch fill-current text-sm">star</span>
            <span className="text-slate-800 font-black text-xs">{biz.rating} ({biz.reviewsCount} reseñas)</span>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-4 h-full">
          <div className="flex-1 relative rounded-[2rem] overflow-hidden">
            <img src={biz.gallery?.[1] || biz.image} className="w-full h-full object-cover" alt="Gallery 1" />
          </div>
          <div className="flex-1 relative rounded-[2rem] overflow-hidden group cursor-pointer">
            <img src={biz.gallery?.[2] || biz.image} className="w-full h-full object-cover" alt="Gallery 2" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
              <div className="text-white text-center">
                <span className="material-symbols-outlined text-3xl mb-1">grid_view</span>
                <p className="font-bold text-sm">Ver las {biz.gallery?.length || 24} fotos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{biz.category.toUpperCase()}</span>
                {biz.tags?.map(tag => (
                  <span key={tag} className="bg-butterscotch/20 text-butterscotch text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4">{biz.name}</h1>
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <span className="material-symbols-outlined text-baby-blue">location_on</span>
                <p className="text-sm md:text-base">{biz.location?.address}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-400 transition-colors">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-baby-blue transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:bg-white hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-baby-blue text-lg">language</span> Sitio Web
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:bg-white hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-peach text-lg">photo_camera</span> Instagram
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:bg-white hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-blue-400 text-lg">public</span> Facebook
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-slate-600 font-bold text-sm hover:bg-white hover:shadow-md transition-all">
              <span className="material-symbols-outlined text-green-400 text-lg">chat</span> WhatsApp
            </button>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-baby-blue rounded-full"></span>
              Sobre el estudio
            </h2>
            <div className="text-slate-500 text-lg leading-relaxed font-medium mb-12">
              <p>{biz.fullDescription || biz.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
              {biz.amenities?.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-baby-blue/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-baby-blue text-lg">check</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black text-slate-800 italic">Próximos Talleres</h2>
              <button className="text-slate-400 font-bold text-sm hover:text-baby-blue transition-colors">Ver Horarios</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biz.workshops?.map(ws => (
                <div key={ws.id} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-peach/20 text-peach text-[9px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">{ws.badge}</span>
                    <span className="text-slate-800 font-black text-xl">{ws.price}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-800 mb-3 group-hover:text-baby-blue transition-colors">{ws.title}</h4>
                  <p className="text-slate-400 text-xs font-bold mb-8">{ws.date}</p>
                  <button className="w-full bg-slate-50 py-4 rounded-2xl font-black text-sm text-slate-800 hover:bg-baby-blue transition-all">
                    {ws.price === 'GRATIS' ? 'Obtener Oferta' : 'Reservar Lugar'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <div className="sticky top-8 space-y-8">
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="flex items-end justify-between mb-8">
                <span className="text-slate-400 font-medium text-sm">Desde</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-slate-800">{biz.priceLevel.split('/')[0]}</span>
                  <span className="text-slate-400 font-bold text-sm">/{biz.priceLevel.split('/')[1] || 'clase'}</span>
                </div>
              </div>
              <button className="w-full bg-butterscotch py-6 rounded-3xl text-slate-800 font-black text-lg hover:brightness-105 transition-all shadow-xl shadow-butterscotch/20 mb-3 active:scale-[0.98]">
                Reservar ahora
              </button>
              <p className="text-center text-[10px] text-slate-400 font-medium italic mb-10">Asegura tu lugar en segundos</p>
              
              <div className="space-y-4 mb-10 pt-8 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">HORARIOS</p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-base">schedule</span> Lunes - Viernes
                  </div>
                  <span className="text-slate-800 font-black leading-none">{biz.hours?.weekdays}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-base">schedule</span> Sáb - Dom
                  </div>
                  <span className="text-slate-800 font-black leading-none">{biz.hours?.weekends}</span>
                </div>
              </div>

              {/* Mini Map */}
              <div className="relative h-32 rounded-3xl overflow-hidden border border-slate-100">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover grayscale opacity-40" alt="Mini Map" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                    <span className="material-symbols-outlined text-baby-blue fill-current text-lg">location_on</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90 backdrop-blur text-center">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate px-2">
                    {biz.location?.address.split(',').slice(-2).join(',')}
                  </p>
                </div>
              </div>
            </div>

            {biz.featuredReview && (
              <div className="bg-[#F8FAFB] p-10 rounded-[3rem] border border-slate-50">
                <p className="text-[9px] font-black text-butterscotch uppercase tracking-[0.2em] mb-6">DESTACADO DE LA COMUNIDAD</p>
                <p className="text-slate-600 font-medium italic leading-relaxed mb-8">
                  {biz.featuredReview.text}
                </p>
                <div className="flex items-center gap-4">
                  <img src={biz.featuredReview.authorImage} className="w-12 h-12 rounded-full object-cover" alt={biz.featuredReview.author} />
                  <div>
                    <h5 className="font-extrabold text-slate-800 text-sm leading-none mb-1">{biz.featuredReview.author}</h5>
                    <p className="text-[10px] text-slate-400 font-medium">{biz.featuredReview.memberSince}</p>
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
