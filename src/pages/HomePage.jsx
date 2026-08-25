import Hero         from '../components/Hero'
import Stats        from '../components/Stats'
import Services     from '../components/Services'
import About        from '../components/About'
import Testimonials from '../components/Testimonials'
import CTA          from '../components/CTA'
import Footer       from '../components/Footer'
import WhatsApp     from '../components/WhatsApp'

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
