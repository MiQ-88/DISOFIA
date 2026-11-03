import { useState } from 'react';
import { ChevronRight, HelpCircle, KeyRound, Sparkles } from 'lucide-react';
import { RESEARCH_LINES, ResearchLine } from '../data/disofiaData';

export function ResearchLinesSection() {
  const [selectedLineId, setSelectedLineId] = useState<string>(RESEARCH_LINES[0].id);

  const activeLine = RESEARCH_LINES.find((l) => l.id === selectedLineId) || RESEARCH_LINES[0];

  return (
    <section id="lineas" className="py-16 sm:py-20 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B1E24] mb-2 font-mono">
            <span>Ejes Temáticos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Líneas Principales de Investigación
          </h2>
          <p className="text-stone-600 mt-2 max-w-3xl text-sm sm:text-base">
            El proyecto se vertebra en torno a tres ejes fundamentales que exploran la dialéctica socrática desde su raíz epistemológica, afectiva y comunitaria.
          </p>
          <div className="w-16 h-1 bg-[#8B1E24] mt-3"></div>
        </div>

        {/* 3 Interactive Cards / Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {RESEARCH_LINES.map((line) => {
            const isSelected = line.id === selectedLineId;
            return (
              <div
                key={line.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedLineId(line.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedLineId(line.id);
                  }
                }}
                className={`text-left p-6 rounded border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-[#8B1E24] shadow-md ring-1 ring-[#8B1E24]'
                    : 'bg-white/70 border-stone-200 hover:border-stone-300 hover:bg-white shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                    LÍNEA {line.number}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-medium text-[#8B1E24] flex items-center gap-1">
                      <span>Seleccionada</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug mb-3">
                  {line.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {line.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Line Deep-Dive Pane */}
        <div className="bg-white border border-stone-200 rounded p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-stone-100">
            <div>
              <span className="text-xs font-mono font-bold text-[#8B1E24] uppercase tracking-wider">
                Detalle Profundo &middot; Línea {activeLine.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-1">
                {activeLine.title}
              </h3>
            </div>
            <span className="text-xs text-stone-500 font-mono">
              PID2025-168764NB-I00
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Description & Questions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-2 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B1E24]" />
                  <span>Marco Teórico y Planteamiento</span>
                </h4>
                <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                  {activeLine.extendedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3 font-mono flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#8B1E24]" />
                  <span>Preguntas y Problemas Clave</span>
                </h4>
                <ul className="space-y-2.5">
                  {activeLine.philosophicalQuestions.map((question, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <span className="text-[#8B1E24] font-serif font-bold text-base leading-none mt-0.5">
                        &sect;
                      </span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Concepts Column */}
            <div className="lg:col-span-5 bg-stone-50 p-5 rounded border border-stone-200/80 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-600 mb-3 font-mono flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-[#8B1E24]" />
                  <span>Conceptos Nucleares</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLine.keyConcepts.map((concept, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-white border border-stone-200 px-2.5 py-1 text-xs text-stone-700 rounded-sm font-medium"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60">
                <p className="text-xs text-stone-500 italic">
                  Investigación desarrollada conjuntamente por miembros del Equipo de Investigación (UNAV, UFV, UAM, UESD, UGR) y especialistas internacionales invitados.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
