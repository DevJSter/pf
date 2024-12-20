import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
import './assets/favicon.ico'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'Shubham Tiwari <Console Nerd>',
  description: 'Proof of Work is the proof of time spent on work.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}