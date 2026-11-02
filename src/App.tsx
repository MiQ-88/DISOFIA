/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ActivitiesSection } from './components/ActivitiesSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { GoogleSitesModal } from './components/GoogleSitesModal';
import { Hero } from './components/Hero';
import { InternationalNetworkSection } from './components/InternationalNetworkSection';
import { Navbar } from './components/Navbar';
import { OfficialDataSection } from './components/OfficialDataSection';
import { OfficialLogosBar } from './components/OfficialLogosBar';
import { PresentationSection } from './components/PresentationSection';
import { ResearchLinesSection } from './components/ResearchLinesSection';
import { TeamSection } from './components/TeamSection';

export default function App() {
  const [googleSitesModalOpen, setGoogleSitesModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-800 flex flex-col font-sans">
      {/* Top Bar following Top Bar Contract */}
      <Navbar
        onOpenGoogleSitesModal={() => setGoogleSitesModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onExploreLines={() => scrollToSection('lineas')}
        onExploreSeminar={() => scrollToSection('actividades')}
        onNavigate={scrollToSection}
      />

      {/* Official Government & University Logos Bar */}
      <OfficialLogosBar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Presentación */}
        <PresentationSection />

        {/* 2. Líneas Principales de Investigación */}
        <ResearchLinesSection />

        {/* 3. Equipo del Proyecto */}
        <TeamSection
          onOpenContactModal={() => setContactModalOpen(true)}
        />

        {/* 4. Colaboradores Internacionales (Red Mundial) */}
        <InternationalNetworkSection />

        {/* 5. Actividades en Curso y Seminarios */}
        <ActivitiesSection
          onOpenContactModal={() => setContactModalOpen(true)}
        />

        {/* 6. Datos Oficiales del Proyecto */}
        <OfficialDataSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenGoogleSitesModal={() => setGoogleSitesModalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Modals */}
      <GoogleSitesModal
        isOpen={googleSitesModalOpen}
        onClose={() => setGoogleSitesModalOpen(false)}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
