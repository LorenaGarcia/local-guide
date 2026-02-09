import React from 'react';
import Link from 'next/link';
import { BUSINESSES, EVENTS } from '@/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative mb-16 rounded-[3rem] overflow-hidden min-h-[600px] flex flex-col items-center justify-center text-center p-8">
    
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-4xl relative z-10 px-4">
        <h2 className="text-white text-6xl md:text-8xl font-black leading-tight tracking-tight mb-6">
          Descubre el corazón de tu barrio.
        </h2>
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Encuentra los mejores servicios locales, desde cafeterías acogedoras hasta expertos en mascotas.
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm p-2 md:p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
          <div className="flex-[1.5] w-full flex items-center px-6">
            <span className="material-symbols-outlined text-slate-400 mr-3 scale-110">search</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-base font-medium h-14 text-slate-800 placeholder:text-slate-400" 
              placeholder="¿Qué estás buscando?" 
              type="text" 
            />
          </div>
          
          <div className="hidden md:block w-px h-8 bg-slate-200"></div>
          
          <div className="flex-1 w-full flex items-center px-6">
            <span className="material-symbols-outlined text-slate-400 mr-3 scale-110">location_on</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-base font-medium h-14 text-slate-800 placeholder:text-slate-400" 
              placeholder="Madrid, ES" 
              type="text" 
              defaultValue="Madrid, ES" 
            />
          </div>
          
          <Link 
            href="/search" 
            className="w-full md:w-auto bg-[#FDD475] text-slate-900 px-12 py-4 rounded-[1.5rem] font-bold text-lg hover:brightness-105 transition-all flex items-center justify-center shadow-md active:scale-95"
          >
            Buscar
          </Link>
        </div>
      </div>
    </section>
  );
};

const CategoryCard: React.FC<{ icon: string; name: string; color: string; iconColor: string }> = ({ icon, name, color, iconColor }) => (
  <div className="group cursor-pointer bg-white border border-slate-100 p-8 rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center flex flex-col items-center justify-center">
    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`} style={{ backgroundColor: color }}>
      <span className="material-symbols-outlined text-3xl" style={{ color: iconColor }}>{icon}</span>
    </div>
    <h4 className="font-bold text-slate-800 text-sm tracking-tight">{name}</h4>
  </div>
);

export default function Home() {
  const categories = [
    { icon: 'restaurant', name: 'Gastronomía', color: '#FFF4E5', iconColor: '#E69138' },
    { icon: 'fitness_center', name: 'Salud y Fitness', color: '#E5F9F6', iconColor: '#45B3A2' },
    { icon: 'local_mall', name: 'Compras', color: '#FFF9E5', iconColor: '#D4A017' },
    { icon: 'business_center', name: 'Servicios', color: '#FFEEEB', iconColor: '#E06666' },
    { icon: 'nightlife', name: 'Ocio', color: '#F1F5F9', iconColor: '#475569' },
    { icon: 'calendar_today', name: 'Eventos', color: '#E5F6F3', iconColor: '#2D8B7A' },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
      <Hero />

      <section className="mb-24 px-2">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h3 className="text-4xl font-black tracking-tight text-[#1E293B] mb-3">Explora por Categoría</h3>
            <p className="text-slate-400 font-medium text-lg">Servicios locales seleccionados para ti</p>
          </div>
          <button className="text-[#7AB8A4] font-bold text-base flex items-center gap-2 hover:gap-3 transition-all">
            Ver todas <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map(cat => <CategoryCard key={cat.name} icon={cat.icon} name={cat.name} color={cat.color} iconColor={cat.iconColor} />)}
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-black tracking-tight text-slate-800">Gemas Locales Destacadas</h3>
          <div className="flex gap-2">
            <button className="p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all">
              <span className="material-symbols-outlined block">chevron_left</span>
            </button>
            <button className="p-3 border border-slate-200 rounded-xl hover:bg-baby-blue/20 transition-all">
              <span className="material-symbols-outlined block">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Link href={`/business/${BUSINESSES[0].id}`} className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 min-h-[500px]">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url(${BUSINESSES[0].image})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-8 right-8 bg-butterscotch text-slate-800 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Destacado</div>
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex text-butter">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-base fill-current">star</span>)}
                </span>
                <span className="text-white/80 text-sm font-bold">4.9 (240 reseñas)</span>
              </div>
              <h4 className="text-white text-4xl font-black mb-4">{BUSINESSES[0].name}</h4>
              <p className="text-white/70 text-lg mb-8 max-w-md">{BUSINESSES[0].description}</p>
              <button className="inline-block bg-white text-slate-800 px-8 py-4 rounded-2xl font-black text-sm hover:bg-baby-blue transition-all shadow-xl">
                Ver Detalles
              </button>
            </div>
          </Link>

          {BUSINESSES.slice(1, 5).map(biz => (
            <Link href={`/business/${biz.id}`} key={biz.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${biz.image})` }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-black text-slate-800 truncate text-lg">{biz.name}</h5>
                  <span className="text-slate-800 bg-butter px-2 py-1 rounded-lg text-xs font-black">{biz.rating}</span>
                </div>
                <p className="text-xs text-slate-400 font-bold mb-4 uppercase tracking-widest">{biz.category} • {biz.subCategory}</p>
                <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">{biz.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
            <div key={event.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-50 flex gap-5 group hover:shadow-xl transition-all">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
