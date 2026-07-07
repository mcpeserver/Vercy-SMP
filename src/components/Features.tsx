import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

export function Features() {
  // Helper to dynamically resolve Lucide Icons
  const getIcon = (name: string) => {
    // Fallback if icon is missing
    const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
    return <IconComponent className="w-6 h-6 text-brand-neon group-hover:text-brand-cyan transition-colors duration-300" />;
  };

  return (
    <section id="fitur" className="py-24 relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-neon/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Unggulan Server
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Fitur Utama <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-glow">Vercy SMP</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Jelajahi berbagai sistem gameplay seru yang dirancang khusus untuk memastikan pengalaman bermain terbaikmu di server kami.
          </p>
        </div>

        {/* Bento Grid layout for Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group bg-brand-royal/30 backdrop-blur-xs border border-purple-500/10 hover:border-brand-neon/30 hover:bg-brand-royal/50 p-6 rounded-2xl text-left transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] relative overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-brand-neon/5 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-brand-cyan/10 transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-purple-500/10">
                {getIcon(feature.icon)}
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-glow transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
