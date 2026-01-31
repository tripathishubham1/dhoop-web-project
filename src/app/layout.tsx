import type { Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Dhoop Smart Living | Premium Smart Home Automation in Guwahati',
  description: 'Seamless lighting, climate, security, and entertainment—crafted around your routines, designed to make your home truly yours. Premium smart home automation in Guwahati.',
  keywords: 'smart home, home automation, Guwahati, smart living, IoT, voice control, climate control, security, lighting',
  openGraph: {
    title: 'Dhoop Smart Living | Smart Living, Beautifully Orchestrated',
    description: 'Seamless lighting, climate, security, and entertainment—crafted around your routines.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${manrope.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
