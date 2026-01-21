
import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-slate-800 leading-[1.1]">
            Próximos <span className="text-baby-blue italic decoration-butter underline decoration-4">Eventos y Bazares</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">
            Descubre el pulso de tu vecindario. Desde mercados artesanales matutinos hasta conciertos en jardines secretos.
          </p>
        </div>
        <div className="flex bg-white p-2 rounded-3xl shadow-sm border border-slate-100">
          <button className="bg-baby-blue/30 text-slate-800 px-8 py-3.5 rounded-2xl text-sm font-black flex items-center gap-2 shadow-inner">
            <span className="material-symbols-outlined text-xl">grid_view</span> Vista de póster
          </button>
          <button className="px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-400 hover:text-slate-800 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">calendar_month</span> Calendario
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 mb-16">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          <button className="bg-slate-800 text-white px-8 py-3.5 rounded-full text-sm font-black whitespace-nowrap shadow-xl shadow-slate-800/20">Todos los eventos</button>
          {['Bazares locales', 'Arte y artesanía', 'Música en vivo', 'Gastronomía'].map(cat => (
            <button key={cat} className="bg-white border border-slate-100 px-8 py-3.5 rounded-full text-sm font-bold text-slate-500 hover:border-baby-blue hover:bg-baby-blue/5 whitespace-nowrap transition-all">
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-6 py-3.5 rounded-2xl text-sm font-black border border-slate-100 shadow-sm hover:border-peach transition-all">
            <span className="material-symbols-outlined text-xl">tune</span> Filtros
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3.5 rounded-2xl text-sm font-black border border-slate-100 shadow-sm hover:border-peach transition-all">
            <span className="material-symbols-outlined text-xl">calendar_today</span> Este fin de semana <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>

      <div className="masonry-grid pb-24">
        {/* Featured Large Card */}
        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl bg-slate-900 h-[600px] col-span-1 md:col-span-2 row-span-2">
          <img src={EVENTS[0].image} alt={EVENTS[0].title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent"></div>
          <div className="absolute top-10 left-10 flex gap-4">
            <span className="bg-peach text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-peach/20">Tendencia</span>
            <span className="bg-baby-blue text-slate-800 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] italic shadow-lg shadow-baby-blue/20">Destacado</span>
          </div>
          <div className="absolute bottom-0 p-12 w-full">
            <div className="flex items-center gap-6 text-white/90 mb-6 text-base font-bold">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-butter">calendar_today</span> {EVENTS[0].date}</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-butter">schedule</span> {EVENTS[0].time}</span>
            </div>
            <h3 className="text-white text-5xl md:text-6xl font-black mb-6 leading-tight max-w-2xl">{EVENTS[0].title}</h3>
            <p className="text-white/70 mb-10 text-xl font-medium max-w-xl">Vive la magia de la artesanía local bajo luces de neón. Más de 50 vendedores y sets de DJ en vivo.</p>
            <div className="flex gap-4">
              <button className="bg-butterscotch text-slate-800 px-10 py-5 rounded-[2rem] font-black flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-butterscotch/30">
                <span className="material-symbols-outlined text-2xl">notifications</span> Recordarme
              </button>
              <button className="bg-white/10 backdrop-blur-xl text-white border border-white/20 p-5 rounded-[2rem] hover:bg-white/20 transition-all shadow-xl">
                <span className="material-symbols-outlined text-2xl">share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Regular Event Cards */}
        {EVENTS.slice(1).map((event, i) => (
          <div key={event.id} className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border-b-4 ${i === 0 ? 'border-peach' : 'border-butter'} flex flex-col row-span-1`}>
            <div className="relative h-64 overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-4 py-3 rounded-2xl flex flex-col items-center shadow-2xl border border-slate-50">
                <span className={`text-[10px] font-black ${i === 0 ? 'text-peach' : 'text-butterscotch'} uppercase tracking-widest mb-1`}>{event.month}</span>
                <span className="text-2xl font-black leading-none text-slate-800">{event.day}</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <span className={`text-[11px] font-black tracking-[0.2em] uppercase mb-4 ${i === 0 ? 'text-peach' : 'text-butterscotch'}`}>{event.category}</span>
              <h4 className="text-2xl font-black leading-tight mb-4 text-slate-800 group-hover:text-baby-blue transition-colors">{event.title}</h4>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed line-clamp-3">Una experiencia única diseñada para conectar vecinos y celebrar el talento local de nuestro barrio.</p>
              
              <div className="mt-auto flex items-center justify-between gap-4 pt-6 border-t border-slate-50">
                <button className={`flex-1 ${i === 0 ? 'bg-peach shadow-peach/20' : 'bg-butter shadow-butter/20'} text-slate-800 py-3.5 rounded-2xl text-sm font-black hover:brightness-105 transition-all shadow-lg`}>
                  Recordarme
                </button>
                <div className="flex items-center gap-1.5 text-slate-400 font-bold text-xs uppercase">
                  <span className={`material-symbols-outlined text-lg ${i === 0 ? 'text-peach' : 'text-butterscotch'}`}>location_on</span>
                  <span>{event.locationName.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Call to action card */}
        <div className="bg-baby-blue/20 rounded-[3rem] p-10 border-4 border-dashed border-baby-blue/40 flex flex-col items-center justify-center text-center row-span-1 min-h-[400px]">
          <div className="size-20 bg-white text-baby-blue rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-baby-blue/20">
            <span className="material-symbols-outlined text-4xl">storefront</span>
          </div>
          <h4 className="text-2xl font-black mb-4 leading-tight text-slate-800">¿Quieres organizar tu propio bazar?</h4>
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">Nuestra plataforma te ayuda a llegar a miles de vecinos fácilmente.</p>
          <button className="w-full bg-white text-slate-800 border-2 border-baby-blue py-4 rounded-2xl font-black hover:bg-baby-blue transition-all shadow-xl shadow-baby-blue/10">
            Empezar ahora
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
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
};

export default Events;
