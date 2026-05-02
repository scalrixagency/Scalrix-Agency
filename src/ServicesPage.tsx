import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Navbar, Footer, FloatingWhatsApp, WhatsAppIcon } from "./App";
import { 
  MessageCircle, Monitor, ShoppingCart, Layout, 
  MessageSquare, PenTool, Image as ImageIcon, Video, Layers, 
  Sparkles, BarChart, MapPin, Share2, TrendingUp 
} from "lucide-react";

const webItems = [
  {
    name: "Business Website",
    desc: "Complete business presence with custom responsive pages.",
    pricing: [{ tier: "3–5 Pages", price: "Rs. 30,000 – 35,000" }],
    icon: Monitor,
    popular: true,
  },
  {
    name: "E-commerce Store",
    desc: "High-performance store with integrated payments.",
    pricing: [{ tier: "Full Store", price: "Rs. 35,000 – 40,000" }],
    icon: ShoppingCart,
  },
  {
    name: "Landing Page",
    desc: "Optimized single page funnel for lead generation.",
    pricing: [{ tier: "1 Page Config", price: "Rs. 10,000 – 15,000" }],
    icon: Layout,
  },
  {
    name: "Portfolio Website",
    desc: "Showcase your work with a stunning personal portfolio.",
    pricing: [{ tier: "Custom Build", price: "Rs. 15,000 – 20,000" }],
    icon: Layers,
  },
  {
    name: "WhatsApp Funnel",
    desc: "Automated chat flows, auto replies.",
    pricing: [{ tier: "Setup", price: "Rs. 8,000 – 10,000" }],
    icon: MessageSquare,
  },
];

const creativeItems = [
  {
    name: "Logo Design",
    desc: "Strong brand identity for your business.",
    pricing: [
      { tier: "Per Design", price: "Rs. 3,000" },
    ],
    icon: PenTool,
  },
  {
    name: "Social Media Posts",
    desc: "Professional static designs to attract your audience.",
    pricing: [
      { tier: "1 Post", price: "Rs. 1,000" },
      { tier: "3 Posts", price: "Rs. 2,500" },
      { tier: "5 Posts", price: "Rs. 3,500" },
    ],
    icon: ImageIcon,
    popular: true,
  },
  {
    name: "Video / Reel Editing",
    desc: "High-engagement short-form video tailored for social growth.",
    pricing: [
      { tier: "1 Reel", price: "Rs. 1,500" },
      { tier: "5 Reels", price: "Rs. 7,000" },
    ],
    icon: Video,
  },
  {
    name: "Motion Graphics",
    desc: "Eye-catching animated poster designs.",
    pricing: [{ tier: "Per Design", price: "Rs. 2,000" }],
    icon: Sparkles,
  },
  {
    name: "Carousel Post",
    desc: "Boost engagement & saves with insightful slides.",
    pricing: [{ tier: "5 Slides", price: "Rs. 2,500" }],
    icon: Layers,
  },
  {
    name: "AI Video Ads",
    desc: "Cutting-edge AI avatars & video commercials.",
    pricing: [
      { tier: "1 Video", price: "Rs. 2,000" },
      { tier: "3 Videos", price: "Rs. 5,000" },
    ],
    icon: Video,
  },
];

const setupItems = [
  {
    name: "Meta Ads Setup",
    desc: "Campaign setup ready to run on Facebook & Instagram.",
    pricing: [{ tier: "Meta Suite Setup", price: "Rs. 10,000" }],
    icon: BarChart,
    popular: true,
  },
  {
    name: "Google My Business",
    desc: "Local search setup & optimization.",
    pricing: [{ tier: "Listing Setup", price: "Rs. 5,000" }],
    icon: MapPin,
  },
  {
    name: "Social Media Setup",
    desc: "Page creation, bio optimization & branding.",
    pricing: [{ tier: "One-Time Setup", price: "Rs. 3,000" }],
    icon: Share2,
  },
  {
    name: "Social Media Optimization",
    desc: "Optimize existing profiles for better reach and visibility.",
    pricing: [{ tier: "Optimization", price: "Rs. 2,000" }],
    icon: TrendingUp,
  },
];

