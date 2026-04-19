import { motion } from "motion/react";

export function OriginSection() {
  return (
    <section id="origin" className="py-24 bg-surface-container-low">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 1 }}
              className="aspect-square rounded-xl overflow-hidden bg-surface-container-highest shadow-2xl"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oVH7DAExlTGk7DgDVGXYz804DRp3mCYcXXWV-BVbzGlXGJFnPuXqtT2R28de38H6R7l1guDkVmWyz0hUQCHsFX6HgOfv8ovrNIIC-XNn6SoFOtpiRmd4PK6wJuDggLxdspKyqod2xgkl0qzIGm3i4g-x_JETqfCKwu1cAnMUeQyvgdnczepF75x9GmCSdA_5DQ1mVMXFDlagqsOtqxG5fq48IcIGdYwJLS_8Hm6qYYUkZgifTq6qbqKgM2HL08_6UeqsOTtmijpI" 
                alt="Origin story illustration" 
                className="w-full h-full object-cover -rotate-3 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute -bottom-6 -left-6 bg-primary-fixed-dim p-8 rounded-xl shadow-xl max-w-xs"
            >
              <p className="text-on-primary-fixed-variant font-bold italic">
                "Whatever life holds in store for me, I will never forget these words..."
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-background font-plus-jakarta">
              The Weaver of Stories
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Born from a moment of chance and destiny, the story of Tashi, a young student forever changed by a radioactive bite, redefined what it means to be a hero. It wasn't just about the strength of a spider, but the weight of human choice.
              </p>
              <p>
                This legacy of "Great Responsibility" has grown into a global cultural phenomenon, bridging the gap between colorful comic panels and sophisticated cinematic narratives. We capture that same magic in our design ethos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
