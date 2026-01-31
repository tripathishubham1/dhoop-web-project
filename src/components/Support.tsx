'use client'

import { motion } from 'framer-motion'
import { Headphones, RefreshCw, Zap, Clock } from 'lucide-react'
import Image from 'next/image'

const supportFeatures = [
  { icon: Headphones, title: 'Dedicated Support', description: 'Direct line to our team' },
  { icon: RefreshCw, title: 'Regular Updates', description: 'Firmware and software updates' },
  { icon: Zap, title: 'Quick Response', description: 'Same-day issue resolution' },
  { icon: Clock, title: 'Quarterly Review', description: 'Optimization sessions' },
]

export default function Support() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-strong">
              <Image
                src="/images/support-consultation.jpg"
                alt="Couple managing smart home with tablet"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="section-tag">Quarterly Consultation</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Support That Evolves With You
            </h2>
            <p className="text-gray-500 mb-8">
              As your needs change, your system can adapt. We ensure your smart home stays optimized, updated, and responsive to new requirements.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-light-gray rounded-xl p-4 transition-all duration-300 hover:bg-cream hover:shadow-soft"
                >
                  <feature.icon className="w-7 h-7 text-deep-indigo mb-2" />
                  <h4 className="font-heading font-bold text-charcoal text-sm mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Learn About Aftercare
              <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
