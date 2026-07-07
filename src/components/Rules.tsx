import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

export function Rules() {
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
    return <IconComponent className="w-4 h-4 text-brand-neon" />;
  };

  return (
    <section id="rules" className="py-24 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-semibold bg-red-400/10 px-3 py-1 rounded-full border border-red-400/20">
            Regulasi Komunitas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Peraturan Resmi <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-brand-neon">Vercy SMP</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Demi kenyamanan bersama, seluruh pemain wajib mematuhi aturan berikut. Pelanggaran berat dapat berakibat pemblokiran akun secara permanen.
          </p>
        </div>

        {/* Rules Grid - Card Ungu Gelap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SITE_CONFIG.rules.map((rule, idx) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-brand-royal/40 hover:bg-brand-royal/60 border border-purple-500/10 hover:border-red-500/30 p-6 rounded-2xl text-left transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-purple-500/10 to-transparent group-hover:via-red-500/40 transition-all duration-300"></div>

              {/* Icon & Title Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/5 group-hover:bg-red-500/10 flex items-center justify-center border border-purple-500/10 group-hover:border-red-500/20 transition-all">
                  {getIcon(rule.icon)}
                </div>
                <h3 className="font-display font-bold text-base text-white group-hover:text-red-400 transition-colors">
                  {rule.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Small warning */}
        <p className="mt-10 text-xs font-mono text-red-400/60 max-w-lg mx-auto bg-red-950/10 border border-red-500/10 px-4 py-3 rounded-xl">
          *Pemain yang melanggar akan dikenakan sanksi berupa Mute, Kick, Tempban, hingga IP Ban bergantung pada keputusan moderator server.
        </p>

      </div>
    </section>
  );
}
