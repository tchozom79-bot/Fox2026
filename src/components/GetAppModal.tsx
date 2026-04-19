import { motion, AnimatePresence } from "motion/react";
import { X, Apple, PlayCircle, Smartphone } from "lucide-react";

interface GetAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GetAppModal({ isOpen, onClose }: GetAppModalProps) {
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
            className="relative bg-surface-bright w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/20"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-12 text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
                  <Smartphone className="w-10 h-10" />
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-black text-on-background tracking-tighter font-plus-jakarta">
                  Get the Fox Spirit
                </h2>
                <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
                  Experience the cinematic tale wherever you go. Available now on your favorite platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-on-background text-surface-bright py-4 rounded-2xl shadow-lg border border-on-background/10 transition-all"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest leading-none opacity-60">Download on</p>
                    <p className="text-lg font-bold leading-none mt-1">App Store</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-surface-container-highest text-on-background py-4 rounded-2xl shadow-lg border border-outline-variant/30 transition-all font-manrope"
                >
                  <PlayCircle className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest leading-none opacity-60">Get it on</p>
                    <p className="text-lg font-bold leading-none mt-1">Google Play</p>
                  </div>
                </motion.button>
              </div>

              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-40">
                  Version 2.4.0 • Free for everyone
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
