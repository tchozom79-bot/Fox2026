import { motion, AnimatePresence } from "motion/react";
import { X, Smartphone, Download } from "lucide-react";

interface GetAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall?: () => void;
  canInstall?: boolean;
}

export function GetAppModal({ isOpen, onClose, onInstall, canInstall }: GetAppModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-background/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-surface-bright w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden border border-outline-variant/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-on-primary shadow-lg">
                  <Smartphone className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-black text-on-background tracking-tighter font-plus-jakarta">
                  Install stories
                </h2>
                <p className="text-on-surface-variant font-medium">
                  Add the app to your home screen for the best cinematic experience.
                </p>
              </div>

              {canInstall ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onInstall}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  Confirm Installation
                </motion.button>
              ) : (
                <div className="bg-surface-container-high p-6 rounded-2xl border border-outline-variant/20 space-y-4 text-left">
                  <p className="font-bold text-on-background flex items-center gap-2">
                    <Download className="w-4 h-4 text-primary" />
                    How to Install:
                  </p>
                  <ul className="space-y-2 text-sm text-on-surface-variant">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>Open your browser's <span className="text-on-background font-semibold">Share</span> or <span className="text-on-background font-semibold">Menu</span>.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>Select <span className="text-on-background font-semibold">"Add to Home Screen"</span>.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
