import { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenGoogleSitesModal: () => void;
  onOpenContactModal: () => void;
}

export function Navbar({ onOpenGoogleSitesModal, onOpenContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Presentación', href: '#presentacion' },
    { label: 'Líneas', href: '#lineas' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Red Internacional', href: '#colaboradores' },
    { label: 'Seminario', href: '#actividades' },
    { label: 'Ficha Oficial', href: '#datos' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F172A] border-b border-stone-800 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-stone-100 hover:text-white transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="font-serif tracking-widest text-xl font-bold text-white group-hover:text-red-200 transition-colors">
              DISOFIA
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-stone-400 pl-2 border-l border-stone-700">
              PID2025-168764NB-I00
            </span>
          </a>

          {/* Zone 2: 4-6 concise text nav links */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-8 decoration-[#8B1E24] decoration-2 transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-stone-800 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-stone-200 hover:bg-slate-800 rounded font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGoogleSitesModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-stone-200 bg-stone-800 rounded border border-stone-700"
            >
              <Layers className="w-4 h-4 text-red-400" />
              <span>Guía de inserción en Google Sites</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full text-center px-4 py-2 text-xs font-medium text-stone-300 bg-stone-800/60 rounded"
            >
              Contactar con Coordinación
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
