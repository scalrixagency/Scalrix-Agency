import React from "react";
import { motion } from "motion/react";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar, Footer, FloatingWhatsApp } from "./App";

const InstituteDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-slate-900 selection:bg-cyan-600/20 selection:text-cyan-600 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-32 md:pb-48 lg:pt-48 overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-500 animate-gradient text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-20 left-[10%] w-32 h-32 bg-white/20 rounded-full blur-[40px]"
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
            className="absolute bottom-10 right-[20%] w-64 h-64 bg-[#6366F1]/40 rounded-full blur-[60px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#fef08a] animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide text-white">
                  Featured Project
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-white mb-6 tracking-tight relative z-10">
                Project: <br />
                <span>Abdullah </span>
                <span className="text-[#fef08a]">Islamic Institute</span>
              </h1>
              <p className="text-white/90 text-lg max-w-lg mb-8 leading-relaxed relative z-10">
                Scaling a digital educational platform: From building a professional brand identity and high-end video ads to setting up automated enrollment systems on Meta.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-[650px] xl:max-w-[800px] mx-auto lg:mx-0 mt-[-40px] md:mt-6 lg:mt-0 xl:scale-110 xl:origin-right">
                {/* Laptop Screen / Lid */}
                <div className="relative aspect-[16/10] bg-slate-900 rounded-[20px] md:rounded-[24px] p-2.5 md:p-4 shadow-2xl flex flex-col">
                  <div className="flex-1 w-full rounded-[10px] md:rounded-[12px] overflow-hidden bg-slate-100 relative">
                    {/* Camera */}
                    <div className="absolute top-2.5 inset-x-0 w-2.5 h-2.5 bg-slate-900 rounded-full mx-auto z-10"></div>
                    <img 
                      src="https://i.postimg.cc/hGyQ4T18/Screenshot-2026-04-29-032753.png" 
                      alt="Abdullah Islamic Institute Dashboard" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="relative w-[110%] -left-[5%] h-4 md:h-5 bg-slate-300 rounded-b-3xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] border-t border-slate-400 z-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1.5 md:h-2 bg-slate-400 rounded-b-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
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
              className="fill-[#F9FAFB]"
            ></path>
          </svg>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-6">
              The Digital Blueprint: Scaling Islamic Education Online
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                The goal was to transform a traditional educational concept into a professional digital platform. The mission involved creating a trustable brand identity and building an online presence that effectively connects students with Islamic knowledge through modern social media systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="bg-white relative pb-20">
        <div className="bg-gradient-to-r from-blue-900 via-[#8b5cf6] to-[#A855F7] animate-gradient text-white pt-24 pb-40 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Our Solution
            </h2>
            <div className="w-16 h-1 bg-white/40 rounded-full mt-3 mx-auto"></div>
            <p className="text-white/90 max-w-2xl mx-auto mt-4 text-lg">
              A 3-phase strategic approach implemented to transform the brand from an offline concept into a fully functional digital business.
            </p>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 7 }}
              className="absolute bottom-10 right-20 w-48 h-48 bg-white/10 rounded-full blur-[40px]"
            />
          </div>
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

        <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Identity",
                desc: "Logo design, professional social media profile setup, and establishing a consistent visual theme for educational content.",
              },
              {
                title: "Content Strategy",
                desc: "Designing high-quality educational posters and producing professional video ad content to engage the target audience.",
              },
              {
                title: "Enrollment Systems",
                desc: "Meta Business Suite integration, setting up ad campaigns, and connecting automated WhatsApp enrollment funnels.",
              },
            ].map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:border-cyan-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900/10 to-[#A855F7]/10 rounded-2xl flex items-center justify-center text-[#A855F7] group-hover:scale-105 group-hover:bg-[#A855F7] group-hover:text-white transition-all duration-300 shadow-sm mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#A855F7] transition-colors">
                  {sol.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Execution Showcase */}
      <section className="bg-[#F9FAFB] relative pb-20">
        <div className="bg-gradient-to-r from-[#8b5cf6] to-[#6366F1] animate-gradient text-white pt-24 pb-40 relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Project Execution Showcase
            </h2>
            <div className="w-16 h-1 bg-white/40 rounded-full mt-3 mx-auto"></div>
            <p className="text-white/90 max-w-2xl mx-auto mt-4 text-lg">
              The actual brand assets, dashboards, and optimized profiles built during this project.
            </p>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute top-10 left-[20%] w-32 h-32 bg-white/10 rounded-full blur-[40px]"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg
              className="relative block w-full h-[40px] md:h-[80px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,130.64,115.65,190.5,99.52c50.7-13.6,100.8-31.56,152.88-44Z"
                className="fill-[#F9FAFB]"
              ></path>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {[
              {
                id: 1,
                src: "https://i.postimg.cc/mZp6H58c/image-91ae69c8-copy.jpg",
                caption: "Logo & Identity",
                imageClass: "object-cover"
              },
              {
                id: 2,
                src: "https://i.postimg.cc/htTCNPgn/Whats-App-Image-2026-04-28-at-11-22-15-PM-(2).jpg",
                caption: "Visual Campaign Design",
                imageClass: "object-cover"
              },
              {
                id: 3,
                src: "https://i.postimg.cc/FKxTsWYz/Screenshot-2026-04-29-030852.png",
                caption: "Pro Video Editing",
                imageClass: "object-cover"
              },
              {
                id: 4,
                src: "https://i.postimg.cc/br4TF4B2/Screenshot-2026-04-28-230510.png",
                caption: "Social Media Setup",
                imageClass: "object-cover"
              },
              { 
                id: 5,
                src: "https://i.postimg.cc/dQf41TVL/Whats-App-Image-2026-04-29-at-2-04-37-AM-(1).jpg",
                caption: "Asset Integration",
                imageClass: "object-cover"
              },
              { 
                id: 6,
                src: "https://i.postimg.cc/8PrwrP7w/Screenshot-2026-04-29-020312.png",
                caption: "Ad Campaigns",
                imageClass: "object-cover"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl md:rounded-[40px] p-1.5 md:p-3 flex flex-col group shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] w-full rounded-xl md:rounded-[32px] overflow-hidden relative bg-[#F8F9FA] mb-2 md:mb-4">
                  <img 
                    src={item.src} 
                    alt={item.caption} 
                    className={`w-full h-full ${item.imageClass} group-hover:scale-105 transition-transform duration-500 ease-out`} 
                  />
                </div>
                <div className="px-1 md:px-4 pb-1 md:pb-3 flex-grow flex items-center justify-center text-center">
                  <h3 className="text-[10px] md:text-lg font-bold text-slate-800 leading-tight">
                    {item.caption}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Results */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <h2 className="text-xl md:text-3xl font-bold tracking-tight mb-8">
                Final Results
              </h2>
              <div className="grid grid-cols-3 gap-2 md:gap-8 divide-x divide-white/10">
                <div className="px-1">
                  <div className="text-indigo-200/90 font-bold uppercase tracking-widest text-[8px] md:text-xs mb-1 md:mb-4">
                    Established
                  </div>
                  <div className="text-[11px] md:text-2xl font-extrabold text-[#fef08a] leading-tight">
                    Brand <br className="md:hidden" /> Identity
                  </div>
                </div>
                <div className="px-1">
                  <div className="text-indigo-200/90 font-bold uppercase tracking-widest text-[8px] md:text-xs mb-1 md:mb-4">
                    Scaled
                  </div>
                  <div className="text-[11px] md:text-2xl font-extrabold text-[#fef08a] leading-tight text-center">
                    Online <br className="md:hidden" /> Presence
                  </div>
                </div>
                <div className="px-1">
                  <div className="text-indigo-200/90 font-bold uppercase tracking-widest text-[8px] md:text-xs mb-1 md:mb-4">
                    Connected
                  </div>
                  <div className="text-[11px] md:text-2xl font-extrabold text-[#fef08a] leading-tight">
                    Lead <br className="md:hidden" /> System
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Ready to create something amazing?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Let’s build your brand’s success story together. Message us on WhatsApp to get started.
            </p>
            <a
              href="https://wa.me/923123009968?text=Hi%20Scalrix,%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex py-4 px-8 items-center bg-gradient-to-r from-blue-900 to-cyan-500 text-white text-lg font-bold rounded-full hover:scale-105 transition-all outline-none focus:ring-4 focus:ring-cyan-500/50 shadow-[0_8px_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Your Project
            </a>

            <div className="mt-12">
              <a
                href="/index.html"
                className="inline-flex items-center text-slate-500 hover:text-[#6366F1] font-medium transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default InstituteDetailPage;
