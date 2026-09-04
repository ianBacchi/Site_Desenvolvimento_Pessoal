import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MidiaPage.module.css'
import keylaMidia from '../assets/keyla-midia-cutout.png'
import Reveal     from '../components/Reveal'

// We reuse the images that represent her international/event experience
import imgEvento1 from '../assets/home-strip-1.jpg' // Bali
import imgLivro   from '../assets/midia-group.jpg' // Book Launch
import imgBastidores from '../assets/home-strip-5.jpg' // Falcon (replaced Quad Bike)
import imgEvento2 from '../assets/home-strip-4.jpg' // RE/MAX

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
                  <img src={imgEvento1} alt="Evento Keyla Kin" className={styles.collageImg} />
                </div>
              </Reveal>

              {/* Image 2 (Top Right - Offset Down) */}
              <Reveal delay={0.4} direction="scale">
                <div className={styles.collageItem}>
                  <img src={imgLivro} alt="Lançamento Livro" className={styles.collageImg} />
                </div>
              </Reveal>

              {/* Image 3 (Bottom Left) */}
              <Reveal delay={0.6} direction="scale">
                <div className={styles.collageItem}>
                  <img src={imgBastidores} alt="Bastidores" className={styles.collageImg} />
                </div>
              </Reveal>

              {/* Image 4 (Bottom Right - Offset Down) */}
              <Reveal delay={0.8} direction="scale">
                <div className={styles.collageItem}>
                  <img src={imgEvento2} alt="Evento Keyla Kin 2" className={styles.collageImg} />
                </div>
              </Reveal>

            </div>
          </div>
          
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
