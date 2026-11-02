export interface ProjectMetadata {
  title: string;
  subtitle: string;
  acronym: string;
  reference: string;
  modality: string;
  period: string;
  startDate: string;
  endDate: string;
  area: string;
  executingEntity: string;
  faculty: string;
  department: string;
  fundingEntity: string;
  fundingCode: string;
  coFinancing: string;
  executiveSummary: string;
  plannedOutputs: {
    articles: string;
    monographs: string;
    collectiveVolume: string;
    translation: string;
  };
  indicators: {
    workTeamTotal: number;
    men: number;
    women: number;
    phdTheses: number;
    indexedPublications: number;
  };
}

export interface ResearchLine {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  keyConcepts: string[];
  philosophicalQuestions: string[];
}

export interface PrincipalInvestigator {
  name: string;
  title: string;
  academicPosition: string;
  orcid: string;
  orcidUrl: string;
  email: string;
  institution: string;
  institutionShort: string;
  role: string;
  location: string;
  specialty: string;
}

export interface ResearchTeamMember {
  name: string;
  institution: string;
  institutionShort: string;
  role: string;
  location: string;
  specialty?: string;
  orcid?: string;
  orcidUrl?: string;
}

export interface WorkTeamMember {
  name: string;
  institution: string;
  institutionShort: string;
  country: string;
  region: 'España' | 'Europa' | 'Norteamérica' | 'Latinoamérica' | 'Asia';
  category: 'Investigador en Formación / Predoc' | 'Colaborador Internacional';
  gender: 'M' | 'F';
  isPhdCandidate?: boolean;
  flag: string;
}

export interface SeminarSession {
  title: string;
  date: string;
  isoDate: string;
  durationHours: number;
  time: string;
  location: string;
  room: string;
  book: string;
  publisherYear: string;
  speaker: string;
  speakerAffiliation: string;
  description: string;
}

export interface ReadingItem {
  id: string;
  author: string;
  title: string;
  editorial: string;
  year: string;
  type: 'Monografía' | 'Estudio Exegético' | 'Clásico / Ejercicios' | 'Traducción y Seminario';
  notes: string;
}

export interface WorkshopItem {
  id: string;
  edition: string;
  title: string;
  topic: string;
  date: string;
  location: string;
  status: 'Confirmado' | 'En preparación';
}

export const DISOFIA_METADATA: ProjectMetadata = {
  title: 'Dialéctica socrática y filosofía como forma de vida',
  subtitle: 'Proyecto de investigación no orientada, Tipo B · Convocatoria Proyectos de Generación de Conocimiento (AEI / MCIN)',
  acronym: 'DISOFIA',
  reference: 'PID2025-168764NB-I00',
  modality: 'Proyectos de investigación no orientada, Tipo B',
  period: '2026 – 2029',
  startDate: '1 de septiembre de 2026',
  endDate: '31 de agosto de 2029',
  area: 'Mente, lenguaje y pensamiento (Filosofía)',
  executingEntity: 'Universidad de Navarra',
  faculty: 'Facultad de Filosofía y Letras',
  department: 'Departamento de Filosofía',
  fundingEntity: 'Agencia Estatal de Investigación (AEI) / Ministerio de Ciencia, Innovación y Universidades',
  fundingCode: 'MCIN/AEI/10.13039/501100011033',
  coFinancing: 'Cofinanciado por la Unión Europea (Fondo Social Europeo / FEDER)',
  executiveSummary:
    'Estudio sistemático de la dialéctica socrática como práctica que integra investigación racional, transformación existencial y transmisión de una forma de vida.',
  plannedOutputs: {
    articles: '~20 artículos indexados en revistas de alto impacto (JCR / SJR)',
    monographs: '2 monografías científicas especializadas',
    collectiveVolume: '1 volumen colectivo internacional de referencia',
    translation: '1 traducción comentada y crítica (Platón, República I)',
  },
  indicators: {
    workTeamTotal: 23,
    men: 17,
    women: 6,
    phdTheses: 7,
    indexedPublications: 20,
  },
};

