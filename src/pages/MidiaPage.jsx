import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MidiaPage.module.css'
import keylaMidia from '../assets/keyla-kin-cutout.png' // Use placeholder for Keyla
import Reveal     from '../components/Reveal'

export default function MidiaPage() {
  return (
    <>
      <main className={styles.main}>
        
        {/* MEDIA COLLAGE HERO */}
        <section className={styles.mediaHero}>
          
          {/* LEFT: Keyla Photo */}
          <div className={styles.keylaCol}>
            <Reveal delay={0.2} direction="up">
              <img 
                src={keylaMidia} 
                alt="Keyla Kin Mídia" 
                className={styles.keylaPhoto} 
              />
            </Reveal>
          </div>

          {/* RIGHT: Staggered Gallery / Collage */}
          <div className={styles.galleryCol}>
            <div className={styles.collageGrid}>
              
              {/* Image 1 (Top Left) */}
              <Reveal delay={0.2} direction="scale">
                <div className={styles.collageItem}>
                  <div className={styles.placeholderBox}>
                    <span>FOTO EVENTO 1</span>
                  </div>
                </div>
              </Reveal>

              {/* Image 2 (Top Right - Offset Down) */}
              <Reveal delay={0.4} direction="scale">
                <div className={styles.collageItem}>
                  <div className={styles.placeholderBox}>
                    <span>FOTO LIVRO</span>
                  </div>
                </div>
              </Reveal>

              {/* Image 3 (Bottom Left) */}
              <Reveal delay={0.6} direction="scale">
                <div className={styles.collageItem}>
                  <div className={styles.placeholderBox}>
                    <span>FOTO BASTIDORES</span>
                  </div>
                </div>
              </Reveal>

              {/* Image 4 (Bottom Right - Offset Down) */}
              <Reveal delay={0.8} direction="scale">
                <div className={styles.collageItem}>
                  <div className={styles.placeholderBox}>
                    <span>FOTO EVENTO 2</span>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
          
        </section>

      </main>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
