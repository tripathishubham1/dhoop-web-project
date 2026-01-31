'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Award, Heart } from 'lucide-react'

const reasons = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Based in Guwahati, we understand local needs and provide prompt service.',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Every home is unique. We design systems tailored to your lifestyle.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We work with best-in-class brands and certified installations.',
  },
  {
    icon: Heart,
    title: 'Long-term Partnership',
    description: 'Our relationship doesn\'t end at installation. We\'re here for the long run.',
  },
]

export default function WhyDhoop() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">Why Dhoop</span>
          <h2>Why Families Choose Us</h2>
          <p>We bring expertise, care, and attention to every project.</p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-4 md:p-5 md:bg-transparent md:rounded-none"
            >
              <div className="w-11 h-11 md:w-16 md:h-16 mx-auto gradient-primary rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-5 shadow-[0_4px_12px_rgba(41,36,151,0.25)]">
                <reason.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-charcoal text-sm md:text-base mb-1 md:mb-2">
                {reason.title}
              </h3>
              <p className="text-[11px] md:text-sm text-gray-500 leading-snug hidden md:block">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
