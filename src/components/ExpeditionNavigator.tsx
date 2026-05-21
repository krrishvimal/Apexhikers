"use client";

import { motion } from "framer-motion";
import { 
  Calendar, Clock, Mountain, MapPin, 
  Leaf, Sparkles, Filter, ArrowRight 
} from "lucide-react";

const CATEGORIES = [
  {
    title: "By Season",
    icon: Sparkles,
    items: ["Winter", "Spring", "Summer", "Monsoon", "Autumn", "Alpine", "Pass Crossings"]
  },
  {
    title: "By Region",
    icon: MapPin,
    items: ["Alps", "Himalayas", "Andes", "Patagonia", "Rockies", "Karakoram"]
  },
  {
    title: "By Difficulty",
    icon: Mountain,
    items: ["Easy", "Easy to Moderate", "Moderate", "Moderate to Difficult", "Difficult", "Challenging"]
  },
  {
    title: "By Nature",
    icon: Leaf,
    items: ["Lake Treks", "Glacier Treks", "Forest Treks", "Snow Treks", "Meadow Treks", "Summit Treks"]
  },
  {
    title: "By Duration",
    icon: Clock,
    items: ["2-3 Days", "4-5 Days", "6 Days", "7+ Days", "Weekend Getaways"]
  },
  {
    title: "By Month",
    icon: Calendar,
    items: ["Jan - Mar", "Apr - Jun", "Jul - Sep", "Oct - Dec"]
  },
  {
    title: "Special Features",
    icon: Filter,
    items: ["Family Friendly", "Solo Friendly", "Photography", "Bird Watching", "Star Gazing", "River Crossing"]
  }
];

export default function ExpeditionNavigator() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#fbfaf7] relative overflow-hidden">
      {/* Subtle Texture/Graphic */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold block mb-6"
          >
            Expedition Navigator
          </motion.span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-7">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight text-black"
              >
                Plan Your <br /> <span className="italic font-normal text-accent">Memorable Trek</span>
              </motion.h2>
            </div>
            <div className="lg:col-span-5 pb-2">
              <p className="text-black/50 text-lg md:text-xl font-sans leading-relaxed italic border-l border-accent/30 pl-8">
                An architectural filtering system designed to help you navigate the vast alpine wilderness by season, region, and spirit.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-10 group hover:-translate-y-2 transition-all duration-700 border border-black/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  <cat.icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[12px] uppercase tracking-[0.3em] font-black text-black group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-accent/20 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
                </div>
              </div>
              
              <ul className="space-y-5">
                {cat.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center justify-between text-black/40 hover:text-accent transition-all text-sm group/item">
                      <span className="font-sans group-hover/item:translate-x-1 transition-transform">{item}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-accent p-12 flex flex-col justify-between text-white shadow-2xl shadow-accent/20"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-8">
                <Filter className="w-5 h-5" />
              </div>
              <h3 className="text-4xl font-serif leading-tight mb-6">Tailored <br /> Exploration</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Connect with our leads for a curated itinerary that matches your experience.
              </p>
            </div>
            <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/20 pb-3 hover:border-white transition-all group w-fit mt-12">
              Consult an Expert <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
