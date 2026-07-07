import { useDeveloperData } from "../hooks/useDeveloperData";
import { ExternalLink, MessageCircle, Phone, Globe, Users, Disc } from "lucide-react";

export function DeveloperBanner() {
  const { data, loading } = useDeveloperData();

  if (loading || !data) {
    return (
      <div id="dev-banner" className="h-9 w-full bg-brand-deep/80 backdrop-blur-md border-b border-white/5 flex items-center justify-center">
        <div className="text-[10px] sm:text-xs font-mono text-purple-300/40 animate-pulse">
          Mengambil data sistem developer...
        </div>
      </div>
    );
  }

  return (
    <div
      id="dev-banner"
      className="h-9 w-full bg-brand-deep/70 backdrop-blur-md border-b border-purple-500/10 flex items-center overflow-x-auto scrollbar-none select-none relative z-50 px-4"
    >
      <div className="flex items-center space-x-3 whitespace-nowrap mx-auto text-[10px] md:text-xs font-mono tracking-wider text-slate-300">
        <span className="flex items-center text-purple-300/90 gap-1 font-semibold">
          <Globe className="w-3.5 h-3.5 text-brand-neon" />
          Developed by <span className="text-white hover:text-brand-glow transition-colors duration-200">{data.name}</span>
        </span>
        
        <span className="text-purple-500/40">•</span>

        <a
          href={data.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-purple-500/10 bg-purple-500/5 hover:border-brand-neon/40 hover:bg-brand-royal/40 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)] text-purple-200 transition-all duration-200"
        >
          <Phone className="w-2.5 h-2.5 text-emerald-400" />
          <span>WhatsApp Developer</span>
        </a>

        <span className="text-purple-500/40">•</span>

        <a
          href={data.website.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-purple-500/10 bg-purple-500/5 hover:border-brand-neon/40 hover:bg-brand-royal/40 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)] text-purple-200 transition-all duration-200"
        >
          <ExternalLink className="w-2.5 h-2.5 text-brand-cyan" />
          <span>Portfolio</span>
        </a>

        <span className="text-purple-500/40">•</span>

        <a
          href={data.community.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-purple-500/10 bg-purple-500/5 hover:border-brand-neon/40 hover:bg-brand-royal/40 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)] text-purple-200 transition-all duration-200"
        >
          <Globe className="w-2.5 h-2.5 text-purple-400" />
          <span>Lihat Website Server Lain</span>
        </a>

        <span className="text-purple-500/40">•</span>

        <span className="flex items-center gap-1 text-slate-300">
          <Users className="w-2.5 h-2.5 text-brand-neon" />
          <span>{data.community.name}</span>
        </span>

        <span className="text-purple-500/40">•</span>

        <a
          href={data.community.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-purple-500/10 bg-purple-500/5 hover:border-brand-neon/40 hover:bg-brand-royal/40 hover:shadow-[0_0_8px_rgba(168,85,247,0.3)] text-purple-200 transition-all duration-200"
        >
          <Disc className="w-2.5 h-2.5 text-[#5865F2]" />
          <span>Discord Komunitas</span>
        </a>
      </div>
    </div>
  );
}
