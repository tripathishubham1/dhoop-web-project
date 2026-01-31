'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Play } from 'lucide-react'
import Image from 'next/image'

const trustItems = [
  'Design + Installation',
  'Privacy-First Setup',
  'Ongoing Support',
]

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback Image - Shows while video loads or if video fails */}
        <Image
          src="/images/hero-lighting.png"
          alt="Smart home background"
          fill
          className={`object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          priority
        />

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay - Creates depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        {/* Brand Color Overlay */}
        <div className="absolute inset-0 bg-deep-indigo/10 mix-blend-multiply" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-periwinkle rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white">Based in Guwahati</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Smart Living,{' '}
            <span className="bg-gradient-to-r from-periwinkle via-white to-periwinkle bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Beautifully Orchestrated
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Seamless lighting, climate, security, and entertainment—crafted around your routines, designed to make your home truly yours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="group bg-white text-deep-indigo px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,255,255,0.25)] inline-flex items-center gap-2"
            >
              Book a Private Consultation
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#experience"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch How It Works
            </a>
          </motion.div>

          {/* Trust Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-8 justify-center"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <div className="w-5 h-5 rounded-full bg-periwinkle/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-periwinkle" />
                </div>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
