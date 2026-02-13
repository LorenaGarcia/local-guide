"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { BUSINESSES, CATEGORIES_BUSINESS } from '@/constants';
import { Business } from '@/components/business';
import { CategoryFilter } from '@/components/category-filter';

function BusinessPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'Todos');

  useEffect(() => {
    setSelectedCategory(urlCategory || 'Todos');
  }, [urlCategory]);

  const filteredBusinesses = BUSINESSES.filter(biz => {
    return selectedCategory === 'Todos' || biz.category === selectedCategory;
  });

  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'Todos') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/business?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 lg:px-12 py-8 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto">
          <CategoryFilter 
            categories={CATEGORIES_BUSINESS}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            allLabel="Todos los negocios"
          />
        </div>
      </div>

      <Business 
        businesses={filteredBusinesses}
        title={selectedCategory === 'Todos' ? 'Todos los Negocios' : selectedCategory}
        subtitle="Explora los mejores servicios locales"
      />
    </div>
  );
}

export default function BusinessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D9C8D]"></div>
      </div>
    }>
      <BusinessPageContent />
    </Suspense>
  );
}
