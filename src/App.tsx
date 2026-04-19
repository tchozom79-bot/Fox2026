/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/AboutPage";
import { GetAppModal } from "./components/GetAppModal";

export default function App() {
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);

  return (
    <BrowserRouter>
      <Layout onOpenGetApp={() => setIsGetAppOpen(true)}>
        <Routes>
          <Route path="/" element={<HomePage onOpenGetApp={() => setIsGetAppOpen(true)} />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<div className="py-32 px-8 text-center"><h1 className="text-4xl font-black">Privacy Policy</h1><p className="mt-4 text-on-surface-variant">Coming soon...</p></div>} />
        </Routes>
      </Layout>
      <GetAppModal isOpen={isGetAppOpen} onClose={() => setIsGetAppOpen(false)} />
    </BrowserRouter>
  );
}
