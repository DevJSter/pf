'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import memeImage from './assets/itachi.gif'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  delay?: number
  typingSpeed?: number
  onComplete?: () => void
  className?: string
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  delay = 100,
  typingSpeed = 100,
  onComplete,
  className = "",
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
    <div className={`xs:min-h-[24px] min-h-[20px] ${className}`}>
      {isComplete ? (
        <span className="transition-opacity duration-300 opacity-100">{text}</span>
      ) : (
        <span>{displayText}<span className="animate-blink">|</span></span>
      )}
    </div>
  )
}

const CircleButton = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay: delay, 
      ease: "easeOut" 
    }}
    whileHover={{ 
      scale: 1.1, 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)"
    }}
    className="mx-auto flex h-16 w-16 flex-col justify-center rounded-full bg-[#FB933D] text-center text-[10px] shadow-lg shadow-purple-500/30 dark:shadow-purple-500/50 transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-white md:h-24 md:w-24 md:text-base"
  >
    <p className="cursor-default select-none font-bold">{text}</p>
  </motion.div>
)

export default function Home() {
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)
  const [showFourth, setShowFourth] = useState(false)
  const [showFifth, setShowFifth] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const textSequence = [
    { text: 'Gm Stranger', delay: 0 },
    { text: 'Nice to Meet you', delay: 500 },
    { text: 'My Name is Shubham', delay: 500 },
    { text: 'Welcome to my', delay: 500 },
    { text: 'realm ;)', delay: 300 },
  ]

  // Left and right button arrays for easier management
  const leftButtons = [
    { text: "DeFi", delay: 0.1 },
    { text: "NFTs", delay: 0.2 },
    { text: "DAOs", delay: 0.3 },
    { text: "dApps", delay: 0.4 }
  ]
  
  const rightButtons = [
    { text: "IPFS", delay: 0.2 },
    { text: "NextJS", delay: 0.3 },
    { text: "Firebase", delay: 0.4 },
    { text: "Typescript", delay: 0.5 }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-bg font-base overflow-hidden">
      <main className="flex-1">
        <div className="mx-auto h-screen w-full max-w-[1240px] text-center pt-20">
          <div className="flex h-full flex-col md:flex-row">
            {/* Left circles - hidden on mobile, visible on md and up */}
            <div className="hidden md:flex mt-10 w-[20%] flex-col justify-evenly">
              {leftButtons.map((button, index) => (
                <CircleButton key={`left-${index}`} text={button.text} delay={button.delay} />
              ))}
            </div>

            {/* Center content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex w-full md:w-[60%] flex-col items-center justify-center px-4"
            >
              <div className="relative mx-auto h-[200px] w-[200px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: imageLoaded ? 1 : 0.8, 
                    opacity: imageLoaded ? 1 : 0 
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <Image
                    src={memeImage}
                    alt="itachi-gif"
                    fill
                    className="object-contain"
                    priority
                    onLoad={() => setImageLoaded(true)}
                  />
                </motion.div>
                
                {/* Subtle glow effect behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-purple-500/20 blur-3xl -z-10"></div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 flex flex-col space-y-4 text-center text-xl md:text-2xl font-extrabold"
              >
                <TypingText
                  text={textSequence[0].text}
                  typingSpeed={100}
                  onComplete={() => setShowSecond(true)}
                  className="text-gray-900 dark:text-white"
                />
                {showSecond && (
                  <TypingText
                    text={textSequence[1].text}
                    delay={textSequence[1].delay}
                    typingSpeed={100}
                    onComplete={() => setShowThird(true)}
                    className="text-gray-800 dark:text-gray-200"
                  />
                )}
                {showThird && (
                  <TypingText
                    text={textSequence[2].text}
                    delay={textSequence[2].delay}
                    typingSpeed={100}
                    onComplete={() => setShowFourth(true)}
                    className="text-gray-900 dark:text-gray-100"
                  />
                )}
                {showFourth && (
                  <TypingText
                    text={textSequence[3].text}
                    delay={textSequence[3].delay}
                    typingSpeed={100}
                    onComplete={() => setShowFifth(true)}
                    className="text-gray-800 dark:text-gray-200"
                  />
                )}
                {showFifth && (
                  <TypingText
                    text={textSequence[4].text}
                    delay={textSequence[4].delay}
                    typingSpeed={100}
                    className="text-orange-600 dark:text-orange-400 font-bold"
                  />
                )}
              </motion.div>
              
              {/* Mobile-only buttons in grid layout */}
              <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
                <div className="grid grid-cols-2 gap-4">
                  {leftButtons.map((button, index) => (
                    <CircleButton key={`mobile-left-${index}`} text={button.text} delay={0.2 + index * 0.1} />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {rightButtons.map((button, index) => (
                    <CircleButton key={`mobile-right-${index}`} text={button.text} delay={0.3 + index * 0.1} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right circles - hidden on mobile, visible on md and up */}
            <div className="hidden md:flex mt-10 w-[20%] flex-col justify-evenly">
              {rightButtons.map((button, index) => (
                <CircleButton key={`right-${index}`} text={button.text} delay={button.delay} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}