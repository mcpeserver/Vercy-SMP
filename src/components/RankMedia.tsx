import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import { Youtube, Music, Sparkles, AlertCircle, Play } from "lucide-react";

export function RankMedia() {
  return (
    <section id="rank" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-neon font-semibold bg-brand-neon/10 px-3 py-1 rounded-full border border-brand-neon/20">
            Kreator Konten
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Rank Media <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-glow">Vercy SMP</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Apakah kamu seorang Streamer atau Content Creator Minecraft? Dapatkan pangkat khusus Media di server kami dan raih popularitas bersama!
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-3xl mx-auto">
          {/* Simple Explanation */}
          <div className="bg-brand-royal/20 border border-purple-500/10 p-6 rounded-2xl mb-8 text-slate-300 text-sm md:text-base font-light leading-relaxed">
            <p className="flex items-center justify-center gap-2 mb-1 text-white font-semibold">
              <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
              Dapatkan Keuntungan Eksklusif
            </p>
            Rank Media dapat diperoleh secara gratis dengan melakukan publikasi konten atau live streaming bertema Vercy SMP dan mengumpulkan target views berikut:
          </div>

          {/* Cards for YouTube and TikTok requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* YouTube Requirement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-gradient-to-br from-red-950/10 to-red-900/5 backdrop-blur-xs border border-red-500/10 hover:border-red-500/40 p-6 rounded-2xl text-left transition-all duration-300 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-red-500/5 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500 group-hover:scale-105 transition-transform">
                  <Youtube className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">YouTube Creator</h3>
                  <span className="text-[10px] font-mono text-red-400/80 uppercase tracking-wider">Platform Video & Stream</span>
                </div>
              </div>

              <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 text-center my-4">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Syarat Minimal</div>
                <div className="text-2xl font-mono font-bold text-red-400 tracking-tight">10.000 Views</div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Mendapatkan minimal 10.000 total penayangan untuk konten video / live stream bertema Vercy SMP di channel milikmu.
              </p>
            </motion.div>

            {/* TikTok Requirement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-gradient-to-br from-zinc-900 to-slate-950 border border-brand-cyan/10 hover:border-brand-cyan/40 p-6 rounded-2xl text-left transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-brand-cyan/5 to-transparent rounded-bl-3xl"></div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 text-brand-cyan group-hover:scale-105 transition-transform">
                  <Music className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">TikTok Creator</h3>
                  <span className="text-[10px] font-mono text-brand-cyan/80 uppercase tracking-wider">Platform Short Video</span>
                </div>
              </div>

              <div className="bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl p-4 text-center my-4">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-0.5">Syarat Minimal</div>
                <div className="text-2xl font-mono font-bold text-brand-cyan tracking-tight">7.000 Views</div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Mendapatkan minimal 7.000 total penayangan untuk video pendek kreatif bertema Vercy SMP di akun TikTok pribadimu.
              </p>
            </motion.div>

          </div>

          {/* Submission CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-brand-royal/40 border border-purple-500/10 text-left gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-brand-neon shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Sudah memenuhi syarat di atas?</h4>
                <p className="text-xs text-slate-400 font-light">Hubungi owner atau staff untuk mengklaim Rank Media eksklusif milikmu.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${SITE_CONFIG.server.ownerPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-neon hover:bg-brand-glow text-brand-deep font-sans font-bold text-xs transition-colors shrink-0"
            >
              Hubungi Owner
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
