"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';

import { useGetEventList } from "./hooks/use-get-event_list/use-get-event_list";

import { CATEGORIES_EVENTS } from '@/constants';
import { CategoryFilter } from '@/components/category-filter';
import { Pagination } from '@/components/pagination';
import { CalendarModal } from '@/components/calendar';

import { EventCard } from './components/event-card';
import { Loading } from "./components/loading/loading";
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "./event-list.constants";
import { getFilteredEvents } from './event-list.utils';


function EventList() {
  const { events, loading } = useGetEventList();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({ start: null, end: null });
  const ITEMS_PER_PAGE = 6;

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleApplyDateRange = (start: Date | null, end: Date | null) => {
    setDateRange({ start, end });
    setCurrentPage(1);
  };

  const filteredEvents = getFilteredEvents(events, selectedCategory, dateRange);
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-16 bg-white min-h-screen">

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-800 leading-tight">
            Próximos <span className="text-[#2D9C8D] italic">Eventos y Bazares</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
            Descubre el pulso de tu vecindario. Desde mercados artesanales matutinos hasta conciertos en jardines secretos.
          </p>
        </div>
      </div>


      <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <CategoryFilter
            categories={CATEGORIES_EVENTS}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
          {(selectedCategory !== 'Todos' || dateRange.start) && (
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setDateRange({ start: null, end: null });
              }}
              className="text-slate-400 text-sm font-bold hover:text-[#E97451] transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-lg">close</span>
              Limpiar filtros
            </button>
          )}
        </div>
        <div className="flex gap-3">
          <div className="bg-white border border-slate-100 p-1.5 rounded-[2rem] flex items-center shadow-sm">
            <button
              onClick={() => setIsCalendarOpen(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-[1.5rem] text-sm font-bold transition-all ${dateRange.start
                ? 'bg-[#EBF5F3] text-[#2D9C8D]'
                : 'text-slate-400 hover:text-slate-600'
                }`}
            >
              <span className="material-symbols-outlined text-xl">calendar_today</span>
              {dateRange.start ? 'Filtrado por fecha' : 'Calendario'}
            </button>
          </div>
        </div>
      </div>


      <motion.div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
      >
        {paginatedEvents.map((event) => {

          return (
            <motion.div key={event.id} variants={ITEM_VARIANTS}>
              <EventCard event={event} />
            </motion.div>
          );
        })}
        {filteredEvents.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 font-medium text-lg">No se encontraron eventos en esta categoría o fecha.</p>
          </div>
        )}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onApplyRange={handleApplyDateRange}
      />
    </div>
  );
}

export { EventList };
