import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  onOpenGetApp: () => void;
}

export function Layout({ children, onOpenGetApp }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-primary-fixed-dim selection:text-on-primary-fixed-variant flex flex-col">
      <Navigation onOpenGetApp={onOpenGetApp} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
