// data/hacks.ts

export interface TeamMember {
  name: string;
  link: string;
}

export interface HackathonProject {
  name: string;
  projectName: string;
  description: string;
  previewImage: string;
  dashboardImage: string;
  projectImage: string;
  team: TeamMember[];
  prizes: string[];
  liveLink: string;
  repoUrl: string;
}

const HACKS: HackathonProject[] = [
  {
    name: "Web3 Hackathon 2024",
    projectName: "CryptoVault",
    description: "A decentralized vault system for managing digital assets with multi-signature support and advanced security features.",
    previewImage: "/images/hackathons/vault-logo.jpg",
    dashboardImage: "/images/hackathons/vault-dash.jpg",
    projectImage: "/images/hackathons/vault-main.jpg",
    team: [
      { name: "Alex", link: "https://linkedin.com/in/alex" },
      { name: "Jamie", link: "https://linkedin.com/in/jamie" },
      { name: "Taylor", link: "https://linkedin.com/in/taylor" }
    ],
    prizes: [
      "🏆 Best Security Implementation",
      "🔐 Excellence in Privacy",
      "⭐ Community Choice Award"
    ],
    liveLink: "https://example.com/cryptovault",
    repoUrl: "https://github.com/example/cryptovault"
  },
  {
    name: "DeFi Summit 2024",
    projectName: "LiquidBridge", 
    description: "Cross-chain liquidity aggregation platform with automated market making and yield optimization strategies.",
    previewImage: "/images/hackathons/bridge-logo.jpg",
    dashboardImage: "/images/hackathons/bridge-dash.jpg", 
    projectImage: "/images/hackathons/bridge-main.jpg",
    team: [
      { name: "Morgan", link: "https://linkedin.com/in/morgan" },
      { name: "Casey", link: "https://linkedin.com/in/casey" },
      { name: "Jordan", link: "https://linkedin.com/in/jordan" }
    ],
    prizes: ["🌊 Best DeFi Innovation"],
    liveLink: "https://example.com/liquidbridge",
    repoUrl: "https://github.com/example/liquidbridge"
  },
  {
    name: "NFT Hack 2024",
    projectName: "MetaCanvas",
    description: "Collaborative NFT creation platform with real-time editing and royalty splitting for multiple artists.",
    previewImage: "/images/hackathons/canvas-logo.jpg",
    dashboardImage: "/images/hackathons/canvas-dash.jpg",
    projectImage: "/images/hackathons/canvas-main.jpg",
    team: [
      { name: "Riley", link: "https://linkedin.com/in/riley" },
      { name: "Avery", link: "https://linkedin.com/in/avery" },
      { name: "Drew", link: "https://linkedin.com/in/drew" }
    ],
    prizes: ["🎨 Best Creative Platform"],
    liveLink: "https://example.com/metacanvas",
    repoUrl: "https://github.com/example/metacanvas"
  },
  {
    name: "GameFi Hackathon 2024",
    projectName: "CryptoQuest",
    description: "Play-to-earn RPG with NFT character progression and cross-game asset compatibility.",
    previewImage: "/images/hackathons/quest-logo.jpg",
    dashboardImage: "/images/hackathons/quest-dash.jpg",
    projectImage: "/images/hackathons/quest-main.jpg",
    team: [
      { name: "Sam", link: "https://linkedin.com/in/sam" },
      { name: "Pat", link: "https://linkedin.com/in/pat" }
    ],
    prizes: ["🎮 Best Gaming Experience"],
    liveLink: "https://example.com/cryptoquest",
    repoUrl: "https://github.com/example/cryptoquest"
  },
  {
    name: "Chain Builders 2024",
    projectName: "DataDAO",
    description: "Decentralized data marketplace with automated quality verification and fair pricing mechanisms.",
    previewImage: "/images/hackathons/dao-logo.jpg",
    dashboardImage: "/images/hackathons/dao-dash.jpg",
    projectImage: "/images/hackathons/dao-main.jpg",
    team: [
      { name: "Quinn", link: "https://linkedin.com/in/quinn" }
    ],
    prizes: [
      "📊 Best Data Solution",
      "🤝 Best DAO Implementation",
      "💫 Technical Excellence"
    ],
    liveLink: "https://example.com/datadao",
    repoUrl: "https://github.com/example/datadao"
  }
];

export default HACKS;