"use client";

import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BUSINESSES, EVENTS } from '@/constants';
import { BusinessCard } from '@/components/business-card';
import { EventCard } from '@/components/event-list/event-card';
import { Pagination } from '@/components/pagination';


function SearchResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category');
  const query = searchParams.get('q') || '';
  const locationParam = searchParams.get('l') || '';

  const normalizeString = (str: string) => 
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const normalizedQuery = normalizeString(query);
  const normalizedLocation = normalizeString(locationParam);
  
  const [activeTab, setActiveTab] = useState<'businesses' | 'events'>('businesses');
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  React.useEffect(() => {
    const categoryQuery = searchParams.get('category');
    const q = searchParams.get('q');
    
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
      setActiveTab('businesses');
    } else if (!q && !categoryQuery) {
      setSelectedCategory('Todos');
      setActiveTab('businesses');
    }
    setCurrentPage(1);
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    

    const params = new URLSearchParams(searchParams.toString());
    if (category === 'Todos') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/search?${params.toString()}`, { scroll: false });
  };

  const filteredBusinesses = BUSINESSES.filter(biz => {
    const matchesQuery = !query || 
      normalizeString(biz.name).includes(normalizedQuery) || 
      (biz.description && normalizeString(biz.description).includes(normalizedQuery));
    const matchesLocation = !locationParam || 
      (biz.location?.address && normalizeString(biz.location.address).includes(normalizedLocation));
    return matchesQuery && matchesLocation;
  });

  const filteredEvents = EVENTS.filter(event => {
    const matchesQuery = !query || 
      normalizeString(event.title).includes(normalizedQuery) || 
      (event.description && normalizeString(event.description).includes(normalizedQuery));
    const matchesLocation = !locationParam || 
      normalizeString(event.locationName).includes(normalizedLocation) || 
      (event.locationAddress && normalizeString(event.locationAddress).includes(normalizedLocation));
    return matchesQuery && matchesLocation;
  });

  // Interleave results: B1, E1, B2, E2...
  const mixedResults: any[] = [];
  const maxLength = Math.max(filteredBusinesses.length, filteredEvents.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < filteredBusinesses.length) {
      mixedResults.push({ ...filteredBusinesses[i], type: 'business' });
    }
    if (i < filteredEvents.length) {
      mixedResults.push({ ...filteredEvents[i], type: 'event' });
    }
  }

  const totalPages = Math.ceil(mixedResults.length / ITEMS_PER_PAGE);
  const paginatedResults = mixedResults.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              Resultados Mixtos en {locationParam || 'San Francisco'}
            </p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#1F4D47]">
              Explora Negocios y Eventos
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {paginatedResults.length > 0 ? (
            paginatedResults.map((item, index) => {
              if (item.type === 'business') {
                return <BusinessCard key={`biz-${item.id}`} business={item} />;
              } else {
                const isSalmon = item.category?.toLowerCase().includes('gastronomía') || 
                               item.category?.toLowerCase().includes('arte');
                return <EventCard key={`event-${item.id}`} event={item} isSalmon={!!isSalmon} />;
              }
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-medium text-lg">
                No se encontraron resultados que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
}

function SearchResults() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest">Cargando resultados...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}

export { SearchResults };
