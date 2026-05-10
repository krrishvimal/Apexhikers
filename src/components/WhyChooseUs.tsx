"use client";

import { motion } from "framer-motion";
import { Shield, Map, History, Users, Play, ArrowRight } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    title: "The Safety Standard",
    description: "Certified leaders and advanced safety protocols for every high-altitude ascent.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
    videoLabel: "Safety Protocols"
  },
  {
    title: "Route Masters",
    description: "Seamless logistics from Dehradun to the deepest valleys of the Garhwal range.",
    icon: Map,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    videoLabel: "How to Reach"
  },
  {
    title: "Heritage Since 1990",
    description: "35 years of mountain legacy, born and raised in the heart of the Himalayas.",
    icon: History,
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=800",
    videoLabel: "Our Story"
  },
  {
    title: "Unfiltered Community",
    description: "Real stories from 25,000+ explorers who have walked the trails with us.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800",
    videoLabel: "Guest Reviews"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      
      {/* Topographical Background Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale select-none">
        <Image 
          src="https://images.unsplash.com/photo-1520052205664-74d276a1471a?auto=format&fit=crop&q=80&w=2000" 
          alt="Topography" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-6"
            >
              Why Himalayan Hikers
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight"
            >
              The Science of <br /> <span className="italic font-normal">Mountain Craft</span>
            </motion.h2>
          </div>
          <div className="flex flex-col gap-6 lg:text-right items-start lg:items-end">
            <p className="text-muted text-lg max-w-sm font-sans leading-relaxed">
              Choosing a trek partner isn't just about the trail—it's about the heritage, the safety, and the souls who lead you.
            </p>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-3 hover:border-accent hover:text-accent transition-all cursor-pointer group">
              Explore Our Philosophy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[10/14] mb-8 overflow-hidden rounded-sm bg-gray-100 shadow-2xl shadow-black/5 group-hover:shadow-black/10 transition-all duration-700">
                {/* Background Image with Overlay */}
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Icon (Floating) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 scale-90 group-hover:scale-100 transition-transform duration-500">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Card Content (Overlay) */}
                <div className="absolute bottom-8 left-8 right-8">
                  <feature.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform origin-left" />
                  <h3 className="text-white text-xl font-serif mb-2 leading-tight">{feature.title}</h3>
                  <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-bold font-mono group-hover:text-accent transition-colors">
                    Watch: {feature.videoLabel}
                  </span>
                </div>
              </div>

              {/* Description Below Card */}
              <div className="px-2">
                <p className="text-muted text-sm leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar Mini */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-black/5 flex flex-wrap items-center justify-between gap-12"
        >
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-serif leading-none mb-1 text-accent">25k+</span>
              <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold">Trusted Hikers</span>
            </div>
            <div className="h-10 w-[1px] bg-black/5" />
            <div className="flex flex-col">
              <span className="text-3xl font-serif leading-none mb-1 text-accent">35yr</span>
              <span className="text-[9px] uppercase tracking-widest text-black/40 font-bold">Heritage Legacy</span>
            </div>
          </div>
          <div className="flex items-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Simple text or small icon placeholders for trust logos */}
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold">ATOAI Accredited</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Startup India</span>
             <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Uttarakhand Tourism</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
