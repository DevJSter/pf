import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
  SiTelegram,
  SiX,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import { FC } from 'react'

interface LinkItem {
  icon: IconType
  href: string
}

const Links: FC = () => {
  const links: LinkItem[] = [
    {
      icon: SiX,
      href: 'https://x.com/shubhamtwtss',
    },
    {
      icon : SiTelegram,
      href : 'https://t.me/DevShubhamm'
    },
    {
      icon: SiGmail,
      href: 'mailto:shubht3303@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/DevJSter',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@0xShubham',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-col items-center gap-10">
      <div className="flex flex-wrap items-center gap-10">
        {links.map((link: LinkItem, id: number) => {
          return (
            <a
              target="_blank"
              key={id}
              href={link.href}
              rel="noopener noreferrer"
            >
              <link.icon title="" />
            </a>
          )
        })}
      </div>
      <p className="text-sm text-gray-500">
        © 2025 Shubham. All rights reserved.
      </p>
    </div>
  )
}

export default Links
