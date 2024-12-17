'use client'
import { useState, useEffect, useCallback } from 'react'
import HACKS from '@/data/hacks'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Links from '@/components/links'

interface TeamMember {
  name: string
  link: string
}

interface Hack {
  name: string
  projectName: string
  description: string
  team: TeamMember[]
  prizes: string[]
  previewImage?: string
  dashboardImage?: string
  projectImage?: string
  liveLink?: string
  repoUrl?: string
}

interface TypingTextProps {
  text: string
  delay?: number
  typingSpeed?: number
  onComplete?: () => void
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 100,
  typingSpeed = 100,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [started, setStarted] = useState(false)

  const handleComplete = useCallback(() => {
    setIsComplete(true)
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started || isComplete) return

    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
        handleComplete()
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [text, started, handleComplete, isComplete, typingSpeed])

  return (
    <div className="xs:min-h-[24px] min-h-[20px]">
      {isComplete ? text : displayText}
    </div>
  )
}

const HackathonCard: React.FC<{ hack: Hack; slideIndex: number }> = ({
  hack,
  slideIndex,
}) => {
  const images = [
    hack.previewImage,
    hack.dashboardImage,
    hack.projectImage,
  ].filter(Boolean)

  return (
    <div className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5">
      {images.length > 0 && (
        <AspectRatio
          className="!-bottom-[2px] rounded-base border-2 border-border shadow-light dark:border-darkBorder dark:shadow-dark"
          ratio={71 / 26}
        >
          <img
            className="w-full rounded-base"
            src={images[slideIndex % images.length]}
            alt={`${hack.name} - ${hack.projectName}`}
          />
        </AspectRatio>
      )}

      <div className="mt-5 font-base text-text">
        <h2 className="text-xl font-heading sm:text-2xl">
          {hack.name} - {hack.projectName}
        </h2>

        <p className="mt-2">{hack.description}</p>

        <div className="mt-4">
          <h3 className="font-medium">Team</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {hack.team.map((member) => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-base border border-border px-2 py-1 text-sm shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark"
              >
                {member.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-medium">Prizes</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {hack.prizes.map((prize) => (
              <span
                key={prize}
                className="rounded-base border border-border px-2 py-1 text-sm shadow-light dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark"
              >
                {prize}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5">
          {hack.liveLink && (
            <a
              className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
              href={hack.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
          {hack.repoUrl && (
            <a
              className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
              href={hack.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hacks() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({})
  const [show, setShow] = useState(true) // Changed to true to show typing text initially

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = HACKS.map((hack) =>
      setInterval(() => {
        setActiveSlides((prev) => ({
          ...prev,
          [hack.name]: ((prev[hack.name] || 0) + 1) % 3,
        }))
      }, 4000),
    )

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">My Hackathons</h1>

      {show && (
        <TypingText
          text="My journey into both web2 and web3 has been deeply shaped by hackathons. Just a few months after diving into web3, I started challenging myself with projects that pushed my limits. As a competitive person, I discovered a passion for participating — and winning — in these competitions. Whether its web2 or web3, the thrill of innovating ideas and bringing them to life is something I can not get enough of. It can be an addictive experience XD."
          delay={0}
          onComplete={() => setShow(false)}
        />
      )}

      <div className="flex flex-col gap-5">
        {HACKS.map((hack, id) => (
          <HackathonCard
            key={id}
            hack={hack}
            slideIndex={activeSlides[hack.name] || 0}
          />
        ))}
        <Links />
      </div>
    </div>
  )
}
