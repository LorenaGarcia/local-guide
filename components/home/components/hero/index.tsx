import React from 'react';
import { Search } from '@/components/search';

function Hero() {
  return (
    <section className="relative mb-16 rounded-[3rem] overflow-hidden min-h-[600px] flex flex-col items-center justify-center text-center p-8">
    
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000')` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-4xl relative z-10 px-4">
        <h2 className="text-white text-6xl md:text-8xl font-black leading-tight tracking-tight mb-6">
          Descubre el corazón de tu barrio.
        </h2>
        <p className="text-white/90 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Encuentra los mejores servicios locales, desde cafeterías acogedoras hasta expertos en mascotas.
        </p>
        
        <Search />
      </div>
    </section>
  );
}

export { Hero };
