"use client";

import React from 'react';

interface CategoryFilterProps {
  categories: { name: string }[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  allLabel?: string;
  className?: string;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategorySelect, 
  allLabel = "Todos los eventos",
  className = ""
}: CategoryFilterProps) {
  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 no-scrollbar ${className}`}>
      {allLabel && (
        <button 
          onClick={() => onCategorySelect('Todos')}
          className={`${selectedCategory === 'Todos' ? 'bg-[#2D4552] text-white' : 'bg-white border border-slate-50 text-slate-400 hover:text-slate-600'} px-8 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all`}
        >
          {allLabel}
        </button>
      )}
      {categories.map(cat => (
        <button 
          key={cat.name} 
          onClick={() => onCategorySelect(cat.name)}
          className={`${selectedCategory === cat.name ? 'bg-[#2D4552] text-white' : 'bg-white border border-slate-50 text-slate-400 hover:text-slate-600 hover:border-slate-200'} px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
