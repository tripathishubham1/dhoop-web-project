'use client'

import { Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  services: [
    { label: 'Lighting & Ambience', href: '#automation' },
    { label: 'Climate Control', href: '#automation' },
    { label: 'Security & Access', href: '#automation' },
    { label: 'Entertainment', href: '#automation' },
  ],
  company: [
    { label: 'Our Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="py-16 bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-5">
              <Image
                src="/images/logo-white.png"
                alt="Dhoop Smart Living"
                width={180}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Premium smart home automation, designed in Guwahati. Seamless lighting, climate, security, and entertainment—crafted around your routines.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-deep-indigo"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors duration-300 hover:text-periwinkle"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors duration-300 hover:text-periwinkle"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 Dhoop Smart Living. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-periwinkle transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-periwinkle transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
