import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Mail,
  Phone,
  Facebook,
  Instagram
} from "lucide-react";

export const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.12 4.38-2.88 5.75-1.76 1.37-4.14 1.84-6.32 1.4-2.18-.44-4.11-1.78-5.26-3.64-1.15-1.85-1.39-4.22-.84-6.31.54-2.08 1.95-3.82 3.82-4.8 1.87-.98 4.17-1.12 6.13-.5.01 1.4.01 2.8 0 4.2-.7-.41-1.55-.54-2.35-.44-.8.1-1.57.48-2.13 1.07-.56.59-.92 1.38-1.01 2.19-.09.81.08 1.63.48 2.33.4.7 1.03 1.25 1.77 1.55.74.31 1.58.35 2.34.13.76-.22 1.43-.69 1.88-1.34.45-.65.68-1.45.65-2.26.01-5.36.01-10.72.01-16.08z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const FloatingWhatsApp = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-[999] pointer-events-none"
  >
    <a
      href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'm%20ready%20to%20scale!"
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center gap-3 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] w-14 h-14 sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 rounded-full sm:rounded-[20px] font-bold transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,211,102,0.4)] pointer-events-auto"
    >
      <WhatsAppIcon className="w-7 h-7 sm:w-5 sm:h-5 fill-current" />
      <span className="hidden sm:inline text-sm">WhatsApp Us</span>
    </a>
  </motion.div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100" : "bg-transparent py-4 border-b border-white/20 backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/index.html" className="flex items-center gap-3 group">
          <img 
            src="https://i.postimg.cc/CMbsqtQJ/Gemini-Generated-Image-6hvk9b6hvk9b6hvk-removebg-preview.png" 
            alt="Scalrix Logo" 
            className="h-10 w-auto object-contain" 
            style={{ filter: "brightness(1.2) contrast(1.1) drop-shadow(0 0 5px rgba(255,255,255,0.3))" }}
          />
          <div className="flex items-center tracking-tight">
            <span className={`text-2xl font-extrabold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 ${isScrolled ? "text-slate-900" : "text-white"}`}>Scalrix</span>
            <span className={`text-xl font-light ml-2 ${isScrolled ? "text-slate-500" : "text-white/80"}`}>Agency</span>
          </div>
        </a>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-semibold ${isScrolled ? "text-slate-600" : "text-white/90"}`}
        >
          <a
            href="/index.html"
            className="hover:text-cyan-500 transition-colors py-2"
          >
            Home
          </a>
          
          <a
            href="/services.html"
            className="hover:text-cyan-500 transition-colors py-2"
          >
            Services
          </a>

          <div className="relative group">
            <button className="hover:text-cyan-500 transition-colors py-2 flex items-center outline-none cursor-pointer">
              Portfolio
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-56">
              <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-4 flex flex-col gap-3">
                <a href="/project-detail.html" className="text-slate-600 hover:text-cyan-600 font-bold transition-colors">ABD Bake & Freeze</a>
                <a href="/institute-detail.html" className="text-slate-600 hover:text-cyan-600 font-bold transition-colors">Abdullah Islamic Institute</a>
              </div>
            </div>
          </div>

          <a
            href="/contact.html"
            className="hover:text-cyan-500 transition-colors py-2"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="/contact.html"
            className={`${isScrolled ? "bg-cyan-600 text-white hover:bg-cyan-700" : "bg-white text-cyan-600 hover:bg-white/90"} px-6 py-2.5 rounded-full text-sm font-bold flex items-center transition-all shadow-sm`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Let's talk
          </a>
        </div>

        <button
          className={`md:hidden ${isScrolled ? "text-slate-900" : "text-white"} p-1`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <a
              href="/index.html"
              className="text-base font-bold text-slate-800 hover:text-cyan-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/services.html"
              className="text-base font-bold text-slate-800 hover:text-cyan-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            
            <div className="flex flex-col">
              <button 
                className="text-base font-bold text-slate-800 hover:text-cyan-600 transition-colors py-2 flex items-center justify-between outline-none"
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
              >
                Portfolio
                <motion.div animate={{ rotate: isPortfolioOpen ? 180 : 0 }}>
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </motion.div>
              </button>
              {isPortfolioOpen && (
                <div className="flex flex-col gap-3 pl-4 mt-2 border-l-2 border-slate-100">
                  <a 
                    href="/project-detail.html" 
                    className="text-sm font-semibold text-slate-600 hover:text-cyan-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    ABD Bake & Freeze
                  </a>
                  <a 
                    href="/institute-detail.html" 
                    className="text-sm font-semibold text-slate-600 hover:text-cyan-600 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Abdullah Islamic Institute
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contact.html"
              className="text-base font-bold text-slate-800 hover:text-cyan-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-10 md:pb-32 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-900 via-[#8B5CF6] to-[#A855F7] text-white"
    >
      {/* Mesh Gradient Effect / Moving Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen opacity-70">
        <motion.div
          animate={{ y: [0, -50, 0], x: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#6366F1]/50 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#A855F7]/40 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wide border border-white/20 shadow-sm relative z-10">
            Simplifying Digital Growth
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.05] text-white mb-6 tracking-tight relative z-10 max-w-2xl">
            We Help Businesses <br className="hidden md:block" />
            <span
              className="text-[#FFEA00]"
              style={{
                textShadow:
                  "0 0 40px rgba(255,234,0,0.8), 0 0 20px rgba(255,234,0,0.6)",
              }}
            >
              Grow Online.
            </span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 leading-relaxed relative z-10 font-medium">
            From premium brand identity to high-converting Meta ads and AI
            content. We build your digital presence from zero to hero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 justify-center lg:justify-start w-full sm:w-auto">
            <button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#fef08a] text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(254,240,138,0.5)] flex items-center justify-center"
            >
              Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full font-bold transition-all border border-white/30 hover:bg-white/10 flex items-center justify-center backdrop-blur-sm mt-0"
            >
              Show Our Work
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full relative flex justify-center max-w-xl mx-auto lg:ml-auto lg:mr-0 mt-[-40px] md:mt-8 lg:mt-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-cyan-500/50 rounded-full blur-[120px] z-0 pointer-events-none"></div>
          
          <div className="relative w-full z-10">
            {/* Floating cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[10%] md:top-[20%] -left-[2%] md:-left-[8%] bg-slate-800/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl p-3 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-30 flex items-center gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Asset Status</p>
                <p className="text-[11px] md:text-sm font-extrabold text-white">AI Video Rendered</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -right-[2%] md:-right-[8%] bg-slate-800/90 backdrop-blur-xl border border-white/10 text-white rounded-2xl p-3 md:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-30 flex items-center gap-3"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Star className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">SEO Status</p>
                <p className="text-[11px] md:text-sm font-extrabold text-white">GMB Optimized</p>
              </div>
            </motion.div>

            {/* Laptop Screen / Lid */}
            <div className="relative aspect-[16/10] bg-slate-900 rounded-[24px] md:rounded-[32px] p-3 md:p-5 shadow-2xl flex flex-col z-20 border border-slate-800">
              <div className="flex-1 w-full rounded-[12px] md:rounded-[16px] overflow-hidden bg-[#0B0F19] relative ring-1 ring-white/10">
                {/* Camera */}
                <div className="absolute top-2.5 md:top-3 inset-x-0 w-2.5 md:w-3 border border-slate-700 h-2.5 md:h-3 bg-slate-900 rounded-full mx-auto z-20 shadow-inner"></div>
                
                {/* Dark Marketing Dashboard */}
                <div className="w-full h-full flex flex-col relative z-10 text-slate-300 select-none">
                  {/* Top Bar */}
                  <div className="h-8 md:h-12 border-b border-white/5 flex items-center px-3 md:px-6 bg-[#0F1423]">
                    <div className="w-4 h-4 md:w-6 md:h-6 rounded md:rounded-md bg-gradient-to-br from-cyan-500 to-cyan-500 mr-2 md:mr-4 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                      <span className="text-[8px] md:text-[10px] font-bold text-white">A</span>
                    </div>
                    {/* Mini search bar */}
                    <div className="h-4 md:h-6 w-24 md:w-48 bg-white/5 rounded-full flex items-center px-2 md:px-3 border border-white/5">
                      <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full border border-slate-500 mr-1.5 md:mr-2"></div>
                      <div className="h-1 md:h-1.5 w-10 md:w-16 bg-slate-600 rounded"></div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 md:gap-3">
                      <div className="h-3 w-3 md:h-5 md:w-5 bg-white/5 rounded-sm md:rounded-md"></div>
                      {/* User Profile */}
                      <div className="h-4 w-4 md:h-7 md:w-7 bg-gradient-to-tr from-cyan-400 to-fuchsia-400 rounded-full ml-1 md:ml-2 border border-white/10"></div>
                    </div>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-3 md:p-6 grid grid-cols-4 gap-3 md:gap-6 bg-[#0B0F19]">
                    {/* Left Sidebar: Platform Setup */}
                    <div className="col-span-1 flex flex-col gap-2 md:gap-4">
                      <div className="text-[8px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Platform Setup</div>
                      <div className="flex-1 bg-[#121827] rounded-lg md:rounded-xl border border-white/5 shadow-sm p-2 md:p-4 flex flex-col gap-2 md:gap-4">
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px] md:text-[10px] font-bold">f</div>
                            <span className="text-[7px] md:text-[10px] text-white font-medium">Meta Ads</span>
                          </div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center text-[8px] md:text-[10px] font-bold">ig</div>
                            <span className="text-[7px] md:text-[10px] text-white font-medium">Instagram</span>
                          </div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5 md:gap-2">
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded bg-orange-500/20 text-orange-400 flex items-center justify-center text-[8px] md:text-[10px] font-bold">G</div>
                            <span className="text-[7px] md:text-[10px] text-white font-medium">GMB</span>
                          </div>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center: Creative Assets & Brand Palette */}
                    <div className="col-span-2 flex flex-col gap-3 md:gap-6">
                      {/* Creative Assets */}
                      <div className="flex-1 bg-[#121827] rounded-lg md:rounded-xl border border-white/5 shadow-sm p-3 md:p-5 flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
                        <div className="text-[8px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-2 md:mb-4 relative z-10">Creative Assets</div>
                        
                        <div className="grid grid-cols-2 gap-2 md:gap-4 flex-1 relative z-10 mt-1">
                          <div className="bg-white/5 rounded-md md:rounded-lg p-2 md:p-4 border border-white/5 flex flex-col justify-center">
                            <div className="text-xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">10<span className="text-xs md:text-xl text-cyan-400">+</span></div>
                            <div className="text-[6px] md:text-[10px] text-slate-300 font-medium">High-End Posts Live</div>
                          </div>
                          <div className="bg-white/5 rounded-md md:rounded-lg p-2 md:p-4 border border-white/5 flex flex-col justify-center">
                            <div className="text-xl md:text-4xl font-bold text-white mb-0.5 md:mb-1">4</div>
                            <div className="text-[6px] md:text-[10px] text-slate-300 font-medium">Pro Reels Live</div>
                          </div>
                        </div>
                      </div>

                      {/* Brand Palette */}
                      <div className="h-14 md:h-24 bg-[#121827] rounded-lg md:rounded-xl border border-white/5 shadow-sm p-2 md:p-5 flex items-center justify-between overflow-hidden relative">
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyan-500/10 to-transparent pointer-events-none"></div>
                        <div className="flex flex-col relative z-10 w-full">
                           <div className="flex justify-between items-center w-full">
                             <div className="text-[8px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Brand Palette</div>
                             <div className="flex -space-x-1 md:-space-x-2">
                               <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#121827] shadow-sm bg-[#6366F1]"></div>
                               <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#121827] shadow-sm bg-[#8B5CF6]"></div>
                               <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#121827] shadow-sm bg-[#A855F7]"></div>
                               <div className="w-5 h-5 md:w-8 md:h-8 rounded-full border-2 border-[#121827] shadow-sm bg-[#D946EF]"></div>
                             </div>
                           </div>
                           <div className="text-[6px] md:text-[9px] text-slate-500 mt-1">Consistent Identity Maintained</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section: The Results */}
                    <div className="col-span-1 flex flex-col gap-2 md:gap-4">
                      <div className="text-[8px] md:text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">The Results</div>
                      <div className="h-10 md:h-16 bg-white/5 rounded-lg md:rounded-xl border border-white/5 shadow-sm p-2 md:p-3 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="text-[6px] md:text-[10px] text-slate-400 font-medium mb-1 md:mb-1.5 flex items-center"><span className="w-2 h-2 md:w-3 md:h-3 text-cyan-400 mr-1"><MessageCircle className="w-full h-full" /></span> Reach</div>
                        <div className="text-[10px] md:text-lg font-bold text-white tracking-tight">124.5K</div>
                      </div>
                      <div className="h-10 md:h-16 bg-white/5 rounded-lg md:rounded-xl border border-white/5 shadow-sm p-2 md:p-3 flex flex-col justify-center">
                        <div className="text-[6px] md:text-[10px] text-slate-400 font-medium mb-1 md:mb-1.5 flex items-center"><span className="w-2 h-2 md:w-3 md:h-3 text-blue-400 mr-1"><Play className="w-full h-full" /></span> New Leads</div>
                        <div className="text-[10px] md:text-lg font-bold text-white tracking-tight">140</div>
                      </div>
                      <div className="flex-1 bg-gradient-to-b from-white/5 to-transparent rounded-lg md:rounded-xl border border-white/5 p-2 flex items-center justify-center">
                         <div className="text-center">
                           <div className="text-emerald-400 text-[10px] md:text-sm font-bold flex items-center justify-center gap-1">↑ 38%</div>
                           <div className="text-[5px] md:text-[8px] text-slate-500 mt-1 uppercase tracking-wider font-bold">vs Last Month</div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="relative w-[112%] -left-[6%] h-5 md:h-7 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-[24px] md:rounded-b-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t border-slate-400 z-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-2 md:h-2.5 bg-slate-500/50 rounded-b-xl shadow-inner"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Organic Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white pt-10 pb-12 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mx-auto w-12 h-1 bg-[#8B5CF6] rounded-full mb-10 shadow-[0_0_10px_rgba(139,92,246,0.3)]"></div>
          <p className="text-slate-900 text-3xl md:text-4xl lg:text-4xl font-extrabold leading-[1.4] tracking-tight text-balance">
            "We don’t just design; we convert. Your growth is our only metric. From zero presence to market leader—we build the strategic systems that scale your brand globally."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-500 text-white animate-gradient">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-32 h-32 bg-white/20 rounded-full blur-[40px]"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 right-[20%] w-64 h-64 bg-white/10 rounded-full blur-[60px]"
      />
    </div>
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#fef08a] mb-4">
        {subtitle}
      </h2>
      <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h3>
    </div>
    {/* Wave Transition */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
      <svg
        className="relative block w-full h-[40px] md:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.64,115.65,190.5,99.52c50.7-13.6,100.8-31.56,152.88-44Z"
          className="fill-white"
        ></path>
      </svg>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Creative & Content",
      desc: "Captivating visual language and compelling copy that resonates with your audience.",
      icon: "✨",
      link: "/services.html#creative"
    },
    {
      title: "Website & Funnels",
      desc: "High-converting, blazingly fast websites designed to turn visitors into loyal customers.",
      icon: "💻",
      link: "/services.html#web"
    },
    {
      title: "Setup & Ads",
      desc: "Precision-targeted campaigns and scalable infrastructure to maximize your ROI.",
      icon: "🚀",
      link: "/services.html#ads"
    },
  ];

  return (
    <section
      id="services"
      className="bg-white relative border-b border-slate-100 pb-10 md:pb-20 lg:pb-24"
    >
      <SectionHeader subtitle="Our Services" title="Solutions that scale" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-[40px]">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.a
              href={service.link}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="block bg-cyan-50/50 p-8 rounded-[40px] border border-cyan-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.a>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="/services.html" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold bg-slate-900 text-white rounded-full hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-cyan-600/30 hover:-translate-y-1">
            View All Services <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="work" className="bg-white border-b border-slate-100 pb-10 md:pb-20 lg:pb-24">
      <SectionHeader subtitle="Selected Work" title="Case Studies" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 py-10 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "ABD Bake & Freeze",
              cat: "Digital Identity • Meta Ads • GMB Setup",
              color: "from-[#D4AF37] to-[#D4AF37]",
              bgColor: "bg-[#D4AF37]",
              bottomFade: "from-[#D4AF37] via-[#D4AF37]/90 to-transparent",
              logo: "https://i.postimg.cc/KjcdJ2tk/logo.png",
              titleColor: "text-[#2D1B17]",
              subtitleColor: "text-[#2D1B17]/80",
              buttonClass: "text-[#2D1B17] bg-[#2D1B17]/15 hover:bg-[#2D1B17]/25",
              link: "/project-detail.html"
            },
            {
              title: "Abdullah Islamic Institute",
              cat: "Social Presence • Enrollment Funnel • Meta Ads",
              color: "from-[#0F172A] to-[#0F172A]",
              bgColor: "bg-[#0F172A]",
              bottomFade: "from-[#0F172A] via-[#0F172A]/80 to-transparent",
              logo: "https://i.postimg.cc/NfB1C0yk/Untitled-3-copy.png",
              titleColor: "text-white",
              subtitleColor: "text-white/80",
              buttonClass: "text-white bg-black/30 hover:bg-black/50",
              link: "/institute-detail.html"
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer block"
              onClick={() => (window.location.href = item.link)}
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-sm">
                <div className={`absolute inset-0 ${item.bgColor} group-hover:scale-105 transition-transform duration-700`}></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>

                {/* Center Logo Area */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-10">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <img src={item.logo} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className={`absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t ${item.bottomFade}`}>
                  <h4 className={`font-bold text-2xl mb-2 transition-colors ${item.titleColor}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm font-medium tracking-wide mb-4 ${item.subtitleColor}`}>
                    {item.cat}
                  </p>
                  <a
                    href={item.link}
                    className={`inline-flex items-center text-sm font-bold backdrop-blur-md px-4 py-2 rounded-full transition-colors ${item.buttonClass}`}
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      totalPrice: "Rs. 13,000",
      setupPrice: "Rs. 3,000",
      monthlyPrice: "Rs. 10,000",
      setupFeatures: [
        "Profile Picture Setup",
        "Bio Optimization",
        "WhatsApp Link Integration"
      ],
      monthlyFeatures: [
        "8-10 Custom Graphic Posts",
        "1 Three-Slide Carousel Post",
        "2 Motion Graphic Short Reels",
        "Daily Story Updates",
        "Targeted Hashtags Research"
      ],
      popular: false,
    },
    {
      name: "Standard",
      totalPrice: "Rs. 20,000",
      setupPrice: "Rs. 5,000",
      monthlyPrice: "Rs. 15,000",
      setupFeatures: [
        "Meta Suite Connection",
        "Social Media Optimization",
        "Brand Color Synchronization"
      ],
      monthlyFeatures: [
        "12-15 Premium Graphic Posts",
        "1 Five-Slide Carousel Post",
        "4 Motion Graphic Short Reels",
        "1 AI Powered Video Ad",
        "Meta Ads Strategy Setup"
      ],
      popular: true,
    },
    {
      name: "Premium",
      totalPrice: "Rs. 35,000",
      setupPrice: "Rs. 10,000",
      monthlyPrice: "Rs. 25,000",
      setupFeatures: [
        "Meta Asset Verification",
        "GMB Profile Optimization",
        "WhatsApp Lead Funnel Setup"
      ],
      monthlyFeatures: [
        "18-20 High-End Social Posts",
        "2 Five-Slide Carousel Posts",
        "8 Motion Graphic Short Reels",
        "3 AI Professional Video Ads",
        "Monthly Performance Insights"
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white pb-10 md:pb-20 lg:pb-24">
      <SectionHeader subtitle="Pricing" title="Our Monthly Management Plans" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start max-w-6xl mx-auto py-4 md:py-12">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: idx * 0.15, 
                duration: 0.4, 
                ease: "easeOut"
              }}
              className={`bg-white rounded-[40px] p-6 md:p-10 border flex flex-col h-full ${plan.popular ? "border-cyan-500 shadow-2xl shadow-cyan-500/10 relative transform md:scale-110 z-10" : "border-slate-100 shadow-xl shadow-slate-200/40 relative z-0"}`}
            >
              {plan.popular && (
                 <div className="relative md:absolute md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-900 to-cyan-500 text-white px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-md whitespace-nowrap w-max -mt-2 mb-6 md:mt-0 md:mb-0">
                  Most Popular
                </div>
              )}
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100 flex justify-between items-end">
                  <span>One-Time Setup</span>
                  <span className="text-cyan-600">{plan.setupPrice}</span>
                </h4>
                <ul className="space-y-3">
                  {plan.setupFeatures.map((feat, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 text-slate-600 text-sm font-medium"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex-grow mb-8">
                <h4 className="text-sm font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100 flex justify-between items-end">
                  <span>Monthly Management</span>
                  <span className="text-cyan-600">{plan.monthlyPrice}</span>
                </h4>
                <ul className="space-y-3">
                  {plan.monthlyFeatures.map((feat, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 text-slate-600 text-sm font-medium"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-4 mb-6 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1">Total First Month</p>
                  <p className="text-3xl font-extrabold text-slate-900">{plan.totalPrice}</p>
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/923123009968?text=${encodeURIComponent(`Hi Scalrix, I'm interested in the ${plan.name} Plan.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 rounded-xl text-sm font-bold transition-all shadow-sm ${plan.popular ? "bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-md hover:shadow-cyan-500/20" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                >
                  Choose {plan.name}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-12 font-medium">
          *Monthly fee starts from the second month.
        </p>
        <div className="mt-16 text-center bg-cyan-50/50 rounded-[40px] p-10 border border-cyan-100 flex flex-col items-center max-w-4xl mx-auto">
          <h4 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">Need a custom solution? Let's build a plan tailored to your business.</h4>
          <a href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20my%20business." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-cyan-600/30 hover:-translate-y-1">
            Get a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};


