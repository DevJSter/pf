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
  prizes: string[] | null;
  liveLink: string;
  repoUrl: string;
}

const HACKS: HackathonProject[] = [
  {
    name: "EThIndia 2024",
    projectName: "Fomo Wallet",
    description: "A decentralized Anonymous betting Platform Levereging AI to help users place bets and create FOMO(Fear of Missing out) on certain bets that may be created by some authentic users around twitter.",
    previewImage: "hackathons/fomo-logo.png",
    dashboardImage: "hackathons/fomo-dash.png",
    projectImage: "hackathons/fomo-main.png",
    team: [
      { name: "Swayam", link: "https://x.com/DevSwayam" },
      { name: "Vivek", link: "https://x.com/vwakesahu" },
      { name: "Shubham", link: "https://x.com/shubhamtwtss" }
    ],
    prizes: [
      "🏆 Graph Top 10 Projects",
      "🔐 Excellence in Privacy",
      "⭐ Coinbase Developer Pack Prize Pool Winner"
    ],
    liveLink: "https://fomo-wallet-front-end.vercel.app/",
    repoUrl: "https://github.com/Fomo-Wallet/"
  },
  {
    name: "UNFOLD 2024 by COINDCX",
    projectName: "StealthPass", 
    description: "Cross-chain anon Event Ticketing Platform - Telegram Mini App built upon Avalanche where confidentiality is maintained and verified On-Chain using FHEvm.",
    previewImage: "hackathons/stealth-logo.png",
    dashboardImage: "hackathons/stealth-dash.png", 
    projectImage: "hackathons/pass-main.png",
     team: [
      { name: "Swayam", link: "https://x.com/DevSwayam" },
      { name: "Vivek", link: "https://x.com/vwakesahu" },
      { name: "Shubham", link: "https://x.com/shubhamtwtss" }
    ],
    prizes: ["🌊 Avalanche Etna Track Winner"],
    liveLink: "https://stealth-pass.vercel.app/",
    repoUrl: "https://github.com/Devjster/stealthpass-frontend/"
  },
  {
    name: "Mumbai hacks 2024",
    projectName: "Startup Analyzer",
    description: "This project introduces AI-powered tools to streamline the analysis of business documents and sales data, transforming raw information into actionable insights with minimal manual effort. These tools aim to solve Automate data transformation, Clarify business requirements, Provide visual insights for better decision-making.",
    previewImage: "hackathons/mu-dash.webp",
    dashboardImage: "hackathons/mu-main.png",
    projectImage: "hackathons/mu-logo.png",
    team: [
      { name: "Shubham", link: "https://linkedin.com/in/0xShubhamm" },
      { name: "Vivek", link: "https://linkedin.com/in/vwakesahu" },
      { name: "Roneet", link: "https://linkedin.com/in/roneet-yadav" },
      { name: "Pravin", link: "https://linkedin.com/in/pravin-singh-144ab4283/" }
    ],
    prizes: [
      "🏅 1st Runner Up AI Track",
      "🥈 1st Runner Up Business Track",
      "🥈 1st Runner up Student track"
    ],
    liveLink: "https://devfolio.co/projects/startup-analysis-8cc1",
    repoUrl: "https://github.com/500-Team-Not-Found/startup-analyzer"
  },
  {
    name: "HackSparrow 2024",
    projectName: "Sahayatha - A PWA for Mental Welness",
    description: "Sahayata is a mental wellness app that provides accessible, anonymous support through professional consultations, mood tracking, and community forums. It offers a comprehensive, user-friendly platform for managing mental health and promoting holistic well-being.",
    previewImage: "/hackathons/saha-logo.webp",
    dashboardImage: "/hackathons/saha-dash.png",
    projectImage: "/hackathons/saha-main.webp",
    team: [
      { name: "Shubham", link: "https://linkedin.com/in/0xShubhamm" },
      { name: "Vivek", link: "https://linkedin.com/in/vwakesahu" },
      { name: "Roneet", link: "https://linkedin.com/in/roneet-yadav" },
    ],
    prizes: [
      "🏆 Winner of Health Track",
      "🥈 Winner of Best WebApp and PWA track "
    ],
    liveLink: "https://hacksparrow.vercel.app/",
    repoUrl: "https://github.com/500-Team-Not-Found/hacksparrow"
  },
  {
    name: "Aura Hackfest 2023",
    projectName: "JobHunt",
    description: "We immersed ourselves in the Job Board problem statement, with the aim of revolutionizing the job search and application process. Making UI/UX and integrating AI to provide a seamless experience for job seekers and employers.",
    previewImage: "/hackathons/aura-logo.jpeg",
    dashboardImage: "/hackathons/aura-main.jpeg",
    projectImage: "",
    team: [
      { name: "Shubham", link: "https://linkedin.com/in/0xShubhamm" },
      { name: "Vivek", link: "https://linkedin.com/in/vwakesahu" },
      { name: "Roneet", link: "https://linkedin.com/in/roneet-yadav" },
    ],
    prizes: [],
    liveLink: "https://jobhunt-aura.vercel.app/",
    repoUrl: "https://github.com/SizzlingDev-s/aura_hack"
  },
   {
    name: "Tech Trekk 2023",  
    projectName: "Event Connect",
    description: "One of the basic apps we built at the start of our journey, Event Connect is a platform that connects event organizers with attendees, streamlining the event management process and enhancing the overall experience for both parties.",
    previewImage: "/hackathons/tech-logo.png",
    dashboardImage: "/hackathons/tech-dash.png",
    projectImage: "/hackathons/tech-win.jpg",
    team: [
      { name: "Shubham", link: "https://linkedin.com/in/0xShubhamm" },
      { name: "Vivek", link: "https://linkedin.com/in/vwakesahu" },
      { name: "Roneet", link: "https://linkedin.com/in/roneet-yadav" },
      { name: "Sumeet", link: "https://www.linkedin.com/in/sumeet-parab/" }
    ],
    prizes: [
      "🥈 1st Runner up of Best WebApp and PWA track"
    ],
    liveLink: "https://github.com/DevJSter/college-connect",
    repoUrl: "https://github.com/DevJSter/college-connect"
  },
  //  {
  //   name: "",
  //   projectName: "",
  //   description: "",
  //   previewImage: "",
  //   dashboardImage: "",
  //   projectImage: "",
  //   team: [
  //     { name: "", link: "" },
  //     { name: "", link: "" },
  //     { name: "", link: "" }
  //   ],
  //   prizes: [],
  //   liveLink: "",
  //   repoUrl: ""
  // },
  //  {
  //   name: "",
  //   projectName: "",
  //   description: "",
  //   previewImage: "",
  //   dashboardImage: "",
  //   projectImage: "",
  //   team: [
  //     { name: "", link: "" },
  //     { name: "", link: "" },
  //     { name: "", link: "" }
  //   ],
  //   prizes: [],
  //   liveLink: "",
  //   repoUrl: ""
  // },
  //  {
  //   name: "",
  //   projectName: "",
  //   description: "",
  //   previewImage: "",
  //   dashboardImage: "",
  //   projectImage: "",
  //   team: [
  //     { name: "", link: "" },
  //     { name: "", link: "" },
  //     { name: "", link: "" }
  //   ],
  //   prizes: [],
  //   liveLink: "",
  //   repoUrl: ""
  // },
];

export default HACKS;