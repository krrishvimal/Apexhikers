"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter, FiLinkedin } from "react-icons/fi";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaApplePay } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  quick: [
    { name: "Trek", href: "/treks" },
    { name: "Expedition", href: "#" },
    { name: "Our Mountaineering Experience", href: "#" },
    { name: "Medical Certificate", href: "#" },
    { name: "Declaration Form", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/support" },
    { name: "FAQs", href: "/faqs" },
    { name: "Disclaimer", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cancellation Policy", href: "#" },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-32 pb-12 px-6 md:px-12 overflow-hidden relative">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 pb-32 border-b border-white/5">
          <div className="lg:col-span-6 space-y-12">
            <Link href="/" className="relative h-12 w-64 block group">
              <Image 
                src="/himalayanhiker.webp"
                alt="Himalayan Hikers"
                fill
                sizes="256px"
                className="object-contain brightness-0 invert group-hover:scale-105 transition-transform"
              />
            </Link>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] max-w-xl italic text-white/90">
              Crafting stories in the <span className="text-accent not-italic">Himalayas</span> since 1990.
            </h2>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="relative group max-w-xl ml-auto w-full">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold mb-8">
                Subscribe to our Adventure Journal
              </p>
              <div className="flex items-center border-b border-white/10 py-6 group-focus-within:border-accent transition-colors">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent text-sm outline-none tracking-[0.2em] uppercase font-sans placeholder:text-white/10"
                />
                <button className="text-accent hover:translate-x-2 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Detailed Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-32">
          
          {/* Sankri Office */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Sankri Head Office</h4>
            <div className="space-y-6 text-sm text-white/40 leading-relaxed font-sans">
              <p className="flex gap-4">
                <MapPin className="w-4 h-4 shrink-0 text-white/20" />
                35GJ+PJ8, Mori-Sankari Rd, Sidri, <br /> Sankri, Uttarakhand 249128
              </p>
              <p className="flex gap-4">
                <Phone className="w-4 h-4 shrink-0 text-white/20" />
                +91 75056 99509
              </p>
            </div>
          </div>

          {/* Dehradun Office */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-10">Dehradun Office</h4>
            <div className="space-y-6 text-sm text-white/40 leading-relaxed font-sans">
              <p className="flex gap-4">
                <MapPin className="w-4 h-4 shrink-0 text-white/20" />
                124, Rajpur Road, Kishanpur, <br /> Dehradun, Uttarakhand 248001
              </p>
              <p className="flex gap-4">
                <Mail className="w-4 h-4 shrink-0 text-white/20" />
                info@himalayanhikers.in
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">Quick Links</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.quick.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col lg:items-end">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-10">Social</h4>
            <div className="flex gap-4">
              {[FiInstagram, FiFacebook, FiYoutube, FiTwitter].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">
              © 1990-{new Date().getFullYear()} Himalayan Hikers. Born in the Mountains.
            </p>
            <div className="flex gap-8">
              {FOOTER_LINKS.legal.map(link => (
                <Link key={link.name} href={link.href} className="text-[9px] text-white/30 hover:text-white uppercase tracking-[0.2em] transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end gap-6">
            <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">We Accept</span>
            <div className="flex gap-4 items-center">
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center p-1 shadow-sm">
                 <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="7" cy="12" r="7" fill="#EB001B" />
                   <circle cx="17" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
                 </svg>
              </div>
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center p-1 shadow-sm">
                 <FaCcVisa className="w-full h-full text-[#1A1F71]" />
              </div>
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center p-1.5 shadow-sm">
                 <FaPaypal className="w-full h-full text-[#003087]" />
              </div>
              <div className="w-12 h-8 bg-white rounded-sm flex items-center justify-center p-1 shadow-sm">
                 <FaApplePay className="w-full h-full text-black" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
