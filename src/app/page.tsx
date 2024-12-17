'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Links from '@/components/links'
import memeImage from './assets/itachi.gif'

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
        setIsComplete(true)
        onComplete?.()
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [text, started, onComplete, isComplete, typingSpeed])

  return (
    <div className="xs:min-h-[24px] min-h-[20px]">
      {isComplete ? text : displayText}
    </div>
  )
}

export default function Home() {
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)

  const textSequence = [
    { text: 'Hello Stranger', delay: 0 },
    { text: 'Nice to Meet you', delay: 500 },
    { text: 'My Name is Shubham', delay: 500 },
    { text: 'Welcome to my', delay: 500 },
    { text: 'realm', delay: 300 },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-bg font-base">
      {/* Main content area */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mt-8 text-base sm:text-lg">
            {/* Image Container */}
            <div className="xs:h-[250px] xs:w-[320px] relative mx-auto mb-8 h-[200px] w-[280px] sm:h-[350px] sm:w-[400px] md:h-[450px] md:w-[450px]">
              <Image
                src={memeImage}
                alt="itachi-gif"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Text Animation Container */}
            <div className="xs:text-xs flex flex-col justify-center space-y-4 text-center text-[11px] sm:text-sm md:text-base lg:text-lg">
              <TypingText
                text={textSequence[0].text}
                typingSpeed={100}
                onComplete={() => setShowSecond(true)}
              />
              {showSecond && (
                <TypingText
                  text={textSequence[1].text}
                  delay={textSequence[1].delay}
                  typingSpeed={100}
                  onComplete={() => setShowThird(true)}
                />
              )}
              {showThird && (
                <TypingText
                  text={textSequence[2].text}
                  delay={textSequence[2].delay}
                  typingSpeed={100}
                  onComplete={() => setShowFourth(true)}
                />
              )}
              {showFourth && (
                <TypingText
                  text={textSequence[3].text}
                  delay={textSequence[3].delay}
                  typingSpeed={100}
                  onComplete={() => setShowFifth(true)}
                />
              )}
              {showFifth && (
                <TypingText
                  text={textSequence[4].text}
                  delay={textSequence[4].delay}
                  typingSpeed={100}
                />
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8">
        <Links />
      </footer>
    </div>
  )
}
