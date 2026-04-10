"use client";

import React from 'react';
import Link from 'next/link';
import { BusinessCardProps } from '@/types';


function BusinessCard({ business }: BusinessCardProps) {

  const { id, image, name, shortDescription, tags, address } = business;
  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full w-full">
      <Link 
        href={`/business/${id}`} 
        className="flex flex-col h-full w-full overflow-hidden rounded-[2.5rem]"
      >
        <div className="relative w-full aspect-[4/3] bg-slate-100 shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
          />
        </div>
        
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-black text-[#1F4D47] leading-tight group-hover:text-[#2D9C8D] transition-colors">{name}</h3>
            </div>
            
            <p className="text-slate-500 text-sm font-medium line-clamp-2 leading-relaxed mb-8">
              {shortDescription || business.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {tags && tags.map((tag, index) => (
                <span key={index} className="px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border border-slate-100 text-slate-400">
                 {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-slate-50">
            <div className="flex items-baseline gap-1.5 pr-4">
              {address && (
                <span className="text-slate-400 font-bold text-xs tracking-wider line-clamp-2">{address}</span>
              )}
            </div>
            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-[#2D9C8D] group-hover:bg-[#2D9C8D] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { BusinessCard };