const FounderSection = () => (
  <section className="bg-white py-12 lg:py-16 flex justify-center">
    <div className="max-w-4xl w-full px-6">
      <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-[40px] p-8 md:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 flex flex-col items-start text-left">
          {/* Top Row (Identity) */}
          <div className="flex items-center gap-4 mb-6 w-full">
            <img 
              src="https://i.postimg.cc/bJs0QRLB/image-copy.png" 
              alt="Abdullah Ansari" 
              className="rounded-full h-16 w-16 object-cover border-2 border-indigo-500/50 shadow-lg"
            />
            <div>
              <h3 className="text-xl lg:text-2xl font-extrabold text-white tracking-tight">Abdullah Ansari</h3>
              <p className="text-indigo-200/90 text-sm lg:text-base font-medium">Founder & Growth Strategist, Scalrix Agency</p>
            </div>
            {/* Optional touch: Twitter-like icon or agency logo subtle top right */}
            <div className="ml-auto opacity-30 hidden sm:block">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <h4 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            "Every client is a growth partner, not just a retainer."
          </h4>
          <p className="text-indigo-100/90 text-base md:text-lg leading-relaxed mb-8 font-light">
            "At Scalrix, we only win when you win. That's not a promise—it's how we structure every engagement."
          </p>
          
          {/* Action Button */}
          <div className="w-full sm:w-auto">
            <a 
              href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20get%20a%20free%20consultation." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold rounded-xl transition-all shadow-md shadow-[#25D366]/20 hover:-translate-y-0.5 hover:shadow-[#25D366]/40 text-base"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export const HomeFooter = () => (
  <footer className="bg-[#F9FAFB] border-t border-cyan-100 py-8 md:pt-20 md:pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
        <div>
          <a href="/index.html" className="flex items-center gap-3 mb-4 group">
            <img src="https://i.postimg.cc/CMbsqtQJ/Gemini-Generated-Image-6hvk9b6hvk9b6hvk-removebg-preview.png" alt="Scalrix Logo" className="h-10 w-auto object-contain" />
            <div className="flex items-center tracking-tight">
              <span className="text-2xl font-extrabold text-slate-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500">Scalrix</span>
              <span className="text-xl font-light ml-2 text-slate-500">Agency</span>
            </div>
          </a>
          <p className="text-slate-600 leading-relaxed mb-6 font-medium">
            We Don't Manage, We Scale
          </p>
          <div className="space-y-3 text-slate-600 font-medium">
            <a href="mailto:abdunofficial360@gmail.com" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Mail className="w-4 h-4 text-cyan-600" />
              abdunofficial360@gmail.com
            </a>
            <a href="tel:+923123009968" className="flex items-center gap-2 hover:text-cyan-600 transition-colors">
              <Phone className="w-4 h-4 text-cyan-600" />
              +92 312 3009968
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide text-slate-900">Services</h4>
          <ul className="space-y-4 text-slate-600 font-medium">
            <li><a href="/services.html" className="hover:text-cyan-600 transition-colors">Meta Ads</a></li>
            <li><a href="/services.html" className="hover:text-cyan-600 transition-colors">Google Ads</a></li>
            <li><a href="/services.html" className="hover:text-cyan-600 transition-colors">Branding</a></li>
            <li><a href="/services.html" className="hover:text-cyan-600 transition-colors">Content</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide text-slate-900">Company</h4>
          <ul className="space-y-4 text-slate-600 font-medium">
            <li><a href="/index.html" className="hover:text-cyan-600 transition-colors">Home</a></li>
            <li><a href="/services.html" className="hover:text-cyan-600 transition-colors">Services</a></li>
            <li><a href="/index.html#work" className="hover:text-cyan-600 transition-colors">Portfolio</a></li>
            <li><a href="/contact.html" className="hover:text-cyan-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide text-slate-900">Ready to Scale?</h4>
          <a 
            href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20my%20business." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] w-full sm:w-auto mt-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Chat on WhatsApp
          </a>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-purple-600 hover:bg-purple-50 transition-all">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} Scalrix Agency. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyan-600 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Footer = () => (
  <footer className="bg-[#0F172A] text-white py-8 md:pt-20 md:pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="/index.html" className="flex items-center gap-3 mb-4 group">
            <img src="https://i.postimg.cc/CMbsqtQJ/Gemini-Generated-Image-6hvk9b6hvk9b6hvk-removebg-preview.png" alt="Scalrix Logo" className="h-10 w-auto object-contain" />
            <div className="flex items-center tracking-tight">
              <span className="text-2xl font-extrabold text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500">Scalrix</span>
              <span className="text-xl font-light ml-2 text-white/80">Agency</span>
            </div>
          </a>
          <p className="text-slate-400 leading-relaxed mb-6">
            Building digital dominance.
          </p>
          <div className="space-y-3 text-slate-400">
            <a href="mailto:abdunofficial360@gmail.com" className="block hover:text-cyan-400 transition-colors">abdunofficial360@gmail.com</a>
            <a href="tel:+923123009968" className="block hover:text-cyan-400 transition-colors">+92 312 3009968</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide">Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="/services.html" className="hover:text-cyan-400 transition-colors">Meta Ads Management</a></li>
            <li><a href="/services.html" className="hover:text-cyan-400 transition-colors">Brand Identity</a></li>
            <li><a href="/services.html" className="hover:text-cyan-400 transition-colors">AI Content Creation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="/index.html" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="/services.html" className="hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="/index.html#work" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
            <li><a href="/contact.html" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 tracking-wide">Let's Talk</h4>
          <a 
            href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20get%20a%20custom%20quote%20for%20my%20business." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20bd5a] transition-all shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] w-full sm:w-auto mt-2"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Chat on WhatsApp
          </a>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:bg-white/10 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:bg-white/10 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-purple-600 hover:bg-white/10 transition-all">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Scalrix Agency. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <FounderSection />
      </main>
      <HomeFooter />
      <FloatingWhatsApp />
    </div>
  );
}
