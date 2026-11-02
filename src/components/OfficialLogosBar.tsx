export function OfficialLogosBar() {
  return (
    <section
      aria-label="Entidades Financiadoras e Instituciones Ejecutoras"
      className="border-y border-stone-200 bg-stone-50/80 py-5 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          
          {/* Gobierno de España / Ministerio */}
          <div className="flex items-center gap-3 py-1 px-2 border-r border-stone-200/60 pr-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2.5 h-3.5 bg-[#AA151B] inline-block rounded-[1px]"></span>
                <span className="w-2.5 h-3.5 bg-[#F1BF00] inline-block rounded-[1px]"></span>
                <span className="w-2.5 h-3.5 bg-[#AA151B] inline-block rounded-[1px]"></span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-800">
                  Gobierno de España
                </span>
              </div>
              <span className="text-xs font-semibold text-stone-900 tracking-tight leading-tight">
                Ministerio de Ciencia,
              </span>
              <span className="text-xs font-medium text-stone-700 leading-tight">
                Innovación y Universidades
              </span>
            </div>
          </div>

          {/* AEI - Agencia Estatal de Investigación */}
          <div className="flex items-center gap-2.5 py-1 px-2 border-r border-stone-200/60 pr-6">
            <div className="w-7 h-7 rounded bg-[#8B1E24] text-white flex items-center justify-center font-serif font-bold text-xs tracking-tighter shadow-xs">
              AEI
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-stone-900 tracking-tight leading-tight">
                Agencia Estatal de
              </span>
              <span className="text-xs font-semibold text-[#8B1E24] leading-tight">
                Investigación
              </span>
              <span className="text-[10px] font-mono text-stone-500">
                PID2025-168764NB-I00
              </span>
            </div>
          </div>

          {/* Unión Europea */}
          <div className="flex items-center gap-2.5 py-1 px-2 border-r border-stone-200/60 pr-6">
            <div className="w-8 h-6 bg-[#003399] rounded-[2px] flex items-center justify-center text-[#FFCC00] text-xs font-bold shadow-xs">
              ★ EU
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-stone-900 tracking-tight leading-tight">
                Cofinanciado por la
              </span>
              <span className="text-xs font-semibold text-[#003399] leading-tight">
                Unión Europea
              </span>
              <span className="text-[10px] text-stone-500">
                Fondo Social Europeo / FEDER
              </span>
            </div>
          </div>

          {/* Universidad de Navarra */}
          <div className="flex items-center gap-3 py-1 px-2">
            <div className="h-10 sm:h-11 w-9 sm:w-10 rounded-md bg-white border border-stone-200 shadow-xs flex items-center justify-center p-1 shrink-0">
              <img
                src="/assets/aistudio/unav_seal_red.png"
                alt="Escudo de la Universidad de Navarra"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-stone-900 tracking-tight leading-tight">
                Universidad de Navarra
              </span>
              <span className="text-[11px] text-stone-600 leading-tight">
                Facultad de Filosofía y Letras · Dpto. Filosofía
              </span>
              <span className="text-[10px] text-[#8B1E24] font-medium mt-0.5">
                Entidad Solicitante / Ejecutora
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
