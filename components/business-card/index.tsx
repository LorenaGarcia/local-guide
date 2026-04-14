"use client";

import React from "react";
import Link from "next/link";
import { BusinessCardProps } from "@/types";

function BusinessCard({ business }: BusinessCardProps) {
  const { id, image, name, description, tags, address } = business;

  return (
    <div className="group bg-white rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full w-full">
      <Link
        href={`/business/${id}`}
        className="flex flex-col h-full w-full overflow-hidden rounded-[1.5rem]"
      >
        <div className="relative w-full h-[180px] bg-slate-100 shrink-0">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-[#2D9C8D] transition-colors mb-2">
              {name}
            </h3>
            
            {address && (
              <div className="flex items-start gap-1.5 text-slate-400 text-xs font-semibold mb-3">
                <span className="material-symbols-outlined text-[14px] shrink-0 mt-[1px]">
                  location_on
                </span>
                <span className="leading-snug">{address}</span>
              </div>
            )}

            <p className="text-slate-500 text-sm font-medium line-clamp-3 leading-relaxed mb-6">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-5 pt-5 border-t border-slate-50 border-dashed">
            <div className="flex flex-wrap gap-2">
              {tags &&
                  tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.1em] border border-[#F4A261]/50 text-[#F4A261] bg-[#F4A261]/5"
                    >
                      {tag}
                    </span>
                  ))}
            </div>

            <button 
              className="w-full mt-2 py-2.5 rounded-full border border-[#2D9C8D] text-[#2D9C8D] text-[11px] font-black uppercase tracking-widest hover:bg-[#2D9C8D] hover:text-white transition-all text-center shadow-sm"
            >
              VER MÁS
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export { BusinessCard };
