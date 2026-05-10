"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Calendar, Users, Briefcase, MessageCircle, ArrowRight } from "lucide-react";

interface SupportCardProps {
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
  href: string;
  delay?: number;
}

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

function SupportCard({ title, description, cta, icon, href, delay = 0 }: SupportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group bg-white p-10 md:p-12 border border-black/[0.03] shadow-sm hover:shadow-2xl hover:shadow-black/[0.03] transition-all flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
        {icon}
      </div>
      
      <h3 className="text-2xl font-serif mb-4">{title}</h3>
      <p className="text-sm text-muted leading-relaxed mb-10 flex-grow font-sans opacity-60">
        {description}
      </p>

      <div className="mt-auto">
        <MagneticWrapper>
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold py-4 px-8 bg-black text-white rounded-sm hover:bg-accent transition-all group/btn"
          >
            {cta}
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </MagneticWrapper>
      </div>
    </motion.div>
  );
}

const SUPPORT_DATA = [
  {
    title: "General Enquiry",
    description: "Have questions about treks, itineraries, or our services? Our support team will guide you through the Himalayas.",
    cta: "Email Support",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:info@himalayanhikers.com"
  },
  {
    title: "WhatsApp Support",
    description: "Fast, friendly support available 24/7 on WhatsApp for real-time updates and quick assistance.",
    cta: "WhatsApp Support",
    icon: <MessageSquare className="w-5 h-5" />,
    href: "https://wa.me/919756197558"
  },
  {
    title: "Call Support",
    description: "Speak with our team directly for quick and reliable assistance regarding your upcoming expedition.",
    cta: "Call Support",
    icon: <Phone className="w-5 h-5" />,
    href: "tel:+919756197558"
  },
  {
    title: "Trek Bookings",
    description: "Need help with booking a trek, payment, or modifications? Contact our dedicated booking team.",
    cta: "Booking Support",
    icon: <Calendar className="w-5 h-5" />,
    href: "mailto:bookings@himalayanhikers.com"
  },
  {
    title: "Partnerships",
    description: "We collaborate with travel agencies, schools, and corporates. Let's create impactful journeys together.",
    cta: "Contact Partnerships",
    icon: <Users className="w-5 h-5" />,
    href: "mailto:partners@himalayanhikers.com"
  },
  {
    title: "Careers",
    description: "Passionate about trekking? Join Himalayan Hikers and be part of our expert mountain crew.",
    cta: "Apply Now",
    icon: <Briefcase className="w-5 h-5" />,
    href: "mailto:hr@himalayanhikers.com"
  },
  {
    title: "Feedback",
    description: "Tell us how we're doing and how we can improve your journey. We value every guest's voice.",
    cta: "Feedback Form",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "/feedback"
  }
];

export default function SupportSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#fafaf9] noise-overlay border-t border-black/5">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-6"
          >
            Concierge & Assistance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8"
          >
            Always within reach, <br /> <span className="italic font-normal">anywhere on the trail</span>
          </motion.h2>
          <p className="text-muted text-lg max-w-xl opacity-60">
            Our support ecosystem is designed to provide seamless assistance from your first enquiry to your final summit.
          </p>
        </div>

        {/* Primary Contact Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {SUPPORT_DATA.slice(0, 3).map((support, index) => (
            <SupportCard key={support.title} {...support} delay={index * 0.1} />
          ))}
        </div>

        {/* Secondary Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUPPORT_DATA.slice(3).map((support, index) => (
            <SupportCard key={support.title} {...support} delay={0.3 + index * 0.1} />
          ))}
        </div>

      </div>
    </section>
  );
}
