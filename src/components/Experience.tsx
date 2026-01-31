'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Thermometer, Lock, Speaker } from 'lucide-react'
import Image from 'next/image'

const devices = [
  { id: 'lights', name: 'Lights', icon: Lightbulb, value: '80%' },
  { id: 'climate', name: 'Climate', icon: Thermometer, value: '24°' },
  { id: 'locks', name: 'Locks', icon: Lock, value: 'Secured' },
  { id: 'audio', name: 'Audio', icon: Speaker, value: 'Off' },
]

const features = [
  'Apple Home, Alexa & Google',
  'Control from anywhere',
  'Voice commands built-in',
]

export default function Experience() {
  const [deviceStates, setDeviceStates] = useState<Record<string, boolean>>({
    lights: true,
    climate: true,
    locks: true,
    audio: false,
  })

  const toggleDevice = (id: string) => {
    setDeviceStates(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="experience" className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 min-h-[700px]">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center py-24"
          >
            <span className="section-tag mb-6">The Experience</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-[1.1]">
              Your Home,<br />
              <span className="text-deep-indigo">One Touch Away</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-md">
              Every light, every lock, every room—unified in one beautiful interface.
            </p>
            <div className="space-y-4 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-deep-indigo flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-charcoal">{feature}</span>
                </motion.div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-deep-indigo text-white rounded-xl font-semibold hover:bg-deep-indigo/90 transition-colors w-fit">
              Book a Demo →
            </a>
          </motion.div>

          {/* Right - Phone Mockup */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-8 left-0 right-0 bottom-[-350px] flex justify-center"
            >
              <div className="relative w-[400px]">
                {/* Screen Content */}
                <div
                  className="absolute z-0 overflow-hidden"
                  style={{
                    top: '1.2%',
                    left: '3.8%',
                    right: '3.8%',
                    bottom: '1.2%',
                    borderRadius: '48px',
                    background: '#ffffff',
                  }}
                >
                  {/* Status Bar */}
                  <div className="flex items-center justify-between px-8 pt-4">
                    <span className="text-[15px] font-semibold text-black">9:41</span>
                    <div className="flex items-center gap-[6px]">
                      <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
                        <path d="M1 4C3 1.5 6 0 9 0C12 0 15 1.5 17 4" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M3 7C4.5 5 6.5 4 9 4C11.5 4 13.5 5 15 7" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M6 10C7 9 8 8.5 9 8.5C10 8.5 11 9 12 10" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                        <rect x="0" y="4" width="3" height="8" rx="1" fill="black"/>
                        <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" fill="black"/>
                        <rect x="9" y="1" width="3" height="11" rx="1" fill="black"/>
                        <rect x="13.5" y="0" width="3" height="12" rx="1" fill="black"/>
                      </svg>
                      <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
                        <rect x="0.5" y="0.5" width="23" height="12" rx="3" stroke="black" strokeOpacity="0.35"/>
                        <rect x="2" y="2" width="20" height="9" rx="1.5" fill="black"/>
                        <path d="M25 4.5V8.5C25.8 8.5 26.5 7.8 26.5 7V6C26.5 5.2 25.8 4.5 25 4.5Z" fill="black" fillOpacity="0.4"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-8">
                    {/* Header - Clean & Minimal */}
                    <div className="mb-10">
                      <p className="text-[13px] text-gray-400 tracking-wide uppercase mb-1">Home</p>
                      <h1 className="text-[32px] font-bold text-black leading-tight tracking-tight">Living Room</h1>
                    </div>

                    {/* Device Controls - Ultra Minimal */}
                    <div className="space-y-3">
                      {devices.map((device) => {
                        const isOn = deviceStates[device.id]
                        return (
                          <motion.div
                            key={device.id}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleDevice(device.id)}
                            className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                              isOn
                                ? 'bg-[#292497]'
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <device.icon
                                className={`w-6 h-6 transition-colors ${
                                  isOn ? 'text-white' : 'text-gray-400'
                                }`}
                                strokeWidth={1.5}
                              />
                              <span className={`text-[17px] font-medium transition-colors ${
                                isOn ? 'text-white' : 'text-black'
                              }`}>
                                {device.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className={`text-[15px] transition-colors ${
                                isOn ? 'text-white/70' : 'text-gray-400'
                              }`}>
                                {isOn ? device.value : 'Off'}
                              </span>
                              {/* Toggle */}
                              <div
                                className={`w-[52px] h-[32px] rounded-full transition-all duration-300 relative ${
                                  isOn ? 'bg-white/20' : 'bg-gray-200'
                                }`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <motion.div
                                  className={`absolute top-[4px] w-[24px] h-[24px] rounded-full shadow-sm ${
                                    isOn ? 'bg-white' : 'bg-white'
                                  }`}
                                  animate={{ left: isOn ? '24px' : '4px' }}
                                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                              </div>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Scene Indicator */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">Active Scene</p>
                          <p className="text-[15px] font-semibold text-black">Evening Calm</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Frame */}
                <Image
                  src="/images/iphone-frame.png"
                  alt="Phone"
                  width={400}
                  height={820}
                  className="relative z-10 w-full h-auto pointer-events-none select-none"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="lg:hidden px-6 pb-24">
        <div className="bg-white rounded-3xl p-6 max-w-sm mx-auto shadow-xl border border-gray-100">
          <div className="mb-6">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Home</p>
            <p className="font-bold text-charcoal text-2xl">Living Room</p>
          </div>
          <div className="space-y-3">
            {devices.slice(0, 2).map((device) => {
              const isOn = deviceStates[device.id]
              return (
                <div
                  key={device.id}
                  onClick={() => toggleDevice(device.id)}
                  className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all ${
                    isOn ? 'bg-deep-indigo' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <device.icon className={`w-5 h-5 ${isOn ? 'text-white' : 'text-gray-400'}`} />
                    <span className={`font-medium ${isOn ? 'text-white' : 'text-black'}`}>{device.name}</span>
                  </div>
                  <span className={`text-sm ${isOn ? 'text-white/70' : 'text-gray-400'}`}>
                    {isOn ? device.value : 'Off'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
