"use client";

import React from 'react';
import Link from 'next/link';
import { LocalEvent } from '@/types';

function EventCard({event, isSalmon}: {event: LocalEvent, isSalmon: boolean}) {
  const getCallToAction = (title: string) => {
    if (title.toLowerCase().includes('yoga')) return 'Reservar Plaza';
    if (title.toLowerCase().includes('crossfit')) return 'Inscribirse';
    return 'Más Información';
  };

  const getDateBadge = (id: string) => {
    if (id === 'e1') return 'PRÓXIMO SÁBADO';
    if (id === 'e4') return 'ESTE DOMINGO';
    return 'EN 2 SEMANAS';
  };

  return (
    <div className="relative group aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-[#1F4D47] flex flex-col">
      <Link href={`/events/${event.id}`} className="absolute inset-0 z-10">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F4D47] via-[#1F4D47]/40 to-transparent"></div>
      </Link>
      
      <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white/50 hover:text-white transition-all z-20 group/fav">
        <span className="material-symbols-outlined text-2xl group-hover/fav:fill-current">favorite</span>
      </button>

      <div className="relative z-20 p-8 flex flex-col h-full justify-end pointer-events-none">
        <div className="mb-4">
          <span className="bg-[#FDD475] text-[#1F4D47] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
            {getDateBadge(event.id)}
          </span>
        </div>
                  
        <h3 className="text-white text-3xl font-black mb-3 leading-tight group-hover:text-[#FDD475] transition-colors">
          {event.title}
        </h3>
                  
        <p className="text-white/80 mb-6 text-sm font-medium line-clamp-2 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center gap-4 text-white/70 mb-8 text-[12px] font-bold">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">schedule</span> 
            {event.time || '18:00h'}
          </span>
          <span className="flex items-center gap-1.5 line-clamp-1">
            <span className="material-symbols-outlined text-[18px]">location_on</span> 
            {event.locationName}
          </span>
        </div>

        <button className="w-full bg-[#2D9C8D] text-white py-4 rounded-2xl font-black text-sm hover:bg-[#25877a] transition-all shadow-lg shadow-black/20 pointer-events-auto">
          {getCallToAction(event.title)}
        </button>
      </div>
    </div>
  );
}

export { EventCard };
