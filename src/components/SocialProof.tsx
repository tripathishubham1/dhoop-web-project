'use client'

import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Homes Automated' },
  { number: '10K+', label: 'Devices Connected' },
  { number: '4.9★', label: 'Client Rating' },
]

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-deep-indigo/5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-deep-indigo mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
