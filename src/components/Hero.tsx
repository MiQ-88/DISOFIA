import { useState } from 'react';
import { BookOpen, Calendar, Compass, Expand, Eye, Users, X } from 'lucide-react';
import { DISOFIA_METADATA } from '../data/disofiaData';

interface HeroProps {
  onExploreLines?: () => void;
  onExploreSeminar?: () => void;
  onNavigate?: (id: string) => void;
}

const CANOVA_APOLOGY_URL = '/assets/aistudio/Canova_-_The_apology_of_Socrates_in_front_of_the_judges__1790-1792_ad7bd0e9.jpg';

export function Hero({ onExploreLines, onExploreSeminar, onNavigate }: HeroProps) {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const scrollToTarget = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // High-clarity gray marble styling for Canova's bas-relief
  const imageFilterStyle = { filter: 'grayscale(92%) contrast(1.28) brightness(0.92) saturate(0.1)' };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#080D18] via-[#0D1524] to-[#141E2F] text-white border-b-4 border-[#8B1E24]">
      {/* Subtle classical texture on background */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-10 pb-12 sm:pb-16">
        
        {/* Classical Frieze of Socrates across the Hero, positioned directly above the Project Title */}
        <figure className="w-full mb-6 sm:mb-8">
          <div className="relative rounded-lg overflow-hidden bg-stone-950 border border-stone-700/80 shadow-2xl group">
            {/* Top architectural border accent */}
            <div className="h-0.5 bg-gradient-to-r from-stone-800 via-[#8B1E24] to-stone-800" />

            {/* Frieze Viewport: increased height to show upper architectural area */}
            {/* Frieze Viewport: adjusted framing to show the bodies of the characters */}
            <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                src={CANOVA_APOLOGY_URL}
                alt="Friso: La apología de Sócrates ante los jueces — Antonio Canova (1790–1792)"
                referrerPolicy="no-referrer"
                style={imageFilterStyle}
                className="w-full h-full object-cover object-[center_36%] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Subtle architectural lighting vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Action bar beneath the frieze: only the Explorar Imagen button on the right */}
            <figcaption className="px-3.5 py-2 bg-stone-900/90 border-t border-stone-800/80 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setImageModalOpen(true)}
                className="text-xs font-mono text-red-400 hover:text-red-300 inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                title="Ver relieve completo en alta resolución con guía iconográfica"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Explorar Imagen</span>
              </button>
            </figcaption>
          </div>
        </figure>

        {/* Project Title and Header Presentation */}
        <div className="space-y-4 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2.5">
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-red-400 font-bold px-2.5 py-0.5 rounded bg-red-950/80 border border-red-800/80 shadow-xs">
                {DISOFIA_METADATA.acronym}
              </span>
              <span className="font-mono text-xs sm:text-sm text-stone-300 font-semibold px-2 py-0.5 rounded bg-stone-900/90 border border-stone-700/80">
                {DISOFIA_METADATA.reference}
              </span>
              <span
                className="font-mono text-stone-300 font-semibold"
                style={{ fontSize: '15px' }}
              >
                {DISOFIA_METADATA.period}
              </span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium ml-1 sm:ml-2 pl-2 sm:pl-3 border-l border-stone-700/80">
                Universidad de Navarra &middot; Facultad de Filosofía y Letras &middot; Departamento de Filosofía
              </span>
            </div>
            <h1
              className="font-serif font-bold text-white tracking-tight leading-[1.1] w-full"
              style={{ fontSize: '62px' }}
            >
              {DISOFIA_METADATA.title}
            </h1>
          </div>

          {/* Executive Summary */}
          <p
            className="text-stone-200 font-light leading-relaxed max-w-full"
            style={{ fontSize: '20px', width: '918px', maxWidth: '100%' }}
          >
            {DISOFIA_METADATA.executiveSummary}
          </p>
        </div>

        {/* Cuatro botones de navegación entre el subtítulo y los cuatro paneles */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 my-8">
          <button
            type="button"
            onClick={() => scrollToTarget('presentacion')}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#8B1E24] hover:bg-[#6C151A] transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#A5282F]"
          >
            <BookOpen className="w-4 h-4 text-red-200" />
            <span>Presentación</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToTarget('lineas')}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-stone-100 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/90 hover:border-stone-500 backdrop-blur-xs transition-all shadow-sm hover:shadow-md cursor-pointer hover:text-white"
          >
            <Compass className="w-4 h-4 text-amber-300" />
            <span>Líneas de investigación</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToTarget('equipo')}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-stone-100 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/90 hover:border-stone-500 backdrop-blur-xs transition-all shadow-sm hover:shadow-md cursor-pointer hover:text-white"
          >
            <Users className="w-4 h-4 text-sky-300" />
            <span>Equipo de investigación</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToTarget('actividades')}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold text-stone-100 bg-stone-900/90 hover:bg-stone-800 border border-stone-700/90 hover:border-stone-500 backdrop-blur-xs transition-all shadow-sm hover:shadow-md cursor-pointer hover:text-white"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Actividades</span>
          </button>
        </div>

        {/* Full-width Quantitative Project Indicators Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80">
          <div className="bg-[#8B1E24]/[0.04] border border-[#8B1E24]/35 hover:border-[#8B1E24]/60 transition-colors rounded p-3">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
              3 Años
            </div>
            <div className="text-xs text-stone-300 uppercase tracking-wider mt-1 font-mono">
              2026 – 2029 (Tipo B)
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              Investigación no orientada
            </div>
          </div>

          <div className="bg-[#8B1E24]/[0.04] border border-[#8B1E24]/35 hover:border-[#8B1E24]/60 transition-colors rounded p-3">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
              7 Investigadores
            </div>
            <div className="text-xs text-stone-300 uppercase tracking-wider mt-1 font-mono">
              UNAV, UAM, UFV, USD
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              IPs y Equipo de Investigación
            </div>
          </div>

          <div className="bg-[#8B1E24]/[0.04] border border-[#8B1E24]/35 hover:border-[#8B1E24]/60 transition-colors rounded p-3">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
              17 Expertos
            </div>
            <div className="text-xs text-stone-300 uppercase tracking-wider mt-1 font-mono">
              Internacionales
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              De 10 países
            </div>
          </div>

          <div className="bg-[#8B1E24]/[0.04] border border-[#8B1E24]/35 hover:border-[#8B1E24]/60 transition-colors rounded p-3">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white tabular-nums">
              7 Investigadores
            </div>
            <div className="text-xs text-stone-300 uppercase tracking-wider mt-1 font-mono">
              Doctorales
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              Nacionales e internacionales
            </div>
          </div>
        </div>

      </div>

      {/* Modal for Full-Scale Canova Horizontal Bas-Relief */}
      {imageModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md"
          onClick={() => setImageModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-stone-950 border border-stone-800 rounded-xl p-4 sm:p-6 shadow-2xl flex flex-col max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-800 text-xs">
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                  Antonio Canova · «La apología de Sócrates ante los jueces» (1790–1792)
                </h3>
                <p className="text-stone-400 text-xs mt-0.5">
                  Bajorrelieve en yeso (gesso) &middot; Gipsoteca Canoviana de Possagno
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setImageModalOpen(false)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                  aria-label="Cerrar modal de imagen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High-Res Image Container in Native Panoramic Aspect Ratio */}
            <div className="overflow-hidden rounded-lg bg-black/90 flex items-center justify-center p-1 border border-stone-800/80">
              <img
                src={CANOVA_APOLOGY_URL}
                alt="Antonio Canova: La apología de Sócrates ante los jueces (1790-1792)"
                style={imageFilterStyle}
                className="w-full max-h-[65vh] object-contain rounded"
              />
            </div>

            {/* Academic Commentary in Modal: Referencia a la vida examinada */}
            <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-300 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-stone-900/60 p-3.5 rounded-lg border border-stone-800/80">
                <div>
                  <p
                    className="font-serif font-bold text-stone-100 leading-snug"
                    style={{ fontSize: '20px' }}
                  >
                    Ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ
                  </p>
                  <p
                    className="font-serif font-bold text-stone-200 leading-snug mt-1"
                    style={{ fontSize: '23px', fontWeight: 'bold' }}
                  >
                    «Una vida sin examen no merece ser vivida para el ser humano»
                  </p>
                </div>
                <div className="shrink-0 sm:text-right">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded bg-stone-800 text-stone-300 border border-stone-700 font-sans font-medium tracking-wide"
                    style={{ fontSize: '14px' }}
                  >
                    Platón, <span className="italic ml-1">Apología de Sócrates</span>&nbsp;38a
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between text-[11px] text-stone-500 font-mono px-1 pt-0.5">
                <span>Antonio Canova &middot; Gipsoteca de Possagno (1790–1792)</span>
                <span>DISOFIA &middot; Universidad de Navarra (PID2025-168764NB-I00)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

