import { useState } from "react";
import { SITE_CONFIG } from "../config/site";
import { motion, AnimatePresence } from "motion/react";
import { Server, Phone, Check, Copy, Gamepad2, Layers, Cpu } from "lucide-react";

export function ServerInfo() {
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

  return (
    <section id="kontak" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Koneksi Server
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Informasi Spesifikasi <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-glow">Server</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Gunakan informasi detail berikut untuk menghubungkan perangkat game milikmu ke server Vercy SMP dengan mudah.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column: Connection Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Java Platform info */}
            <div className="bg-brand-royal/30 border border-purple-500/10 hover:border-brand-cyan/20 p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/10 text-brand-cyan">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg text-white">Java Edition</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-0.5">Koneksi khusus PC / Laptop (Java Edition)</p>
                  <div className="font-mono text-sm sm:text-base font-semibold text-brand-glow mt-2">{SITE_CONFIG.server.javaIp}</div>
                </div>
              </div>
              <button
                onClick={() => copyIp(SITE_CONFIG.server.javaIp, true)}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-medium rounded-lg bg-brand-deep hover:bg-brand-royal text-slate-300 hover:text-white border border-purple-500/15 cursor-pointer transition-all active:scale-95 relative self-start md:self-center shrink-0"
              >
                <Copy className="w-3.5 h-3.5 mr-2" />
                Salin IP
                {copiedJava && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-sans text-[10px] px-2.5 py-0.5 rounded shadow-md whitespace-nowrap">
                    Tersalin!
                  </span>
                )}
              </button>
            </div>

            {/* Bedrock Platform info */}
            <div className="bg-brand-royal/30 border border-purple-500/10 hover:border-brand-neon/20 p-6 rounded-2xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/10 text-brand-neon">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-display font-bold text-lg text-white">Bedrock Edition</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-0.5">Koneksi khusus HP Android, iOS, Windows 10/11 PE</p>
                  <div className="font-mono text-sm sm:text-base font-semibold text-brand-glow mt-2">
                    IP: {SITE_CONFIG.server.bedrockIp} <span className="text-brand-cyan">• Port: {SITE_CONFIG.server.bedrockPort}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyIp(`${SITE_CONFIG.server.bedrockIp}:${SITE_CONFIG.server.bedrockPort}`, false)}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-medium rounded-lg bg-brand-deep hover:bg-brand-royal text-slate-300 hover:text-white border border-purple-500/15 cursor-pointer transition-all active:scale-95 relative self-start md:self-center shrink-0"
              >
                <Copy className="w-3.5 h-3.5 mr-2" />
                Salin IP
                {copiedBedrock && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-white font-sans text-[10px] px-2.5 py-0.5 rounded shadow-md whitespace-nowrap">
                    Tersalin!
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Other Specs & Owner Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-royal/40 to-brand-deep border border-purple-500/10 rounded-2xl p-6 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Server className="w-5 h-5 text-brand-neon" />
                <h3 className="font-display font-bold text-lg text-white">Meta Server</h3>
              </div>
              
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                
                <div className="flex justify-between items-center border-b border-purple-500/5 pb-2">
                  <span className="text-slate-500">VERSI MINECRAFT</span>
                  <span className="text-slate-200 font-semibold">{SITE_CONFIG.server.version}</span>
                </div>

                <div className="flex justify-between items-center border-b border-purple-500/5 pb-2">
                  <span className="text-slate-500">MODE GAME</span>
                  <span className="text-slate-200 font-semibold">{SITE_CONFIG.server.mode}</span>
                </div>

                <div className="flex justify-between items-center pb-2">
                  <span className="text-slate-500">WHATSAPP OWNER</span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.server.ownerPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-cyan hover:text-brand-glow transition-colors font-semibold"
                  >
                    +{SITE_CONFIG.server.ownerPhone}
                  </a>
                </div>

              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${SITE_CONFIG.server.ownerPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-neon hover:bg-brand-glow text-brand-deep font-sans font-bold text-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4 fill-current" />
                Hubungi WhatsApp Owner
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
