'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Links from '@/components/links'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

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
    }, 100)

    return () => clearInterval(intervalId)
  }, [text, started, onComplete, isComplete])

  return (
    <div className="xs:min-h-[24px] min-h-[20px]">
      {isComplete ? text : displayText}
    </div>
  )
}

export default function About() {
  const [show, setShow] = useState(true)

  const introText =
    'A quiet Saturday evening, lofi beats playing softly, rain tapping ' +
    'against the window, and a warm cup of coffee by my side. The cursor ' +
    'blinks, and I type console.log("Exploring Ideas"). This is my flow state — ' +
    'building decentralized solutions, solving puzzles, and bringing ideas ' +
    'to life. Two years deep in Web3, crafting smart contracts and dApps. ' +
    'Beyond the code, I breathe music, clear my mind through meditation, ' +
    'and push limits at the gym.'

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="xs:text-xs flex flex-col justify-center space-y-2 text-center text-[11px] sm:text-sm md:text-base lg:text-lg">
          <h1 className="text-4xl font-bold">Hey, I&apos;m Shubham.</h1>
          {show && (
            <TypingText
              text={introText}
              delay={300}
              onComplete={() => setShow(true)}
            />
          )}
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Experience />
        </div>
      </main>

      <footer className="mt-auto py-8">
        <Links />
      </footer>
    </div>
  )
}