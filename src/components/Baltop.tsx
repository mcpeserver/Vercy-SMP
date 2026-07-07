import { SITE_CONFIG } from "../config/site";
import { motion } from "motion/react";
import * as Icons from "lucide-react";

export function Baltop() {
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
    return <IconComponent className="w-5 h-5" />;
  };

  // Assign custom colors matching each crop to elevate craftsmanship
  const getCropColors = (name: string) => {
    switch (name.toLowerCase()) {
      case "wheat":
        return {
          bg: "from-amber-600/10 to-amber-900/5",
          border: "group-hover:border-amber-500/40",
          iconBg: "bg-amber-500/10 text-amber-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]",
        };
      case "potato":
        return {
          bg: "from-yellow-600/10 to-yellow-900/5",
          border: "group-hover:border-yellow-500/40",
          iconBg: "bg-yellow-500/10 text-yellow-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(234,179,8,0.15)]",
        };
      case "sugarcane":
        return {
          bg: "from-emerald-600/10 to-emerald-900/5",
          border: "group-hover:border-emerald-500/40",
          iconBg: "bg-emerald-500/10 text-emerald-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]",
        };
      case "beetroot":
        return {
          bg: "from-red-600/10 to-red-900/5",
          border: "group-hover:border-red-500/40",
          iconBg: "bg-red-500/10 text-red-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(239,68,68,0.15)]",
        };
      case "wortel":
        return {
          bg: "from-orange-600/10 to-orange-900/5",
          border: "group-hover:border-orange-500/40",
          iconBg: "bg-orange-500/10 text-orange-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]",
        };
      case "potato busuk":
        return {
          bg: "from-zinc-800/20 to-zinc-950/20",
          border: "group-hover:border-zinc-500/40",
          iconBg: "bg-zinc-800/30 text-zinc-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(113,113,122,0.1)]",
        };
      default:
        return {
          bg: "from-purple-600/10 to-purple-900/5",
          border: "group-hover:border-purple-500/40",
          iconBg: "bg-purple-500/10 text-purple-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]",
        };
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image Parallax with Purple Glow Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.assets.bg}
          alt="Fantasy Forest Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-20 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-deep/95 to-brand-deep"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
            Ekonomi Server
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            Bursa Hasil Tani & <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-neon to-brand-glow">Baltop</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-sm md:text-base font-light">
            Maksimalkan pendapatanmu dengan bercocok tanam! Jual hasil panen pertanianmu ke Shop resmi untuk bersaing di peringkat atas terkaya (Baltop).
          </p>
        </div>

        {/* Crops Price Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {SITE_CONFIG.baltop.map((crop, idx) => {
            const colors = getCropColors(crop.name);
            return (
              <motion.div
                key={crop.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group bg-gradient-to-br ${colors.bg} backdrop-blur-xs border border-purple-500/10 p-5 rounded-2xl flex flex-col items-center justify-between transition-all duration-300 ${colors.border} ${colors.glow}`}
              >
                {/* Crop Icon */}
                <div className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center mb-4 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(crop.icon)}
                </div>

                {/* Crop Meta */}
                <div className="mb-4">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-brand-glow transition-colors">
                    {crop.name}
                  </h3>
                  <span className="text-[10px] font-mono text-purple-300/40 uppercase tracking-widest">
                    Commodity
                  </span>
                </div>

                {/* Price Display */}
                <div className="w-full bg-brand-deep/60 rounded-xl p-3 border border-purple-500/5 text-center">
                  <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                    Harga Jual Toko
                  </div>
                  <div className="font-mono text-lg font-bold text-brand-cyan tracking-tight">
                    ${crop.price} <span className="text-xs text-slate-400 font-normal">/ {crop.unit}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small economy tip */}
        <p className="mt-8 text-xs font-mono text-purple-300/50 max-w-md mx-auto">
          *Harga jual bersifat tetap dan diproses otomatis di `/shop` atau `/sellall`. Pastikan ketersediaan inventory-mu kosong sebelum menjual dalam jumlah besar!
        </p>

      </div>
    </section>
  );
}
