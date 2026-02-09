import React from 'react';
import { EVENTS } from '@/constants';
import Link from 'next/link';

export default function Events() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 bg-white">
   
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-slate-800 leading-tight">
            Próximos <span className="text-[#8FB7B0]">Eventos y Bazares</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-2xl">
            Descubre el pulso de tu vecindario. Desde mercados artesanales matutinos hasta conciertos en jardines secretos.
          </p>
        </div>
        
        <div className="flex bg-[#F8FAFB] p-1.5 rounded-[2rem] border border-slate-100">
          <button className="bg-white text-slate-800 px-8 py-3 rounded-[1.5rem] text-sm font-bold flex items-center gap-2 shadow-sm border border-slate-50">
            <span className="material-symbols-outlined text-xl">grid_view</span> Vista de póster
          </button>
          <button className="px-8 py-3 rounded-[1.5rem] text-sm font-bold text-slate-400 hover:text-slate-800 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">calendar_month</span> Calendario
          </button>
        </div>
      </div>

 
      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          <button className="bg-[#1E293B] text-white px-8 py-3.5 rounded-full text-sm font-bold whitespace-nowrap">
            Todos los eventos
          </button>
          {['Bazares locales', 'Arte y artesanía', 'Música en vivo', 'Gastronomía'].map(cat => (
            <button key={cat} className="bg-white border border-slate-100 px-8 py-3.5 rounded-full text-sm font-bold text-slate-400 hover:border-[#8FB7B0]/30 transition-all whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-6 py-3.5 rounded-2xl text-sm font-bold border border-slate-100 text-slate-500">
            <span className="material-symbols-outlined text-xl">tune</span> Filtros
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3.5 rounded-2xl text-sm font-bold border border-slate-100 text-slate-500">
            <span className="material-symbols-outlined text-xl text-slate-400">calendar_today</span> Este fin de semana <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {EVENTS.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id} className="relative group aspect-[3/4] overflow-hidden rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-slate-900 cursor-pointer">
            <img 
              src={event.image} 
              alt={event.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000" 
            />
  
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            

            <div className="absolute top-8 left-8 flex gap-3 z-20">
              {event.isTrending && (
                <span className="bg-[#FFCCAC] text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Tendencia</span>
              )}
              {event.isFeatured && (
                <span className="bg-[#C1E1DC] text-slate-700 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">Destacado</span>
              )}
              {!event.isTrending && !event.isFeatured && (
                <span className="bg-[#FDD475] text-slate-800 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {event.category.toUpperCase()}
                </span>
              )}
            </div>

        
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
              <div className="flex items-center gap-4 text-white/90 mb-4 text-sm font-bold">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-white/60">calendar_today</span> 
                  {event.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-white/60">
                    {event.attendeesCount ? 'group' : 'schedule'}
                  </span> 
                  {event.attendeesCount ? `${event.attendeesCount} vecinos asistirán` : event.time}
                </span>
              </div>
              
              <h3 className="text-white text-3xl font-black mb-4 leading-tight group-hover:text-[#FDD475] transition-colors line-clamp-2">
                {event.title}
              </h3>
              
              <p className="text-white/70 mb-8 text-sm font-medium line-clamp-2 leading-relaxed">
                {event.description || 'Una experiencia única diseñada para conectar vecinos y celebrar el talento local de nuestro barrio.'}
              </p>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-[#FDD475] text-slate-900 py-4 rounded-[1.5rem] font-black flex items-center justify-center gap-2 hover:brightness-105 transition-all text-sm">
                  <span className="material-symbols-outlined text-xl">notifications</span> Recordarme
                </button>
                <button className="w-14 h-14 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                  <span className="material-symbols-outlined text-2xl">share</span>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    
      <section className="mt-12 p-12 md:p-24 bg-peach/10 rounded-[4rem] overflow-hidden relative border border-peach/20">
        <div className="relative z-10 max-w-3xl">
          <span className="text-peach font-black uppercase tracking-[0.3em] text-xs mb-8 block">Comunidad Conectada</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-slate-800 tracking-tight">No te pierdas lo mejor de tu zona.</h2>
          <p className="text-slate-600 mb-12 text-xl font-medium leading-relaxed">Únete a más de 4,000 vecinos que reciben una guía seleccionada del fin de semana en su correo cada jueves.</p>
          <form className="flex flex-col sm:flex-row gap-5 max-w-2xl">
            <input
              className="flex-1 bg-white border-none rounded-[2rem] px-8 py-5 text-sm font-bold focus:ring-4 focus:ring-peach/20 shadow-inner"
              placeholder="tu-correo@vecino.com"
              type="email"
            />
            <button className="bg-slate-800 text-white px-12 py-5 rounded-[2rem] font-black hover:scale-105 transition-all shadow-2xl shadow-slate-800/20">
              Suscribirse
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-8 italic font-bold">Nada de spam, solo comunidad. Cancela cuando quieras.</p>
        </div>
        <div className="absolute -right-32 -bottom-32 size-[500px] bg-baby-blue/20 rounded-full blur-[120px]"></div>
        <div className="absolute right-20 top-10 size-[300px] bg-butter/30 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
}
