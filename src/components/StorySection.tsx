import { motion } from "motion/react";
import { BookOpen, SquarePen } from "lucide-react";

export function StorySection() {
  return (
    <section id="share-story" className="py-24 bg-surface-bright">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="flex justify-center"
          >
            <SquarePen className="text-primary w-12 h-12 mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-background font-plus-jakarta">
            Share Your Story
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            In the spirit of "The Weaver of Stories," we invite you to contribute your own narrative. Every journey adds a thread to the tapestry.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/30"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-primary ml-2">
                Your Name or Nickname
              </label>
              <input 
                type="text"
                placeholder="e.g. The Fox Spirit"
                className="w-full bg-surface-container-highest border-none rounded-xl p-5 focus:ring-2 focus:ring-primary transition-all text-on-background placeholder:text-on-surface-variant/50 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-primary ml-2">
                The Tale You Carry
              </label>
              <textarea 
                placeholder="What responsibility have you embraced?"
                rows={6}
                className="w-full bg-surface-container-highest border-none rounded-xl p-5 focus:ring-2 focus:ring-primary transition-all text-on-background placeholder:text-on-surface-variant/50 outline-none resize-none"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-all"
            >
              Submit Story
              <BookOpen className="w-6 h-6" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
