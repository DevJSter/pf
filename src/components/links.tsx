import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiX,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:shubht3303@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/DevJSter',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/0xShubhamm/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@0xShubham',
    },
    {
      icon: SiX,
      href: 'https://twitter.com/shubhamtwtss',
    }
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
