"use client";

import React from 'react';
import { BUSINESSES } from '@/constants';
import Link from 'next/link';

export default function SearchResults() {
  const filteredBusinesses = BUSINESSES.slice(0, 3); 

  return (
    <div className="h-[calc(100vh-85px)] flex flex-col overflow-hidden bg-white">

      <div className="px-6 lg:px-12 py-5 lg:py-6 flex items-center gap-3 border-b border-slate-50 shrink-0">
        <button className="flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-full bg-[#2D9C8D] text-white text-xs lg:text-sm font-bold shadow-sm whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px] lg:text-lg">tune</span>
          Todos los Filtros
        </button>
        <div className="flex items-center gap-2 px-5 lg:px-6 py-2.5 rounded-full bg-[#2D9C8D] text-white text-xs lg:text-sm font-bold whitespace-nowrap">
          Fitness y Bienestar
          <span className="material-symbols-outlined text-[18px] lg:text-lg">close</span>
        </div>
        {['Rango de Precio', 'Distancia', 'Abierto Ahora'].map((filter) => (
          <button key={filter} className="hidden md:flex px-5 lg:px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs lg:text-sm font-bold hover:bg-slate-50 transition-all whitespace-nowrap">
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-1 overflow-hidden relative">
        <div className="w-full lg:w-[480px] xl:w-[580px] overflow-y-auto custom-scrollbar px-6 lg:px-12 py-10 lg:py-12 flex flex-col shrink-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Resultados en San Francisco</p>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1F4D47]">Fitness y Bienestar</h1>
            </div>
            <button className="text-[#2D9C8D] text-sm font-bold hover:underline mb-1 whitespace-nowrap">
              Ordenar por Relevancia
            </button>
          </div>

          <div className="flex flex-col gap-8 pb-20">
            {filteredBusinesses.map((biz, idx) => {
              const tagStyles = [
                { bg: 'bg-[#E7F7F4]', text: 'text-[#2D9C8D]', border: 'border-transparent' },
                { bg: 'bg-white', text: 'text-[#F9C365]', border: 'border-[#F9C365]' },
                { bg: 'bg-[#F1F5F9]', text: 'text-[#1F4D47]', border: 'border-transparent' },
                { bg: 'bg-[#FFF2F0]', text: 'text-[#FF8A71]', border: 'border-transparent' },
                { bg: 'bg-[#FFF7ED]', text: 'text-[#F9A63A]', border: 'border-transparent' },
                { bg: 'bg-[#E7F7F4]', text: 'text-[#2D9C8D]', border: 'border-transparent' },
              ];

              return (
                <Link 
                  href={`/business/${biz.id}`} 
                  key={biz.id} 
                  className="group flex flex-col sm:flex-row gap-0 sm:gap-5 bg-white rounded-[2.5rem] p-0 overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all min-h-fit sm:min-h-[200px]"
                >
                  <div className="relative w-full h-48 sm:w-44 lg:w-40 xl:w-52 sm:h-auto shrink-0 overflow-hidden bg-slate-100">
                    <img src={biz.image} alt={biz.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-red-500 transition-all shadow-sm">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                    </button>
                  </div>
                  
                  <div className="flex-1 p-6 sm:p-0 sm:pr-8 sm:py-6 flex flex-col justify-between">
                    <div className="mb-4">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-xl font-bold text-[#1F4D47] leading-[1.2] line-clamp-2 md:line-clamp-1">{biz.name}</h3>
                        <div className="flex items-center gap-1 text-[#F9C365] text-sm font-bold whitespace-nowrap mt-1">
                          <span className="material-symbols-outlined text-base fill-current">star</span>
                          {biz.rating}
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-5 font-medium line-clamp-2 leading-relaxed">
                        {idx === 0 ? 'Clases personalizadas y Reformers de alta gama.' : 
                         idx === 1 ? 'Entrenamiento funcional y pesas libres 24/7.' : 
                         'Vinyasa, Hatha y sesiones de meditación guiada.'}
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${tagStyles[idx * 2].bg} ${tagStyles[idx * 2].text} ${tagStyles[idx * 2].border}`}>
                          {biz.subCategory || (idx === 0 ? 'PILATES' : idx === 1 ? 'GIMNASIO' : 'YOGA')}
                        </span>
                        <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider border ${tagStyles[idx * 2 + 1].bg} ${tagStyles[idx * 2 + 1].text} ${tagStyles[idx * 2 + 1].border}`}>
                          {idx === 0 ? 'BOUTIQUE' : idx === 1 ? 'CROSSFIT' : 'MEDITACIÓN'}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-slate-300 pt-4 border-t border-slate-50 sm:border-none sm:pt-0">
                      <div className="text-sm font-medium">
                        <span className="text-[#1F4D47] font-bold text-base">
                          {idx === 0 ? '$35 – $60' : idx === 1 ? '$45 – $120' : '$20 – $180'}
                        </span>
                        <span className="ml-1.5 text-slate-400">
                          {idx === 0 ? 'por sesión' : idx === 1 ? 'al mes' : 'planes'}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

   
        <div className="hidden lg:block flex-1 relative bg-[#E1E7E5] overflow-hidden border-l border-slate-100">
          <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover"></div>
        
          <div className="absolute top-[30%] left-[65%]">
            <div className="bg-[#FF8A71] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-sm font-bold transition-transform hover:scale-110 cursor-pointer">
              <span className="material-symbols-outlined text-base">eco</span>
              $35
            </div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF8A71] mx-auto -mt-0.5"></div>
          </div>

          <div className="absolute top-[55%] left-[75%]">
            <div className="bg-[#FF8A71] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-sm font-bold transition-transform hover:scale-110 cursor-pointer">
              <span className="material-symbols-outlined text-base">square_foot</span>
              $45
            </div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF8A71] mx-auto -mt-0.5"></div>
          </div>

          <div className="absolute top-[65%] left-[60%]">
            <div className="bg-[#FF8A71] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 text-sm font-bold transition-transform hover:scale-110 cursor-pointer">
              <span className="material-symbols-outlined text-base">directions_boat</span>
              $20
            </div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF8A71] mx-auto -mt-0.5"></div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-2xl text-slate-800 text-sm font-bold whitespace-nowrap hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-lg">layers</span>
              Satélite
            </button>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-2xl text-slate-800 text-sm font-bold whitespace-nowrap hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-lg">explore</span>
              Recentrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
