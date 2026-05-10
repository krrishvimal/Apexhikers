"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, Shield, Check, ArrowRight, 
  Star, Mountain, DollarSign, Leaf, Luggage 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const TREK_GEAR = [
  { name: "Dining Tent", price: "₹600/day", rating: 4, image: "/gears/trek/Dining-Tent.webp" },
  { name: "Ponchu", price: "₹50/day", rating: 4, image: "/gears/trek/Ponchu.webp" },
  { name: "Sleeping Bag", price: "₹150/day", rating: 4, image: "/gears/trek/Sleeping-Bag.webp" },
  { name: "Head Light", price: "₹50/day", rating: 4, image: "/gears/trek/Head-Light.webp" },
  { name: "Hand Gloves", price: "₹30/day", rating: 4, image: "/gears/trek/Hand-Gloves.webp" },
  { name: "Snow Gaiter", price: "₹50/day", rating: 4, image: "/gears/trek/Snow-Gaiter.webp" },
  { name: "Expedition Jacket", price: "₹100/day", rating: 4, image: "/gears/trek/Jacket.webp" },
];

const CAMP_GEAR = [
  { name: "Camping Chair", price: "₹150/day", rating: 4, image: "/gears/camp/Hiking-Chair.webp" },
  { name: "Dining Tent", price: "₹600/day", rating: 4, image: "/gears/camp/Dining-Tent.webp" },
  { name: "Kitchen Tent", price: "₹500/day", rating: 4, image: "/gears/camp/Kitchen-Tent.webp" },
  { name: "Liner", price: "₹50/day", rating: 4, image: "/gears/camp/Liner.webp" },
  { name: "Sleeping Bag", price: "₹150/day", rating: 4, image: "/gears/camp/Sleeping-Bag.webp" },
  { name: "Tent (2 Person)", price: "₹250/day", rating: 4, image: "/gears/camp/Tent-2-Person.webp" },
  { name: "Tent (3 Person)", price: "₹400/day", rating: 4, image: "/gears/camp/Tent-3-Person.webp" },
];

const FAQ_DATA = {
  rental: [
    { q: "What gear should I rent for a Himalayan trek?", a: "Essential items include trekking poles, backpacks, sleeping bags, tents, and hiking boots. Additional items like crampons or ropes may be needed for advanced treks." },
    { q: "Can I rent gear for multiple days?", a: "Yes, we offer daily, weekly, and custom rental plans. Discounts may apply for longer periods. Booking in advance is recommended." },
    { q: "How do I book trekking gear online?", a: "Click \"Enquire Now\" on the gear item, fill in your details, and submit. Our team will confirm via email or phone." }
  ],
  prep: [
    { q: "Do I need prior experience for high-altitude treks?", a: "Experience helps, but our expert guidance ensures safety. Some treks require acclimatization and fitness readiness." },
    { q: "What clothing is recommended?", a: "Layered clothing is ideal: thermal base, fleece jacket, waterproof outer layer, trekking socks, and gloves." },
    { q: "How should I prepare physically for a trek?", a: "Regular cardio, strength training, and hiking practice with backpack weight are recommended at least 4–6 weeks before the trek." }
  ],
  safety: [
    { q: "Are rented items sanitized and safe?", a: "Yes! All gear is thoroughly cleaned, sanitized, and inspected before every rental for your safety and comfort." },
    { q: "Can I contact someone during the trek?", a: "Our support team is available via phone and email for any urgent queries or guidance during your trek." },
    { q: "Can I cancel or reschedule my rental?", a: "Yes, you can modify or cancel your booking according to our policy. Early cancellations may qualify for full refund or rescheduling." }
  ]
};

const WHY_RENT = [
  {
    title: "Adventure Ready",
    desc: "Get premium trekking gear whenever you need it. Always ready for your next trail.",
    icon: <Mountain className="w-6 h-6" />
  },
  {
    title: "Save Money",
    desc: "Use high-quality equipment without spending thousands. Spend more on your experience.",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    title: "Eco-Friendly",
    desc: "Share gear, reduce waste, and protect the trails you love. Renting is sustainability in action.",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    title: "Travel Light",
    desc: "Pick up at your destination. No more lugging heavy gear from home.",
    icon: <Luggage className="w-6 h-6" />
  }
];

