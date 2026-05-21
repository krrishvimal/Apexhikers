"use client";

import { motion } from "framer-motion";
import { Mountain, Users, Zap, Briefcase, MapPin, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const JOBS = [
  {
    role: "Senior Trek Leader",
    type: "Field / Full-Time",
    location: "Alpine Basecamp",
    desc: "Lead high-altitude expeditions and ensure the safety and satisfaction of our trekking community."
  },
  {
    role: "Adventure Content Writer",
    type: "Remote / Contract",
    location: "Global",
    desc: "Craft immersive stories and guides that inspire the next generation of alpine explorers."
  },
  {
    role: "Base Camp Manager",
    type: "On-Site / Seasonal",
    location: "Summit Operations",
    desc: "Oversee logistics, equipment, and hospitality at our primary mountain base camps."
  },
  {
    role: "Technical Guide (Peak Climbing)",
    type: "Field / Seasonal",
    location: "Various",
    desc: "Lead technical climbs on 6000m+ peaks. Requires advanced certification and experience."
  }
];

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
          alt="Careers at Apex Hikers"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-[12px] uppercase tracking-[0.5em] font-bold block mb-6"
          >
            Join the Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
          >
            Careers at <span className="italic font-normal text-accent">Apex Hikers</span>
          </motion.h1>
          <p className="text-xl text-white/60 font-serif max-w-2xl mx-auto">
            Join our mission to make trekking safe, sustainable, and unforgettable.
          </p>
        </div>
      </section>

      {/* Why Work With Us? */}
      <section className="bg-[#f8f8f8] py-32 px-6 md:px-12 border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-serif mb-6 underline decoration-accent underline-offset-8">Why Work With Us?</h2>
            <p className="text-black/40 text-sm max-w-xl mx-auto">Be a part of a premier global trekking collective with over 30 years of adventure heritage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Mountain className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Adventure Lifestyle</h3>
              <p className="text-sm text-black/60 leading-relaxed font-sans">
                Work amidst the highest ranges and live the dream life of an adventurer.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Growth Opportunities</h3>
              <p className="text-sm text-black/60 leading-relaxed font-sans">
                We nurture talent with training and provide multiple career paths.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent mx-auto mb-8 shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Community Impact</h3>
              <p className="text-sm text-black/60 leading-relaxed font-sans">
                Help locals grow, support sustainability, and make a social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Opportunities */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-20 border-b border-black/5 pb-8">
            <h2 className="text-4xl font-serif">Open Opportunities</h2>
            <div className="h-px flex-grow bg-black/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {JOBS.map((job, i) => (
              <motion.div 
                key={job.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#fcfcfc] p-12 border border-black/[0.03] hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase className="w-24 h-24" />
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-accent mb-6">
                  <span className="bg-accent/10 px-3 py-1 rounded-full">{job.type}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-accent transition-colors">{job.role}</h3>
                <p className="text-sm text-black/50 leading-relaxed mb-10 max-w-md">
                  {job.desc}
                </p>
                <button className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold hover:gap-6 transition-all">
                  Apply Now <ArrowRight className="w-4 h-4 text-accent" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-left relative z-10">
          <div className="w-32 h-1 bg-accent mb-12" />
          <h2 className="text-4xl md:text-5xl font-serif mb-10 italic">Why Build Your Career with Apex Hikers?</h2>
          <div className="space-y-8 text-lg text-white/70 leading-relaxed font-sans">
            <p>
              Working with <span className="text-white font-bold">Apex Hikers</span> is more than just a job—it's a lifelong commitment to the peaks and the people who explore them. As a premier global trekking collective, we offer a unique environment where professional excellence meets raw adventure.
            </p>
            <p>
              We believe in <span className="text-accent">Empowerment</span>. From training our local staff in advanced rescue techniques to providing our content creators with the freedom to explore uncharted trails, we invest heavily in our team's personal and professional growth.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
