import { motion, AnimatePresence } from "motion/react";
import { BookOpen, SquarePen, Check } from "lucide-react";
import React, { useState, useEffect } from "react";

export function StorySection() {
  const [submitted, setSubmitted] = useState(false);

  const [userStories, setUserStories] = useState<any[]>([]);

  useEffect(() => {
    const stories = JSON.parse(localStorage.getItem('user_stories') || '[]');
    setUserStories(stories);
  }, [submitted]);

  const deleteStory = (index: number) => {
    const newStories = [...userStories];
    newStories.splice(index, 1);
    localStorage.setItem('user_stories', JSON.stringify(newStories));
    setUserStories(newStories);
  };

  const clearAllData = () => {
    if (window.confirm("Are you sure you want to delete all locally stored stories?")) {
      localStorage.removeItem('user_stories');
      setUserStories([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const story = {
      name: formData.get('name'),
      tale: formData.get('tale'),
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const existingStories = JSON.parse(localStorage.getItem('user_stories') || '[]');
    localStorage.setItem('user_stories', JSON.stringify([...existingStories, story]));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
          <div className="pt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Stored on Device Only
            </span>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-surface-container-low p-8 md:p-12 rounded-[2rem] shadow-sm border border-outline-variant/30 relative overflow-hidden mb-16"
        >
          <AnimatePresence>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-surface-container-low z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black font-plus-jakarta text-on-background mb-2">Story Received</h3>
                <p className="text-on-surface-variant">Your contribution has been added to your local tapestry.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                >
                  Share another story
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-primary ml-2">
                    Your Name or Nickname
                  </label>
                  <input 
                    required
                    name="name"
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
                    required
                    name="tale"
                    placeholder="What responsibility have you embraced?"
                    rows={6}
                    className="w-full bg-surface-container-highest border-none rounded-xl p-5 focus:ring-2 focus:ring-primary transition-all text-on-background placeholder:text-on-surface-variant/50 outline-none resize-none"
                  />
                </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-all"
            >
              Submit Story
              <BookOpen className="w-6 h-6" />
            </motion.button>
          </form>
        </motion.div>

        {userStories.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-2xl font-black font-plus-jakarta text-on-background">Your Tapestry</h3>
                <p className="text-on-surface-variant text-sm">Locally stored narratives</p>
              </div>
              <button 
                onClick={clearAllData}
                className="text-xs font-bold uppercase tracking-widest text-error hover:underline"
              >
                Clear All
              </button>
            </div>
            <div className="grid gap-6">
              {userStories.map((s, i) => (
                <motion.div 
                  layout
                  key={s.timestamp}
                  className="bg-surface-container p-6 rounded-2xl border border-outline-variant/20 relative group"
                >
                  <button 
                    onClick={() => deleteStory(i)}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-error p-2"
                  >
                    Delete
                  </button>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">
                    Thread {userStories.length - i}
                  </span>
                  <p className="text-lg font-medium text-on-background mb-4 italic leading-relaxed">
                    "{s.tale}"
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                    <span className="text-sm font-bold font-plus-jakarta text-on-surface-variant">by {s.name}</span>
                    <span className="text-[10px] text-on-surface-variant opacity-50 uppercase tracking-tighter">
                      {new Date(s.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
