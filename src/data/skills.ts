import {
  type IconType,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSolidity,
  SiFoundryvirtualtabletop,
  SiEthereum,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'redis',
          icon: SiRedis,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
    {
      field : 'Blockchain',
      skills: [
        {
          skill: 'ethereum',
          icon: SiEthereum,
        },
        {
          skill: 'solidity',
          icon: SiSolidity,
        },
        {
          skill: 'foundryvtt',
          icon: SiFoundryvirtualtabletop,
        },
      ], 
    }
  ]

export default SKILLS
