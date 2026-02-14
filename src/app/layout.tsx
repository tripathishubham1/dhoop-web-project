import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const vastagoGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/VastagoGrotesk-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/VastagoGrotesk-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-vastago',
  display: 'swap',
})

const acuminVariable = localFont({
  src: '../../public/fonts/AcuminVariableConcept.ttf',
  variable: '--font-acumin',
  display: 'swap',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${vastagoGrotesk.variable} ${acuminVariable.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
