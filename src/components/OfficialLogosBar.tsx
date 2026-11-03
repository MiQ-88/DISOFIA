export function OfficialLogosBar() {
  return (
    <section
      aria-label="Entidades Financiadoras e Instituciones Ejecutoras"
      className="border-y border-stone-200 bg-stone-50/90 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full items-center">
          
          {/* 1. Gobierno de España / Ministerio - Centrado bajo "3 Años" */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-3 text-left">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2.5 h-3.5 bg-[#AA151B] inline-block rounded-[1px]"></span>
                  <span className="w-2.5 h-3.5 bg-[#F1BF00] inline-block rounded-[1px]"></span>
                  <span className="w-2.5 h-3.5 bg-[#AA151B] inline-block rounded-[1px]"></span>
                  <span className="uppercase font-bold tracking-wider text-stone-800" style={{ fontSize: '13px' }}>
                    Gobierno de España
                  </span>
                </div>
                <span className="font-semibold text-stone-900 tracking-tight leading-tight" style={{ fontSize: '14px' }}>
                  Ministerio de Ciencia,
                </span>
                <span className="font-medium text-stone-700 leading-tight" style={{ fontSize: '13px' }}>
                  Innovación y Universidades
                </span>
              </div>
            </div>
          </div>

          {/* 2. AEI - Agencia Estatal de Investigación - Centrado bajo "7 Investigadores" */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-7 h-7 rounded bg-[#8B1E24] text-white flex items-center justify-center font-serif font-bold text-xs tracking-tighter shadow-xs shrink-0">
                AEI
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-stone-900 tracking-tight leading-tight" style={{ fontSize: '14px' }}>
                  Agencia Estatal de
                </span>
                <span className="font-semibold text-[#8B1E24] leading-tight" style={{ fontSize: '14px' }}>
                  Investigación
                </span>
                <span className="font-mono text-stone-500" style={{ fontSize: '13px' }}>
                  PID2025-168764NB-I00
                </span>
              </div>
            </div>
          </div>

          {/* 3. Unión Europea - Centrado bajo "17 Expertos" */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-6 bg-[#003399] rounded-[2px] flex items-center justify-center text-[#FFCC00] text-xs font-bold shadow-xs shrink-0">
                ★ EU
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-stone-900 tracking-tight leading-tight" style={{ fontSize: '14px' }}>
                  Cofinanciado por la
                </span>
                <span className="font-semibold text-[#003399] leading-tight" style={{ fontSize: '14px' }}>
                  Unión Europea
                </span>
                <span className="text-stone-500" style={{ fontSize: '13px' }}>
                  Fondo Social Europeo / FEDER
                </span>
              </div>
            </div>
          </div>

          {/* 4. Universidad de Navarra - Centrado bajo "5 Investigadores" */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-3 text-left">
              <div className="h-10 sm:h-11 w-9 sm:w-10 rounded-md bg-white border border-stone-200 shadow-xs flex items-center justify-center p-1 shrink-0">
                <img
                  src="/assets/aistudio/unav_seal_red.png"
                  alt="Escudo de la Universidad de Navarra"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-stone-900 tracking-tight leading-tight" style={{ fontSize: '14px' }}>
                  Universidad de Navarra
                </span>
                <span className="text-stone-600 leading-tight" style={{ fontSize: '14px' }}>
                  Facultad de Filosofía y Letras
                </span>
                <span className="text-[#8B1E24] font-medium mt-0.5" style={{ fontSize: '13px' }}>
                  Entidad Solicitante / Ejecutora
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
