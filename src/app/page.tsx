import Links from '@/components/links'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'

export default function Home() {
  return (
    <div className="font-base bg-bg">
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Gm Gm , My name is Shubham Tiwari ,A Frontend Engineer Based in Mumbai,India.</p>

        <br />
           <div className="mb-10 text-base sm:text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
          consequatur, harum pariatur provident rerum placeat magni voluptas
          consectetur in exercitationem nobis aut, molestiae iure possimus
          aspernatur nesciunt laudantium ab atque.
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
