"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Compass, ArrowRight } from "lucide-react";

interface Trek {
  title: string;
  subtitle?: string;
  image: string;
}

const CATEGORIES = [
  "TRENDING TREKS",
  "FIXED DEPARTURES TREK BY SEASON",
  "DOMESTIC TREKS",
  "INTERNATIONAL TREK",
  "SPIRITUAL TREKS"
];

const TREKS_DATA: Record<string, Trek[]> = {
  "TRENDING TREKS": [
    { title: "Dayara Bugyal Trek", subtitle: "The Grandest Alpine Meadow of India", image: "/featuredtreks/trending/dayarabugyal.webp" },
    { title: "Kashmir Great Lakes Trek", subtitle: "India's Most Beautiful Lake Trek", image: "/featuredtreks/trending/kgl.webp" },
    { title: "Hampta Pass Trek", subtitle: "Ultimate Crossover Adventure", image: "/featuredtreks/trending/68c9b4c46a675.webp" },
    { title: "Valley of Flowers Trek", subtitle: "UNESCO World Heritage", image: "/featuredtreks/trending/valleyofflowerstrek.webp" },
    { title: "Gaumukh Trek", subtitle: "The source of the Ganga", image: "/featuredtreks/trending/6965ee15adfb2.webp" },
  ],
  "FIXED DEPARTURES TREK BY SEASON": [
    { title: "Winter Season Trek", subtitle: "The Silence of Snow", image: "/featuredtreks/featuredtrekbyseason/68d8f0f584e85.webp" },
    { title: "Spring Season Trek", subtitle: "Rhododendron Bloom", image: "/featuredtreks/featuredtrekbyseason/69a95928b2287_Buransh-Rhododendron-2.webp" },
    { title: "Summer Season Trek", subtitle: "High Altitude Meadows", image: "/featuredtreks/featuredtrekbyseason/6911c36c3db48.webp" },
    { title: "Monsoon Season Trek", subtitle: "The Valley of Life", image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=1000" },
    { title: "Autumn Season Trek", subtitle: "Crystal Clear Horizons", image: "/featuredtreks/featuredtrekbyseason/alibednibugyal.webp" },
  ],
  "DOMESTIC TREKS": [
    { title: "Treks in Uttrakhand", subtitle: "Devbhoomi Expeditions", image: "/featuredtreks/domestictreks/68c8f6355eafe.webp" },
    { title: "Treks in Himachal Pradesh", subtitle: "The Land of Deities", image: "/featuredtreks/domestictreks/68c9129e8a8b1.webp" },
    { title: "Treks in Kashmir", subtitle: "Paradise on Earth", image: "/featuredtreks/domestictreks/68c93562dda8e.webp" },
    { title: "Treks in Laddakh", subtitle: "The High Passes", image: "/featuredtreks/domestictreks/68c9da65a3f8d.webp" },
    { title: "Treks in Sikkim", subtitle: "The Eastern Crown", image: "/featuredtreks/domestictreks/698487205e067.webp" },
  ],
  "INTERNATIONAL TREK": [
    { title: "Treks in Nepal", subtitle: "The Roof of the World", image: "/featuredtreks/internationaltrek/68c8ffc44f10c.webp" },
  ],
  "SPIRITUAL TREKS": [
    { title: "Gaumukh Trek", subtitle: "Source of the Holy Ganga", image: "/featuredtreks/spiritualtreks/68c7e31cdfae4.webp" },
    { title: "Har Ki Dun Trek", subtitle: "The Valley Of God", image: "/featuredtreks/spiritualtreks/Harkiduntrail.webp" },
    { title: "Kedarnath Trek", subtitle: "Shiva's Mountain Abode", image: "/featuredtreks/spiritualtreks/69844676d8626.webp" },
    { title: "Badrinath Trek", subtitle: "The Abode of Vishnu", image: "/featuredtreks/spiritualtreks/badrinath-trek3.webp" },
    { title: "Hemkund Sahib Trek", subtitle: "Gateway to the Guru", image: "/featuredtreks/spiritualtreks/hemkund-sahib-trek.webp" },
  ]
};

function FeaturedCard({ title, subtitle, image, isFeatured }: { title: string, subtitle?: string, image: string, isFeatured?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full cursor-pointer relative"
    >
      {/* Image Container - Architectural & Sharper */}
      <div className={`relative ${isFeatured ? "aspect-[16/10] lg:aspect-auto lg:h-[600px]" : "aspect-[3/4] lg:aspect-auto lg:h-[600px]"} overflow-hidden rounded-[2px] bg-[#121212] ${!isFeatured && "mb-8"}`}>
        <Image 
          src={image} 
          alt={title}
          fill
          priority={isFeatured}
          sizes={isFeatured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-[0.8] group-hover:brightness-100 grayscale-[0.2] group-hover:grayscale-0"
        />
        
        {/* Permanent Gradient for Featured, Hover for others */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent ${isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-700`} />
        
        {/* Featured Overlay Content */}
        {isFeatured && (
          <div className="absolute inset-0 p-12 flex flex-col justify-end">
            <span className="text-[10px] uppercase tracking-[0.6em] text-accent font-bold mb-6 block bg-black/20 backdrop-blur-sm w-fit px-4 py-2 rounded-[2px] border border-white/5">
              Signature Expedition
            </span>
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-6 max-w-2xl">
              {title}
            </h3>
            <p className="text-white/60 text-lg font-sans tracking-wide leading-relaxed max-w-xl italic">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center gap-6 group/btn">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:border-accent transition-all duration-500">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover/btn:text-white transition-colors">View Experience</span>
            </div>
          </div>
        )}

        {/* Standard Hover Reveal (Non-Featured) */}
        {!isFeatured && (
          <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Discover</span>
              <div className="h-[1px] flex-grow bg-accent/30" />
              <ArrowRight className="w-4 h-4 text-accent" />
            </div>
          </div>
        )}
      </div>
      
      {/* Editorial Content Below Image (Non-Featured only) */}
      {!isFeatured && (
        <div className="flex flex-col flex-grow px-1">
          <span className="text-[9px] uppercase tracking-[0.5em] text-accent/60 font-bold mb-4 block">
            Expedition
          </span>
          
          <h3 className="text-2xl md:text-3xl font-serif text-white leading-[1.1] mb-4 group-hover:text-accent transition-colors duration-700">
            {title}
          </h3>
          
          {subtitle && (
            <p className="text-white/30 text-sm font-sans tracking-wide leading-relaxed line-clamp-2 italic">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function TrekGrid({ id }: { id?: string }) {
  const [activeCategory, setActiveCategory] = useState("TRENDING TREKS");

  return (
    <section id="treks" className="pt-[110px] pb-32 px-6 md:px-12 bg-[#0a0a0a] text-white relative noise-overlay">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Luxury Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl 2xl:text-[10rem] font-serif text-white leading-[0.9] tracking-tighter"
            >
              Featured <br /> <span className="italic font-normal text-white/30">Treks</span>
            </motion.h2>
          </div>
          
          <p className="max-w-md text-white/40 text-lg font-serif italic border-l border-white/10 pl-8 leading-relaxed">
            Every trail tells a story. Discover our most prestigious trekking expeditions across the Himalayas.
          </p>
        </div>

        {/* Minimalist Sticky Tab Navigation */}
        <div className="sticky top-[80px] z-40 mb-32 -mx-6 md:-mx-12 px-6 md:px-12 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 overflow-x-auto scrollbar-hide select-none transition-all duration-500" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <div className="max-w-[1600px] mx-auto flex flex-nowrap items-center gap-x-12">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative text-[10px] md:text-[11px] font-bold tracking-[0.4em] transition-all py-3 whitespace-nowrap ${
                  activeCategory === cat ? "text-accent" : "text-white/50 hover:text-white"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activePremiumTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* The Balanced Master Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 items-start"
          >
            {(TREKS_DATA[activeCategory] || []).map((trek, index) => (
              <motion.div
                key={trek.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className={`${index === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <FeaturedCard {...trek} isFeatured={index === 0} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
