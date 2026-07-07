import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import { MessageSquare, Disc, Users, ArrowUpRight } from "lucide-react";

export function Community() {
  return (
    <section id="komunitas" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Decorative vertical divider/light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-linear-to-b from-purple-500/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Social Center
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Gabung Komunitas <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-glow">Vercy SMP</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Mari berteman, berdagang hasil tani, berbagi koordinat bangunan, dan diskusikan segala hal seputar server bersama ratusan pemain aktif lainnya!
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-brand-royal/20 border border-emerald-500/10 hover:border-emerald-500/30 p-8 rounded-2xl text-left transition-all duration-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 mb-6 group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">WhatsApp Group</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Tempat santai untuk mengobrol bersama pemain secara real-time langsung dari smartphone-mu. Cari teman main atau jual beli hasil panen di sini!
              </p>
            </div>
            
            <a
              href={SITE_CONFIG.socials.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer"
            >
              <span>Masuk WhatsApp Group</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Discord Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-brand-royal/20 border border-purple-500/10 hover:border-[#5865F2]/30 p-8 rounded-2xl text-left transition-all duration-300 hover:shadow-[0_10px_30px_rgba(88,101,242,0.08)] flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#5865F2]/10 flex items-center justify-center border border-[#5865F2]/20 text-[#5865F2] mb-6 group-hover:scale-105 transition-transform duration-300">
                <Disc className="w-6 h-6 text-[#5865F2]" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">Discord Server</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Dapatkan informasi pengumuman event, update server, komplain kendala pemain ke staff, lelang online, voice chat saat bermain, dan informasi penting lainnya.
              </p>
            </div>

            <a
              href={SITE_CONFIG.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#6c78f5] text-white font-sans font-bold text-sm transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(88,101,242,0.3)] cursor-pointer"
            >
              <span>Masuk Discord Server</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Small count statistics warning note */}
        <p className="mt-12 text-xs font-mono text-purple-300/40 max-w-sm mx-auto">
          *Kami mengedepankan lingkungan komunitas yang bebas toxic, pastikan kamu membaca `#rules` sesaat setelah bergabung!
        </p>

      </div>
    </section>
  );
}
