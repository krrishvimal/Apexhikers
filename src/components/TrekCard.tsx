import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Mountain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TrekCardProps {
  title: string;
  location: string;
  price: number;
  duration: string;
  elevation: string;
  image: string;
  difficulty: string;
  slug?: string;
}

export default function TrekCard({ 
  title, 
  location, 
  price, 
  duration, 
  elevation, 
  image,
  difficulty,
  slug = "everest-base-camp"
}: TrekCardProps) {
  return (
    <Link href={`/treks/${slug}`}>
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative bg-white border border-border overflow-hidden cursor-pointer"
      >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image 
          src={image} 
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold">
            {difficulty}
          </span>
        </div>

        {/* Info on Image */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] mb-2 text-white/70">
            <MapPin className="w-3 h-3" />
            {location}
          </div>
          <h3 className="text-2xl font-serif mb-2 leading-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
        </div>
      </div>

      {/* Details Footer */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-muted uppercase tracking-widest">Duration</span>
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <Calendar className="w-4 h-4 text-accent" />
              {duration}
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-[10px] text-muted uppercase tracking-widest">Peak Elevation</span>
            <div className="flex items-center gap-1.5 text-sm font-medium justify-end">
              <Mountain className="w-4 h-4 text-accent" />
              {elevation}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div>
            <span className="text-[10px] text-muted uppercase tracking-widest block mb-1">Starting from</span>
            <span className="text-xl font-serif">₹{price.toLocaleString()}</span>
          </div>
          <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
