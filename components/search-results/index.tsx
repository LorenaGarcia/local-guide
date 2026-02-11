"use client";

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BUSINESSES } from '@/constants';
import { BusinessCard } from '@/components/business-card';
import { CategoryFilter } from '@/components/category-filter';
import {CATEGORIES_BUSINESS} from '@/components/home/components/category-card/category-card.utils'

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredBusinesses = selectedCategory === 'Todos'
    ? BUSINESSES
    : BUSINESSES.filter(biz => biz.category === selectedCategory);

  const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBusinesses = filteredBusinesses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 lg:px-12 py-5 border-b border-slate-50 flex items-center gap-4 overflow-x-auto no-scrollbar bg-white sticky top-0 z-40">
        <CategoryFilter 
          categories={CATEGORIES_BUSINESS} 
          selectedCategory={selectedCategory} 
          onCategorySelect={handleCategoryChange} 
          allLabel="Todos los negocios"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Resultados en San Francisco</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#1F4D47]">
              {selectedCategory === 'Todos' ? 'Todos los Negocios' : selectedCategory}
            </h1>
          </div>
          <button className="flex items-center gap-2 text-[#2D9C8D] text-sm font-bold hover:underline mb-1 whitespace-nowrap">
            Ordenar por Relevancia <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {paginatedBusinesses.length > 0 ? (
            paginatedBusinesses.map((biz) => (
              <BusinessCard key={biz.id} business={biz} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-medium text-lg">No se encontraron negocios en esta categoría.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center transition-all ${
                currentPage === 1 ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-12 h-12 rounded-2xl font-black text-sm flex items-center justify-center transition-all ${
                    currentPage === pageNum 
                      ? 'bg-[#2D9C8D] text-white shadow-lg shadow-[#2D9C8D]/20' 
                      : 'hover:bg-slate-50 text-slate-500'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center transition-all ${
                currentPage === totalPages ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
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
