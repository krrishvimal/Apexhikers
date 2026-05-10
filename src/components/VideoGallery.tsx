"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, X } from "lucide-react";
import Image from "next/image";

const VIDEOS = [
  {
    id: "hDM_kDYKVHU",
    title: "Har Ki Dun: The Valley of Gods",
    duration: "4:20",
    category: "Expedition Guide",
    description: "A cinematic journey through one of the most ancient trekking routes in the Garhwal Himalayas."
  },
  {
    id: "ndTpNG7R7N8",
    title: "Kedarkantha: The Winter Summit",
    duration: "6:15",
    category: "Seasonal Film",
    description: "Witness the raw beauty of the Himalayas under a blanket of pure white snow."
  },
  {
    id: "djiy7uH_fB0",
    title: "Dayara Bugyal: Highland Meadows",
    duration: "3:45",
    category: "Trek Journal",
    description: "The emerald slopes and expansive meadows of Dayara, captured in golden light."
  },
  {
    id: "Ks_zXFhqXg8",
    title: "Kuari Pass: Lord Curzon's Trail",
    duration: "5:30",
    category: "Adventure Documentary",
    description: "Retracing history on the trail that offers the grandest view of Nanda Devi."
  }
];

function VideoThumbnail({ videoId, alt, className }: { videoId: string, alt: string, className?: string }) {
  // Use hqdefault as it is guaranteed to exist for all videos, avoiding 404 errors with maxresdefault
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);

  return (
    <Image 
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white relative noise-overlay">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-6"
            >
              Cinematic Experiences
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight"
            >
              Stories from the <br /> <span className="italic font-normal">Hidden Peaks</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-white/40 text-lg font-sans leading-relaxed mb-8 max-w-md">
              Dive deep into the Himalayan wilderness through our curated video series. From expert survival guides to cinematic trek journals.
            </p>
            <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-accent/30 pb-2 hover:border-accent hover:text-accent transition-all group">
              Watch all stories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Featured Video */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[21/9] group cursor-pointer overflow-hidden rounded-sm bg-[#121212] shadow-3xl"
          >
            <VideoThumbnail 
              videoId="hDM_kDYKVHU"
              alt="Featured Story"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                onClick={() => setActiveVideo("hDM_kDYKVHU")}
                className="w-28 h-28 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-700"
              >
                <Play className="w-8 h-8 fill-white text-white translate-x-1" />
              </div>
            </div>

          </motion.div>
        </div>

        {/* Secondary Grid - The Trek Journals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VIDEOS.map((video, index) => (
            <motion.div 
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="relative aspect-video mb-8 overflow-hidden rounded-sm bg-[#121212] transition-all duration-700">
                <VideoThumbnail 
                  videoId={video.id}
                  alt={video.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 text-[10px] font-mono tracking-widest rounded-sm border border-white/5">
                  {video.duration}
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-2xl">
                    <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[9px] uppercase tracking-[0.4em] text-accent font-bold block">{video.category}</span>
                <h4 className="text-2xl font-serif group-hover:text-accent transition-colors leading-tight">{video.title}</h4>
                <p className="text-white/30 text-sm font-sans line-clamp-2 group-hover:text-white/50 transition-colors">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-20"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video rounded-sm overflow-hidden shadow-2xl bg-black"
            >
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
