"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Plus, Minus, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Mausam Dhande",
    trek: "Kedarkantha Expedition",
    date: "19 Oct 2025",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: "I did Kedarkantha Trek on 19 Oct 2025, and it was the best ever trek I did. More than the scenery, it was the hospitality organised by the company and the Trek leaders and Guides which made the experience best. Food Quality is far beyond what we can expect to get in the mountain. Charges are so much affordable that it made many question how they could make profits from such a affordable fees and these many amenities. Trek Leader and Guides were so much friendly which helped the people come together and make bonding with each other.",
    rating: 5
  },
  {
    name: "Hassan Kashif Jeelani",
    trek: "Kedarkantha Trek",
    date: "Oct 2025",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: "Had an amazing experience with Himalayan Hikers on the Kedarkantha Trek! Everything was perfectly managed — from stay and food to overall coordination. A big thanks to our trek leader, Digvijay Rawat Sir, for his guidance and motivation throughout the journey. Also, special mention to Gajju Bhai and Raunak Bhai for being such helpful and friendly guides, also the hotel staff for the great hospitality. The cooking staff served delicious and timely food every day, which made the trek even more enjoyable.",
    rating: 5
  },
  {
    name: "Rohan Singh",
    trek: "Brahmatal Trek",
    date: "Nov 2025",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: "We were a group of eight people on the Brahmatal Trek with Himalayan Hikers, led by Nishu Rana and Veeru Rawat. It was a fantastic journey, perfectly planned and executed. During the trek, we felt completely safe and well-cared for. The base camp facilities were excellent, and the summit climb was timed perfectly for the sunrise. Truly one of the best trekking companies out there — highly recommended for anyone planning the Brahmatal Trek!",
    rating: 5
  }
];

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#fafaf9] overflow-hidden relative noise-overlay">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Trust Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-6"
            >
              Guest Stories
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8"
            >
              Voices of the <br /> <span className="italic font-normal">Himalayan Legacy</span>
            </motion.h2>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-sans text-black/40 italic">
                Read 3,000+ Google reviews with an average of 4.8 rating
              </span>
            </div>
          </div>
          
          <button className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm hover:bg-accent transition-all group shadow-xl shadow-black/10">
            Review us on Google <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 md:p-12 border border-white shadow-2xl shadow-black/[0.03] relative group"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20 p-1">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill 
                      sizes="56px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest font-bold block mb-1">{t.name}</span>
                    <span className="text-[9px] uppercase tracking-widest text-accent font-mono">{t.date}</span>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <div className="relative mb-10">
                <Quote className="w-12 h-12 text-black/[0.03] absolute -top-6 -left-6" />
                <motion.p 
                  layout
                  className={`text-lg font-serif italic leading-relaxed text-black/70 ${expandedIndex !== index ? 'line-clamp-4' : ''}`}
                >
                  "{t.text}"
                </motion.p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="h-[1px] w-full bg-black/5" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-black/30 font-bold mb-1">Expedition</span>
                    <span className="text-[11px] uppercase tracking-[0.1em] font-bold">{t.trek}</span>
                  </div>
                  <button 
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                  >
                    {expandedIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
