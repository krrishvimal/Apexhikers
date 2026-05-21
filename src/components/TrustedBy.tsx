"use client";

import { motion } from "framer-motion";
import { Mountain, ShieldCheck, Award, HeartPulse, Compass, Globe, CheckCircle } from "lucide-react";

const CERTIFICATIONS = [
  { name: "Alpine Safety Federation", icon: ShieldCheck, subtitle: "Elite Grade I Safety Standard" },
  { name: "Global Outdoor Council", icon: Globe, subtitle: "Charter Coalition Member" },
  { name: "Wilderness First Responder", icon: HeartPulse, subtitle: "First Aid & Emergency Certified" },
  { name: "Eco-Trek Coalition", icon: Compass, subtitle: "Sustainable Green Trail Partner" },
  { name: "International Mountain Guides", icon: Mountain, subtitle: "Professional Affiliation" },
  { name: "Leave No Trace Partner", icon: CheckCircle, subtitle: "Certified Conservation Practice" },
  { name: "Summit Medicine Guild", icon: Award, subtitle: "High-Altitude Medical Advisory" }
];

export default function TrustedBy() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white border-y border-black/[0.03]">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-accent text-[9px] uppercase tracking-[0.5em] font-bold block mb-4"
            >
              Accreditations
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif tracking-tight"
            >
              Certified by <span className="italic font-normal text-accent">Global Organizations</span>
            </motion.h2>
          </div>
          <p className="text-lg max-w-md text-black/50 font-sans leading-relaxed">
            Recognized globally by top-tier outdoor councils, our legacy of safety, ecological preservation, and elite high-altitude training sets the industry benchmark.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-px bg-black/[0.05] border border-black/[0.05] shadow-sm">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div 
                key={cert.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 h-56 flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden hover:bg-accent/[0.01] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-[12px] uppercase tracking-wider font-bold mb-2 group-hover:text-accent transition-colors">
                  {cert.name}
                </h4>
                <p className="text-[9px] uppercase tracking-widest text-black/30 font-bold">
                  {cert.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
