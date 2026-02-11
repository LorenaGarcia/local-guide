"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BUSINESSES } from '@/constants';
import { BusinessCard } from '@/components/business-card';

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  
  const displayBusinesses = category 
    ? BUSINESSES.filter(biz => biz.category === category)
    : BUSINESSES;

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 lg:px-12 py-5 border-b border-slate-50 flex items-center gap-4 overflow-x-auto no-scrollbar bg-white sticky top-0 z-40">
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D9C8D] text-white text-sm font-bold shadow-sm whitespace-nowrap">
          <span className="material-symbols-outlined text-[20px]">tune</span>
          Todos los Filtros
        </button>
        {category && (
          <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D9C8D]/10 text-[#2D9C8D] text-sm font-bold whitespace-nowrap border border-[#2D9C8D]/20">
            {category}
            <span className="material-symbols-outlined text-[18px] cursor-pointer">close</span>
          </div>
        )}
        {['Rango de Precio', 'Distancia', 'Abierto Ahora'].map((filter) => (
          <button key={filter} className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-500 text-sm font-bold hover:bg-slate-50 transition-all whitespace-nowrap">
            {filter}
          </button>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Resultados en San Francisco</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#1F4D47]">{category || 'Todos los Negocios'}</h1>
          </div>
          <button className="flex items-center gap-2 text-[#2D9C8D] text-sm font-bold hover:underline mb-1 whitespace-nowrap">
            Ordenar por Relevancia <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {displayBusinesses.length > 0 ? (
            displayBusinesses.map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-medium text-lg">No se encontraron negocios en esta categoría.</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-3">
          <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-2xl bg-[#2D9C8D] text-white font-black text-sm flex items-center justify-center shadow-lg shadow-[#2D9C8D]/20">1</button>
          <button className="w-12 h-12 rounded-2xl hover:bg-slate-50 text-slate-500 font-black text-sm flex items-center justify-center transition-all">2</button>
          <button className="w-12 h-12 rounded-2xl hover:bg-slate-50 text-slate-500 font-black text-sm flex items-center justify-center transition-all">3</button>
          <span className="text-slate-300 font-black px-2">...</span>
          <button className="w-12 h-12 rounded-2xl hover:bg-slate-50 text-slate-500 font-black text-sm flex items-center justify-center transition-all">12</button>
          <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SearchResults() {
  return (
    <Suspense fallback={<div>Cargando resultados...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}

export { SearchResults };
