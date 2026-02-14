'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Can you retrofit an existing home?',
    answer: 'Yes—many upgrades can be added without redoing your entire home.',
  },
  {
    question: 'Will it feel complicated to use?',
    answer: 'No. The goal is fewer steps, not more.',
  },
  {
    question: 'How long does installation take?',
    answer: "Scope-dependent. You'll receive a clear timeline after the site visit.",
  },
  {
    question: 'What about privacy and security?',
    answer: 'Access is configured responsibly with owner-controlled security.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-tag">FAQ</span>
          <h2>Common Questions</h2>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-soft border border-deep-indigo/5"
            >
              <h4 className="font-heading font-bold text-charcoal text-sm md:text-base mb-2 md:mb-3">
                {faq.question}
              </h4>
              <p className="text-gray-500 text-sm md:text-base">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
