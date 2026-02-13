"use client";

import React, { useState } from 'react';
import { BusinessProps } from '@/types';
import { BusinessCard } from '@/components/business-card';
import { Pagination } from '@/components/pagination';

function Business({ 
  businesses, 
  title = "Todos los Negocios", 
  subtitle = "Resultados cercanos",
  itemsPerPage = 6,
  currentPage: externalPage,
  onPageChange: externalOnPageChange,
  showPagination = true
}: BusinessProps) {
  const [internalPage, setInternalPage] = useState(1);
  
  const currentPage = externalPage !== undefined ? externalPage : internalPage;
  const onPageChange = externalOnPageChange !== undefined ? externalOnPageChange : setInternalPage;

  const totalPages = Math.ceil(businesses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBusinesses = businesses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{subtitle}</p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1F4D47]">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {paginatedBusinesses.length > 0 ? (
          paginatedBusinesses.map((biz) => (
            <BusinessCard key={biz.id} business={biz} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 font-medium text-lg">No se encontraron negocios cercanos.</p>
          </div>
        )}
      </div>

      {showPagination && totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={onPageChange} 
        />
      )}
    </div>
  );
}

export { Business };
