'use client'
import React, { useState } from 'react'
import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { ThemeSwitcher } from './theme-switcher'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  const links = [
    { path: '/', text: 'About' },
    { path: '/hacks', text: 'Hacks' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed top-0 z-50 w-full bg-bg">
      <div className="mx-auto max-w-7xl">
        {/* Overlay for mobile menu */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleMenu}
          />
        )}

        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-red transition-colors hover:text-orange-400"
          >
            0xShubham.eth
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 rounded-lg bg-orange-400 p-2 shadow-lg lg:flex">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={clsx(
                  'rounded-md px-4 py-2 font-medium text-gray-900 transition-colors',
                  path === link.path
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-orange-300',
                )}
              >
                {link.text}
              </Link>
            ))}
            <div className="ml-2 rounded-md bg-white px-2 py-1">
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-white hover:text-orange-400 lg:hidden"
            onClick={toggleMenu}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            'fixed right-0 top-0 z-50 h-full w-64 transform border-l border-gray-800 bg-gray-900 transition-transform duration-300 ease-in-out lg:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="p-4">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-white">Menu</span>
              <button
                className="text-white hover:text-orange-400"
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={clsx(
                    'rounded-md px-4 py-2 text-center font-medium text-white transition-colors',
                    path === link.path
                      ? 'bg-orange-400 text-gray-900'
                      : 'hover:bg-gray-800',
                  )}
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              ))}
              <div className="mt-4 flex justify-center">
                <div className="rounded-md bg-gray-800 p-2">
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
