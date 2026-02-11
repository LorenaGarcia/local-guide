import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
       
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#2D9C8D] p-2 rounded-lg text-white">
              <span className="material-symbols-outlined block text-xl">storefront</span>
            </div>
            <h1 className="text-xl font-bold text-[#1F4D47] dark:text-white">Directorio Local</h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Tu conexión directa con los mejores negocios y eventos de tu ciudad.
          </p>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-bold mb-6 text-[#1F4D47] dark:text-slate-200">Navegación</h6>
          <ul className="space-y-4 text-sm text-[#708E8A] dark:text-slate-400">
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="/search">Explorar</a></li>
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="/events">Eventos</a></li>
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="#">Negocios Destacados</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h6 className="font-bold mb-6 text-[#1F4D47] dark:text-slate-200">Comunidad</h6>
          <ul className="space-y-4 text-sm text-[#708E8A] dark:text-slate-400">
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="#">Sobre Nosotros</a></li>
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="#">Registrar Negocio</a></li>
            <li><a className="hover:text-[#2D9C8D] transition-colors" href="#">Centro de Ayuda</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h6 className="font-bold mb-6 text-[#1F4D47] dark:text-slate-200">Suscríbete</h6>
          <div className="flex gap-2">
            <input
              className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 focus:ring-1 focus:ring-[#2D9C8D] rounded-xl px-4 py-3 text-sm outline-none text-slate-600 dark:text-slate-300 placeholder:text-slate-400"
              placeholder="Tu email"
              type="email"
            />
            <button className="bg-[#2D9C8D] text-white p-3 rounded-full hover:bg-[#258a7d] transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}

export { Footer };
