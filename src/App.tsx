/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRegisterSW } from 'virtual:pwa-register/react';
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/AboutPage";
import { GetAppModal } from "./components/GetAppModal";

export default function App() {
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Register Service Worker
  useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    }
  });

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
      setIsGetAppOpen(false);
    } else {
      setIsGetAppOpen(true);
    }
  };

  return (
    <BrowserRouter>
      <Layout onOpenGetApp={handleInstall} canInstall={!!deferredPrompt}>
        <Routes>
          <Route path="/" element={<HomePage onOpenGetApp={handleInstall} canInstall={!!deferredPrompt} />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<div className="py-32 px-8 text-center"><h1 className="text-4xl font-black">Privacy Policy</h1><p className="mt-4 text-on-surface-variant">Coming soon...</p></div>} />
        </Routes>
      </Layout>
      <GetAppModal 
        isOpen={isGetAppOpen} 
        onClose={() => setIsGetAppOpen(false)} 
        onInstall={handleInstall}
        canInstall={!!deferredPrompt}
      />
    </BrowserRouter>
  );
}
