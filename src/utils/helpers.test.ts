import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterResearchTeam,
  filterWorkTeam,
  formatProjectCitation,
  generateICS,
} from './helpers';
import {
  DISOFIA_METADATA,
  PRINCIPAL_INVESTIGATORS,
  RESEARCH_TEAM,
  WORK_TEAM,
} from '../data/disofiaData';

test('Principal Investigators match user data', () => {
  assert.equal(PRINCIPAL_INVESTIGATORS.length, 2);
  const ip1 = PRINCIPAL_INVESTIGATORS[0];
  const ip2 = PRINCIPAL_INVESTIGATORS[1];

  assert.equal(ip1.name, 'Miquel Solans Blasco');
  assert.equal(ip1.orcid, '0000-0002-0182-6213');
  assert.equal(ip1.email, 'msolans@unav.es');
  assert.equal(ip1.academicPosition, 'Profesor Contratado Doctor');

  assert.equal(ip2.name, 'Daniel Doyle Sánchez');
  assert.equal(ip2.orcid, '0000-0002-8959-5906');
  assert.equal(ip2.email, 'ddoyle@unav.es');
  assert.equal(ip2.academicPosition, 'Profesor Ayudante Doctor');
});

test('Research Team contains extracted members', () => {
  assert.equal(RESEARCH_TEAM.length, 5);
  const names = RESEARCH_TEAM.map((m) => m.name);
  assert.ok(names.includes('Miguel Martí Sánchez'));
  assert.ok(names.includes('David Torrijos Castrillejo'));
  assert.ok(names.includes('Marcela Duque Ramírez'));
  assert.ok(names.includes('Iván de los Ríos'));
  assert.ok(names.includes('Vojtech Kolomy'));
});

test('Work Team contains exactly 23 members with 17 men and 6 women', () => {
  assert.equal(WORK_TEAM.length, 23);
  const men = WORK_TEAM.filter((m) => m.gender === 'M');
  const women = WORK_TEAM.filter((m) => m.gender === 'F');

  assert.equal(men.length, 17);
  assert.equal(women.length, 6);
  assert.equal(DISOFIA_METADATA.indicators.workTeamTotal, 23);
  assert.equal(DISOFIA_METADATA.indicators.men, 17);
  assert.equal(DISOFIA_METADATA.indicators.women, 6);
  assert.equal(DISOFIA_METADATA.indicators.phdTheses, 7);
  assert.equal(DISOFIA_METADATA.indicators.indexedPublications, 20);
});

test('filterWorkTeam filters by text query and category', () => {
  const notomi = filterWorkTeam(WORK_TEAM, 'Notomi', 'all');
  assert.equal(notomi.length, 1);
  assert.equal(notomi[0].name, 'Noburu Notomi');

  const predocs = filterWorkTeam(WORK_TEAM, '', 'all', 'predoc');
  assert.equal(predocs.length, 6);

  const women = filterWorkTeam(WORK_TEAM, '', 'all', 'all', 'F');
  assert.equal(women.length, 6);
});

test('formatProjectCitation generates APA and BibTeX strings with Solans & Doyle and grant info', () => {
  const apa = formatProjectCitation('apa');
  assert.ok(apa.includes('PID2025-168764NB-I00'));
  assert.ok(apa.includes('Solans Blasco, M.'));
  assert.ok(apa.includes('Doyle Sánchez, D.'));
  assert.ok(apa.includes('Mente, lenguaje y pensamiento'));

  const bib = formatProjectCitation('bibtex');
  assert.ok(bib.includes('@misc{disofia2026'));
  assert.ok(bib.includes('Doyle'));
  assert.ok(bib.includes('Solans Blasco'));
});
