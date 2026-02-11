import React from 'react';

interface CategoryCardProps {
  icon: string;
  name: string;
  color: string;
  iconColor: string;
  isActive?: boolean;
}

function CategoryCard({ icon, name, color, iconColor, isActive }: CategoryCardProps) {
  return (
    <div className={`
      relative bg-white rounded-[3rem] transition-all duration-700 flex flex-col items-center justify-center w-full min-w-[200px]
      ${isActive 
        ? 'h-[210px] shadow-[0_40px_60px_-10px_rgba(0,0,0,0.12)] scale-100' 
        : 'h-[200px] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.03)] opacity-40 scale-90'}
    `}>
      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8" style={{ backgroundColor: color }}>
        <span className="material-symbols-outlined text-5xl" style={{ color: iconColor }}>{icon}</span>
      </div>
      <h4 className="font-extrabold text-[#1F4D47] text-2xl tracking-tight">{name}</h4>
    </div>
  );
}

export { CategoryCard };
