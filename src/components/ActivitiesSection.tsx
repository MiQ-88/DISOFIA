import { useState } from 'react';
import {
  BookMarked,
  Calendar,
  CalendarPlus,
  Clock,
  Download,
  Mail,
  MapPin,
  Sparkles,
  User,
} from 'lucide-react';
import { INAUGURAL_SESSION, READING_LIST, WORKSHOPS } from '../data/disofiaData';
import { generateICS } from '../utils/helpers';

interface ActivitiesSectionProps {
  onOpenContactModal: () => void;
}

export function ActivitiesSection({ onOpenContactModal }: ActivitiesSectionProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadICS = () => {
    const icsContent = generateICS();
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Seminario_Inaugural_DISOFIA_2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="actividades" className="py-16 sm:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B1E24] mb-2 font-mono">
            <span>Agenda y Espacio Dialógico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            4. Actividades en Curso y Seminarios
          </h2>
          <p className="text-stone-600 mt-2 max-w-3xl text-sm sm:text-base">
            El Seminario Permanente de Lectura y los Workshops Internacionales constituyen el núcleo vivo de discusión, debate exegético y colaboración científica de DISOFIA.
          </p>
          <div className="w-16 h-1 bg-[#8B1E24] mt-3"></div>
        </div>

        {/* Highlight Card: Próxima Sesión Inaugural */}
        <div className="bg-[#FAF7F2] border border-[#EBE3D5] rounded-lg p-6 sm:p-8 shadow-xs mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#8B1E24] text-white text-[11px] font-mono font-semibold px-4 py-1 uppercase tracking-wider rounded-bl">
            Próxima Convocatoria
          </div>

          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B1E24] font-bold uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4" />
              <span>Seminario Permanente de Lectura DISOFIA (Curso 2026–2027)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-3">
              {INAUGURAL_SESSION.title}
            </h3>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
              {INAUGURAL_SESSION.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 my-2 border-y border-stone-200/80 text-xs sm:text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-800">
                  <Clock className="w-4 h-4 text-[#8B1E24] shrink-0" />
                  <span className="font-semibold">{INAUGURAL_SESSION.date}</span>
                  <span className="text-stone-500 font-mono">({INAUGURAL_SESSION.time})</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <MapPin className="w-4 h-4 text-[#8B1E24] shrink-0" />
                  <span>{INAUGURAL_SESSION.room} &middot; {INAUGURAL_SESSION.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-800">
                  <BookMarked className="w-4 h-4 text-[#8B1E24] shrink-0" />
                  <span>Lectura: <strong>«{INAUGURAL_SESSION.book}»</strong> ({INAUGURAL_SESSION.publisherYear})</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <User className="w-4 h-4 text-[#8B1E24] shrink-0" />
                  <span>Ponente: <strong>{INAUGURAL_SESSION.speaker}</strong> ({INAUGURAL_SESSION.speakerAffiliation})</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleDownloadICS}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#8B1E24] hover:bg-[#6C151A] text-white text-xs font-semibold rounded shadow-xs transition-colors cursor-pointer"
              >
                <CalendarPlus className="w-4 h-4" />
                <span>{downloadSuccess ? '¡Guardado en calendario!' : 'Añadir a mi Calendario (.ics)'}</span>
              </button>

              <button
                type="button"
                onClick={onOpenContactModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded border border-stone-300 shadow-xs transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#8B1E24]" />
                <span>Solicitar Asistencia o Información</span>
              </button>

              <span className="text-xs text-stone-500 ml-auto pt-2 sm:pt-0">
                Coordinación: Daniel Doyle (IP2 · <a href="mailto:ddoyle@unav.es" className="underline hover:text-stone-800">ddoyle@unav.es</a>) & Miquel Solans (IP1 · <a href="mailto:msolans@unav.es" className="underline hover:text-stone-800">msolans@unav.es</a>)
              </span>
            </div>
          </div>
        </div>

        {/* Programa y Lecturas del Seminario */}
        <div className="mb-14">
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 mb-2">
            Programa y Lecturas del Seminario Permanente
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            Obras de referencia para las sesiones ordinarias durante el curso académico 2026–2027.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {READING_LIST.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded border border-stone-200 hover:border-stone-300 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-2">
                    <span>SESIÓN {idx + 1}</span>
                    <span className="text-[#8B1E24] font-medium">{item.type}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 mb-2 font-medium">
                    {item.author} &middot; <span className="text-stone-500">{item.editorial}, {item.year}</span>
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed italic">
                    {item.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Congresos y Workshops Previstos */}
        <div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 mb-2">
            Congresos y Workshops Internacionales
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            Encuentros internacionales periódicos para la puesta en común de avances científicos con los colaboradores de la red.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORKSHOPS.map((ws) => (
              <div
                key={ws.id}
                className="bg-white p-6 rounded border border-stone-200 hover:border-[#8B1E24]/40 transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#8B1E24] uppercase tracking-wider">
                    {ws.edition}
                  </span>
                  <span className="text-[11px] font-medium bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded">
                    {ws.status}
                  </span>
                </div>

                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">
                  {ws.title}
                </h4>

                <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                  <strong>Tema:</strong> {ws.topic}
                </p>

                <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <Calendar className="w-3.5 h-3.5 text-[#8B1E24]" />
                    <span>{ws.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{ws.location}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
