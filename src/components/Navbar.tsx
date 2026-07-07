import { useState, useEffect } from "react";
import { SITE_CONFIG } from "../config/site";
import { Menu, X, Swords, Compass, Shield, Users, Radio, Mail, Play, AlertCircle } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Beranda", href: "#beranda", icon: Compass },
    { label: "Fitur", href: "#fitur", icon: Swords },
    { label: "Rules", href: "#rules", icon: Shield },
    { label: "Rank", href: "#rank", icon: Radio },
    { label: "Komunitas", href: "#komunitas", icon: Users },
    { label: "Kontak", href: "#kontak", icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 120; // accounting for developer banner and navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-250 ease-in-out ${
        scrolled
          ? "h-16 bg-brand-deep/95 backdrop-blur-lg border-b border-purple-500/20 shadow-[0_10px_30px_rgba(5,2,10,0.8)]"
          : "h-20 bg-brand-deep/40 backdrop-blur-sm border-b border-purple-500/5 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side: Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <div className="relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-neon rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <img
              src={SITE_CONFIG.assets.logo}
              alt="Vercy SMP Logo"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full border border-purple-500/20 relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-tight flex items-center gap-1.5">
              {SITE_CONFIG.name}
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-brand-glow font-medium leading-none">
              Survival Economy
            </span>
          </div>
        </div>

        {/* Center: Main Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 group flex items-center gap-1.5"
              >
                <IconComponent className="w-4 h-4 text-brand-neon opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-center"></span>
              </a>
            );
          })}
        </div>

        {/* Right: Join Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, "#server-info")}
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-display font-semibold text-white rounded-lg bg-linear-to-r from-brand-violet to-brand-electric border border-purple-500/40 hover:from-brand-electric hover:to-brand-neon hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <Play className="w-3.5 h-3.5 mr-1.5 fill-current text-white animate-pulse" />
            Main Sekarang
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-hidden transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 bg-brand-deep/98 border-b border-purple-500/10 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "top-[72px] opacity-100 visible h-auto py-6" : "top-[-400px] opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-brand-royal/40 transition-colors"
              >
                <IconComponent className="w-5 h-5 text-brand-neon" />
                <span className="font-display font-medium text-sm">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
