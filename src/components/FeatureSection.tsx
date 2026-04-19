import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function FeatureSection() {
  const storyParagraphs = [
    "In a golden forest where the wind whispered through tall grass and the sky melted into soft sunsets, there lived a fox named Aro. He was quick, clever, and admired, but deeply alone.",
    "Aro had built his life around survival. Hunt, hide, run, repeat. Feelings only slowed you down… or so he believed.",
    "Until the day he met her.",
    "Her name was Sera.",
    "She wasn’t like the other foxes. While they chased prey and marked territory, Sera chased butterflies, watched clouds, and laughed at the rustling leaves as if they were telling jokes. She didn’t fear the world; she felt it.",
    "Their first meeting was anything but magical.",
    "Aro had stolen a rabbit Sera had been tracking for hours. As he turned to leave, proud of his cleverness, he found her standing there, her fur bristled and eyes blazing.",
    "“That was mine,” she snapped.",
    "Aro smirked. “Finders keepers.”",
    "“Then I’ll just have to take it back.”",
    "Before he could react, she pounced, not gracefully or perfectly, but with determination. They tumbled through the grass, a blur of orange and laughter and frustration.",
    "In the end, the rabbit escaped. They both lost. But somehow… neither of them felt like they had.",
    "From that day on, they kept running into each other. Sometimes by accident, sometimes… not.",
    "Aro began to notice things. The way Sera always shared her food with smaller animals. The way she stayed still during rainstorms, letting the drops soak her fur like she belonged to the sky. The way she looked at him, not with fear or rivalry, but curiosity.",
    "And slowly, against everything he believed, Aro changed. He started waiting for her. He started listening. He started feeling.",
    "One evening, under a sky filled with stars, they lay side by side on a hill.",
    "“Do you ever feel like the forest is too big?” Sera asked softly. “Like… you could run forever and still not find where you belong?”",
    "Aro turned to her, his usual sharp words gone. “Not when I’m with you.”",
    "Sera smiled, but there was something sad in her eyes.",
    "Seasons passed, and their bond grew deeper than either of them expected. They hunted together, played together, and in quiet moments, simply existed together. The forest no longer felt lonely; it felt like home.",
    "But the forest was changing.",
    "Humans had begun to creep closer. Trees fell. Traps appeared. The safe places were disappearing.",
    "One day, Sera didn’t show up.",
    "Aro searched everywhere: the hill, the river, the old hollow tree where she loved to nap. Nothing.",
    "Until he found her scent… leading to a place he feared. A trap.",
    "He found her there, weak but alive, her leg caught. Panic surged through him, but Sera only looked at him calmly.",
    "“You came,” she whispered.",
    "“Of course I did,” he said, his voice breaking. He worked frantically, biting at the rope, ignoring the pain as it cut into his mouth.",
    "“Hey…” Sera murmured. “If you can’t...”",
    "“I can,” he snapped. “I won’t lose you.”",
    "With one final, desperate pull, the trap gave way. Sera collapsed, but she was free.",
    "Aro stayed with her for days, bringing food, guarding her, refusing to leave her side. For the first time in his life, he wasn’t thinking about survival. He was thinking about her.",
    "When Sera finally stood again, weak but steady, she leaned against him. “You know,” she said softly, “you’re not as cold as you pretend to be.”",
    "Aro let out a quiet breath. “Don’t tell anyone.”",
    "She laughed, resting her head against his. From that day on, they didn’t just run through the forest. They faced it together.",
    "And though the world around them continued to change, to threaten, to take… There was one thing it couldn’t take away. The love between two foxes who found each other in a wild, uncertain world and chose, every single day, to stay."
  ];

  return (
    <section id="feature" className="py-24 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Heart className="w-8 h-8 fill-primary/20" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-on-background font-plus-jakarta lowercase">
            the tale of aro & sera
          </h2>
          <div className="h-1 w-20 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="space-y-12">
          {storyParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
              viewport={{ once: true, margin: "-100px" }}
              className={`text-lg md:text-xl leading-relaxed font-medium ${
                paragraph.length < 30 
                  ? "text-primary italic font-black text-2xl md:text-3xl tracking-tight my-8" 
                  : "text-on-surface-variant"
              }`}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-outline-variant/30 text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-on-surface-variant opacity-40">
            end of thread • the tapestry continues
          </p>
        </motion.div>
      </div>
    </section>
  );
}
