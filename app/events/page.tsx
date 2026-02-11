"use client";

import React from 'react';
import { EVENTS } from '@/constants';
import Link from 'next/link';

export default function Events() {
  const categories = [
    { name: 'Bazares locales', color: 'bg-[#8FB7B0]' },
    { name: 'Arte y artesanía', color: 'bg-[#FFCCAC]' },
    { name: 'Música en vivo', color: 'bg-[#8FB7B0]' },
    { name: 'Gastronomía', color: 'bg-[#FFCCAC]' }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white">
  
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-800 leading-tight">
            Próximos <span className="text-[#2D9C8D]">Eventos y Bazares</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
            Descubre el pulso de tu vecindario. Desde mercados artesanales matutinos hasta conciertos en jardines secretos.
          </p>
        </div>
        
        <div className="flex items-center bg-white p-1 rounded-full border border-slate-100 shadow-sm">
          <button className="bg-[#E7F3F1] text-[#2D9C8D] px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">grid_view</span> Vista de póster
          </button>
          <button className="px-6 py-2.5 rounded-full text-sm font-bold text-slate-400 hover:text-slate-600 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">calendar_month</span> Calendario
          </button>
        </div>
      </div>


      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button className="bg-[#2D4552] text-white px-8 py-3 rounded-full text-sm font-bold whitespace-nowrap">
            Todos los eventos
          </button>
          {categories.map(cat => (
            <button key={cat.name} className="bg-white border border-slate-50 px-6 py-3 rounded-full text-sm font-bold text-slate-400 hover:text-slate-600 hover:border-slate-200 transition-all whitespace-nowrap">
              {cat.name}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl text-sm font-bold border border-slate-50 text-slate-600 shadow-sm">
            <span className="material-symbols-outlined text-lg">tune</span> Filtros
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl text-sm font-bold border border-slate-50 text-slate-600 shadow-sm">
            <span className="material-symbols-outlined text-lg text-slate-400">calendar_today</span> Este fin de semana <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {EVENTS.map((event) => {
          const isSalmon = event.category.toLowerCase().includes('gastronomía') || event.category.toLowerCase().includes('arte');
          const isMint = event.category.toLowerCase().includes('bazares') || event.category.toLowerCase().includes('música');
          
          return (
            <div key={event.id} className="relative group aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-slate-100">
              <Link href={`/events/${event.id}`} className="absolute inset-0 z-10">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
              </Link>
    
              <div className="absolute top-8 left-8 flex gap-2 z-20 pointer-events-none">
                {event.isTrending && (
                  <span className="bg-[#FF8A71] text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Tendencia</span>
                )}
                <span className={`${isSalmon ? 'bg-[#FF8A71]' : 'bg-[#2D9C8D]'} text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap`}>
                  {event.isFeatured && !event.isTrending ? 'DESTACADO' : event.category.toUpperCase()}
                </span>
                {event.isFeatured && event.isTrending && (
                  <span className="bg-[#2D9C8D] text-white px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Destacado</span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <Link href={`/events/${event.id}`} className="block group/content">
                  <div className="flex items-center gap-4 text-white/90 mb-3 text-[13px] font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#F9C365]">calendar_today</span> 
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[18px] text-[#F9C365]">
                        {event.attendeesCount ? 'group' : (event.locationName ? 'location_on' : 'schedule')}
                      </span> 
                      {event.attendeesCount ? `${event.attendeesCount} vecinos asistirán` : (event.locationName || event.time)}
                    </span>
                  </div>
                  
                  <h3 className="text-white text-3xl font-bold mb-4 leading-tight line-clamp-2 group-hover/content:text-[#F9C365] transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-white/80 mb-8 text-sm font-medium line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                </Link>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#F9C365] text-slate-800 py-3.5 rounded-[1.2rem] font-bold flex items-center justify-center gap-2 hover:brightness-105 transition-all text-sm shadow-lg shadow-black/20 relative z-30">
                    <span className="material-symbols-outlined text-lg">notifications</span> Recordarme
                  </button>
                  <button className="w-12 h-12 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all relative z-30">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
