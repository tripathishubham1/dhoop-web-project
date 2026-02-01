'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-strong">
          {/* Left Side - Image with Text Overlay */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-full">
            <Image
              src="/images/smart-speaker.jpg"
              alt="Smart home voice assistant"
              fill
              className="object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-deep-indigo/90 via-deep-indigo/60 to-transparent" />

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col justify-start p-5 sm:p-8 md:p-12"
            >
              <span className="text-periwinkle text-xs md:text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3">
                Get Started
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Ready to Experience a Smarter Home?
              </h2>
              <p className="text-white/80 text-sm md:text-lg mb-4 md:mb-6 max-w-md">
                Tell us about your space in Guwahati. We&apos;ll recommend a clear, premium path forward.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 pt-2 pb-1.5 md:pt-2.5 md:pb-2 rounded-full">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-periwinkle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span className="text-white text-xs md:text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 pt-2 pb-1.5 md:pt-2.5 md:pb-2 rounded-full">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-periwinkle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span className="text-white text-xs md:text-sm">No Obligation</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-5 sm:p-8 md:p-12"
          >
            <h3 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-4 md:mb-6">
              Get in Touch
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Location
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all bg-white">
                    <option>Guwahati</option>
                    <option>Assam (Other)</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all bg-white">
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                    <option>Hospitality</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Project Stage
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all bg-white">
                  <option>Planning</option>
                  <option>Renovation</option>
                  <option>Ready</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  What would you like to automate?
                </label>
                <textarea
                  placeholder="Lighting, security, entertainment..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-deep-indigo focus:ring-2 focus:ring-deep-indigo/10 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-deep-indigo text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#3d35b5] hover:-translate-y-0.5 hover:shadow-medium"
              >
                Submit Enquiry
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted. We don&apos;t spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
