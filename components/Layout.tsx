
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Descubrir', path: '/' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Negocios', path: '/buscar' },
    { name: 'Nosotros', path: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-baby-blue/30 px-4 md:px-8 py-4">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="bg-baby-blue p-1.5 rounded-lg text-slate-700">
            <span className="material-symbols-outlined block text-2xl">explore</span>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">LocalGuide</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.path ? 'text-baby-blue border-b-2 border-butterscotch pb-1' : 'text-slate-500 hover:text-peach'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="relative hidden xl:block flex-1 max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm focus:ring-2 focus:ring-baby-blue focus:border-transparent outline-none transition-all"
              placeholder="Buscar servicios..."
              type="text"
            />
          </div>
          <button className="whitespace-nowrap bg-pastel-green hover:brightness-95 text-slate-700 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm">
            Publicar tu Negocio
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
            <div className="bg-baby-blue p-2 rounded-lg text-slate-700">
              <span className="material-symbols-outlined block">explore</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight dark:text-white">LocalGuide</h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Conectando vecinos con las mejores experiencias locales desde 2024. Tu comunidad, curada.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-baby-blue hover:text-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">language</span>
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-peach hover:text-slate-700 transition-all">
              <span className="material-symbols-outlined text-xl">alternate_email</span>
            </button>
          </div>
        </div>
        
        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Plataforma</h6>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a className="hover:text-peach transition-colors" href="#">Cómo funciona</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Precios</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Historias</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">App Móvil</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Soporte</h6>
          <ul className="space-y-4 text-sm font-bold text-slate-500">
            <li><a className="hover:text-peach transition-colors" href="#">Centro de Ayuda</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Seguridad</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Normas</a></li>
            <li><a className="hover:text-peach transition-colors" href="#">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-black mb-6 text-xs uppercase tracking-widest text-slate-400">Boletín</h6>
          <p className="text-slate-500 text-sm mb-4">Recibe lo mejor de tu barrio semanalmente.</p>
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
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs font-medium">© 2024 LocalGuide Inc. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-xs font-medium text-slate-400">
          <a className="hover:text-peach transition-colors" href="#">Privacidad</a>
          <a className="hover:text-peach transition-colors" href="#">Términos</a>
          <a className="hover:text-peach transition-colors" href="#">Cookies</a>
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