export const PRINCIPAL_INVESTIGATORS: PrincipalInvestigator[] = [
  {
    name: 'Daniel Doyle',
    title: 'Doctor en Filosofía',
    academicPosition: 'Profesor Contratado Doctor',
    orcid: '0000-0002-8959-5906',
    orcidUrl: 'https://orcid.org/0000-0002-8959-5906',
    email: 'ddoyle@unav.es',
    institution: 'Universidad de Navarra (Facultad de Filosofía y Letras, Dpto. Filosofía)',
    institutionShort: 'UNAV',
    role: 'Investigador Principal 1 (IP1)',
    location: 'Pamplona, España',
    specialty: 'Filosofía Griega, Dialéctica Socrática, Hermenéutica Filosófica',
  },
  {
    name: 'Miquel Solans',
    title: 'Doctor en Filosofía',
    academicPosition: 'Profesor Contratado Doctor',
    orcid: '0000-0002-0182-6213',
    orcidUrl: 'https://orcid.org/0000-0002-0182-6213',
    email: 'msolans@unav.es',
    institution: 'Universidad de Navarra (Facultad de Filosofía y Letras, Dpto. Filosofía)',
    institutionShort: 'UNAV',
    role: 'Investigador Principal 2 (IP2)',
    location: 'Pamplona, España',
    specialty: 'Filosofía Antigua, Sócrates y Platonismo, Filosofía como Forma de Vida',
  },
];

export const RESEARCH_TEAM: ResearchTeamMember[] = [
  {
    name: 'Miguel Martí Sánchez',
    institution: 'Universidad Francisco de Vitoria',
    institutionShort: 'UFV',
    role: 'Equipo de Investigación (EI)',
    location: 'Madrid, España',
    specialty: 'Ética Clásica, Dialéctica Socrática, Filosofía Práctica',
    orcid: '0000-0003-1575-3745',
    orcidUrl: 'https://orcid.org/0000-0003-1575-3745',
  },
  {
    name: 'David Torrijos Castrillejo',
    institution: 'Universidad Eclesiástica San Dámaso',
    institutionShort: 'UESD',
    role: 'Equipo de Investigación (EI)',
    location: 'Madrid, España',
    specialty: 'Metafísica Clásica, Tradición Platónica y Aristotélica',
    orcid: '0000-0003-2005-5634',
    orcidUrl: 'https://orcid.org/0000-0003-2005-5634',
  },
  {
    name: 'Marcela Duque Ramírez',
    institution: 'Universidad Francisco de Vitoria',
    institutionShort: 'UFV',
    role: 'Equipo de Investigación (EI)',
    location: 'Madrid, España',
    specialty: 'Antropología Filosófica, Poética y Afectividad',
    orcid: '0009-0002-7634-124X',
    orcidUrl: 'https://orcid.org/0009-0002-7634-124X',
  },
  {
    name: 'Iván de los Ríos',
    institution: 'Universidad Autónoma de Madrid',
    institutionShort: 'UAM',
    role: 'Equipo de Investigación (EI)',
    location: 'Madrid, España',
    specialty: 'Filosofía Helenística, Ética Antigua, Cinismo y Estoicismo',
    orcid: '0000-0002-3804-5402',
    orcidUrl: 'https://orcid.org/0000-0002-3804-5402',
  },
  {
    name: 'Vojtech Kolomy',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    role: 'Equipo de Investigación (EI)',
    location: 'Pamplona, España',
    specialty: 'Filosofía Antigua, Dialéctica Platónica',
    orcid: '0000-0003-3064-3480',
    orcidUrl: 'https://orcid.org/0000-0003-3064-3480',
  },
];

