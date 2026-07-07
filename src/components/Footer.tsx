import { SITE_CONFIG } from "../config/site";
import { useDeveloperData } from "../hooks/useDeveloperData";
import { Heart, Globe, Users, ExternalLink } from "lucide-react";

export function Footer() {
  const { data, loading } = useDeveloperData();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-500/10 bg-brand-deep py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Brand visual & copyright */}
        <div className="flex items-center space-x-2.5 mb-4">
          <img
            src={SITE_CONFIG.assets.logo}
            alt="Vercy SMP Logo"
            referrerPolicy="no-referrer"
            className="w-7 h-7 rounded-full object-contain border border-purple-500/20"
          />
          <span className="font-display font-bold text-sm tracking-tight text-white">
            {SITE_CONFIG.name}
          </span>
        </div>

        <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
          © {currentYear} {SITE_CONFIG.name}. Seluruh hak cipta dilindungi. Minecraft adalah merek dagang resmi dari Mojang Synergies AB. Kami tidak terafiliasi secara resmi dengan Mojang maupun Microsoft.
        </p>

        {/* Dynamic Developer Attribution */}
        {data && (
          <p className="text-[10px] md:text-xs font-mono text-purple-300/40 mb-8 flex items-center justify-center gap-1.5 select-none">
            <span>Website crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
            <span>by</span>
            <a
              href={data.website.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors underline decoration-purple-500/30 underline-offset-2 font-semibold"
            >
              {data.name}
            </a>
          </p>
        )}

        {/* Dynamic Developer Utility Buttons - Sourced dynamically from Developer API */}
        {data && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-6 border-t border-purple-500/5 w-full max-w-xl">
            <a
              href={data.website.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-royal/40 border border-purple-500/5 hover:border-brand-neon/30 text-[10px] sm:text-xs text-slate-400 hover:text-white font-mono transition-all duration-200"
            >
              <Globe className="w-3 h-3 text-brand-cyan" />
              Website Developer
            </a>

            <a
              href={data.community.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-royal/40 border border-purple-500/5 hover:border-brand-neon/30 text-[10px] sm:text-xs text-slate-400 hover:text-white font-mono transition-all duration-200"
            >
              <Users className="w-3 h-3 text-brand-neon" />
              Komunitas Developer
            </a>

            <a
              href={data.community.discord} // or website
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-royal/40 border border-purple-500/5 hover:border-brand-neon/30 text-[10px] sm:text-xs text-slate-400 hover:text-white font-mono transition-all duration-200"
            >
              <ExternalLink className="w-3 h-3 text-purple-400" />
              Lihat Website Server Lain
            </a>
          </div>
        )}

      </div>
    </footer>
  );
}
