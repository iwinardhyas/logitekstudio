import Hero from '../components/sections/Hero.jsx'
import SolutionsAccordion from '../components/sections/SolutionsAccordion.jsx'
import Highlights from '../components/sections/Highlights.jsx'
import RotatingBanner from '../components/sections/RotatingBanner.jsx'
import OfferingCards from '../components/sections/OfferingCards.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsAccordion />
      <Highlights />
      <RotatingBanner />
      <OfferingCards />
      <Testimonials />
      <ContactSection />
    </>
  )
}