export const WORK_TEAM: WorkTeamMember[] = [
  // 17 Colaboradores internacionales (ordenados alfabéticamente)
  {
    name: 'Alejandro Vigo Pacheco',
    institution: 'Universidad de los Andes',
    institutionShort: 'UANDES',
    country: 'Chile',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇨🇱',
  },
  {
    name: 'Ariel Vecchio',
    institution: 'UNSAM / CONICET',
    institutionShort: 'CONICET',
    country: 'Argentina',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇦🇷',
  },
  {
    name: 'Claudia Carbonell',
    institution: 'Universidad de Piura',
    institutionShort: 'UDEP',
    country: 'Perú',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'F',
    flag: '🇵🇪',
  },
  {
    name: 'Cristina Ionescu',
    institution: 'The Catholic University of America (CUA)',
    institutionShort: 'CUA',
    country: 'Estados Unidos',
    region: 'Norteamérica',
    category: 'Colaborador Internacional',
    gender: 'F',
    flag: '🇺🇸',
  },
  {
    name: 'Daniel Vázquez',
    institution: 'Mary Immaculate College',
    institutionShort: 'MIC',
    country: 'Irlanda',
    region: 'Europa',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇮🇪',
  },
  {
    name: 'Francisco Javier Aoiz Monreal',
    institution: 'Universidad de Santiago de Chile',
    institutionShort: 'USACH',
    country: 'Chile',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇨🇱',
  },
  {
    name: 'Frisbee C.C. Sheffield',
    institution: 'University of Cambridge',
    institutionShort: 'Cambridge',
    country: 'Reino Unido',
    region: 'Europa',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇬🇧',
  },
  {
    name: 'Gabriela Rossi',
    institution: 'Universidad de los Andes',
    institutionShort: 'UANDES',
    country: 'Chile',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'F',
    flag: '🇨🇱',
  },
  {
    name: 'Jacob Samuel Klein',
    institution: 'Colgate University',
    institutionShort: 'Colgate',
    country: 'Estados Unidos',
    region: 'Norteamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇺🇸',
  },
  {
    name: 'Jens Kristian Larsen',
    institution: 'NTNU (Norwegian University of Science and Technology)',
    institutionShort: 'NTNU',
    country: 'Noruega',
    region: 'Europa',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇳🇴',
  },
  {
    name: 'John Sellars',
    institution: 'Royal Holloway, University of London',
    institutionShort: 'RHUL',
    country: 'Reino Unido',
    region: 'Europa',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇬🇧',
  },
  {
    name: 'José Alberto Ross',
    institution: 'Universidad Panamericana',
    institutionShort: 'UP',
    country: 'México',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇲🇽',
  },
  {
    name: 'José Antonio Giménez',
    institution: 'Universidad de los Andes',
    institutionShort: 'UANDES',
    country: 'Chile',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇨🇱',
  },
  {
    name: 'Katja Vogt',
    institution: 'Columbia University',
    institutionShort: 'Columbia',
    country: 'Estados Unidos',
    region: 'Norteamérica',
    category: 'Colaborador Internacional',
    gender: 'F',
    flag: '🇺🇸',
  },
  {
    name: 'Marcelo Boeri',
    institution: 'Pontificia Universidad Católica de Chile',
    institutionShort: 'PUC',
    country: 'Chile',
    region: 'Latinoamérica',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇨🇱',
  },
  {
    name: 'Noburu Notomi',
    institution: 'University of Tokyo',
    institutionShort: 'UTokyo',
    country: 'Japón',
    region: 'Asia',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇯🇵',
  },
  {
    name: 'Santiago Chame',
    institution: 'Ludwig-Maximilians-Universität München (LMU)',
    institutionShort: 'LMU',
    country: 'Alemania',
    region: 'Europa',
    category: 'Colaborador Internacional',
    gender: 'M',
    flag: '🇩🇪',
  },

  // 6 Investigadores doctorales vinculados al proyecto (ordenados alfabéticamente)
  {
    name: 'Bruno Julio Rossi',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    country: 'España / Argentina',
    region: 'España',
    category: 'Investigador en Formación / Predoc',
    gender: 'M',
    isPhdCandidate: true,
    flag: '🇪🇸',
  },
  {
    name: 'Jan Podhorski',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    country: 'España / Polonia',
    region: 'España',
    category: 'Investigador en Formación / Predoc',
    gender: 'M',
    isPhdCandidate: true,
    flag: '🇪🇸',
  },
  {
    name: 'María Arévalo',
    institution: 'University of Notre Dame',
    institutionShort: 'Notre Dame',
    country: 'Estados Unidos',
    region: 'Norteamérica',
    category: 'Investigador en Formación / Predoc',
    gender: 'F',
    isPhdCandidate: true,
    flag: '🇺🇸',
  },
  {
    name: 'María Sáez Marcos',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    country: 'España',
    region: 'España',
    category: 'Investigador en Formación / Predoc',
    gender: 'F',
    isPhdCandidate: true,
    flag: '🇪🇸',
  },
  {
    name: 'Mikel Martínez Cirero',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    country: 'España',
    region: 'España',
    category: 'Investigador en Formación / Predoc',
    gender: 'M',
    isPhdCandidate: true,
    flag: '🇪🇸',
  },
  {
    name: 'Orestes Barbero Salces',
    institution: 'Universidad de Navarra',
    institutionShort: 'UNAV',
    country: 'España',
    region: 'España',
    category: 'Investigador en Formación / Predoc',
    gender: 'M',
    isPhdCandidate: true,
    flag: '🇪🇸',
  },
];

