import { motion, AnimatePresence } from "motion/react";
import { Mail, Share2, Globe, CheckCircle2, Send, Check } from "lucide-react";
import React, { useState } from "react";

export function VisionarySection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const message = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    };
    
    // Save to localStorage
    const existingMessages = JSON.parse(localStorage.getItem('user_messages') || '[]');
    localStorage.setItem('user_messages', JSON.stringify([...existingMessages, message]));

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="about" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Designer Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative inline-block">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-surface-container-lowest shadow-xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8bPGj5jsc4RbSen2Z-iP8j3kf2YYwq6F-DEemrZBZLLUVfFGtxmML4jGTTJ8miUxhQ-4313Dg_aaAFz5o-6WUtBTDsAEXSEwQ3IjAXpBowvMmP9le7Fi2uYORsWw0AtgpNbwpZoA6ni9dvofJ4tlS5CQHzOQ2EX8Ck51NCX12gioy8dLyqA6UwKdHlHvkirg0B7hn_jaKPBRNSuJzOHRoVzCdB1XyPmg-ObKyYo8MAFY_PBw8NQH2dd4aKGRmKx4sv30C9ISvTIeR" 
                  alt="Designer Portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary p-3 rounded-full shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black mb-4 font-plus-jakarta">The Visionary</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                I specialize in crafting digital experiences that blend artistic intuition with technical precision. With a focus on visual storytelling and atmospheric depth, I transform interfaces into immersive cinematic journeys that resonate with every user.
              </p>
            </div>
            <div className="flex gap-4">
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              >
                <Share2 className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://stories.app" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              >
                <Globe className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden"
            >
              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-surface-container-lowest z-10 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h4 className="text-3xl font-black font-plus-jakarta mb-2">Message Sent!</h4>
                    <p className="text-on-surface-variant">The Visionary will reach out to you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-primary font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 font-plus-jakarta">
                <Mail className="text-primary w-6 h-6" />
                Leave a Message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant opacity-70 ml-2">
                      Name
                    </label>
                    <input 
                      required
                      name="name"
                      type="text"
                      className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant opacity-70 ml-2">
                      Email
                    </label>
                    <input 
                      required
                      name="email"
                      type="email"
                      className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-on-surface-variant opacity-70 ml-2">
                    Message
                  </label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
