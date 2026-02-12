"use client";

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3">
      <button 
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
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
            onClick={() => onPageChange(pageNum)}
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
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center transition-all ${
          currentPage === totalPages ? 'text-slate-200 cursor-not-allowed' : 'text-slate-400 hover:bg-slate-50'
        }`}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
