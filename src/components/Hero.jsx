import styles from './Hero.module.css'
import cityBg from '../assets/city-bg.png'
import keylaCutout from '../assets/keyla-cutout.png'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image & Overlay */}
      <div className={styles.bgWrap}>
        <img src={cityBg} alt="Background" className={styles.bgImage} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.content}`}>
        
        {/* Photo on the left */}
        <div className={styles.photoCol}>
          <img
            src={keylaCutout}
            alt="Keyla Kin"
            className={styles.keylaPhoto}
          />
        </div>

        {/* Text on the right */}
        <div className={styles.textBlock}>
          <h1 className={`${styles.title} anim-fade-up`}>
            KEYLA KIN
          </h1>
          <div className={`${styles.subtitle} anim-fade-up delay-1`}>
            <p>CEO Kin Imóveis Advogada</p>
            <p>Corretora de Imóveis</p>
            <p>Mentora</p>
            <p>CRECI 131.693</p>
          </div>
          
          <div className={`anim-fade-up delay-2`}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Inline SVG chevrons for the gold geometric decorations */
function ChevronDecoration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="10,10 60,100 10,190"  stroke="#c9a84c" strokeWidth="8"  fill="none" />
      <polyline points="40,10 90,100 40,190"  stroke="#c9a84c" strokeWidth="8"  fill="none" />
      <polyline points="70,10 120,100 70,190" stroke="#c9a84c" strokeWidth="4"  fill="none" />
    </svg>
  )
}
