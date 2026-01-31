'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#automation', label: 'Automation' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="relative">
          <Image
            src={scrolled ? '/images/logo-purple.png' : '/images/logo-white.png'}
            alt="Dhoop Smart Living"
            width={160}
            height={45}
            className="h-10 w-auto object-contain transition-all duration-300"
            priority
          />
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-sm transition-colors duration-300 ${
                  scrolled
                    ? 'text-charcoal hover:text-deep-indigo'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-deep-indigo text-white hover:bg-[#3d35b5] hover:-translate-y-0.5'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className={`md:hidden w-10 h-10 flex items-center justify-center ${scrolled ? 'text-charcoal' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
