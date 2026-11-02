import { useState } from 'react';
import { Check, Copy, ExternalLink, HelpCircle, Layers, Monitor, Smartphone, Tablet, X } from 'lucide-react';

interface GoogleSitesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GoogleSitesModal({ isOpen, onClose }: GoogleSitesModalProps) {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedIframe, setCopiedIframe] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://disofia.unav.es';
  const iframeSnippet = `<iframe src="${currentUrl}" style="width: 100%; height: 950px; border: none; border-radius: 6px;" title="Proyecto DISOFIA" allowfullscreen></iframe>`;

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 3000);
  };

  const copyIframe = () => {
    navigator.clipboard.writeText(iframeSnippet);
    setCopiedIframe(true);
    setTimeout(() => setCopiedIframe(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-sites-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-5 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#8B1E24] flex items-center justify-center text-white">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 id="google-sites-modal-title" className="font-serif font-bold text-lg text-white">
                Integración con Google Sites
              </h3>
              <p className="text-xs text-stone-300">
                Pautas para alojar o incrustar esta web completa en Google Sites
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded hover:bg-white/10 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-stone-700">
          
          <div className="bg-amber-50/80 border border-amber-200/80 rounded p-4 text-xs text-amber-900 leading-relaxed">
            <strong>¿Cómo funciona en Google Sites?</strong> Esta web ha sido diseñada con arquitectura responsiva y estilo editorial universitario elegante (acorde a las directrices de la Universidad de Navarra y la AEI). Puedes utilizarla directamente como portal autónomo o insertarla en tu Google Sites institucional mediante URL o código embed.
          </div>

          {/* Pasos */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-stone-900">
              Pasos para incrustar en tu Google Sites institucional:
            </h4>

            <ol className="space-y-3 pl-1 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8B1E24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <strong>Abre tu sitio en Google Sites</strong> y selecciona la página donde deseas mostrar el proyecto DISOFIA.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8B1E24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  En el panel lateral derecho de Google Sites, pulsa en la pestaña <strong>«Insertar»</strong> y selecciona <strong>«Insertar código»</strong> (o <strong>«Mediante URL»</strong>).
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8B1E24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  Pega la URL de este portal o el bloque iframe interactivo y haz clic en <strong>«Siguiente» &gt; «Insertar»</strong>.
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#8B1E24] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  Arrastra los bordes del bloque insertado para expandirlo a <strong>ancho completo</strong> y ajusta la altura.
                </div>
              </li>
            </ol>
          </div>

          {/* Quick Copy Snippets */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-stone-500 mb-1">
                Opción A: URL directa para Google Sites
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={currentUrl}
                  className="flex-1 bg-stone-50 border border-stone-200 rounded px-3 py-2 text-xs font-mono text-stone-800"
                />
                <button
                  type="button"
                  onClick={copyUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#8B1E24] hover:bg-[#6C151A] text-white text-xs font-medium rounded transition-colors shrink-0 cursor-pointer"
                >
                  {copiedUrl ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedUrl ? '¡Copiado!' : 'Copiar URL'}</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-stone-500 mb-1">
                Opción B: Código HTML &lt;iframe&gt; adaptable
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={iframeSnippet}
                  className="flex-1 bg-stone-50 border border-stone-200 rounded px-3 py-2 text-xs font-mono text-stone-800 overflow-hidden text-ellipsis whitespace-nowrap"
                />
                <button
                  type="button"
                  onClick={copyIframe}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-medium rounded transition-colors shrink-0 cursor-pointer"
                >
                  {copiedIframe ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedIframe ? '¡Copiado!' : 'Copiar Iframe'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-stone-50 px-6 py-3.5 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Diseño validado para visualización en desktop, tablet y smartphone.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded hover:bg-stone-100 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
}
