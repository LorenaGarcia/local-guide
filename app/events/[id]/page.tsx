import React from 'react';
import { EVENTS } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = EVENTS.find(e => e.id === id);

  if (!event) {
    notFound();
  }

  const similarEvents = EVENTS.filter(e => e.id !== id).slice(0, 3);

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 bg-white min-h-screen">
 
      <div className="flex items-center gap-2 text-xs font-black text-slate-400 mb-8 uppercase tracking-widest">
        <Link href="/events" className="hover:text-slate-600">Eventos</Link>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="hover:text-slate-600 cursor-pointer uppercase">{event.category}</span>
        <span className="material-symbols-outlined text-[10px]">chevron_right</span>
        <span className="text-slate-900 uppercase">{event.title}</span>
      </div>


      <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl mb-16 group">
        <img 
          src={event.image} 
          alt={event.title} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20">
          <div className="flex gap-4 mb-6">
            {event.isTrending && (
              <span className="bg-[#FFCCAC] text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Tendencia</span>
            )}
            {event.isFeatured && (
              <span className="bg-[#C1E1DC] text-slate-700 px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg">Evento Destacado</span>
            )}
          </div>
          
          <h1 className="text-white text-4xl md:text-7xl font-black mb-10 leading-tight max-w-4xl">
            {event.title}
          </h1>
          
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">calendar_today</span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">Fecha</p>
                <p className="text-white font-bold">{event.date}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">schedule</span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">Horario</p>
                <p className="text-white font-bold">{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white">location_on</span>
              </div>
              <div>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-0.5">Ubicación</p>
                <p className="text-white font-bold">{event.locationName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
        <div className="lg:col-span-2">
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-[#8FB7B0] rounded-full"></span>
              Sobre el evento
            </h2>
            <div className="text-slate-500 text-lg leading-relaxed space-y-6 font-medium">
              <p>{event.fullDescription || event.description || 'Prepárate para una experiencia inolvidable en este evento local.'}</p>
            </div>
          </section>

          {event.activities && (
            <section className="mb-16">
              <h3 className="text-2xl font-black text-slate-800 mb-8">Actividades destacadas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.activities.map((act, i) => (
                  <div key={i} className="bg-[#F8FAFB] p-8 rounded-[2rem] border border-slate-50 flex items-start gap-6 group hover:bg-white hover:shadow-xl hover:border-slate-100 transition-all duration-500">
                    <div className="w-14 h-14 shrink-0 rounded-[1.2rem] bg-white shadow-sm flex items-center justify-center group-hover:bg-[#FFCCAC] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined scale-110">{act.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-800 mb-2">{act.title}</h4>
                      <p className="text-slate-400 text-sm font-medium">{act.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-2xl font-black text-slate-800 mb-8">Ubicación</h3>
            <div className="bg-white rounded-[4rem] border border-slate-100 p-8 md:p-16 shadow-sm flex items-center gap-10 mb-6">
              <div className="w-24 h-24 rounded-full bg-[#F3F9F8] flex items-center justify-center shrink-0">
                 <div className="w-16 h-16 rounded-full bg-[#E8F4F2] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#2D9C8D] fill-current text-3xl">location_on</span>
                 </div>
              </div>
              <div className="max-w-2xl">
                <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Dirección del evento</p>
                <p className="text-[#1F4D47] text-2xl md:text-3xl font-black leading-tight">
                  {event.locationAddress || event.locationName}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            <div className="bg-[#F8FAFB] p-10 rounded-[3rem] border border-slate-50">
              <div className="mb-10">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Entrada Libre</p>
                <h3 className="text-5xl font-black text-slate-800">{event.price || 'Gratis'}</h3>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-[#FDD475] text-slate-900 py-5 rounded-[1.8rem] font-black flex items-center justify-center gap-3 hover:brightness-105 active:scale-[0.98] transition-all shadow-xl shadow-[#FDD475]/10">
                  <span className="material-symbols-outlined">notifications</span> Recordarme el evento
                </button>
                <button className="w-full bg-white text-slate-800 py-5 rounded-[1.8rem] font-black flex items-center justify-center gap-3 border border-slate-100 hover:bg-slate-50 transition-all">
                  <span className="material-symbols-outlined">share</span> Compartir evento
                </button>
              </div>
              
              {event.organizer && (
                <div className="mt-12 pt-12 border-t border-slate-200">
                  <div className="flex items-center gap-5">
                    <img src={event.organizer.image} className="w-14 h-14 rounded-full object-cover shadow-md" alt={event.organizer.name} />
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Organizado por</p>
                      <p className="text-slate-800 font-black">{event.organizer.name}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-8">
                    {['language', 'mail', 'share'].map(icon => (
                      <button key={icon} className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#8FB7B0] transition-colors">
                        <span className="material-symbols-outlined text-xl">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#F8FAFB] p-10 rounded-[3rem] border border-slate-50">
              <h4 className="text-slate-800 font-black mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8FB7B0]">info</span> Información útil
              </h4>
              <ul className="space-y-4">
                {(event.usefulInfo || ['Pet friendly', 'Estacionamiento']).map((info, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8FB7B0]"></span>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>


      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-800 mb-2 italic">Eventos similares</h2>
            <p className="text-slate-400 font-medium">También te podría interesar explorar estos eventos cercanos.</p>
          </div>
          <Link href="/events" className="text-[#8FB7B0] font-black text-sm flex items-center gap-2 group">
            Ver todos los eventos 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {similarEvents.map(ev => (
            <Link href={`/events/${ev.id}`} key={ev.id} className="relative group aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-900 cursor-pointer">
              <img src={ev.image} alt={ev.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-[#FFCCAC] text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {ev.category.toUpperCase()}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-black text-xl mb-2">{ev.title}</h4>
                <div className="flex items-center gap-2 text-white/60 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span>{ev.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
