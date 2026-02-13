"use client";

import React from 'react';
import Link from 'next/link';
import { BusinessCardProps } from '@/types';


function BusinessCard({ business }: BusinessCardProps) {
  const { id, image, name, rating, shortDescription, subCategory, tag2, priceRange, priceUnit } = business;

  return (
    <Link 
      href={`/business/${id}`} 
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
        />
        <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-red-500 transition-all shadow-xl group/fav">
          <span className="material-symbols-outlined text-2xl group-hover:fill-current">favorite</span>
        </button>
      </div>
      
      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-black text-[#1F4D47] leading-tight group-hover:text-[#2D9C8D] transition-colors">{name}</h3>
            <div className="flex items-center gap-1.5 text-[#F9C365] font-black text-sm pt-1">
              <span className="material-symbols-outlined text-lg fill-current">star</span>
              {rating}
            </div>
          </div>
          
          <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed mb-8">
            {shortDescription || business.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border border-slate-100 text-slate-400">
              {subCategory}
            </span>
            {tag2 && (
              <span className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border border-slate-100 text-slate-400">
                {tag2}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-50">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[#1F4D47] font-black text-xl">{priceRange || business.priceLevel}</span>
            {priceUnit && (
              <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">{priceUnit}</span>
            )}
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#2D9C8D] group-hover:bg-[#2D9C8D] group-hover:text-white transition-all transform group-hover:translate-x-1">
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { BusinessCard };
