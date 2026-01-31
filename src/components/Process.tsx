'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Palette, Wrench, GraduationCap, HeartHandshake } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin by understanding your lifestyle, daily routines, and priorities. Every home is unique, and so is every solution we craft.',
    icon: MessageSquare,
    details: ['Lifestyle assessment', 'Priority mapping', 'Budget discussion'],
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our experts design a comprehensive plan including device selection, optimal placement, wiring routes, and personalized scenes.',
    icon: Palette,
    details: ['Device selection', 'Scene planning', '3D visualization'],
  },
  {
    number: '03',
    title: 'Installation',
    description: 'Professional installation with minimal disruption. Our certified technicians ensure everything is perfectly integrated and tested.',
    icon: Wrench,
    details: ['Certified technicians', 'Clean execution', 'Full testing'],
  },
  {
    number: '04',
    title: 'Handover',
    description: 'Complete walkthrough and training for your entire household. Everyone learns to use and enjoy the new smart home features.',
    icon: GraduationCap,
    details: ['Family training', 'App setup', 'Documentation'],
  },
  {
    number: '05',
    title: 'Aftercare',
    description: 'Our relationship continues with regular updates, quarterly optimization sessions, and responsive support whenever you need it.',
    icon: HeartHandshake,
    details: ['24/7 support', 'Quarterly reviews', 'Free updates'],
  },
]

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0.4 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className={`hidden md:flex gap-10 transition-all duration-500 ${isInView ? 'translate-x-0' : 'translate-x-[-10px]'}`}>
        {/* Minimal Timeline */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <motion.div
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring" }}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isInView
                ? 'bg-deep-indigo text-white shadow-medium'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <span className="font-heading font-bold text-sm">{step.number}</span>
          </motion.div>

          {index < processSteps.length - 1 && (
            <div className="w-[2px] flex-1 min-h-[60px] bg-gray-200 my-3">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-full origin-top bg-deep-indigo/30"
              />
            </div>
          )}
        </div>

        {/* Desktop Content */}
        <div className="flex-1 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-strong hover:border-periwinkle/30 transition-all duration-300 group shadow-soft"
          >
            <div className="flex items-center gap-3 mb-3">
              <step.icon className={`w-5 h-5 transition-colors duration-300 ${isInView ? 'text-deep-indigo' : 'text-gray-400'}`} />
              <h3 className="font-heading text-2xl font-bold text-charcoal group-hover:text-deep-indigo transition-colors">
                {step.title}
              </h3>
            </div>

            <p className="text-gray-500 mb-5 leading-relaxed">
              {step.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {step.details.map((detail, i) => (
                <motion.span
                  key={detail}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium text-deep-indigo bg-periwinkle/10 border border-periwinkle/20"
                >
                  {detail}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout - Compact */}
      <div className="md:hidden flex items-start gap-3 pb-4">
        <motion.div
          animate={isInView ? { scale: 1 } : { scale: 0.9 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            isInView ? 'bg-deep-indigo text-white' : 'bg-gray-100 text-gray-400'
          }`}
        >
          <span className="font-heading font-bold text-[10px]">{step.number}</span>
        </motion.div>
        <div className="flex-1">
          <h3 className="font-heading text-base font-bold text-charcoal mb-1">{step.title}</h3>
          <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 overflow-hidden bg-cream">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-periwinkle/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-deep-indigo/10 blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-deep-indigo/10 border border-deep-indigo/20 text-deep-indigo text-xs md:text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Process
          </motion.span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-3 md:mb-4">
            White-Glove,{' '}
            <span className="bg-gradient-to-r from-deep-indigo via-periwinkle to-purple-400 bg-clip-text text-transparent">
              End-to-End
            </span>
            {' '}Delivery
          </h2>
          <p className="text-gray-500 text-base md:text-lg px-2">
            Beautiful results come from thoughtful planning. Here&apos;s how we bring your smart home to life.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-soft">
            <span className="text-gray-500">Ready to start your journey?</span>
            <a
              href="#contact"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-deep-indigo to-periwinkle text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-medium"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
