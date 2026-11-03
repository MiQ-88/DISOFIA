import {
  Award,
  BookMarked,
  BookOpen,
  Compass,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sparkles,
} from 'lucide-react';
import { DISOFIA_METADATA } from '../data/disofiaData';

export function PresentationSection() {
  return (
    <section id="presentacion" className="py-16 sm:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B1E24] mb-2 font-mono">
            <span>Fundamentación Filosófica &middot; Resumen Ejecutivo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            1. Presentación del Proyecto
          </h2>
          <div className="w-16 h-1 bg-[#8B1E24] mt-3"></div>
        </div>

        {/* Narrative Prose / Resumen Ejecutivo */}
        <div className="space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
          <div className="bg-stone-50 border-l-3 border-[#8B1E24] p-6 rounded-r">
            <span className="text-xs uppercase font-mono font-bold text-[#8B1E24] tracking-wider block mb-1">
              Resumen Ejecutivo Oficial
            </span>
            <p className="text-stone-900 font-serif text-xl sm:text-2xl leading-relaxed italic">
              «{DISOFIA_METADATA.executiveSummary}»
            </p>
          </div>

          <p className="text-stone-700">
            Frente a la fragmentación de los estudios socráticos tradicionales y a ciertas interpretaciones de la
            <strong> Filosofía como Forma de Vida (FFV)</strong> que relegan el papel de la argumentación lógica o la reducen a mero
            ejercicio de bienestar subjetivo, <strong>DISOFIA</strong> parte de la hipótesis de que el examen dialógico socrático
            es el lugar privilegiado donde se articulan el rigor epistémico, el cuidado de sí (<em>epimeleia heautou</em>) y el
            compromiso con la comunidad política.
          </p>

          <p className="text-stone-700">
            Enmarcado en el área de <strong>{DISOFIA_METADATA.area}</strong>, el proyecto articula tres líneas nucleares de investigación:
            (1) <em>Ignorancia y autoengaño</em>, (2) <em>Afectividad en la dialéctica</em>, y (3) <em>Transmisión pedagógica y política</em> de la paideia socrática.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          <div className="bg-white border border-stone-200 rounded p-6 shadow-xs hover:border-[#8B1E24]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-red-50 text-[#8B1E24] flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Línea 1: Ignorancia y Autoengaño
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              El <em>elenchos</em> como desmantelamiento de la doble ignorancia. Examen del autoengaño como estructura que se autooculta y de la aporía como apertura al saber.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded p-6 shadow-xs hover:border-[#8B1E24]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-amber-50 text-amber-900 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Línea 2: Afectividad y Razón
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Análisis del papel constitutivo de la perplejidad, la vergüenza (<em>aidós</em>), el asombro (<em>thauma</em>), el <em>eros</em> y la <em>philia</em> en la transformación del sujeto.
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded p-6 shadow-xs hover:border-[#8B1E24]/50 transition-colors">
            <div className="w-10 h-10 rounded bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Línea 3: Transmisión Pedagógica y Política
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              La <em>paideia</em> socrática en la polis: recepción histórica en las escuelas helenísticas y reactivación en la filosofía contemporánea analítica y continental.
            </p>
          </div>

        </div>

        {/* Expected Scientific Outputs Box */}
        <div className="mt-12 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B1E24] mb-2 font-mono">
            <Sparkles className="w-4 h-4 text-[#8B1E24]" />
            <span>Resultados Previstos e Impacto Científico</span>
          </div>
          <h3 className="font-serif font-bold text-xl text-stone-900 mb-6">
            Compromisos de Producción Científica y Formación
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 bg-stone-50 rounded border border-stone-200/80">
              <div className="text-2xl font-serif font-bold text-[#8B1E24] mb-1">
                ~20
              </div>
              <div className="text-xs font-semibold text-stone-900 mb-1">
                Artículos Indexados
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                Publicaciones en revistas indexadas de referencia internacional (JCR / SJR / Scopus).
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded border border-stone-200/80">
              <div className="text-2xl font-serif font-bold text-[#8B1E24] mb-1">
                2
              </div>
              <div className="text-xs font-semibold text-stone-900 mb-1">
                Monografías Científicas
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                Estudios monográficos en editoriales académicas de primer nivel (SPI 1).
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded border border-stone-200/80">
              <div className="text-2xl font-serif font-bold text-[#8B1E24] mb-1">
                1 + 1
              </div>
              <div className="text-xs font-semibold text-stone-900 mb-1">
                Volumen y Traducción
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                1 volumen colectivo internacional y 1 traducción comentada crítica de <em>República I</em>.
              </p>
            </div>

            <div className="p-4 bg-stone-50 rounded border border-stone-200/80">
              <div className="text-2xl font-serif font-bold text-[#8B1E24] mb-1">
                7
              </div>
              <div className="text-xs font-semibold text-stone-900 mb-1">
                Tesis Doctorales
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                7 tesis doctorales en marcha directamente vinculadas a las líneas de DISOFIA.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