const SectionCTA = () => (
  <div className="mt-8 text-center flex justify-center w-full">
    <a 
      href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20my%20business." 
      target="_blank" 
      rel="noreferrer" 
      className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-6 py-3 rounded-full text-sm font-bold transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-slate-500/20"
    >
      <MessageCircle className="w-4 h-4" /> Need a Custom Package?
    </a>
  </div>
);

const CurveHeading = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="relative mb-10 w-full flex flex-col items-center justify-center text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-fuchsia-500 relative z-10 pb-2 inline-block">
      {title}
      <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-300/40" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,10 Q50,20 100,10 L100,20 L0,20 Z" fill="currentColor" />
      </svg>
    </h2>
    <p className="text-slate-500 font-medium text-base mt-2">{subtitle}</p>
  </div>
);

const ServiceCard: React.FC<{ item: any; delayIdx: number }> = ({ item, delayIdx }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: delayIdx * 0.05 }}
      className={`bg-white border border-purple-100/60 rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 flex flex-col h-full group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15),_0_0_20px_rgba(6,182,212,0.1)] hover:border-purple-300`}
    >
      {item.popular && (
        <div className="absolute top-0 right-4 sm:right-6 -translate-y-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full shadow-sm">
            Popular
          </span>
        </div>
      )}
      
      <div className="flex-1 flex flex-col font-sans relative z-10">
        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <h3 className="text-sm sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-tight">
            {item.name}
          </h3>
          {Icon && (
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-purple-50 text-purple-600 group-hover:bg-purple-100 group-hover:text-cyan-600 transition-colors">
              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
          )}
        </div>
        <p className="text-slate-500 text-[11px] sm:text-sm mb-4 sm:mb-6 flex-grow leading-relaxed">
          {item.desc}
        </p>
        
        <div className="mt-auto">
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
            {item.pricing.map((priceOption: any, pIdx: number) => (
              <div key={pIdx} className="flex justify-between items-center bg-slate-50/50 rounded-lg p-2 sm:p-2.5 border border-slate-100">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500">{priceOption.tier}</span>
                <span className="text-[11px] sm:text-sm font-bold text-slate-800">{priceOption.price}</span>
              </div>
            ))}
          </div>
          
          <a
            href={`https://wa.me/923123009968?text=${encodeURIComponent(`Hi Scalrix, I'm interested in the ${item.name} service.`)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-xl sm:rounded-[14px] font-bold text-[11px] sm:text-sm transition-all duration-300 bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Get It</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-purple-600/20 selection:text-purple-600 overflow-x-hidden relative">
      <Navbar />

      <main>
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4C1D95] text-white pt-28 pb-12 md:pt-40 md:pb-20 relative overflow-hidden">
          {/* subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl leading-[1.1]"
            >
              Services & <span className="text-cyan-400">Pricing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-8"
            >
              Scalable digital infrastructure and engaging assets to dominate your market.
            </motion.p>
          </div>
        </section>
        
        {/* Bento Grid layout */}
        <section id="services" className="py-10 sm:py-16 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-12 sm:gap-16">
            
            {/* Section 1: Creative & Content */}
            <div>
              <CurveHeading title="Brand Identity & Content" subtitle="Premium assets designed to captivate and convert." />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {creativeItems.map((item, idx) => (
                  <ServiceCard key={idx} item={item} delayIdx={idx} />
                ))}
              </div>
            </div>

            {/* Section 2: Web & Infrastructure */}
            <div>
              <CurveHeading title="Digital Infrastructure" subtitle="Scalable, high-performance systems to capture leads." />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {webItems.map((item, idx) => (
                  <ServiceCard key={idx} item={item} delayIdx={idx} />
                ))}
              </div>
            </div>

            {/* Section 3: Setup & Optimization */}
            <div>
              <CurveHeading title="Setup & Ads Visibility" subtitle="One-time setups and ongoing configurations for maximum reach." />
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {setupItems.map((item, idx) => (
                  <ServiceCard key={idx} item={item} delayIdx={idx} />
                ))}
              </div>
              <SectionCTA />
            </div>

          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}