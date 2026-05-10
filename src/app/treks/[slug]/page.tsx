"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Mountain, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight,
  CheckCircle2,
  XCircle,
  Thermometer,
  Zap
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

// Mock Database for dynamic pages
const TREKS_DATABASE: Record<string, any> = {
  "roopkund-trek": {
    title: "Roopkund Trek",
    subtitle: "The Mystery Lake of the Himalayas",
    location: "Uttarakhand, India",
    price: 18500,
    duration: "8 Days",
    elevation: "5,029m",
    difficulty: "Hard",
    image: "/treks/roopkund.webp",
    overview: "Roopkund, known as the Mystery Lake, is a high altitude glacial lake in the Uttarakhand state of India. It lies in the lap of Trishul massif and is famous for the hundreds of human skeletons found at the edge of the lake.",
    highlights: ["The mysterious skeleton lake", "Stunning views of Trishul & Nanda Ghunti", "Ancient forests of Oak and Rhododendron"],
    itinerary: [
      { day: 1, title: "Lohajung Arrival", desc: "Base camp for the Roopkund trek." },
      { day: 2, title: "Trek to Didna Village", desc: "A beautiful forest walk." }
    ]
  },
  "kedarkantha-peak": {
    title: "Kedarkantha Peak",
    subtitle: "The Perfect Winter Expedition",
    location: "Garhwal Himalayas",
    price: 12000,
    duration: "6 Days",
    elevation: "3,810m",
    difficulty: "Moderate",
    image: "/treks/kedarkantha.webp",
    overview: "Kedarkantha is a classic winter trek. The trek provides a great opportunity for trekkers to see the scenic beauty and experience the life of remote villages of Uttarakhand.",
    highlights: ["360-degree summit views", "Beautiful snow-covered campsites", "Pine forest trails"],
    itinerary: [
      { day: 1, title: "Sankri Arrival", desc: "Drive from Dehradun to Sankri." },
      { day: 2, title: "Trek to Juda-ka-Talab", desc: "A frozen lake campsite." }
    ]
  },
  "bali-pass-expedition": {
    title: "Bali Pass Expedition",
    subtitle: "Connecting Yamunotri & Har Ki Dun",
    location: "Yamunotri to Har Ki Dun",
    price: 24000,
    duration: "9 Days",
    elevation: "4,950m",
    difficulty: "Technical",
    image: "/treks/bali-pass.webp",
    overview: "Bali Pass is a high-altitude pass connecting Yamunotri and Har Ki Dun valleys. It is a challenging trek that offers spectacular views of Bandarpoonch and Swargarohini.",
    highlights: ["High altitude pass crossing", "Yamunotri temple visit", "Har Ki Dun valley exploration"],
    itinerary: [
      { day: 1, title: "Sankri to Taluka", desc: "Starting the journey into the wild." }
    ]
  },
  "valley-of-flowers": {
    title: "Valley of Flowers",
    subtitle: "A UNESCO World Heritage Site",
    location: "Chamoli, Uttarakhand",
    price: 15500,
    duration: "7 Days",
    elevation: "4,300m",
    difficulty: "Easy",
    image: "/treks/valley-of-flowers.webp",
    overview: "The Valley of Flowers is a vibrant and enchanting national park located in the Chamoli district of Uttarakhand. It is known for its meadows of endemic alpine flowers and the variety of flora.",
    highlights: ["UNESCO World Heritage Site", "Hemkund Sahib visit", "Endless meadows of flowers"],
    itinerary: [
      { day: 1, title: "Govindghat Arrival", desc: "The gateway to the valley." }
    ]
  },
  "everest-base-camp": {
    title: "Everest Base Camp",
    subtitle: "World's Most Iconic Himalayan Trek",
    location: "Khumbu Region, Nepal",
    price: 90000,
    duration: "15 Days",
    elevation: "5,364m",
    difficulty: "Challenging",
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&q=80&w=2070",
    overview: "The Everest Base Camp Trek (EBC) is one of the most iconic and popular trekking adventures in the world. Located in Nepal's Khumbu region, this trek takes you to the base of Mount Everest.",
    highlights: ["Stand at the foot of the world's highest peak", "Sunrise from Kala Patthar", "Khumbu Glacier"],
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", desc: "Briefing and preparation." }
    ]
  }
};

