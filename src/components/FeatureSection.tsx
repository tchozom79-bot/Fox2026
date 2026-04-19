import { motion } from "motion/react";
import { Play } from "lucide-react";

export function FeatureSection() {
  return (
    <section id="feature" className="py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full bg-inverse-surface rounded-[2rem] overflow-hidden flex items-center justify-center shadow-cinematic group"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyHOUDntpzBPRNeGjTHWM4jHsTGgjwqQpQTTCs9FJbiCTGHeSkbXEoR3dKQiEWVTi2i89qRhCI-lMcx_rQ8gJ9xG7ScCoM_DjwilvSQCKYanhBsYaqOuSl0nAvL4WKck8C38zai8dCQ8tbCduGq_oO7tRPOiCAjnuDLxpimlb8ubMpgKDzLH-bnzlq9WqjtAL_nxjDYhJrWKSwPRhWvZuzGTvFav_g6hwR8k3dob7BuCuVVklEmv_olADy82topjYuETAVIQs4hnBz" 
            alt="Cinematic production still" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-10 text-center px-8">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-xl border border-primary-container flex items-center justify-center mx-auto mb-8 cursor-pointer hover:bg-primary/40 transition-colors shadow-2xl"
            >
              <Play className="w-12 h-12 text-white fill-white translate-x-1" />
            </motion.div>
            <h3 className="text-surface-bright text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-plus-jakarta">
              Enjoy the Movie
            </h3>
            <p className="text-surface-container-highest text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Sit back, relax, and let the cinematic experience wash over you. A masterpiece designed for the discerning eye.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
