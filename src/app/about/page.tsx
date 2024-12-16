import React from 'react'
import Links from '@/components/links'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

const page = props => {
  return (
    <div>
        <p>Software Engineer</p>
        <div>
            <p>
            Gm Gm , My name is Shubham Tiwari ,A Frontend Engineer Based in
            Mumbai,India.
            </p>
    
            <br />
            <div>
            <p>
                A saturday evening with lofi beats on my headphones and it&apos;s
                slightly drizzling with a cold breeze caressing my face and I type
                <span>
                {' '}
                console.log(&quot;Hello World&quot;).
                </span>
                . That&apos;s the kind of pleasure I seek. I am a web3 developer
                with over 2 years of experience in building scalable and production
                ready smart contracts and decentralized applications. I play music,
                meditate, go to the gym everyday and...I code
            </p>
            s
            </div>
        </div>
        <Experience />
        <p>Socials</p>
        <Links />
    </div>
  )
}

page.propTypes = {}

export default page