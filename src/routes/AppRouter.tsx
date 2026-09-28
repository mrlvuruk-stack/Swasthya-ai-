import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Marketing Pages
import { HomePage } from '../pages/marketing/HomePage';
import { FeaturesPage } from '../pages/marketing/FeaturesPage';
import { SecurityPage } from '../pages/marketing/SecurityPage';
import { AboutPage } from '../pages/marketing/AboutPage';

// Prototype Application Pages
import { PrototypeOverviewPage } from '../pages/prototype/PrototypeOverviewPage';
import { HealthJourneyPage } from '../pages/prototype/HealthJourneyPage';
import { HealthProfilePage } from '../pages/prototype/HealthProfilePage';
import { ReportsLibraryPage } from '../pages/prototype/ReportsLibraryPage';
import { HealthGoalsPage } from '../pages/prototype/HealthGoalsPage';
import { AssistantPage } from '../pages/prototype/AssistantPage';
import { ReportAnalysisPage } from '../pages/prototype/ReportAnalysisPage';
import { FamilyHealthPage } from '../pages/prototype/FamilyHealthPage';
import { HealthIntelligencePage } from '../pages/prototype/HealthIntelligencePage';
import { IntelligenceCenterPage } from '../pages/prototype/IntelligenceCenterPage';
import { HealthPatternsPage } from '../pages/prototype/HealthPatternsPage';
import { PersonalHealthSummaryPage } from '../pages/prototype/PersonalHealthSummaryPage';
import { WellnessPage } from '../pages/prototype/WellnessPage';
import { EmergencyPage } from '../pages/prototype/EmergencyPage';
import { PrototypeSecurityPage } from '../pages/prototype/PrototypeSecurityPage';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* 1. Marketing Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/security" element={<SecurityPage />} />
      <Route path="/about" element={<AboutPage />} />

      {/* 2. Interactive Prototype Routes */}
      <Route path="/prototype" element={<PrototypeOverviewPage />} />
      <Route path="/prototype/journey" element={<HealthJourneyPage />} />
      <Route path="/prototype/profile" element={<HealthProfilePage />} />
      <Route path="/prototype/reports" element={<ReportsLibraryPage />} />
      <Route path="/prototype/goals" element={<HealthGoalsPage />} />
      <Route path="/prototype/assistant" element={<AssistantPage />} />
      <Route path="/prototype/report-analysis" element={<ReportAnalysisPage />} />
      <Route path="/prototype/family" element={<FamilyHealthPage />} />
      <Route path="/prototype/intelligence" element={<IntelligenceCenterPage />} />
      <Route path="/prototype/patterns" element={<HealthPatternsPage />} />
      <Route path="/prototype/summary" element={<PersonalHealthSummaryPage />} />
      <Route path="/prototype/health-intelligence" element={<HealthIntelligencePage />} />
      <Route path="/prototype/wellness" element={<WellnessPage />} />
      <Route path="/prototype/emergency" element={<EmergencyPage />} />
      <Route path="/prototype/security" element={<PrototypeSecurityPage />} />

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
