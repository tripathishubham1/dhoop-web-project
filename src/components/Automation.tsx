'use client'

import { motion } from 'framer-motion'
import { Sun, Thermometer, Shield, Monitor, Blinds, Zap } from 'lucide-react'

const automationItems = [
  {
    icon: Sun,
    title: 'Lighting & Ambience',
    description: 'Scenes for morning, evening, entertaining, and winding down.',
  },
  {
    icon: Thermometer,
    title: 'Climate & Comfort',
    description: 'Temperature that adapts to your schedule and seasons.',
  },
  {
    icon: Shield,
    title: 'Security & Access',
    description: 'Smart locks, cameras, alerts, and "away" modes.',
  },
  {
    icon: Monitor,
    title: 'Entertainment',
    description: 'Effortless audio/video control across rooms.',
  },
  {
    icon: Blinds,
    title: 'Curtains & Shades',
    description: 'Privacy and daylight, timed perfectly.',
  },
  {
    icon: Zap,
    title: 'Energy & Power',
    description: 'Visibility and automation that reduce waste.',
  },
]

export default function Automation() {
  return (
    <section id="automation" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">What We Automate</span>
          <h2>Whole-Home Control, One Interface</h2>
          <p>We design systems that make every space respond instantly.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100 transition-all duration-300 hover:shadow-medium hover:-translate-y-1 hover:border-deep-indigo/10 group"
            >
              <div className="w-14 h-14 bg-deep-indigo rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
