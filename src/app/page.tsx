"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrekGrid from "@/components/TrekGrid";
import SmoothScroll from "@/components/SmoothScroll";

const SeasonalHighlight = dynamic(() => import("@/components/SeasonalHighlight"));
const VideoGallery = dynamic(() => import("@/components/VideoGallery"));
const BlogGrid = dynamic(() => import("@/components/BlogGrid"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FounderInvitation = dynamic(() => import("@/components/FounderInvitation"));
const TrustedBy = dynamic(() => import("@/components/TrustedBy"));
const ExpeditionNavigator = dynamic(() => import("@/components/ExpeditionNavigator"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        
        {/* 1. Featured Adventures - Immediate Value */}
        <TrekGrid id="treks" />

        {/* 2. Founder's Message & Heritage - Building Trust */}
        <FounderInvitation />

        {/* 3. Seasonal Highlight - Targeted Focus */}
        <SeasonalHighlight />

        {/* 4. Cinematic Experiences - Visual Immersion */}
        <VideoGallery />

        {/* 5. Himalayan Journal - Authority & Education */}
        <BlogGrid />

        {/* 6. Guest Stories - Final Social Proof */}
        <Testimonials />

        {/* 7. Expedition Navigator - Structured Exploration */}
        <ExpeditionNavigator />

        {/* 8. Institutional Trust - Accreditations */}
        <TrustedBy />

        <Footer />
      </main>
    </SmoothScroll>
  );
}
