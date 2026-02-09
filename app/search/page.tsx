import React from 'react';
import { BUSINESSES } from '@/constants';
import Link from 'next/link';

export default function SearchResults() {
  return (
    <div className="h-[calc(100vh-81px)] flex flex-col overflow-hidden">
      {/* Filters Bar */}
      <div className="bg-white border-b border-slate-100 px-6 lg:px-12 py-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="mb-0">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-6">
            <span>Inicio</span>
            <span className="material-symbols-outlined text-base">chevron_right</span>
            <span>Resultados en Mapa</span>
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight mb-3">Estudios de Yoga en el Centro</h1>
          <p className="text-slate-400 font-medium text-lg">42 lugares verificados encontrados cerca de tu ubicación</p>
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
          {BUSINESSES.map((biz, idx) => {
            if (idx === 0) {
              return (
                <Link href={`/business/${biz.id}`} key={biz.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-[300px] overflow-hidden">
                    <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {biz.isFeatured && (
                      <div className="absolute top-6 left-6 bg-[#FFCCAC] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                        Destacado
                      </div>
                    )}
                    <button className="absolute top-6 right-6 p-3 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all shadow-xl">
                      <span className="material-symbols-outlined text-2xl fill-current">favorite</span>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black text-slate-800">{biz.name}</h3>
                      <div className="flex items-center gap-1 bg-[#FFF9E5] text-[#FDD475] px-3 py-1.5 rounded-full text-sm font-black">
                        <span className="material-symbols-outlined text-base fill-current">star</span>
                        {biz.rating}
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm font-bold flex items-center gap-1.5 mb-6">
                      <span className="material-symbols-outlined text-lg text-slate-400">location_on</span>
                      {biz.location?.address} • Distancia: {biz.distance || '0.8 millas'}
                    </p>

                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex gap-0.5 text-[#FDD475] font-black">
                        {biz.priceLevel}<span className="text-slate-200">$$</span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
                          {biz.tags?.join(', ') || 'BIENESTAR'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="flex-1 bg-[#C1E1DC] hover:brightness-95 text-slate-700 font-extrabold py-5 rounded-3xl transition-all text-lg">
                        Ver detalles
                      </button>
                      <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:border-baby-blue hover:text-baby-blue transition-all">
                        <span className="material-symbols-outlined text-2xl">call</span>
                      </button>
                      <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:border-baby-blue hover:text-baby-blue transition-all">
                        <span className="material-symbols-outlined text-2xl">share</span>
                      </button>
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <Link href={`/business/${biz.id}`} key={biz.id} className="group flex gap-6 bg-white rounded-[2rem] p-4 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="w-40 h-40 shrink-0 overflow-hidden rounded-[1.5rem]">
                  <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                <div className="flex-1 py-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{biz.name}</h3>
                      <div className="flex items-center gap-1 text-[#FDD475] text-sm font-black">
                        <span className="material-symbols-outlined text-base fill-current">star</span>
                        {biz.rating}
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs font-bold">
                      {biz.location?.address} • Distancia: {biz.distance || '1.2 millas'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="bg-[#F1F5F9] px-4 py-2 rounded-xl text-xs font-black text-slate-600">
                      {biz.priceLevel} • {biz.tags?.[0] || 'Clases'}
                    </div>
                    <button className="flex items-center gap-1 text-[#C1E1DC] font-black text-xs hover:gap-2 transition-all">
                      Ver detalles
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}

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
}
