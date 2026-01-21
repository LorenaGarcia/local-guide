
import React from 'react';
import { BUSINESSES } from '../constants';

const SearchResults: React.FC = () => {
  return (
    <div className="h-[calc(100vh-81px)] flex flex-col overflow-hidden">
      {/* Filters Bar */}
      <div className="bg-white border-b border-slate-100 px-6 lg:px-12 py-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
            <span>Inicio</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-baby-blue">Resultados en Mapa</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Estudios de Yoga en el Centro</h1>
          <p className="text-slate-500 font-bold mt-1 text-sm">42 lugares verificados encontrados cerca de tu ubicación</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-baby-blue text-slate-700 text-sm font-black shadow-sm transition-all hover:brightness-95 active:scale-95">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Abierto ahora
          </button>
          {['Calificación 4.0+', 'Precio', 'Categoría'].map((filter, i) => (
            <button key={filter} className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-sm font-bold hover:border-peach transition-all group">
              {filter}
              <span className="material-symbols-outlined text-sm group-hover:text-peach transition-colors">
                {i === 2 ? 'filter_list' : 'expand_more'}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* List View */}
        <div className="w-full lg:w-[45%] xl:w-[40%] overflow-y-auto custom-scrollbar bg-white px-6 lg:pl-12 lg:pr-8 py-8 flex flex-col gap-8">
          {BUSINESSES.map((biz, idx) => (
            <div key={biz.id} className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:border-peach hover:shadow-2xl transition-all duration-500 ${idx === 0 ? 'ring-2 ring-baby-blue/20' : ''}`}>
              <div className="relative h-64 overflow-hidden">
                <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {biz.isFeatured && (
                  <div className="absolute top-5 left-5 bg-peach text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg shadow-lg">Destacado</div>
                )}
                <button className="absolute top-5 right-5 p-2.5 rounded-2xl bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-baby-blue transition-all shadow-xl">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              
              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 group-hover:text-baby-blue transition-colors mb-1">{biz.name}</h3>
                    <p className="text-slate-400 text-sm font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm text-peach">location_on</span>
                      {biz.location?.address} • Distancia: {biz.distance || '0.8 millas'}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-butterscotch/10 text-butterscotch px-3 py-1.5 rounded-xl text-sm font-black border border-butterscotch/20">
                    <span className="material-symbols-outlined text-base fill-current">star</span>
                    {biz.rating}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="flex gap-1 text-butterscotch font-black">
                    {biz.priceLevel}<span className="text-slate-200">$$</span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
                  <div className="flex flex-wrap gap-2">
                    {biz.tags?.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <button className="flex-1 bg-baby-blue hover:brightness-95 text-slate-700 font-black py-4 rounded-2xl transition-all shadow-lg shadow-baby-blue/20">
                    Ver detalles
                  </button>
                  <button className="p-4 rounded-2xl border border-slate-100 text-slate-400 hover:border-peach hover:text-peach transition-all">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </button>
                  <button className="p-4 rounded-2xl border border-slate-100 text-slate-400 hover:border-peach hover:text-peach transition-all">
                    <span className="material-symbols-outlined text-2xl">share</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map View */}
        <div className="hidden lg:block lg:flex-1 relative bg-slate-50 overflow-hidden">
          <div className="absolute inset-0 grayscale opacity-40 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover"></div>
          
          {/* Pins Simulation */}
          <div className="absolute top-[30%] left-[40%] cursor-pointer group animate-bounce">
            <div className="relative">
              <div className="bg-baby-blue text-slate-800 text-xs font-black px-4 py-2 rounded-full shadow-2xl border-2 border-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs fill-current">star</span>
                Zenith • $45
              </div>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-baby-blue mx-auto -mt-1 shadow-xl"></div>
            </div>
          </div>

          <div className="absolute top-[45%] left-[25%] cursor-pointer group">
            <div className="bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-baby-blue hover:text-white transition-all">
              Urban Flow • $25
            </div>
          </div>

          <div className="absolute top-[60%] left-[55%] cursor-pointer group">
            <div className="bg-white text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-slate-200 hover:bg-baby-blue hover:text-white transition-all">
              Core & Soul • $30
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-10 right-10 flex flex-col gap-3">
            <button className="bg-white p-4 rounded-2xl shadow-2xl text-slate-400 hover:text-baby-blue transition-colors">
              <span className="material-symbols-outlined">my_location</span>
            </button>
            <div className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-400">
              <button className="p-4 border-b border-slate-100 hover:text-baby-blue">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="p-4 hover:text-baby-blue">
                <span className="material-symbols-outlined">remove</span>
              </button>
            </div>
          </div>

          {/* Map Legend */}
          <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-lg p-5 rounded-[2rem] shadow-2xl border border-slate-100 max-w-xs">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-800">
                <div className="w-3.5 h-3.5 rounded-full bg-baby-blue ring-4 ring-baby-blue/20"></div>
                <span>Mejores coincidencias</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-300"></div>
                <span>Otros estudios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
