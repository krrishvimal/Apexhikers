"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLenis } from "lenis/react";
import Image from "next/image";

const SLIDES = [
  {
    subtitle: "EST. 1990 THE HIMALAYAN PIONEER",
    title: "The Silent <br /> <span className='italic font-normal'>Symphony</span> of Peaks",
    description: "Curating narratives of snow and stone for those who seek the extraordinary. Experience the Himalayas in their most refined form.",
    cta: "Explore Collections",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070",
    badge: null
  },
  {
    subtitle: null,
    title: "Beyond the <br /> <span className='italic font-normal'>Beaten Path</span>",
    description: "Join a collective of seekers. Small groups, expert guidance, and a pace that honors the mountain's rhythm.",
    cta: "View Departures",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=2070",
    badge: "Flexible dates | Boutique groups | All-inclusive"
  },
  {
    subtitle: "Alpine Awakening",
    title: "Where the <br /> <span className='italic font-normal'>High Meadows</span> Bloom",
    description: "Trade the heat for the heights. Our summer expeditions are curated for clarity, safety, and breathtaking panoramas.",
    cta: "Discover Summer",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=2070",
    badge: "34+ Years of Heritage • Safety First"
  },
  {
    subtitle: "Signature Legacy",
    title: "Har Ki Dun: <br /> The <span className='italic font-normal'>Valley</span> of Gods",
    description: "Follow the ancient trails of the Garhwal. A journey through timeless villages and alpine meadows that define the Himalayan spirit.",
    cta: "View Experience",
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=2070",
    badge: "Limited Signature Series | Sustainable Trails"
  }
];

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const lenis = useLenis();

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToSection = (id: string) => {
    lenis?.scrollTo(`#${id}`);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black noise-overlay">
      {/* Cinematic Background with Enhanced Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
            key={current}
            custom={direction}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1.25 }}
              transition={{ duration: 20, ease: "linear" }}
              className="relative w-full h-full"
            >
              <Image 
                src={SLIDES[current].image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preload Next/Prev Images */}
      <div className="hidden">
        {SLIDES.map((slide, i) => (
          <Image 
            key={i}
            src={slide.image}
            alt=""
            width={10}
            height={10}
            priority
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 text-center px-6 max-w-[1400px] 2xl:max-w-[1600px] mx-auto flex flex-col items-center justify-center h-full pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            {SLIDES[current].subtitle && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              >
                <span className="text-white/50 uppercase text-[8px] md:text-[9px] mb-6 block font-sans font-bold tracking-[0.6em] border-b border-white/10 pb-2 inline-block">
                  {SLIDES[current].subtitle}
                </span>
              </motion.div>
            )}
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl text-white mb-8 leading-[1.1] font-serif italic drop-shadow-2xl"
              dangerouslySetInnerHTML={{ __html: SLIDES[current].title }}
            />
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-sans leading-relaxed tracking-wide font-light"
            >
              {SLIDES[current].description}
            </motion.p>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-center gap-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <MagneticWrapper>
                  <button 
                    onClick={() => scrollToSection("treks")}
                    className="px-12 py-4 bg-white text-black font-bold tracking-widest hover:bg-accent hover:text-white transition-all rounded-sm uppercase text-[10px] shadow-2xl"
                  >
                    {SLIDES[current].cta}
                  </button>
                </MagneticWrapper>
                {current === 0 && (
                  <MagneticWrapper>
                    <button 
                      onClick={() => scrollToSection("heritage")}
                      className="px-12 py-4 border border-white/20 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all rounded-sm uppercase text-[10px] backdrop-blur-sm"
                    >
                      Our Story
                    </button>
                  </MagneticWrapper>
                )}
              </div>
              
              {SLIDES[current].badge && (
                <div className="px-6 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full">
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-medium italic">
                    {SLIDES[current].badge}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
        <button 
          onClick={prevSlide}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-700 pointer-events-auto backdrop-blur-sm group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
          <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform duration-500" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-700 pointer-events-auto backdrop-blur-sm group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
          <ChevronRight className="w-6 h-6 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform duration-500" />
        </button>
      </div>


      {/* Bottom Progress Bars */}
      <div className="absolute bottom-12 left-8 md:left-16 z-20 flex gap-4">
        {SLIDES.map((_, i) => (
          <button 
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="group py-4 px-1"
          >
            <div className={`h-[2px] transition-all duration-1000 ease-out ${
              current === i ? "w-16 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "w-8 bg-white/20 group-hover:bg-white/40"
            }`} />
          </button>
        ))}
      </div>
      
      {/* Current Index Indicator */}
      <div className="absolute bottom-12 right-8 md:right-16 z-20 font-serif italic text-white/20 text-3xl">
        0{current + 1}
      </div>
    </section>
  );
}
