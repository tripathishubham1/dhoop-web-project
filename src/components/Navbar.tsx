'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#automation', label: 'Automation' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <Image
              src={scrolled || mobileMenuOpen ? '/images/logo-purple.png' : '/images/logo-white.png'}
              style={scrolled || mobileMenuOpen ? { filter: 'brightness(0)' } : undefined}
              alt="Dhoop Smart Living"
              width={160}
              height={45}
              className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center z-50 ${
              scrolled || mobileMenuOpen ? 'text-charcoal' : 'text-white'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-xl p-6"
            >
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block py-2 text-charcoal font-medium hover:text-deep-indigo transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center bg-deep-indigo text-white py-3 rounded-xl font-semibold"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
