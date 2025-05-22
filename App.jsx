// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ✅ IMPORT THIS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import EconomicTheories from './components/EconomicTheories';
import Conclusion from './components/Conclusion';
import './index.css';

import SupplySideEconomicsPage from './components/SupplySideEconomicsPage';
import KeynesianEconomicsPage from './components/KeynesianEconomicsPage';
import MonetarismPage from './components/MonetarismPage';
import AustrianSchoolPage from './components/AustrianSchoolPage';
import MarxianEconomicsPage from './components/MarxianEconomicsPage';
import BehavioralEconomicsPage from './components/BehavioralEconomicsPage';

const MainPageLayout = () => (
  <>
    <Hero />
    <Introduction />
    <EconomicTheories />
    <Conclusion />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ ADD THIS HERE */}
      <div className="flex flex-col min-h-screen bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPageLayout />} />
            <Route path="/theory/supplyside-economics" element={<SupplySideEconomicsPage />} />
            <Route path="/theory/keynesian-economics" element={<KeynesianEconomicsPage />} />
            <Route path="/theory/monetarism" element={<MonetarismPage />} />
            <Route path="/theory/austrian-school" element={<AustrianSchoolPage />} />
            <Route path="/theory/marxian-economics" element={<MarxianEconomicsPage />} />
            <Route path="/theory/behavioral-economics" element={<BehavioralEconomicsPage />} />
            {/* <Route path="*" element={<div className="text-white text-center py-10">Page Not Found</div>} /> */}
          </Routes>
        </main>
        <footer className="bg-gray-800 text-center p-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Denver Le
        </footer>
      </div>
    </Router>
  );
}

export default App;
