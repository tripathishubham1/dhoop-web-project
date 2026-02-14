'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, CloudOff, EyeOff, Lock, Server } from 'lucide-react'

const denials = [
  { label: 'No cloud dependence', icon: CloudOff },
  { label: 'No brand access', icon: EyeOff },
  { label: 'No third-party data sharing', icon: Lock },
]

const dataFlow = [
  { label: 'Cloud uploads', status: 'Blocked', blocked: true },
  { label: 'Third-party access', status: 'Blocked', blocked: true },
  { label: 'Local processing', status: 'Active', blocked: false },
  { label: 'Owner control', status: 'Full access', blocked: false },
]

export default function Privacy() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="bg-light-gray rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8">
              {/* Server indicator */}
              <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-soft border border-gray-100 mb-4 md:mb-5">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(41,36,151,0.25)]">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-charcoal text-sm font-semibold">Local Server</p>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600 bg-green-50 px-2 pt-1 pb-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs">All data processing on-premise</p>
                </div>
              </div>

              {/* Data flow indicators */}
              <div className="space-y-2">
                {dataFlow.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-gray-100"
                  >
                    <span className="text-gray-500 text-xs md:text-sm">{item.label}</span>
                    <span className={`text-[11px] font-semibold px-2.5 pt-1.5 pb-1 rounded-full ${
                      item.blocked
                        ? 'bg-red-50 text-red-500'
                        : 'bg-green-50 text-green-600'
                    }`}>
                      {item.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="section-tag mb-4 md:mb-6">Privacy</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-3 md:mb-4 leading-[1.15]">
              Privacy First.{' '}
              <span className="text-deep-indigo">Always in Your Control.</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              At Dhoop, privacy isn&apos;t a feature—it&apos;s a principle.
              Your smart home runs on a local server installed inside your home.
              Your data never leaves your walls unless you explicitly allow it.
            </p>

            {/* Denial items */}
            <div className="space-y-3 mb-6 md:mb-8">
              {denials.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-deep-indigo/5 border border-deep-indigo/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-deep-indigo" />
                  </div>
                  <span className="text-charcoal text-sm md:text-base font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Not us, not them */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 md:mb-8">
              Not us. Not device manufacturers. Not advertisers.<br />
              Only you decide what stays private and what connects to the outside world.
            </p>

            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-deep-indigo flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <p className="text-charcoal text-sm md:text-base font-semibold">
                You own the hardware. You control the data. We design the experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
