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
            className="relative bg-surface-bright w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 text-center space-y-8">
              <div className="flex justify-center">
                <div className="relative w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-on-primary shadow-lg">
                  <Smartphone className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-black text-on-background tracking-tighter font-plus-jakarta lowercase">
                  install stories
                </h2>
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                  Directly install the application on your mobile or tablet for an immersive experience.
                </p>
              </div>

              {canInstall ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onInstall}
                  className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3"
                >
                  <Download className="w-5 h-5" />
                  Install Directly
                </motion.button>
              ) : (
                <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/20 space-y-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-on-background">How to Install</p>
                      <p className="text-xs text-on-surface-variant">Browser A2HS support needed</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                      <p className="text-sm text-on-surface-variant">Tap the <span className="font-bold text-on-background">Share</span> or <span className="font-bold text-on-background">Menu</span> button.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                      <p className="text-sm text-on-surface-variant">Select <span className="font-bold text-on-background">"Add to Home Screen"</span> to install.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-30">
                  direct pwa installation • build 2.4.0
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
