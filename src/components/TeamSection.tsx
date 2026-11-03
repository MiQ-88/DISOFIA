import { useState } from 'react';
import {
  Award,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';
import {
  DISOFIA_METADATA,
  PRINCIPAL_INVESTIGATORS,
  RESEARCH_TEAM,
  WORK_TEAM,
} from '../data/disofiaData';
import { filterResearchTeam } from '../utils/helpers';

interface TeamSectionProps {
  onOpenContactModal: () => void;
}

export function TeamSection({ onOpenContactModal }: TeamSectionProps) {
  const [eiSearch, setEiSearch] = useState('');
  const filteredEI = filterResearchTeam(RESEARCH_TEAM, eiSearch);

  return (
    <section id="equipo" className="py-16 sm:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8B1E24] mb-2 font-mono">
            <span>Gobernanza y Personal Investigador</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            2. Investigadores Principales y Equipo de Investigación
          </h2>
          <p className="text-stone-600 mt-2 max-w-3xl text-sm sm:text-base">
            El proyecto está liderado conjuntamente por dos Investigadores Principales adscritos al Departamento de Filosofía de la Universidad de Navarra, con un Equipo de Investigación interuniversitario y un Equipo de Trabajo de 23 especialistas.
          </p>
          <div className="w-16 h-1 bg-[#8B1E24] mt-3"></div>
        </div>

        {/* 1. INVESTIGADORES PRINCIPALES (IPs) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8B1E24]" />
              <span>Investigadores Principales (IPs)</span>
            </h3>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
              UNAV &middot; Facultad de Filosofía y Letras
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPAL_INVESTIGATORS.map((ip) => (
              <div
                key={ip.name}
                className="bg-white border-2 border-stone-200 hover:border-[#8B1E24] rounded-lg p-6 sm:p-7 shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider bg-red-50 text-[#8B1E24] mb-1.5">
                        {ip.role}
                      </span>
                      <h4 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 leading-tight">
                        {ip.name}
                      </h4>
                      <p className="text-xs text-stone-600 font-medium mt-1">
                        {ip.title} &middot; <strong className="text-stone-800">{ip.academicPosition}</strong>
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold shrink-0">
                      {ip.institutionShort}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                    {ip.institution}
                  </p>

                  <div className="bg-stone-50 p-3 rounded border border-stone-200/70 mb-5">
                    <span className="text-[11px] font-mono uppercase text-stone-500 font-semibold block mb-0.5">
                      Especialidad investigadora
                    </span>
                    <p className="text-xs text-stone-700 italic">
                      «{ip.specialty}»
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                  {/* ORCID identifier link */}
                  <a
                    href={ip.orcidUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 hover:bg-[#A6CE39]/15 text-stone-700 hover:text-[#2E5E1A] font-mono text-[11px] font-medium transition-colors border border-stone-200"
                    title={`Ver perfil ORCID de ${ip.name}`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#A6CE39] text-white font-bold text-[9px] flex items-center justify-center">
                      iD
                    </span>
                    <span>{ip.orcid}</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>

                  {/* Email contact */}
                  <a
                    href={`mailto:${ip.email}`}
                    className="inline-flex items-center gap-1 text-[#8B1E24] hover:underline font-medium"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ip.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. EQUIPO DE INVESTIGACIÓN (EI) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2 border-b border-stone-200">
            <div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-800" />
                <span>Equipo de Investigación</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Investigadores doctores con vinculación a proyectos I+D+i (UFV, UESD, UAM, UNAV)
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={eiSearch}
                onChange={(e) => setEiSearch(e.target.value)}
                placeholder="Filtrar por nombre o universidad..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#8B1E24]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredEI.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-stone-200 hover:border-stone-300 rounded p-5 shadow-xs transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                      {member.name}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 shrink-0 font-semibold">
                      {member.institutionShort}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 mb-2 font-medium">
                    {member.institution}
                  </p>

                  {member.specialty && (
                    <p className="text-xs text-stone-500 italic mb-4 leading-relaxed">
                      «{member.specialty}»
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    <span>{member.location}</span>
                  </span>
                  {member.orcid && member.orcidUrl ? (
                    <a
                      href={member.orcidUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-stone-100 hover:bg-[#A6CE39]/15 text-stone-700 hover:text-[#2E5E1A] font-mono text-[10px] font-medium transition-colors border border-stone-200"
                      title={`ORCID de ${member.name}`}
                    >
                      <span className="w-3 h-3 rounded-full bg-[#A6CE39] text-white font-bold text-[8px] flex items-center justify-center">
                        iD
                      </span>
                      <span>ORCID</span>
                    </a>
                  ) : (
                    <span className="font-mono text-[11px] text-stone-400">
                      {member.role}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredEI.length === 0 && (
            <div className="text-center py-8 bg-stone-50 rounded border border-stone-200 text-xs text-stone-600">
              No se encontraron miembros del Equipo de Investigación con ese término.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
