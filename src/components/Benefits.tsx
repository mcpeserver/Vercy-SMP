import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

export function Benefits() {
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
    return <IconComponent className="w-5 h-5 text-brand-cyan" />;
  };

  return (
    <section className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Decorative vertical lines and background glow */}
      <div className="absolute inset-y-0 left-0 right-0 opacity-10 pointer-events-none flex justify-between px-12 sm:px-24">
        <div className="w-[1px] h-full bg-linear-to-b from-brand-neon via-transparent to-brand-cyan"></div>
        <div className="w-[1px] h-full bg-linear-to-b from-brand-cyan via-transparent to-brand-neon"></div>
      </div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Intro */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-neon font-semibold bg-brand-neon/10 px-3 py-1 rounded-full border border-brand-neon/20">
              Kualitas Unggul
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight leading-tight">
              Kenapa Harus Bermain di <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-cyan via-brand-neon to-brand-glow">Vercy SMP</span>?
            </h2>
            <p className="text-slate-400 mt-6 text-sm md:text-base font-light leading-relaxed">
              Kami berkomitmen penuh untuk menghadirkan lingkungan bermain Minecraft Survival yang adil, stabil, bersahabat, dan aman dari segala bentuk kecurangan maupun gangguan teknis.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-brand-royal/50 border border-purple-500/10 px-3 py-1.5 rounded-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>TPS Stabil 20.0</span>
              </div>
              <div className="flex items-center gap-1.5 bg-brand-royal/50 border border-purple-500/10 px-3 py-1.5 rounded-lg">
                <span>Anti Grief 100%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Stack / Cards */}
          <div className="lg:col-span-7 space-y-4">
            {SITE_CONFIG.benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-linear-to-r from-brand-royal/40 to-transparent border-l-2 border-purple-500/10 hover:border-brand-neon bg-brand-royal/10 p-5 rounded-r-xl transition-all duration-300 hover:bg-brand-royal/30"
              >
                {/* Icon Container with border-glow accent */}
                <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(benefit.icon)}
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-brand-glow transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-1">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
