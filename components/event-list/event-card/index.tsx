import React from 'react';
import { EVENTS } from '@/constants';
import Link from 'next/link';
import { LocalEvent } from '@/types';

function EventCard({event, isSalmon}: {event: LocalEvent, isSalmon: boolean}) {

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
}

export { EventCard };
