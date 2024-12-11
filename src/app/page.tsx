import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base bg-bg">
      <h1 className="text-2xl font-heading sm:text-4xl">Shubham Tiwari</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Gm Gm , My name is Shubham Tiwari ,A Frontend Engineer Based in Mumbai,India.</p>

        <br />

        <p>
          Check out my Github for some of my work. Feel free to reach out to me on{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/DevJSter"
          >
            github profile
          </a>{' '}
          for more info.
        </p>
      </div>
      <p>Socials</p>
      <Links />
    </div>
  )
}
