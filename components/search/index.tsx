"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (location) params.set('l', location);
    
    router.push(`/search?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-2 md:p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
          <div className="flex-[1.5] w-full flex items-center px-6">
            <span className="material-symbols-outlined text-slate-400 mr-3 scale-110">search</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-base font-medium h-14 text-slate-800 placeholder:text-slate-400" 
              placeholder="¿Qué estás buscando?" 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          
          <div className="hidden md:block w-px h-8 bg-slate-200"></div>
          
          <div className="flex-1 w-full flex items-center px-6">
            <span className="material-symbols-outlined text-slate-400 mr-3 scale-110">location_on</span>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-base font-medium h-14 text-slate-800 placeholder:text-slate-400" 
              placeholder="¿Dónde?" 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          
          <button 
            onClick={handleSearch}
            className="w-full md:w-auto bg-[#FDD475] text-slate-900 px-12 py-4 rounded-[1.5rem] font-bold text-lg hover:brightness-105 transition-all flex items-center justify-center shadow-md active:scale-95"
          >
            Buscar
          </button>
        </div>
  );
}

export { Search };
