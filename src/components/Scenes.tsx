'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Home, Sun, Film, Moon, Plane, Users, Mic, Lightbulb, Thermometer, Lock, Volume2, Check } from 'lucide-react'

const scenes = [
  {
    icon: Home,
    title: 'Welcome Home',
    description: 'Lights and comfort greet you automatically.',
    video: '/videos/scenes/welcome-home.mp4',
    voiceCommand: 'Hey Alexa, Welcome Home',
    devices: [
      { icon: Lightbulb, label: 'Lights On', color: 'text-yellow-400' },
      { icon: Thermometer, label: '24°C', color: 'text-blue-400' },
      { icon: Lock, label: 'Unlocked', color: 'text-green-400' },
    ],
  },
  {
    icon: Sun,
    title: 'Evening Calm',
    description: 'Warmer tones, quieter spaces, slower pace.',
    video: '/videos/scenes/evening-calm.mp4',
    voiceCommand: 'Hey Google, Evening Mode',
    devices: [
      { icon: Lightbulb, label: '40%', color: 'text-orange-400' },
      { icon: Volume2, label: 'Lo-Fi', color: 'text-purple-400' },
      { icon: Thermometer, label: '22°C', color: 'text-blue-400' },
    ],
  },
  {
    icon: Film,
    title: 'Movie Night',
    description: 'One touch: dim, close, play.',
    video: '/videos/scenes/movie-night.mp4',
    voiceCommand: 'Hey Siri, Movie Time',
    devices: [
      { icon: Lightbulb, label: 'Dim', color: 'text-yellow-600' },
      { icon: Volume2, label: 'Surround', color: 'text-purple-400' },
      { icon: Film, label: 'TV On', color: 'text-blue-400' },
    ],
  },
  {
    icon: Moon,
    title: 'Goodnight',
    description: 'Secure, switch off, sleep-ready climate.',
    video: '/videos/scenes/goodnight.mp4',
    voiceCommand: 'Hey Alexa, Goodnight',
    devices: [
      { icon: Lightbulb, label: 'Off', color: 'text-gray-400' },
      { icon: Lock, label: 'Locked', color: 'text-green-400' },
      { icon: Thermometer, label: '20°C', color: 'text-blue-400' },
    ],
  },
  {
    icon: Plane,
    title: 'Away Mode',
    description: 'Smart presence + monitoring.',
    video: '/videos/scenes/away-mode.mp4',
    voiceCommand: 'Hey Google, I\'m Leaving',
    devices: [
      { icon: Lock, label: 'Secured', color: 'text-green-400' },
      { icon: Lightbulb, label: 'Random', color: 'text-yellow-400' },
      { icon: Thermometer, label: 'Eco', color: 'text-green-400' },
    ],
  },
  {
    icon: Users,
    title: 'Guest Mode',
    description: 'Comfort without over-access.',
    video: '/videos/scenes/guest-mode.mp4',
    voiceCommand: 'Hey Siri, Guest Mode',
    devices: [
      { icon: Lightbulb, label: 'Bright', color: 'text-yellow-400' },
      { icon: Volume2, label: 'Jazz', color: 'text-purple-400' },
      { icon: Thermometer, label: '23°C', color: 'text-blue-400' },
    ],
  },
]

// Floating Particles Component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0a0a12]" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-900/40 to-indigo-900/40 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-indigo-900/30 to-purple-800/30 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-periwinkle/10 to-blue-900/20 blur-[100px]"
      />

      {/* Aurora effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          skewX: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-1/2 h-[400px] bg-gradient-to-b from-periwinkle/20 via-purple-500/10 to-transparent blur-[60px]"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 166, 250, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 166, 250, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a12_70%)]" />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Glowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#a8a6fa" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </svg>
    </div>
  )
}

function SceneCard({ scene, index }: { scene: typeof scenes[0]; index: number }) {
  const [isActivated, setIsActivated] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    setIsActivated(true)
    setTimeout(() => setIsActivated(false), 2000)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group"
    >
      {/* Glowing border on hover */}
      <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-periwinkle/50 via-purple-500/50 to-periwinkle/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

      <div className="absolute inset-[1px] rounded-3xl overflow-hidden bg-[#0a0a12]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        >
          <source src={scene.video} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isActivated
            ? 'bg-gradient-to-t from-green-900/90 via-green-900/60 to-green-900/40'
            : 'bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90'
        }`} />

        {/* Activation Ripple Effect */}
        {isActivated && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-400"
          />
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6" style={{ transform: 'translateZ(50px)' }}>
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className={`w-12 h-12 rounded-2xl backdrop-blur-md border flex items-center justify-center transition-all duration-300 ${
              isActivated
                ? 'bg-green-500/30 border-green-400/50'
                : 'bg-white/10 border-white/20 group-hover:bg-white/20 group-hover:scale-110'
            }`}>
              {isActivated ? (
                <Check className="w-6 h-6 text-green-400" />
              ) : (
                <scene.icon className="w-6 h-6 text-white" />
              )}
            </div>

            <div className="flex flex-col gap-2 items-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              {scene.devices.map((device, i) => (
                <motion.div
                  key={device.label}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
                >
                  <device.icon className={`w-3.5 h-3.5 ${device.color}`} />
                  <span className="text-xs font-medium text-white">{device.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div>
            {isActivated && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/30 w-fit"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">Scene Activated</span>
              </motion.div>
            )}

            <h4 className={`font-heading text-xl font-bold mb-2 transition-colors duration-300 ${
              isActivated ? 'text-green-400' : 'text-white group-hover:text-periwinkle'
            }`}>
              {scene.title}
            </h4>
            <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-4">
              {scene.description}
            </p>

            <div className={`transform transition-all duration-300 ${
              isActivated ? 'translate-y-4 opacity-0' : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
            }`}>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                <div className="relative flex items-center gap-0.5">
                  <Mic className="w-4 h-4 text-periwinkle" />
                  <div className="flex items-end gap-0.5 ml-1">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: isHovered ? [4, 12, 4] : 4,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-0.5 bg-periwinkle rounded-full"
                        style={{ height: 4 }}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs font-medium text-white/90">
                  &ldquo;{scene.voiceCommand}&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 transition-opacity duration-300 ${
          isActivated
            ? 'bg-gradient-to-r from-transparent via-green-400/80 to-transparent opacity-100'
            : 'bg-gradient-to-r from-transparent via-periwinkle/50 to-transparent opacity-0 group-hover:opacity-100'
        }`} />

        {/* Corner Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-periwinkle/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export default function Scenes() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-periwinkle/10 border border-periwinkle/20 text-periwinkle text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Signature Scenes
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Signature{' '}
            <span className="bg-gradient-to-r from-periwinkle via-purple-400 to-periwinkle bg-clip-text text-transparent">
              Moments
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Set once. Enjoy daily. Click to preview.</p>
        </motion.div>

        {/* Scenes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {scenes.map((scene, index) => (
            <SceneCard key={scene.title} scene={scene} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">
            Works with all major voice assistants and smart home platforms
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {['Amazon Alexa', 'Google Home', 'Apple Siri', 'Samsung SmartThings', 'Matter'].map((assistant) => (
              <span
                key={assistant}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {assistant}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
