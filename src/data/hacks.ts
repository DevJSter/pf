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
    name: "BuildQuest 2022",
    projectName: "SuprArms",
    description: "A 3D multiplayer FPS MetaVerse with 8400+ unique gun NFTs having distinguished looks and stats.",
    previewImage: "/assets/hacks/ethglobal/buildquest/buildquestLogo.png",
    dashboardImage: "/assets/hacks/ethglobal/buildquest/buildquest.png",
    projectImage: "/assets/hacks/ethglobal/buildquest/suprarms.png",
    team: [
      { name: "Gabriel", link: "https://www.linkedin.com/in/gabriel-antony/" },
      { name: "Sailesh", link: "https://www.linkedin.com/in/sailesh-sivakumar-453061141/" },
      { name: "Shachindra", link: "https://www.linkedin.com/in/shachindra92/" },
      { name: "Karan", link: "https://www.linkedin.com/in/karanbdev/" }
    ],
    prizes: [
      "🕹 Best 3D Metaverse Game built on Polygon",
      "🥉 Best Dapp using Moralis",
      "🏅 Best Use of Chainlink"
    ],
    liveLink: "https://ethglobal.com/showcase/suprarms-7xz9r",
    repoUrl: "https://github.com/hackproject/suprarms"
  },
  {
    name: "Faber Web3 2022",
    projectName: "Brandapp", 
    description: "Mint your brand, Create your own white-label Brand Resource Center.",
    previewImage: "/assets/hacks/devpost/faberweb3/faberweb3logo.jpg",
    dashboardImage: "/assets/hacks/devpost/faberweb3/faberweb3.png", 
    projectImage: "/assets/hacks/devpost/faberweb3/brandapp.jpg",
    team: [
      { name: "Gabriel", link: "https://www.linkedin.com/in/gabriel-antony/" },
      { name: "Raksha", link: "https://www.linkedin.com/in/raksha001/" },
      { name: "Fabian", link: "https://www.linkedin.com/in/fabianferno/" },
      { name: "Subhiksha", link: "https://www.linkedin.com/in/elizabeth-subhiksha-victoria-b3a661193/" },
      { name: "Veroni", link: "https://www.linkedin.com/in/veroni-shwetha/" },
      { name: "Jesinthan", link: "https://www.linkedin.com/in/jesinthan/" }
    ],
    prizes: ["⚡ Across the Line Award"],
    liveLink: "https://devpost.com/software/brandapp",
    repoUrl: "https://github.com/hackproject/brandapp"
  },
  {
    name: "Chainlink Spring 2022",
    projectName: "AIRNFT",
    description: "An interactive NFT service that aids the creator in bringing interactive NFTs to the market: be it games, 3D models, interactive animations etc.",
    previewImage: "/assets/hacks/devpost/spring/springlogo.png",
    dashboardImage: "/assets/hacks/devpost/spring/spring.png",
    projectImage: "/assets/hacks/devpost/spring/airnft.jpg",
    team: [
      { name: "Gabriel", link: "https://www.linkedin.com/in/gabriel-antony/" },
      { name: "Sailesh", link: "https://www.linkedin.com/in/sailesh-sivakumar-453061141/" },
      { name: "Shachindra", link: "https://www.linkedin.com/in/shachindra92/" },
      { name: "Karan", link: "https://www.linkedin.com/in/karanbdev/" },
      { name: "Ishan", link: "https://www.linkedin.com/in/ishan-pathak-96852a1b7/" }
    ],
    prizes: ["🏃 Filecoin - Runners up"],
    liveLink: "https://devpost.com/software/ins",
    repoUrl: "https://github.com/hackproject/airnft"
  },
  {
    name: "HackMoney 2022",
    projectName: "DAOLanders",
    description: "A DAO that helps people to come together buy NFTs stake it, play with it and much more to generate income.",
    previewImage: "/assets/hacks/ethglobal/hackmoney/hackmoneyLogo.jpg",
    dashboardImage: "/assets/hacks/ethglobal/hackmoney/hackmoney.png",
    projectImage: "/assets/hacks/ethglobal/hackmoney/daolanders.png",
    team: [
      { name: "Gabriel", link: "https://www.linkedin.com/in/gabriel-antony/" },
      { name: "Fabian", link: "https://www.linkedin.com/in/fabianferno/" }
    ],
    prizes: ["🏊‍♂️ Waku — Pool Prize"],
    liveLink: "https://ethglobal.com/showcase/daolanders-5f4za",
    repoUrl: "https://github.com/hackproject/daolanders"
  },
  {
    name: "ETHIndia 2022",
    projectName: "Poly.edu",
    description: "Proof of Education, Own what you learn.",
    previewImage: "/assets/hacks/ethglobal/ethindia/ethindiaLogo.png",
    dashboardImage: "/assets/hacks/ethglobal/ethindia/ethindia.png",
    projectImage: "/assets/hacks/ethglobal/ethindia/polyedu.png",
    team: [
      { name: "Gabriel", link: "https://www.linkedin.com/in/gabriel-antony/" }
    ],
    prizes: [
      "🏊 Valist — Prize Pool",
      "🏊 The Graph — Pool Prize",
      "🥇 Router — Best Use"
    ],
    liveLink: "https://ethglobal.com/showcase/poly-edu-t2h8m",
    repoUrl: "https://github.com/hackproject/polyedu"
  }
];

export default HACKS;