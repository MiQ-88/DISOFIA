import { ArrowUp, BookOpen, Layers, Mail, ShieldCheck } from 'lucide-react';
import { DISOFIA_METADATA, PRINCIPAL_INVESTIGATORS } from '../data/disofiaData';

interface FooterProps {
  onOpenGoogleSitesModal: () => void;
  onOpenContactModal: () => void;
}

export function Footer({ onOpenGoogleSitesModal, onOpenContactModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-stone-300 pt-16 pb-12 border-t-2 border-[#8B1E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800 text-sm">
          
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif tracking-widest text-2xl font-bold text-white">
                DISOFIA
              </span>
              <span className="text-xs font-mono text-stone-400 pl-2 border-l border-stone-700">
                {DISOFIA_METADATA.reference}
              </span>
            </div>

            <p className="font-serif text-stone-300 text-sm sm:text-base italic max-w-md">
              «{DISOFIA_METADATA.title}»
            </p>

            <p className="text-xs text-stone-400 max-w-md leading-relaxed">
              {DISOFIA_METADATA.modality} · Área: {DISOFIA_METADATA.area}. Financiado por el Ministerio de Ciencia, Innovación y Universidades y la Agencia Estatal de Investigación ({DISOFIA_METADATA.fundingCode}), cofinanciado por la Unión Europea.
            </p>

            <div className="text-xs text-stone-400 pt-1">
              <strong>Entidad Solicitante / Ejecutora:</strong> {DISOFIA_METADATA.executingEntity} ({DISOFIA_METADATA.faculty}, {DISOFIA_METADATA.department})
            </div>
          </div>

          {/* Col 2: Secciones */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono font-semibold text-white">
              Estructura del Proyecto
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#presentacion" className="hover:text-white transition-colors">
                  1. Presentación y Resumen Ejecutivo
                </a>
              </li>
              <li>
                <a href="#lineas" className="hover:text-white transition-colors">
                  2. Líneas Principales de Investigación
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-white transition-colors">
                  3. Investigadores Principales y Equipo
                </a>
              </li>
              <li>
                <a href="#colaboradores" className="hover:text-white transition-colors">
                  4. Equipo de Trabajo (23 Miembros)
                </a>
              </li>
              <li>
                <a href="#actividades" className="hover:text-white transition-colors">
                  5. Seminario Permanente y Congresos
                </a>
              </li>
              <li>
                <a href="#datos" className="hover:text-white transition-colors">
                  6. Ficha Oficial e Indicadores
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enlaces y Utilidades */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono font-semibold text-white">
              Investigadores Principales & Contacto
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-left"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8B1E24]" />
                  <span>Contactar con Coordinación</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGoogleSitesModal}
                  className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-left"
                >
                  <Layers className="w-3.5 h-3.5 text-stone-400" />
                  <span>Integración en Google Sites</span>
                </button>
              </li>
              {PRINCIPAL_INVESTIGATORS.map((ip) => (
                <li key={ip.name}>
                  <a
                    href={`mailto:${ip.email}`}
                    className="hover:text-white transition-colors block"
                  >
                    {ip.name} ({ip.role.slice(0, 3)}): {ip.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; 2026–2029 Proyecto DISOFIA ({DISOFIA_METADATA.reference}) &middot; {DISOFIA_METADATA.executingEntity} &middot; Todos los derechos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
