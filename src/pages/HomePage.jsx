import Hero         from '../components/Hero'
import Stats        from '../components/Stats'
import Trajetoria   from '../components/Trajetoria'
import LatestPosts  from '../components/LatestPosts'
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
        <About /> {/* Quote section */}
        <Stats />
        <Trajetoria />
        <LatestPosts />
        <Services />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
