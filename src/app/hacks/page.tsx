'use client'
import { useState, useEffect, useRef } from 'react'
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
  onComplete?: () => void
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 0,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const indexRef = useRef(0)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      hasStartedRef.current = true
      const typeText = () => {
        if (indexRef.current <= text.length) {
          setDisplayText(text.slice(0, indexRef.current))
          indexRef.current++
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setIsComplete(true)
          onComplete?.()
        }
      }

      intervalRef.current = setInterval(typeText, 100)
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text, delay, onComplete])

  return <div className="xs:min-h-[24px] min-h-[20px]">{displayText}</div>
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
        <div className="relative w-full overflow-hidden rounded-base border-2 border-border shadow-light dark:border-darkBorder dark:shadow-dark">
          <img
            className="mx-auto w-full rounded-base"
            src={images[slideIndex % images.length]}
            alt={`${hack.name} - ${hack.projectName}`}
            style={{ height: 'auto', maxWidth: '100%' }}
          />
        </div>
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

        {hack.prizes && hack.prizes.length > 0 && (
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
        )}

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
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const introText =
    'My journey into both web2 and web3 has been deeply shaped by hackathons. Just a few months after diving into web3, I started challenging myself with projects that pushed my limits. As a competitive person, I discovered a passion for participating — and winning — in these competitions. Whether its web2 or web3, the thrill of innovating ideas and bringing them to life is something I can not get enough of. It can be an addictive experience XD.'

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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="xs:text-xs flex flex-col justify-center space-y-2 text-center text-[11px] sm:text-sm md:text-base lg:text-lg">
          <h1 className="mb-8 text-2xl font-heading sm:text-4xl">
            My Hackathons
          </h1>
          <TypingText
            text={introText}
            delay={300}
            onComplete={() => setIsTypingComplete(true)}
          />
        </div>

        <div className="mt-12 flex flex-col gap-5">
          {HACKS.map((hack, id) => (
            <HackathonCard
              key={id}
              hack={hack}
              slideIndex={activeSlides[hack.name] || 0}
            />
          ))}
        </div>
      </div>

      <footer className="mt-auto py-8">
        <Links />
      </footer>
    </div>
  )
}