export default function RentGearPage() {
  const [activeTab, setActiveTab] = useState<"rental" | "prep" | "safety">("rental");

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section with Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80" 
          alt="Adventure Background"
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
            Hassle-Free Rentals
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8"
          >
            Premium Mountain Gear,<br />
            <span className="italic font-normal text-accent">Rented with Trust.</span>
          </motion.h1>
          <p className="text-xl text-white/60 font-serif max-w-2xl mx-auto">
            Choose from our specialized trekking and camping collections. High performance at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Trek Gear Catalog */}
      <section className="px-6 md:px-12 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b border-black/5 pb-8">
            <h2 className="text-4xl font-serif">Trek Gear Rentals</h2>
            <div className="h-px flex-grow bg-black/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TREK_GEAR.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 group border border-black/[0.03] hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square relative overflow-hidden mb-8 rounded-full border border-black/5 p-4 bg-[#fcfcfc] flex items-center justify-center group-hover:border-accent/30 transition-all">
                  <div className="relative w-full h-full">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-contain transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-sm font-bold text-accent mb-4">{item.price}</p>
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                    <span className="text-[10px] text-black/20 ml-2">(4.0)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 bg-[#f8f8f8] text-[9px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all">View Details</button>
                    <button className="py-3 bg-accent text-white text-[9px] uppercase tracking-widest font-bold hover:bg-black transition-all">Enquire Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Gear Catalog */}
      <section className="px-6 md:px-12 py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b border-black/5 pb-8">
            <h2 className="text-4xl font-serif">Camping Gear for Rent</h2>
            <div className="h-px flex-grow bg-black/5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAMP_GEAR.map((item, i) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 group border border-black/[0.03] hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-square relative overflow-hidden mb-8 rounded-full border border-black/5 p-4 bg-[#fcfcfc] flex items-center justify-center group-hover:border-accent/30 transition-all">
                  <div className="relative w-full h-full">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-contain transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                  <p className="text-sm font-bold text-accent mb-4">{item.price}</p>
                  <div className="flex justify-center gap-1 mb-8">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                    <span className="text-[10px] text-black/20 ml-2">(4.0)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-3 bg-[#f8f8f8] text-[9px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all">Book Now</button>
                    <button className="py-3 bg-accent text-white text-[9px] uppercase tracking-widest font-bold hover:bg-black transition-all">Enquire Now</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Renting? */}
      <section className="bg-white py-32 px-6 md:px-12 border-y border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 underline decoration-accent underline-offset-8">Why Renting is the Smart Choice?</h2>
            <p className="text-black/40 text-sm max-w-xl mx-auto">Smart, sustainable, and affordable — here’s why renting gear is the future of adventure travel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHY_RENT.map((benefit) => (
              <div key={benefit.title} className="text-center bg-[#f8f8f8] p-10 shadow-sm border border-black/[0.02] hover:bg-white transition-colors duration-500">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-accent/20">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-serif mb-4">{benefit.title}</h4>
                <p className="text-sm text-black/50 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Gear Specific FAQs */}
      <section className="py-32 px-6 md:px-12 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-8 underline decoration-accent underline-offset-8">Frequently Asked Questions</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <button 
                onClick={() => setActiveTab("rental")}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${activeTab === 'rental' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white border border-black/5 hover:bg-black hover:text-white'}`}
              >
                <Mountain className="w-3 h-3" /> Gear Rental
              </button>
              <button 
                onClick={() => setActiveTab("prep")}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${activeTab === 'prep' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white border border-black/5 hover:bg-black hover:text-white'}`}
              >
                Trek Preparation
              </button>
              <button 
                onClick={() => setActiveTab("safety")}
                className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all flex items-center gap-2 ${activeTab === 'safety' ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'bg-white border border-black/5 hover:bg-black hover:text-white'}`}
              >
                Safety
              </button>
            </div>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {FAQ_DATA[activeTab].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-black/5 flex gap-8 items-start shadow-sm hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 shrink-0 bg-accent rounded-full flex items-center justify-center text-white font-bold">{i + 1}</div>
                 <div>
                    <h3 className="text-xl font-serif mb-4">{item.q}</h3>
                    <p className="text-black/50 leading-relaxed font-sans text-sm">
                      {item.a}
                    </p>
                 </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
