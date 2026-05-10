"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const SEASONAL_SLIDES = [
  {
    season: "Summer",
    title: "The Summer",
    titleItalic: "Ascent",
    description: "Escape the heat and head to the heights. Our summer expeditions are curated for clarity, safety, and breathtaking panoramas. Experience the Himalayas in their most vibrant season.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070",
    buttonText: "View Summer Treks",
    accentLabel: "Early Bird",
    accentSub: "Discounts Live"
  },
  {
    season: "Winter",
    title: "The Frozen",
    titleItalic: "Kingdom",
    description: "Witness the Himalayas in their most pristine form. Our winter expeditions offer solitude, sparkling snowscapes, and the raw power of the cold.",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=2070",
    buttonText: "Explore Winter Peaks",
    accentLabel: "Peak Season",
    accentSub: "Booking Open"
  }
];

export default function SeasonalHighlight() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputValue, setInputValue] = useState(SEASONAL_SLIDES[0].season);

  const slide = SEASONAL_SLIDES[currentSlide];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);

    const targetSeason = currentSlide === 0 ? "winter" : "summer";
    if (val.toLowerCase() === targetSeason) {
      // Small delay to let user see the final character typed
      setTimeout(() => {
        const nextIdx = (currentSlide + 1) % SEASONAL_SLIDES.length;
        setCurrentSlide(nextIdx);
        setInputValue(SEASONAL_SLIDES[nextIdx].season);
      }, 400);
    }
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center bg-black">
      {/* Preloaded Background Layers for Instant Switching */}
      {SEASONAL_SLIDES.map((s, idx) => (
        <motion.div 
          key={s.image}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === idx ? 1 : 0,
            scale: currentSlide === idx ? 1 : 1.05 
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src={s.image}
            alt={s.season}
            fill
            sizes="100vw"
            className="object-cover"
            priority={idx === 0} // Priority for the initial slide
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-12">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-4"
          >
            Seasonal Spotlight
          </motion.span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.season}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="mb-6">
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                  {currentSlide === 0 ? "The" : "The"}
                  <span className="relative inline-block ml-3">
                    <input 
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      className="bg-transparent focus:outline-none text-accent italic font-serif px-4 transition-all text-center"
                      style={{ width: `${Math.max(inputValue.length + 1.5, 7)}ch` }}
                    />
                    {/* Independent Underline */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[85%] h-[2px] bg-accent/40" />
                  </span>
                  <br />
                  <span className="opacity-90">{slide.titleItalic}</span>
                </h2>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex justify-center md:justify-start"
                >
                  <span className="px-4 py-1 bg-accent/10 backdrop-blur-md border border-accent/20 rounded-full text-accent text-[10px] uppercase tracking-[0.3em] font-bold">
                    Type &quot;{currentSlide === 0 ? "winter" : "summer"}&quot; to change the atmosphere
                  </span>
                </motion.div>
              </div>

              <p className="text-white/70 text-lg mb-8 font-sans leading-relaxed max-w-lg">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-accent hover:text-white transition-all rounded-sm uppercase text-[10px] flex items-center gap-3 group shadow-2xl">
                  {slide.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-6 text-white/40 border-l border-white/20 pl-6">
                  <div className="flex flex-col">
                    <span className="text-white text-base font-bold">{slide.accentLabel}</span>
                    <span className="text-[10px] uppercase tracking-wider">{slide.accentSub}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 h-32 w-[1px] bg-white/20 hidden md:block" />
    </section>
  );
}
