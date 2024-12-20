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
    name: "EThIndia 2024",
    projectName: "Fomo Wallet",
    description: "A decentralized Anonymous betting Platform Levereging AI to help users place bets and create FOMO(Fear of Missing out) on certain bets that may be created by some authentic users around twitter.",
    previewImage: "fomo-logo.png",
    dashboardImage: "fomo-dash.png",
    projectImage: "fomo-main.png",
    team: [
      { name: "Swayam", link: "https://x.com/DevSwayam" },
      { name: "Vivek", link: "https://x.com/vwakesahu" },
      { name: "Shubham", link: "https://x.com/shubhamtwtss" }
    ],
    prizes: [
      "🏆 Graph Top 10 Projects",
      "🔐 Excellence in Privacy",
      "⭐ CDP Prize Pool Winner"
    ],
    liveLink: "https://fomo-wallet-front-end.vercel.app/",
    repoUrl: "https://github.com/Fomo-Wallet/"
  },
  {
    name: "UNFOLD 2024 by COINDCX",
    projectName: "StealthPass", 
    description: "Cross-chain anon Event Ticketing Platform - Telegram Mini App built upon Avalanche where confidentiality is maintained and verified On-Chain using FHEvm.",
    previewImage: "stealth-logo.png",
    dashboardImage: "stealth-dash.png", 
    projectImage: "pass-main.png",
     team: [
      { name: "Swayam", link: "https://x.com/DevSwayam" },
      { name: "Vivek", link: "https://x.com/vwakesahu" },
      { name: "Shubham", link: "https://x.com/shubhamtwtss" }
    ],
    prizes: ["🌊 Avalanche Etna Track Winner"],
    liveLink: "https://stealth-pass.vercel.app/",
    repoUrl: "https://github.com/Devjster/stealthpass-frontend/"
  },
];

export default HACKS;