export const RESEARCH_LINES: ResearchLine[] = [
  {
    id: 'linea-1',
    number: '01',
    title: 'Dialéctica e ignorancia como autoengaño',
    shortDescription: 'Estudio del examen socrático como proceso de autoesclarecimiento racional frente a la ilusión de saber.',
    extendedDescription:
      'Frente a las visiones puramente refutativas o erísticas, esta línea aborda la aporía socrática no como un simple callejón sin salida lógico, sino como el motor dialéctico que desarticula la estructura autoocultante del error y desvela el autoengaño fundamental del sujeto.',
    keyConcepts: ['Aporía existencial', 'Elenchos', 'Autoengaño (self-deception)', 'Docta ignorancia', 'Episteme vs. Doxa'],
    philosophicalQuestions: [
      '¿Por qué el error moral y epistémico tiende a protegerse a sí mismo?',
      '¿Cómo puede la perplejidad inducida por el diálogo abrir espacio al verdadero aprendizaje?',
      '¿De qué manera el examen dialógico transforma las creencias de fondo del interlocutor?',
    ],
  },
  {
    id: 'linea-2',
    number: '02',
    title: 'Dialéctica y afectividad',
    shortDescription: 'Análisis del papel constitutivo de emociones como la perplejidad, la vergüenza, el asombro y la amistad.',
    extendedDescription:
      'La racionalidad socrática no opera en un vacío impasible. Investigamos cómo las afecciones (el rubor del pudor o vergüenza dialéctica, la admiración, la perplejidad, el eros pedagógico y la philia) constituyen condiciones intrínsecas para que el razonamiento dialéctico genere compromiso existencial y cambio de vida.',
    keyConcepts: ['Aidos (Vergüenza)', 'Thauma (Admiración/Asombro)', 'Eros filosófico', 'Philia (Amistad dialógica)', 'Pathos y Logos'],
    philosophicalQuestions: [
      '¿Es la vergüenza una emoción moralmente indispensable en la refutación socrática?',
      '¿Qué rol juega la amistad intelectual en la perseverancia dialéctica compartida?',
      '¿Cómo supera Sócrates la dicotomía moderna entre emoción y razón pura?',
    ],
  },
  {
    id: 'linea-3',
    number: '03',
    title: 'Dialéctica y transmisión (pedagógica y política)',
    shortDescription: 'Dimensiones pedagógicas y políticas de la paideia socrática y su recepción contemporánea.',
    extendedDescription:
      'Examinamos la paideia socrática como propuesta pública comunitaria y política, analizando cómo el examen crítico se transmite de persona a persona y cómo ha sido reactivado en la filosofía antigua (helenismo, estoicismo, cinismo) y contemporánea (tanto en la corriente analítica como en la continental, desde Foucault y Hadot hasta McDowell y Callard).',
    keyConcepts: ['Paideia socrática', 'Epimeleia heautou (Cuidado de sí)', 'Politeia socrática', 'Tradición helenística', 'Recepción analítica y continental'],
    philosophicalQuestions: [
      '¿Cómo concilia Sócrates la interpelación privada individual con el bienestar de la polis?',
      '¿En qué sentido la Filosofía como Forma de Vida (FFV) requiere de una lógica rigurosa y no solo de prácticas asépticas?',
      '¿Qué lecciones ofrece la práctica socrática para los desafíos deliberativos de las democracias contemporáneas?',
    ],
  },
];

