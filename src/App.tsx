/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import FeaturePage from "./pages/FeaturePage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<div className="py-32 px-8 text-center"><h1 className="text-4xl font-black">Privacy Policy</h1><p className="mt-4 text-on-surface-variant">Coming soon...</p></div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
