
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Explorar', path: '/' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Negocios', path: '/buscar' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-baby-blue/30 px-4 md:px-8 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-brand-teal p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined block text-2xl">storefront</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">Directorio Local</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.path ? 'text-brand-teal border-b-2 border-brand-teal pb-1' : 'text-slate-500 hover:text-peach'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button 
            onClick={() => navigate('/admin/registro')}
            className="whitespace-nowrap bg-brand-teal/10 text-brand-teal hover:bg-brand-teal hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all"
          >
            Mi Perfil
          </button>
          <div className="h-10 w-10 rounded-full border-2 border-baby-blue/40 overflow-hidden cursor-pointer flex-shrink-0">
            <img src="https://picsum.photos/seed/user/100/100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-baby-blue/30 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brand-teal p-2 rounded-lg text-white">
              <span className="material-symbols-outlined block">storefront</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight dark:text-white">Directorio Local</h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Conectando vecinos con las mejores experiencias locales desde 2024. Tu comunidad, curada.
          </p>
        </div>
        
        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Plataforma</h6>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a className="hover:text-peach transition-colors" href="#">Cómo funciona</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Precios</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Soporte</h6>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a className="hover:text-peach transition-colors" href="#">Centro de Ayuda</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Seguridad</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Boletín</h6>
          <div className="relative">
            <input
              className="w-full bg-slate-50 border border-baby-blue/30 focus:ring-1 focus:ring-baby-blue rounded-xl px-4 py-3 text-sm outline-none"
              placeholder="Correo electrónico"
              type="email"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-peach text-white px-4 rounded-lg text-xs font-bold hover:brightness-105 transition-all">
              Unirse
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