export const INAUGURAL_SESSION: SeminarSession = {
  title: 'Sesión Inaugural del Seminario Permanente de Lectura DISOFIA',
  date: 'Miércoles, 4 de noviembre de 2026',
  isoDate: '2026-11-04T12:00:00',
  durationHours: 1.5,
  time: '12:00 – 13:30 h (Hora peninsular española)',
  location: 'Universidad de Navarra (Campus Pamplona)',
  room: 'Aula 2280 · Seminario del Departamento de Filosofía',
  book: 'Sócrates al descubierto',
  publisherYear: 'Editorial Kairós, 2025',
  speaker: 'Miguel Martí Sánchez',
  speakerAffiliation: 'Investigador del Equipo (EI) · Universidad Francisco de Vitoria (UFV)',
  description:
    'Apertura del ciclo anual de lecturas DISOFIA 2026-2027 con la discusión de la reciente monografía de Agnes Callard. Análisis de la radicalidad socrática en la conversación ordinaria y la refutación del autoengaño moral.',
};

export const READING_LIST: ReadingItem[] = [
  {
    id: 'read-1',
    author: 'Agnes Callard',
    title: 'Sócrates al descubierto',
    editorial: 'Editorial Kairós',
    year: '2025',
    type: 'Monografía',
    notes: 'Examen de la figura socrática como modelo de desacuerdo radical y transformación dialógica en el presente.',
  },
  {
    id: 'read-2',
    author: 'D. Futter',
    title: "Socrates' Search for Wisdom. An Exegetical Theory",
    editorial: 'Routledge',
    year: '2025',
    type: 'Estudio Exegético',
    notes: 'Reconstrucción analítica y textual del método inquisitivo socrático en los primeros diálogos platónicos.',
  },
  {
    id: 'read-3',
    author: 'Pierre Hadot',
    title: '¿Qué es la filosofía antigua?',
    editorial: 'Fondo de Cultura Económica (FCE)',
    year: '2000',
    type: 'Clásico / Ejercicios',
    notes: 'Obra canónica sobre la concepción de la filosofía como elección de vida (bios) y discurso doctrinal.',
  },
  {
    id: 'read-4',
    author: 'Pierre Hadot',
    title: 'Ejercicios espirituales y filosofía antigua',
    editorial: 'Siruela',
    year: '2006',
    type: 'Clásico / Ejercicios',
    notes: 'Articulación entre ascética dialéctica, epimeleia heautou y la transformación de la mirada cósmica y moral.',
  },
  {
    id: 'read-5',
    author: 'Platón',
    title: 'República, Libro I (Seminario de lectura y traducción del griego clásico)',
    editorial: 'Edición crítica bilingüe (OCT / Gredos)',
    year: 'Clásico',
    type: 'Traducción y Seminario',
    notes: 'Análisis minucioso del diálogo con Céfalo, Polemarco y la violenta irrupción aporética de Trasímaco.',
  },
];

export const WORKSHOPS: WorkshopItem[] = [
  {
    id: 'ws-1',
    edition: 'I Workshop Internacional DISOFIA',
    title: 'Dialéctica y filosofía como forma de vida en Sócrates',
    topic: 'Fundamentos epistémicos, afectividad y cuidado de sí en el socratismo platónico y helenístico.',
    date: 'Abril de 2027',
    location: 'Universidad de Navarra, Pamplona (España)',
    status: 'Confirmado',
  },
  {
    id: 'ws-2',
    edition: 'II Workshop Internacional DISOFIA',
    title: 'Afectos, ignorancia y comunidad dialógica',
    topic: 'Vergüenza, asombro, amistad política y los límites de la refutación racional.',
    date: 'Primavera de 2028',
    location: 'Universidad Francisco de Vitoria, Madrid (España)',
    status: 'En preparación',
  },
];
