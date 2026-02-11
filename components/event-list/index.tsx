"use client";

import React, { useState } from 'react';
import { EVENTS, CATEGORIES_EVENTS } from '@/constants';
import { EventCard } from './event-card';
import { CategoryFilter } from '@/components/category-filter';

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredEvents = selectedCategory === 'Todos' 
    ? EVENTS 
    : EVENTS.filter(event => event.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white">
  
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-800 leading-tight">
            Próximos <span className="text-[#2D9C8D]">Eventos y Bazares</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
            Descubre el pulso de tu vecindario. Desde mercados artesanales matutinos hasta conciertos en jardines secretos.
          </p>
        </div>
      </div>


      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <CategoryFilter 
          categories={CATEGORIES_EVENTS} 
          selectedCategory={selectedCategory} 
          onCategorySelect={setSelectedCategory} 
        />
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl text-sm font-bold border border-slate-50 text-slate-600 shadow-sm">
            <span className="material-symbols-outlined text-lg">tune</span> Filtros
          </button>
          <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl text-sm font-bold border border-slate-50 text-slate-600 shadow-sm">
            <span className="material-symbols-outlined text-lg text-slate-400">calendar_today</span> Este fin de semana <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </button>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
        {filteredEvents.map((event) => {
          const isSalmon = event.category.toLowerCase().includes('gastronomía') || event.category.toLowerCase().includes('arte');
          
          return (
            <EventCard key={event.id} event={event} isSalmon={isSalmon} />
          );
        })}
        {filteredEvents.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 font-medium text-lg">No se encontraron eventos en esta categoría.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export { EventList };
