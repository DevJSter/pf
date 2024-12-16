import React from 'react'
import Image from 'next/image'
import Links from '@/components/links'
import memeImage from './assets/itachi.gif'

export default function Home() {
  return (
    <div className="bg-bg font-base">
      
      <div className="mt-8 text-base sm:text-lg">
        <div className="xs:h-[250px] xs:w-[320px] relative mx-auto h-[200px] w-[280px] sm:h-[350px] sm:w-[400px] md:h-[450px] md:w-[450px]">
          <Image
            src={memeImage}
            alt="spiderman-meme"
            fill
            className="object-contain"
            priority
          />
        </div>

        <p>
          Gm Gm, My name is Shubham Tiwari, Web3 Developer Based in Mumbai,
          India. Welcome to My Realm
        </p>

        <br />
      </div>

      <br />
      <h5 className="mt-2 text-lg sm:text-xl" >Socials</h5>
      <Links />
    </div>
  )
}
