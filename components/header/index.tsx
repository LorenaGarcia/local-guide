import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants';

function Header() {
    const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 bg-[#1E293B] border-b border-white/5 px-6 md:px-12 py-6">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="bg-butterscotch p-2 rounded-xl text-[#1E293B]">
            <span className="material-symbols-outlined block text-2xl fill-current">storefront</span>
          </div>
          <span className="text-2xl font-black tracking-tight text-butterscotch">Directorio Local</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-black tracking-tight transition-all relative py-1 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-teal rounded-full"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export { Header };
