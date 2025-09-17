import Footer from '@/components/Footer'
import Donation from '@/components/landing/Donation'
import Hero from '@/components/landing/Hero'
import ProminentFigures from '@/components/landing/ProminentFigures'
import Support from '@/components/landing/Support'
import UpcomingEvents from '@/components/landing/UpcomingEvents'
import WhoWeAre from '@/components/landing/WhoWeAre'
import Work from '@/components/landing/Work'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <ProminentFigures />
      <Support />
      <Work />
      <Donation />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}
