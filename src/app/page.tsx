import Links from '@/components/links'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <div className="bg-bg font-base">
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Gm Gm , My name is Shubham Tiwari ,A Frontend Engineer Based in
          Mumbai,India.
        </p>

        <br />
        <div className="mb-10 text-base sm:text-lg">
          <p>
            A saturday evening with lofi beats on my headphones and it's
            slightly drizzling with a cold breeze caressing my face and I type
            <span className='text-blue'> console.log("Hello World").</span>. That's the kind of
            pleasure I seek. I am a web3 developer with over 2 years of
            experience in building scalable and production ready smart contracts
            and decentralized applications. I play music, meditate, go to the
            gym everyday and...I code
          </p>
        </div>

        <Skills />

        <Experience />
      </div>
      <p>Socials</p>
      <Links />
    </div>
  )
}
