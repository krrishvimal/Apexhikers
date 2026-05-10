"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const PARTNERS = [
  { name: "ATOAI", img: "/trustedby/Atoai.webp" },
  { name: "Uttarakhand Tourism", img: "/trustedby/uttarakhand.webp" },
  { name: "UPES", img: "/trustedby/upes.webp" },
  { name: "Blue Bells", img: "/trustedby/blu b.webp" },
  { name: "Hanifl Centre", img: "/trustedby/5.webp" },
  { name: "Woodstock School", img: "/trustedby/woodstock.webp" },
  { name: "Welham Boys", img: "/trustedby/welhamboys.webp" },
  { name: "Startup India", img: "/trustedby/startup.webp" },
  { name: "Nidhi+", img: "/trustedby/nidhi.webp" },
  { name: "MSME", img: "/trustedby/msme.webp" },
  { name: "Vardhman", img: "/trustedby/vardhman.webp" },
  { name: "The Valley School", img: "/trustedby/vl.webp" },
  { name: "Ministry of Tourism", img: "/trustedby/ministry-of-tourism-gov-india.webp" },
  { name: "Additional Certification", img: "/trustedby/6.webp" }
];

export default function TrustedBy() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-black/[0.03]">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
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
              className="text-3xl md:text-4xl font-serif"
            >
              Trusted by <span className="italic font-normal text-accent">Global Institutions</span>
            </motion.h2>
          </div>
          <p className="text-sm max-w-sm text-black/70 font-sans leading-relaxed">
            From premier educational institutions to government tourism bodies, our legacy of safety and expertise is recognized nationwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-black/[0.05] border border-black/[0.05]">
          {PARTNERS.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 h-40 flex items-center justify-center group cursor-default relative overflow-hidden"
            >
              <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110">
                <Image 
                  src={partner.img}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
