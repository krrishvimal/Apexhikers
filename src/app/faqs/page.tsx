"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, Mountain, Shield, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const GLOBAL_FAQS = [
  "What types of trekking gear can I rent?",
  "How can I book trekking gear?",
  "Do I need to pay a security deposit?",
  "What are the rental charges?",
  "Can I extend my rental period?",
  "How is the gear delivered?",
  "Are the items sanitized before rental?",
  "What if the gear gets damaged?",
  "Can I cancel my booking?",
  "Do you provide trekking gear for groups?",
  "Do you offer guided trekking services too?",
  "Can I try the gear before renting?",
  "What if I return the gear late?",
  "Is the gear suitable for extreme weather?",
  "Do you provide gear insurance?",
  "How early should I book my gear?",
  "Can I rent gear for children?",
  "What payment methods are accepted?",
  "Do you provide customized gear packages?",
  "Why should I rent instead of buying?"
];

const GEAR_FAQS = [
  "What types of trekking gear can I rent?",
  "How can I book trekking gear?",
  "Is a security deposit required?",
  "How much does renting cost?",
  "Can I extend my rental period?",
  "How is the gear delivered?",
  "Are the items sanitized?",
  "What if the gear gets damaged?",
  "Can I rent gear for a group?",
  "Can I try the gear before renting?"
];

const CAMP_FAQS = [
  "What camping gear can I rent?",
  "How can I book camping gear?",
  "Are tents weatherproof?",
  "Do you provide gear for groups?",
  "Is a security deposit required?",
  "How is camping gear delivered?",
  "Are sleeping bags and mats cleaned?",
  "Can I extend my rental period?",
  "Do you provide camping gear insurance?",
  "Can I get guidance on setting up the gear?"
];

function FAQItem({ question, index }: { question: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="flex items-center gap-6">
          <span className="text-[10px] text-accent font-bold opacity-50">{index + 1}.</span>
          <span className="text-lg md:text-xl font-serif group-hover:text-accent transition-colors">{question}</span>
        </span>
        <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all ${isOpen ? 'bg-accent border-accent text-white rotate-45' : 'group-hover:border-accent group-hover:text-accent'}`}>
          <Plus className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 text-black/50 leading-relaxed max-w-2xl text-sm">
              Our support team is working to provide detailed answers for every specific query. Generally, all gear rentals follow our standard safety, sanitization, and quality-check protocols. For immediate answers, please contact our support desk.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80" 
          alt="FAQs Apex Hikers"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent text-[12px] uppercase tracking-[0.5em] font-bold block mb-6"
          >
            Support Center
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
          >
            Frequently Asked <span className="italic font-normal text-accent">Questions</span>
          </motion.h1>
          <p className="text-xl text-white/60 font-serif max-w-2xl mx-auto">
            Find answers to the most common queries about our trekking expeditions and gear rentals.
          </p>
        </div>
      </section>

      {/* Main FAQs Grid */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif">General Knowledge</h2>
            <div className="h-px flex-grow bg-black/5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            <div className="space-y-2">
              {GLOBAL_FAQS.slice(0, 10).map((q, i) => <FAQItem key={q} question={q} index={i} />)}
            </div>
            <div className="space-y-2">
              {GLOBAL_FAQS.slice(10).map((q, i) => <FAQItem key={q} question={q} index={i + 10} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Gear Rentals FAQs */}
      <section className="py-32 px-6 md:px-12 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-4 text-accent mb-6">
                <Shield className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Equipment Queries</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-serif">Gear Rentals FAQs</h2>
             <p className="text-black/40 text-sm mt-6">Find answers to all your queries about renting trekking gear from us.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            <div className="space-y-2">
              {GEAR_FAQS.slice(0, 5).map((q, i) => <FAQItem key={q} question={q} index={i} />)}
            </div>
            <div className="space-y-2">
              {GEAR_FAQS.slice(5).map((q, i) => <FAQItem key={q} question={q} index={i + 5} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Camping Gear FAQs */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
             <div className="inline-flex items-center gap-4 text-accent mb-6">
                <Mountain className="w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Outdoor Living</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-serif">Camping Gear FAQs</h2>
             <p className="text-black/40 text-sm mt-6">Find answers about our camping gear rentals, usage, and policies.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            <div className="space-y-2">
              {CAMP_FAQS.slice(0, 5).map((q, i) => <FAQItem key={q} question={q} index={i} />)}
            </div>
            <div className="space-y-2">
              {CAMP_FAQS.slice(5).map((q, i) => <FAQItem key={q} question={q} index={i + 5} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="w-20 h-px bg-accent mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic">Still have questions?</h2>
          <p className="text-white/40 text-lg">Our adventure experts are available 24/7 to help you plan your perfect trek.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-5 bg-accent text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">Contact Support</button>
            <button className="px-12 py-5 bg-white/5 border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all">WhatsApp Us</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
