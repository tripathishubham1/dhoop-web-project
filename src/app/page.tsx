import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import Experience from '@/components/Experience'
import Privacy from '@/components/Privacy'
import Automation from '@/components/Automation'
import Scenes from '@/components/Scenes'
import Process from '@/components/Process'
import Support from '@/components/Support'
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
      <Privacy />
      <Automation />
      <Scenes />
      <Process />
      <Support />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}
