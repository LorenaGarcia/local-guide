import React from 'react';
import Link from 'next/link';
import { EVENTS } from '@/constants';

function UpcomingEvents() {
  return (
    <section className="mb-24 bg-peach/10 rounded-[3rem] p-12 border border-peach/20 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-baby-blue/30 rounded-full blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-4xl font-black tracking-tight mb-6 text-slate-800">Próximos Eventos en el Barrio</h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">No te pierdas lo que está pasando a la vuelta de la esquina. Desde talleres hasta festivales, mantente conectado con tu comunidad.</p>
          </div>
          <Link href="/events" className="bg-white text-slate-700 border-2 border-peach px-8 py-4 rounded-2xl font-black hover:bg-peach hover:text-white transition-all shadow-xl shadow-peach/10">
            Ver Calendario
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {EVENTS.map(event => (
            <Link 
              key={event.id} 
              href={`/events/${event.id}`}
              className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex gap-5 group hover:shadow-xl transition-all cursor-pointer"
            >
              <div className={`flex-shrink-0 w-24 h-28 ${event.month === 'OCT' ? 'bg-baby-blue' : 'bg-peach'} text-slate-700 rounded-2xl flex flex-col items-center justify-center shadow-sm`}>
                <span className="text-xs font-black uppercase tracking-widest">{event.month}</span>
                <span className="text-3xl font-black">{event.day}</span>
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="font-black text-lg mb-2 text-slate-800 leading-tight group-hover:text-peach transition-colors">{event.title}</h5>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 text-xs font-black">
                  <span className="material-symbols-outlined text-sm text-peach">location_on</span>
                  <span>{event.locationName}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
  );
}

export { UpcomingEvents };
