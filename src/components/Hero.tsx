import { motion } from "motion/react";

interface HeroProps {
  onOpenGetApp: () => void;
  canInstall?: boolean;
}

export function Hero({ onOpenGetApp, canInstall }: HeroProps) {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-bright/80 via-surface-bright/40 to-transparent z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida/ADBb0uiRem-uywVdJaldtlfBbqk49ntJP-cjAiXgq15Eh7MlBD36EtocFFH3VKLoms243JYovMFuA--wIYfcwe-xcG_8W0UzGahDS2xKA2KrE2yV_SFv5346QlPg6dIHMBgy9KqCmWA-XX0EwI5eMD3H1FxpHJIeRTu4-Q_WbPk1bLunVqpRz7h8s9JQRR1qoxDSuEKvHjlmhoNOoq7XQqWMAUzSV5308bE7dmzMcujMlrJFaLX5e7TZaN28elLXeZZR3J4hHS37M_Dp_2k" 
          alt="Cinematic hero visual" 
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold uppercase tracking-widest mb-6">
            A Cinematic Tale
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-on-background tracking-tighter leading-[0.9] mb-8 font-plus-jakarta">
            With great power comes <span className="text-primary italic">great design.</span>
          </h1>
          <p className="text-xl text-on-surface-variant font-medium max-w-lg mb-10 leading-relaxed">
            Journey through the intersection of myth and modernity. Every letter tells a story of responsibility and heroism.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
