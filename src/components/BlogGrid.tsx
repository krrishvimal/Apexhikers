"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock, User } from "lucide-react";

const BLOGS = [
  {
    title: "Kedarkantha Trek: The Complete 2026 Guide",
    date: "Oct 12, 2025",
    author: "Marcus Vance",
    readTime: "12 min read",
    category: "Ultimate Guide",
    excerpt: "From the mystical myths of Lord Shiva to the panoramic 360-degree views of the Swargarohini peaks—discover why Kedarkantha remains the king of winter treks.",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=1500",
    featured: true
  },
  {
    title: "When to Visit Dayara Bugyal?",
    date: "Sept 28, 2025",
    author: "Sarah Jenkins",
    readTime: "8 min read",
    category: "Expert Advice",
    excerpt: "The emerald meadows of Dayara transform with every season. We break down the best months for photography and camping.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000",
    featured: false
  },
  {
    title: "The Silent Valley: Har Ki Dun Journal",
    date: "Sept 15, 2025",
    author: "Lucas Chen",
    readTime: "6 min read",
    category: "Expeditions",
    excerpt: "A deeply personal account of a 7-day journey through the cradle of the ancient civilizations in the Tons Valley.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    featured: false
  }
];

export default function BlogGrid() {
  const featuredBlog = BLOGS.find(b => b.featured);
  const secondaryBlogs = BLOGS.filter(b => !b.featured);

  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden relative noise-overlay">
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[10px] uppercase tracking-[0.5em] font-bold block mb-6"
            >
              Summit Journal
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight"
            >
              Chronicles of the <br /> <span className="italic font-normal">High Altitude</span>
            </motion.h2>
          </div>
          <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black/10 pb-3 hover:border-accent hover:text-accent transition-all group">
            Explore the archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Featured Large Post */}
          <motion.article 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] mb-10 overflow-hidden rounded-sm bg-white p-3 shadow-2xl shadow-black/10 border border-white/50">
              <div className="relative w-full h-full overflow-hidden rounded-[2px] grayscale group-hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src={featuredBlog!.image}
                  alt={featuredBlog!.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-8 left-8">
                <span className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.2em] font-bold border border-white/10">
                  {featuredBlog!.category}
                </span>
              </div>
            </div>
            
            <div className="max-w-2xl px-2">
              <div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-widest text-black/40 font-bold font-mono">
                <span className="flex items-center gap-2 text-accent"><User className="w-3 h-3" /> {featuredBlog!.author}</span>
                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {featuredBlog!.readTime}</span>
                <span>{featuredBlog!.date}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 group-hover:text-accent transition-colors leading-tight">
                {featuredBlog!.title}
              </h3>
              <p className="text-muted text-xl font-sans leading-relaxed mb-8">
                <span className="float-left text-7xl font-serif text-accent mr-4 mt-2 leading-[0.8]">
                  {featuredBlog!.excerpt.charAt(0)}
                </span>
                {featuredBlog!.excerpt.slice(1)}
              </p>
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-black border-l-2 border-accent pl-6 group-hover:pl-10 transition-all">
                Read Full Story <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.article>

          {/* Side Column Posts */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            {secondaryBlogs.map((blog, index) => (
              <motion.article 
                key={blog.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group cursor-pointer border-b border-black/5 pb-16 last:border-0 last:pb-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm bg-white p-2 shadow-xl shadow-black/5 border border-white/50">
                    <div className="relative w-full h-full overflow-hidden rounded-[1px] grayscale group-hover:grayscale-0 transition-all duration-700">
                      <Image 
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-4 text-[9px] uppercase tracking-widest text-black/40 font-bold font-mono">
                      <span>{blog.date}</span>
                      <span className="w-1 h-1 bg-black/20 rounded-full" />
                      <span className="text-accent">{blog.author}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif mb-4 group-hover:text-accent transition-colors leading-snug">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-black/60 group-hover:text-black transition-colors">
                      View Entry <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Newsletter Mini-Card */}
            <div className="mt-auto p-10 bg-white border border-black/5 rounded-sm shadow-xl shadow-black/[0.02]">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-4">Subscription</h4>
              <p className="text-2xl font-serif mb-6 leading-tight">Join our <br /> Expedition List</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-black/10 pb-4 text-sm focus:outline-none focus:border-accent transition-colors pr-10"
                />
                <button className="absolute right-0 bottom-4 text-black hover:text-accent transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* Visual Separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10" />
    </section>
  );
}
