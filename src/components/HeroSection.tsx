import { useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, MessageSquare, Disc, ChevronDown, Gamepad2, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const copyIp = (ip: string, isJava: boolean) => {
    navigator.clipboard.writeText(ip);
    if (isJava) {
      setCopiedJava(true);
      setTimeout(() => setCopiedJava(false), 2000);
    } else {
      setCopiedBedrock(true);
      setTimeout(() => setCopiedBedrock(false), 2000);
    }
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector("#fitur");
    if (nextSection) {
      const topOffset = 120;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="beranda"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.assets.hero}
          alt="Vercy SMP Fantasy Artwork"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        {/* Dark Elegant 70% Overlay */}
        <div className="absolute inset-0 bg-brand-deep/75 backdrop-blur-[2px]"></div>
        
        {/* Neon Purple Vignette & Light Effects */}
        <div className="absolute inset-0 bg-radial-at-t from-brand-neon/15 via-transparent to-brand-deep/80 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-brand-deep to-transparent pointer-events-none"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-8 pb-16">
        
        {/* Floating Logo with subtle hover state and entry animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative mb-6 select-none"
        >
          {/* Logo glow ring */}
          <div className="absolute -inset-2 bg-brand-neon rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
          
          <img
            src={SITE_CONFIG.assets.logo}
            alt="Vercy SMP Floating Logo"
            referrerPolicy="no-referrer"
            className="w-28 h-28 md:w-36 md:h-36 object-contain rounded-full border border-purple-500/20 relative z-10 animate-float"
          />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 uppercase drop-shadow-[0_5px_15px_rgba(168,85,247,0.3)]">
            {SITE_CONFIG.name}
          </h1>
          <div className="h-[3px] w-24 bg-linear-to-r from-brand-cyan via-brand-neon to-brand-cyan mx-auto mb-6 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light mb-10 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* Action Controls - IP Copying & Social Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex flex-col items-center gap-6"
        >
          {/* IP Copying Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl px-4">
            
            {/* Java Connection Card */}
            <div
              id="java-copy"
              className="bg-brand-royal/60 backdrop-blur-md border border-purple-500/20 rounded-xl p-4 flex items-center justify-between group hover:border-brand-neon/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-brand-neon group-hover:scale-105 transition-transform duration-300">
                  <Gamepad2 className="w-5 h-5 text-brand-cyan" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-purple-300/60 uppercase tracking-widest">Java IP Address</div>
                  <div className="font-mono text-sm sm:text-base font-semibold text-white tracking-wide">{SITE_CONFIG.server.javaIp}</div>
                </div>
              </div>
              <button
                onClick={() => copyIp(SITE_CONFIG.server.javaIp, true)}
                className="p-2.5 rounded-lg bg-brand-deep border border-purple-500/10 hover:border-brand-neon/40 text-purple-300 hover:text-white transition-all active:scale-95 cursor-pointer relative"
                title="Copy Java IP"
              >
                <AnimatePresence mode="wait">
                  {copiedJava ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {copiedJava && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-sans text-[10px] font-medium px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    Tersalin!
                  </span>
                )}
              </button>
            </div>

            {/* Bedrock Connection Card */}
            <div
              id="bedrock-copy"
              className="bg-brand-royal/60 backdrop-blur-md border border-purple-500/20 rounded-xl p-4 flex items-center justify-between group hover:border-brand-neon/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-brand-neon group-hover:scale-105 transition-transform duration-300">
                  <Gamepad2 className="w-5 h-5 text-brand-neon" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-purple-300/60 uppercase tracking-widest">Bedrock IP / Port</div>
                  <div className="font-mono text-sm sm:text-base font-semibold text-white tracking-wide">
                    {SITE_CONFIG.server.bedrockIp} <span className="text-brand-cyan/80 text-xs">Port {SITE_CONFIG.server.bedrockPort}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyIp(`${SITE_CONFIG.server.bedrockIp}:${SITE_CONFIG.server.bedrockPort}`, false)}
                className="p-2.5 rounded-lg bg-brand-deep border border-purple-500/10 hover:border-brand-neon/40 text-purple-300 hover:text-white transition-all active:scale-95 cursor-pointer relative"
                title="Copy Bedrock IP"
              >
                <AnimatePresence mode="wait">
                  {copiedBedrock ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Copy className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {copiedBedrock && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-sans text-[10px] font-medium px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
                    Tersalin!
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Social Community CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href={SITE_CONFIG.socials.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 hover:border-emerald-500/50 text-emerald-300 font-medium text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 fill-emerald-300/15" />
              Gabung WhatsApp Group
            </a>
            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 hover:border-[#5865F2]/50 text-purple-200 font-medium text-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,101,242,0.2)] hover:scale-[1.02]"
            >
              <Disc className="w-4 h-4 text-[#5865F2]" />
              Gabung Discord
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 z-10 flex flex-col items-center text-purple-300/60 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest mb-1.5 font-light">Scroll ke bawah</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </header>
  );
}
