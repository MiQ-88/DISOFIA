import {
  DISOFIA_METADATA,
  INAUGURAL_SESSION,
  PrincipalInvestigator,
  ResearchTeamMember,
  WorkTeamMember,
} from '../data/disofiaData';

/**
 * Generates an iCalendar (.ics) string for the inaugural session
 */
export function generateICS(): string {
  const session = INAUGURAL_SESSION;
  const dtStart = '20261104T110000Z';
  const dtEnd = '20261104T123000Z';
  const dtStamp = '20261028T090000Z';

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//DISOFIA Project//Seminario Permanente//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:disofia-inaugural-20261104@unav.es`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${session.title}`,
    `DESCRIPTION:Lectura: ${session.book} (${session.publisherYear}). Ponente: ${session.speaker} (${session.speakerAffiliation}). Proyecto PID2025-168764NB-I00`,
    `LOCATION:${session.room}, ${session.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

/**
 * Filter work team members (Equipo de Trabajo: 23 miembros)
 */
export function filterWorkTeam(
  list: WorkTeamMember[],
  query: string,
  region: string,
  categoryFilter: 'all' | 'predoc' | 'international' = 'all',
  genderFilter: 'all' | 'M' | 'F' = 'all'
): WorkTeamMember[] {
  const cleanQuery = query.trim().toLowerCase();
  return list.filter((member) => {
    // Region
    const matchesRegion = region === 'all' || member.region === region;
    if (!matchesRegion) return false;

    // Category
    if (categoryFilter === 'predoc' && member.category !== 'Investigador en Formación / Predoc') {
      return false;
    }
    if (categoryFilter === 'international' && member.category !== 'Colaborador Internacional') {
      return false;
    }

    // Gender
    if (genderFilter !== 'all' && member.gender !== genderFilter) {
      return false;
    }

    // Text search
    if (!cleanQuery) return true;

    return (
      member.name.toLowerCase().includes(cleanQuery) ||
      member.institution.toLowerCase().includes(cleanQuery) ||
      member.country.toLowerCase().includes(cleanQuery)
    );
  });
}

/**
 * Filter research team members (Equipo de Investigación)
 */
export function filterResearchTeam(
  list: ResearchTeamMember[],
  query: string
): ResearchTeamMember[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return list;

  return list.filter(
    (member) =>
      member.name.toLowerCase().includes(cleanQuery) ||
      member.institution.toLowerCase().includes(cleanQuery) ||
      (member.specialty && member.specialty.toLowerCase().includes(cleanQuery))
  );
}

/**
 * Format citation for academic grant acknowledgement
 */
export function formatProjectCitation(style: 'apa' | 'bibtex'): string {
  if (style === 'bibtex') {
    return `@misc{disofia2026,
  title = {${DISOFIA_METADATA.title}},
  author = {Doyle S{\\'a}nchez, Daniel and Solans Blasco, Miquel},
  year = {2026--2029},
  note = {Proyecto I+D+i ${DISOFIA_METADATA.reference} (${DISOFIA_METADATA.modality}), financiado por MCIN/AEI/10.13039/501100011033 y cofinanciado por la UE},
  institution = {${DISOFIA_METADATA.executingEntity} (${DISOFIA_METADATA.faculty}, ${DISOFIA_METADATA.department})}
}`;
  }

  return `Doyle Sánchez, D. & Solans Blasco, M. (IPs). (2026–2029). ${DISOFIA_METADATA.title}. Proyecto PID2025-168764NB-I00 (${DISOFIA_METADATA.modality}, Área: ${DISOFIA_METADATA.area}), financiado por el Ministerio de Ciencia, Innovación y Universidades / Agencia Estatal de Investigación (AEI) y la Unión Europea. Universidad de Navarra (${DISOFIA_METADATA.faculty}, ${DISOFIA_METADATA.department}).`;
}
