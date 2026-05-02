import React from "react";
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";
import { Navbar, Footer, FloatingWhatsApp } from "./App";
import { motion } from "motion/react";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({ name: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const message = `Hi Scalrix! My name is ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/923123009968?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
      setFormData({ name: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-slate-900 selection:bg-cyan-600/20 selection:text-cyan-600 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Accents (Purple Glows) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: The Form */}
          <div className="flex-1 w-full relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-slate-900">
              Send Us a Message
            </h2>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full placeholder:text-slate-400 transition-all shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full placeholder:text-slate-400 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full placeholder:text-slate-400 transition-all shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Service Interested In</label>
                <div className="relative">
                  <select defaultValue="" className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full transition-all shadow-sm appearance-none">
                    <option value="" disabled>Select a service...</option>
                    <option value="starter">Starter Presence</option>
                    <option value="accelerator">Brand Accelerator</option>
                    <option value="dominance">Market Dominance</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="bg-white border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 w-full resize-none placeholder:text-slate-400 transition-all shadow-sm"
                ></textarea>
              </div>

              <button 
                disabled={submitted}
                className={`mt-4 flex items-center justify-center gap-2 outline-none text-white font-bold py-5 rounded-2xl text-lg transition-all w-full shadow-xl ${
                  submitted 
                  ? "bg-emerald-500 shadow-emerald-500/20" 
                  : "bg-gradient-to-r from-blue-900 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/30"
                }`}
              >
                {submitted ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Thank you! Redirecting to WhatsApp...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Get in Touch */}
          <div className="lg:w-5/12 xl:w-1/3 flex flex-col gap-6 relative z-10 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-xl border border-cyan-100 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:border-cyan-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">WhatsApp / Phone</div>
              <div className="text-xl font-bold text-slate-900">+92 312 3009968</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl border border-cyan-100 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:border-cyan-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Email Address</div>
              <div className="text-xl font-bold text-slate-900">hello@scalrix.com</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-xl border border-cyan-100 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg hover:border-cyan-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Location</div>
              <div className="text-lg leading-snug font-bold text-slate-900">
                Karachi, Pakistan <br/>
                <span className="text-cyan-600 font-semibold text-base mt-2 inline-block">Remote Worldwide</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ContactPage;
