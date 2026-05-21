"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, Phone, Mail, MapPin, 
  Clock, Globe, Shield, Heart, ArrowUpRight, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRef, useState } from "react";

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

  const reset = () => setPosition({ x: 0, y: 0 });

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

const CONTACT_CHANNELS = [
  {
    title: "Support Assistance",
    desc: "Quick queries and real-time updates directly from our coordinators.",
    contact: "+1 (800) 555-0190",
    href: "https://wa.me/18005550190",
    icon: <MessageSquare className="w-6 h-6" />,
    cta: "Chat Now"
  },
  {
    title: "General Bookings",
    desc: "For trek reservations, group bookings, and itinerary info.",
    contact: "bookings@apexhikers.com",
    href: "mailto:bookings@apexhikers.com",
    icon: <Clock className="w-6 h-6" />,
    cta: "Email Bookings"
  },
  {
    title: "Partnerships",
    desc: "Collaborative ventures with agencies, schools, and corporates.",
    contact: "partners@apexhikers.com",
    href: "mailto:partners@apexhikers.com",
    icon: <Globe className="w-6 h-6" />,
    cta: "Partner With Us"
  },
  {
    title: "Support Desk",
    desc: "Post-booking assistance, safety protocols, and emergency support.",
    contact: "+1 (800) 555-0142",
    href: "tel:+18005550142",
    icon: <Shield className="w-6 h-6" />,
    cta: "Contact Desk"
  }
];

export default function SupportPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80" 
          alt="Support & Assistance"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-[12px] uppercase tracking-[0.5em] font-bold block mb-6"
          >
            Always by Your Side
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
          >
            Support & <span className="italic font-normal text-accent">Assistance</span>
          </motion.h1>
          <p className="text-xl text-white/60 font-serif max-w-2xl mx-auto">
            We are here to help you navigate your alpine adventure. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Grid - The Concierge Hub */}
      <section className="py-32 px-6 md:px-12 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
            {CONTACT_CHANNELS.map((channel, i) => (
              <motion.div 
                key={channel.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 lg:p-16 flex flex-col items-start group hover:z-10 transition-all duration-700 hover:shadow-2xl hover:shadow-black/5"
              >
                <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center mb-10 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  {channel.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6 leading-tight group-hover:text-accent transition-colors">{channel.title}</h3>
                <p className="text-muted leading-relaxed mb-10 font-sans opacity-60 text-lg">{channel.desc}</p>
                
                <div className="mt-auto pt-10 border-t border-black/5 w-full">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-4">Direct Line</p>
                  <p className="text-xl font-serif mb-10 tracking-tight">{channel.contact}</p>
                  
                  <MagneticWrapper>
                    <a 
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold py-4 px-8 bg-black text-white rounded-sm hover:bg-accent transition-all group/btn"
                    >
                      {channel.cta}
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                    </a>
                  </MagneticWrapper>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section - Architectural Presence */}
      <section className="bg-[#fcfcfc] py-32 px-6 md:px-12 border-y border-black/[0.03] noise-overlay relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-flex items-center gap-4 text-accent">
                <div className="w-12 h-px bg-accent" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Physical Presence</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] tracking-tighter">Visit us in the <br /> <span className="italic font-normal text-black/20">Mountains.</span></h2>
              <p className="text-black/50 leading-relaxed font-sans text-xl max-w-xl">
              <p className="text-black/50 leading-relaxed font-sans text-xl max-w-xl">
                Our base camps and offices are strategically located to provide the best logistical support and a warm professional welcome for your treks.
              </p>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 border border-black/5 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center mb-8">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-2xl font-serif mb-4">Trailhead Basecamp HQ</h4>
                <p className="text-muted text-sm leading-relaxed font-sans opacity-60">
                  Basecamp Alpha, Trailhead Valley Rd, <br /> Sector 4
                </p>
              </div>
              <div className="bg-white p-12 border border-black/5 shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center mb-8">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-2xl font-serif mb-4">Metro Operations Center</h4>
                <p className="text-muted text-sm leading-relaxed font-sans opacity-60">
                  100 Summit Boulevard, Suite 500, <br /> Metro City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block - The Human Touch */}
      <section className="py-32 px-6 md:px-12 bg-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 space-y-12">
            <Heart className="w-16 h-16 text-accent animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-serif italic leading-tight">Our commitment <br /> <span className="not-italic">to your journey.</span></h2>
            <p className="text-black/50 text-xl leading-relaxed font-sans max-w-2xl">
              At Apex Hikers, support isn't just about answering emails. It's about being on the ground, 
              ensuring every trail is marked, every meal is nutritious, and every trekker feels part of our family. 
              Our 30-year legacy is built on the trust of seekers like you.
            </p>
            <div className="pt-8">
              <button className="inline-flex items-center gap-6 group">
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold">Read our Commitment</span>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 relative aspect-square w-full rounded-[2px] overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80" 
              alt="Apex Hikers Hospitality"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
