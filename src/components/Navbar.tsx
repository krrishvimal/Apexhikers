"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, Phone, Mail, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const UTILITY_LINKS = [
  { name: "Careers", href: "/careers" },
  { name: "Support & Assistance", href: "/support" },
  { name: "Rent Gear", href: "/rent-gear" },
  { name: "FAQs", href: "/faqs" },
];

const MAIN_LINKS = [
  { 
    name: "Fixed Departures", 
    href: "#",
    submenu: ["Upcoming Autumn Trek", "Upcoming Monsoon Trek", "Upcoming Spring Trek", "Upcoming Summer Trek", "Upcoming Winter Trek"]
  },
  { 
    name: "Expeditions", 
    href: "#",
    submenu: [
      "Satopanth (7075m)", "Kalindi Pass (6000m)", "Black Peak (6387m)", 
      "Kedar Dome (6831m)", "Bhagirathi Peak 2 (6512m)", "Shivling Peak (6543m)",
      "Ranglana Peak (5554m)", "Bandarpunch (6316m)", "Mt. Kamet (7756m)", "Nanda Ghunti Expedition"
    ]
  },
  { 
    name: "Learning Trails", 
    href: "#",
    submenu: ["School Program", "University Program"]
  },
  { 
    name: "Yatra", 
    href: "#",
    submenu: ["Char Dham Yatra", "Do Dham Yatra", "Kedarnath Trek", "Badrinath Trek", "Hemkund Sahib", "Panch Kedar Trek", "Tungnath Trek"]
  },
  { 
    name: "Our Story", 
    href: "#",
    submenu: ["About Us", "Our Mission", "Our Commitment", "Our Leadership", "Connecting to Himalayas"]
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* 1. Top Utility Bar */}
      <div className={`hidden lg:block border-b border-white/5 bg-black/35 backdrop-blur-xl transition-all duration-500 ${
        isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-11 opacity-100"
      }`}>
        <div className="max-w-[1400px] mx-auto px-12 h-full flex justify-between items-center">
          <div className="flex gap-8">
            {UTILITY_LINKS.map(link => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[9px] uppercase tracking-[0.3em] text-white/90 hover:text-white transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 flex items-center gap-2">
              <Phone className="w-3 h-3 text-accent" /> +1 (800) 555-0190
            </span>
            <div className="h-3 w-[1px] bg-white/20" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" /> info@apexhikers.com
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div 
        className={`transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-white/90 backdrop-blur-xl border-b border-black/5" 
            : "pt-[12px] pb-8 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className={`text-2xl font-serif tracking-[0.2em] font-bold uppercase transition-colors duration-500 ${
              isScrolled ? "text-black" : "text-white"
            }`}>
              APEX<span className="text-accent font-normal italic">HIKERS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {MAIN_LINKS.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link 
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all flex items-center gap-1.5 group/link ${
                    isScrolled ? "text-black/70 hover:text-accent" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeSubmenu === link.name ? "rotate-180" : ""}`} />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover/link:w-full" />
                </Link>

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 ${
                        link.name === "Expeditions" ? "w-[500px]" : "w-64"
                      }`}
                    >
                      <div className={`bg-white p-8 shadow-2xl border border-black/5 ${
                        link.name === "Expeditions" ? "grid grid-cols-2 gap-x-12 gap-y-4" : "flex flex-col gap-4"
                      }`}>
                        {link.submenu.map(item => (
                          <Link 
                            key={item} 
                            href="#" 
                            className="text-[10px] uppercase tracking-[0.15em] text-black/40 hover:text-accent transition-colors font-bold whitespace-nowrap"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <button className={`p-2 transition-colors ${isScrolled ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"}`}>
              <Search className="w-5 h-5" />
            </button>
            <Link 
              href="#"
              className={`px-8 py-3 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold transition-all shadow-xl ${
                isScrolled 
                  ? "bg-accent text-white hover:bg-accent/90" 
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Customize Trek
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
               <span className="text-2xl font-serif tracking-[0.2em] font-bold uppercase text-black">
                 APEX<span className="text-accent font-normal italic">HIKERS</span>
               </span>
               <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            
            <div className="flex flex-col gap-8">
              {MAIN_LINKS.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-4xl font-serif text-black hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-4">
               <button className="py-5 border border-black/10 text-[10px] uppercase tracking-widest font-bold">Search Treks</button>
               <button className="py-5 bg-accent text-white text-[10px] uppercase tracking-widest font-bold">Customize</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
