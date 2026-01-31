import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Experience from '@/components/Experience'
import WorksWith from '@/components/WorksWith'
import Automation from '@/components/Automation'
import Scenes from '@/components/Scenes'
import Process from '@/components/Process'
import Support from '@/components/Support'
import WhyDhoop from '@/components/WhyDhoop'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Experience />
      <WorksWith />
      <Automation />
      <Scenes />
      <Process />
      <Support />
      <WhyDhoop />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
