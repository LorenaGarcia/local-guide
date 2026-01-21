
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESSES, EVENTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative mb-16 rounded-[2.5rem] overflow-hidden min-h-[560px] flex flex-col items-center justify-center text-center p-8 bg-baby-blue/20">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      <div className="max-w-4xl relative z-10">
        <h2 className="text-slate-800 text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8">
          Descubre el <span className="text-peach italic underline decoration-butter">corazón</span> de tu barrio.
        </h2>
        <p className="text-slate-600 text-lg md:text-2xl font-medium mb-12 max-w-2xl mx-auto">
          Encuentra los mejores servicios locales, desde cafeterías acogedoras hasta expertos en bienestar.
        </p>
        
        <div className="bg-white p-3 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-3 max-w-3xl mx-auto border border-baby-blue/30">
          <div className="flex-1 flex items-center px-5 border-b md:border-b-0 md:border-r border-slate-100">
            <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
            <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold h-14 text-black" placeholder="¿Qué buscas?" type="text" />
          </div>
          <div className="flex-1 flex items-center px-5">
            <span className="material-symbols-outlined text-slate-400 mr-3">location_on</span>
            <input className="w-full bg-transparent border-none focus:ring-0 text-sm font-bold h-14 text-black" placeholder="Madrid, ES" type="text" defaultValue="Madrid, ES" />
          </div>
          <Link to="/buscar" className="bg-butterscotch text-slate-800 px-10 py-4 rounded-2xl font-black hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-butterscotch/20">
            <span>Buscar</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CategoryCard: React.FC<{ icon: string; name: string; sub: string }> = ({ icon, name, sub }) => (
  <div className="group cursor-pointer bg-white border border-baby-blue/30 p-8 rounded-3xl hover:border-peach hover:shadow-xl hover:-translate-y-1 transition-all text-center">
    <div className="bg-baby-blue/30 text-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-baby-blue transition-all">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h4 className="font-black text-xl mb-1 text-slate-800">{name}</h4>
    <p className="text-slate-400 text-sm font-bold">{sub}</p>
  </div>
);

const Home: React.FC = () => {
  const categories = [
    { icon: 'restaurant', name: 'Restaurantes', sub: 'Comida y Bebida' },
    { icon: 'content_cut', name: 'Belleza', sub: 'Estilo y Cuidado' },
    { icon: 'pets', name: 'Mascotas', sub: 'Veterinaria' },
    { icon: 'self_improvement', name: 'Bienestar', sub: 'Yoga y Pilates' },
    { icon: 'event', name: 'Eventos', sub: 'Comunidad' },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
      <Hero />

      {/* Categories */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-black tracking-tight text-slate-800">Explora por Categoría</h3>
          <button className="text-slate-500 font-bold text-sm flex items-center gap-1 hover:text-peach transition-colors">
            Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
        </div>
      </section>

      {/* Featured Gems */}
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
          {/* Main Featured */}
          <div className="md:col-span-2 md:row-span-2 group relative rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 min-h-[500px]">
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
              <Link to="/buscar" className="inline-block bg-white text-slate-800 px-8 py-4 rounded-2xl font-black text-sm hover:bg-baby-blue transition-all shadow-xl">
                Ver Detalles
              </Link>
            </div>
          </div>

          {/* Small Cards */}
          {BUSINESSES.slice(1, 5).map(biz => (
            <div key={biz.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${biz.image})` }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-black text-slate-800 truncate text-lg">{biz.name}</h5>
                  <span className="text-slate-800 bg-butter px-2 py-1 rounded-lg text-xs font-black">{biz.rating}</span>
                </div>
                <p className="text-xs text-slate-400 font-bold mb-4 uppercase tracking-widest">{biz.category} • {biz.subCategory}</p>
                <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">{biz.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Banner */}
      <section className="mb-24 bg-peach/10 rounded-[3rem] p-12 border border-peach/20 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-baby-blue/30 rounded-full blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-4xl font-black tracking-tight mb-6 text-slate-800">Próximos Eventos en el Barrio</h3>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">No te pierdas lo que está pasando a la vuelta de la esquina. Desde talleres hasta festivales, mantente conectado con tu comunidad.</p>
          </div>
          <Link to="/eventos" className="bg-white text-slate-700 border-2 border-peach px-8 py-4 rounded-2xl font-black hover:bg-peach hover:text-white transition-all shadow-xl shadow-peach/10">
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
};

export default Home;
