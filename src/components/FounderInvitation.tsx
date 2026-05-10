"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Shield, MapPin, Award } from "lucide-react";
import Image from "next/image";

export default function FounderInvitation() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="heritage" className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer shadow-2xl bg-black">
              {!showVideo ? (
                <>
                  <Image 
                    src="https://img.youtube.com/vi/JZBlT7BwmDg/maxresdefault.jpg"
                    alt="Kuldeep Rawat Invitation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  
                  {/* Premium Play Button */}
                  <div 
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                      <Play className="w-8 h-8 fill-white text-white translate-x-1" />
                    </div>
                  </div>

                  {/* Founder Label */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-6">
                    <div className="h-10 w-32 relative">
                       <Image 
                        src="/himalayanhiker.webp" 
                        alt="Himalayan Hikers Logo" 
                        fill 
                        sizes="128px" 
                        className="object-contain invert brightness-200" 
                      />
                    </div>
                    <div className="text-white border-l border-white/20 pl-6">
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Message from</p>
                      <p className="text-sm font-serif italic">Kuldeep Rawat, Co-Founder</p>
                    </div>
                  </div>
                </>
              ) : (
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/JZBlT7BwmDg?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/5 -z-10" />
          </motion.div>

          {/* Text Side */}
          <div className="flex flex-col">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-6"
            >
              Exclusive Invitation
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif leading-tight mb-8"
            >
              Your Safe Passage to the <br /> 
              <span className="italic">Summer Peaks</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-muted text-lg font-sans leading-relaxed"
            >
              <p>
                "The snow is melting, and the meadows are calling. I've curated this exclusive update to showcase the must-visit destinations that offer a true escape from the heat."
              </p>
              <p>
                Beyond the trails, we invite you behind the scenes to experience the <span className="text-black font-bold italic">Himalayan Hikers' Signature Touch</span>—from our world-class safety equipment to our bespoke hospitality services.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-black/5"
            >
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-1">Safety First</h4>
                  <p className="text-[11px] text-muted leading-snug">High-grade technical equipment & protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-1">20+ Years</h4>
                  <p className="text-[11px] text-muted leading-snug">The pioneers of Himalayan expeditions.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
