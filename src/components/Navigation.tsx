import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  onOpenGetApp: () => void;
  canInstall?: boolean;
}

export function Navigation({ onOpenGetApp, canInstall }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "Feature", href: "/feature" },
    { name: "Your Story", href: "/story" },
    { name: "About Them", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface-bright/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 active:scale-95 transition-transform group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 bg-linear-to-tr from-[#9a4600] to-[#ffb68d] rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" 
            />
            <div className="relative bg-linear-to-tr from-primary to-primary-container p-2 rounded-xl text-on-primary">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <span className="text-2xl font-black text-primary tracking-tighter font-plus-jakarta">
            stories
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenGetApp}
            className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/20"
          >
            {canInstall ? "Install stories" : "Get the App"}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary bg-surface-container-high rounded-full hover:bg-surface-container-highest transition-colors relative z-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-on-background/10 backdrop-blur-sm z-40 h-screen"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full max-w-sm h-screen bg-surface-bright shadow-cinematic z-40 p-12 flex flex-col pt-32"
            >
              <nav className="flex flex-col gap-8">
                {links.map((link, idx) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-black transition-colors font-plus-jakarta tracking-tighter ${
                          isActive ? "text-primary" : "text-on-background hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              
              <div className="mt-auto space-y-8">
                <div className="h-px bg-outline-variant/30 w-full" />
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onOpenGetApp();
                  }}
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20"
                >
                  {canInstall ? "Install stories" : "Get the App"}
                </button>
                <div className="flex gap-4 justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
                    © 2024 Fox and the Lover
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
