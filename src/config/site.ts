import logoImg from "../assets/images/vercy_logo.jpg";
import heroImg from "../assets/images/vercy_hero.jpg";
import bgImg from "../assets/images/vercy_bg.jpg";

export const SITE_CONFIG = {
  name: "Vercy SMP",
  tagline: "Survival Economy Server",
  description: "Server Survival Economy yang mendukung Java dan Bedrock dengan berbagai fitur untuk pengalaman bermain yang lebih seru.",
  
  // Server Connection Info
  server: {
    javaIp: "play.vercysmp.my.id",
    bedrockIp: "pe.vercysmp.my.id",
    bedrockPort: 19132,
    version: "1.20 - 1.21.x",
    mode: "Survival Economy",
    ownerPhone: "62895613915570", // realistic owner contact from data if any, or placeholder matching the spec
  },

  // Assets
  assets: {
    logo: logoImg,
    hero: heroImg,
    bg: bgImg,
  },

  // Features
  features: [
    {
      title: "Survival Economy",
      description: "Rasakan serunya bertahan hidup dengan sistem ekonomi terintegrasi. Jual hasil panen, kumpulkan uang, dan jadilah yang terkaya di server.",
      icon: "Coins",
    },
    {
      title: "Land Claim",
      description: "Lindungi bangunan dan barang berharga milikmu dari griefing pemain lain dengan sistem proteksi wilayah yang mudah digunakan.",
      icon: "Shield",
    },
    {
      title: "Player Warp",
      description: "Buat teleportasi publik ke toko, base, atau arena milikmu agar pemain lain bisa berkunjung dengan mudah.",
      icon: "MapPin",
    },
    {
      title: "Random Teleport",
      description: "Teleportasi secara acak ke dunia luar untuk memulai petualangan bertahan hidup atau mencari resource baru.",
      icon: "Compass",
    },
    {
      title: "Crates",
      description: "Buka peti keberuntungan menggunakan kunci khusus untuk mendapatkan berbagai item langka dan eksklusif.",
      icon: "Gift",
    },
    {
      title: "Vote Reward",
      description: "Bantu server berkembang dengan melakukan voting setiap hari dan dapatkan hadiah menarik langsung di dalam game.",
      icon: "Vote",
    },
    {
      title: "Auction House",
      description: "Pasarkan barang daganganmu ke seluruh pemain secara offline maupun online melalui pasar lelang global.",
      icon: "ShoppingBag",
    },
    {
      title: "Shop",
      description: "Beli kebutuhan material pembangunan atau jual hasil buminu ke toko resmi server dengan harga bersaing.",
      icon: "Store",
    },
    {
      title: "Events",
      description: "Ikuti berbagai event seru mingguan yang diselenggarakan oleh staff server dengan hadiah yang melimpah.",
      icon: "Calendar",
    },
    {
      title: "Rank",
      description: "Dapatkan rank premium dengan keuntungan eksklusif untuk membantumu berpetualang lebih maksimal.",
      icon: "Crown",
    },
    {
      title: "Java & Bedrock",
      description: "Mainkan bersama teman-temanmu tanpa batasan platform. Pemain Java Edition dan Bedrock Edition bisa bermain dalam satu dunia.",
      icon: "Laptop",
    },
  ],

  // Benefits
  benefits: [
    {
      title: "Anti Grief",
      description: "Sistem pengamanan wilayah yang sangat ketat menjamin keamanan seluruh aset dan karya seni bangunan milikmu.",
      icon: "ShieldAlert",
    },
    {
      title: "Lag Minim",
      description: "Server dioptimalkan dengan hardware terbaik untuk memberikan latency terendah dan TPS yang stabil 20.0.",
      icon: "Zap",
    },
    {
      title: "Admin Aktif",
      description: "Tim moderator dan admin yang ramah selalu siap membantumu kapan saja jika mengalami kendala teknis.",
      icon: "UserCheck",
    },
    {
      title: "Komunitas Ramah",
      description: "Bergabunglah dengan ratusan pemain aktif lainnya yang siap menyambutmu dengan penuh kehangatan dan kebersamaan.",
      icon: "Users",
    },
    {
      title: "Update Rutin",
      description: "Kami selalu mendengarkan masukan pemain dan menghadirkan pembaruan berkala demi kenyamanan bermain.",
      icon: "RefreshCw",
    },
  ],

  // Baltop (Tanaman Prices)
  baltop: [
    { name: "Wheat", price: 15, unit: "per item", icon: "Wheat" },
    { name: "Potato", price: 18, unit: "per item", icon: "FlameKindling" },
    { name: "Sugarcane", price: 12, unit: "per item", icon: "Candy" },
    { name: "Beetroot", price: 20, unit: "per item", icon: "Apple" },
    { name: "Wortel", price: 18, unit: "per item", icon: "ChevronRight" }, // customized icon or custom display
    { name: "Potato Busuk", price: 2, unit: "per item", icon: "Skull" },
  ],

  // Rank Media Requirements
  rankMedia: {
    description: "Rank Media dapat diperoleh melalui live streaming dengan memenuhi syarat berikut:",
    requirements: [
      { platform: "YouTube", target: "10.000 views", description: "Mendapatkan minimal 10.000 total penayangan untuk konten video / live stream Vercy SMP.", icon: "Youtube" },
      { platform: "TikTok", target: "7.000 views", description: "Mendapatkan minimal 7.000 total penayangan untuk video pendek bertema Vercy SMP.", icon: "Music" }
    ]
  },

  // Server Rules
  rules: [
    { title: "No Spam", description: "Dilarang keras mengirimkan pesan berulang-ulang, karakter acak, atau spam chat di dalam server maupun grup.", icon: "MessageSquareOff" },
    { title: "No Toxic", description: "Menjaga sopan santun. Hindari perkataan kasar, menghina, rasisme, atau memicu perkelahian antar pemain.", icon: "ShieldAlert" },
    { title: "No Sticker", description: "Dilarang spam stiker di media komunitas resmi yang dapat mengganggu kenyamanan anggota lainnya.", icon: "Smile" },
    { title: "No 18+", description: "Konten berbau pornografi, NSFW, teks tidak pantas, atau pembahasan dewasa sangat dilarang keras.", icon: "EyeOff" },
    { title: "No Promosi", description: "Dilarang mempromosikan IP server Minecraft lain, link eksternal yang mencurigakan, atau bisnis pribadi.", icon: "Megaphone" },
    { title: "No Jomok", description: "Hindari lelucon sensitif, berlebihan, atau tidak pantas yang melanggar kenyamanan berkomunikasi di komunitas.", icon: "Ban" },
  ],

  // Social Links
  socials: {
    whatsappGroup: "https://chat.whatsapp.com/LhB6M72Tq6H9LpKXnU9vPq",
    discord: "https://discord.gg/vercysmp",
  },
};