export default function TrekDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = TREKS_DATABASE[slug] || TREKS_DATABASE["everest-base-camp"];
  const [activeAccordion, setActiveAccordion] = useState<string | null>("itinerary");

  return (
    <SmoothScroll>
      <main className="bg-white min-h-screen">
        <Navbar />
        
        {/* Cinematic Hero */}
        <section className="relative h-[85vh] w-full overflow-hidden">
          <Image 
            src={data.image}
            alt={data.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold mb-6"
            >
              Legendary Expeditions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl text-white font-serif italic mb-8"
            >
              {data.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-sm md:text-lg max-w-2xl uppercase tracking-widest font-light"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Quick Stats Bar - Premium Minimalist */}
        <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-2xl border border-black/5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 p-10">
            {[
              { icon: Clock, label: "Duration", val: data.duration },
              { icon: Mountain, label: "Max Alt", val: data.elevation },
              { icon: Zap, label: "Difficulty", val: data.difficulty },
              { icon: MapPin, label: "Region", val: data.location.split(',')[0] },
              { icon: Thermometer, label: "Best Time", val: "Oct - Nov" },
              { icon: ShieldCheck, label: "Safety", val: "Elite Grade" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">
                <stat.icon className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-muted mb-1">{stat.label}</p>
                  <p className="text-xs font-bold">{stat.val}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Main Column */}
            <div className="lg:col-span-8">
              <div className="mb-16">
                <h2 className="text-3xl font-serif mb-8 italic">Expedition Overview</h2>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {data.overview}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-accent/5 border border-accent/10">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <p className="text-sm font-medium">{h}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Itinerary */}
              <div className="space-y-4">
                <h3 className="text-2xl font-serif mb-8 italic">The Journey</h3>
                {data.itinerary.map((day: any) => (
                  <div key={day.day} className="border-b border-black/5 pb-4">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === `day-${day.day}` ? null : `day-${day.day}`)}
                      className="w-full flex items-center justify-between py-4 text-left group"
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-accent font-serif italic text-2xl">0{day.day}</span>
                        <span className="text-lg font-medium group-hover:text-accent transition-colors">{day.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform ${activeAccordion === `day-${day.day}` ? "rotate-180" : ""}`} />
                    </button>
                    {activeAccordion === `day-${day.day}` && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pl-14 pb-4 text-muted leading-relaxed"
                      >
                        {day.desc}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Sticky */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Pricing Card */}
                <div className="bg-[#121212] text-white p-10 rounded-sm overflow-hidden relative">
                  <div className="relative z-10">
                    <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Investment</span>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-serif">₹{data.price.toLocaleString()}</span>
                      <span className="text-white/40 text-xs">+ 5% GST</span>
                    </div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-8">All-inclusive Expedition Service</p>
                    <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:text-white transition-all">
                      Check Availability
                    </button>
                  </div>
                  {/* Grainy texture */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
                       style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
                </div>

                {/* Enquiry Form */}
                <div className="p-10 border border-black/5 bg-white">
                  <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Quick Enquiry</h4>
                  <div className="space-y-6">
                    <input type="text" placeholder="Full Name" className="w-full border-b border-black/10 py-3 text-sm focus:border-accent outline-none transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full border-b border-black/10 py-3 text-sm focus:border-accent outline-none transition-colors" />
                    <textarea placeholder="Message" rows={3} className="w-full border-b border-black/10 py-3 text-sm focus:border-accent outline-none transition-colors resize-none" />
                    <button className="w-full py-4 border border-black text-black font-bold uppercase tracking-widest text-[10px] hover:bg-black hover:text-white transition-all">
                      Send Enquiry
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="p-8 bg-accent/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold">Safe Passage Guarantee</p>
                      <p className="text-[10px] text-muted">Certified guides & rescue protocols</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer Link */}
        <section className="py-24 bg-[#121212] text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">Next Adventure</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12">Looking for something <br /> else?</h2>
            <button className="inline-flex items-center gap-4 text-lg border-b border-accent pb-2 hover:gap-8 transition-all">
              Explore all Expeditions <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

      </main>
    </SmoothScroll>
  );
}

