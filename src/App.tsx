import { DeveloperBanner } from "./components/DeveloperBanner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Baltop } from "./components/Baltop";
import { RankMedia } from "./components/RankMedia";
import { Rules } from "./components/Rules";
import { ServerInfo } from "./components/ServerInfo";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div id="app-container" className="min-h-screen bg-brand-deep flex flex-col relative text-slate-200">
      {/* Absolute top Developer Banner */}
      <DeveloperBanner />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main content body */}
      <main className="flex-grow w-full">
        {/* Cinematic Hero Header Section */}
        <HeroSection />

        {/* Features Bento List Section */}
        <Features />

        {/* Benefits Comparison Grid Section */}
        <Benefits />

        {/* Crop Economy (Baltop) Price Cards */}
        <Baltop />

        {/* Content Creator & Streamer Rank Media Requirements */}
        <RankMedia />

        {/* Community Rules Section with Card-Ungu-Gelap styling */}
        <Rules />

        {/* Server Technical Specifications Information Details */}
        <ServerInfo />

        {/* Interactive Social Media Connection Cards */}
        <Community />
      </main>

      {/* Global Minimalist Footer with Developer Utilities */}
      <Footer />
    </div>
  );
}
