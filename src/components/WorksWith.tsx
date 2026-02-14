'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  { name: 'Apple Home', logo: '/images/brands/apple-home.png' },
  { name: 'Google Home', logo: '/images/brands/google-home.png' },
  { name: 'Amazon Alexa', logo: '/images/brands/alexa.svg' },
  { name: 'Samsung SmartThings', logo: '/images/brands/smartthings.png' },
]

export default function WorksWith() {
  return (
    <section className="py-10 md:py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 md:gap-10"
        >
          <span className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-wider">
            Works With
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-7 sm:h-9 md:h-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={48}
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
