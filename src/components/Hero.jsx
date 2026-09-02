import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import cityBg from '../assets/city-bg.png'
import keylaCutout from '../assets/keyla-cutout.png'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image & Overlay with subtle slow zoom (Ken Burns effect) */}
      <div className={styles.bgWrap}>
        <motion.img 
          src={cityBg} 
          alt="Background" 
          className={styles.bgImage} 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.content}`}>
        
        {/* Photo on the left */}
        <div className={styles.photoCol}>
          <motion.img
            src={keylaCutout}
            alt="Keyla Kin"
            className={styles.keylaPhoto}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.17, 0.55, 0.1, 1] }}
          />
        </div>

        {/* Text on the right */}
        <div className={styles.textBlock}>
          <Reveal delay={0.2} direction="up">
            <h1 className={styles.title}>KEYLA KIN</h1>
          </Reveal>
          
          <Reveal delay={0.4} direction="up">
            <div className={styles.subtitle}>
              <p>CEO Kin Imóveis Advogada</p>
              <p>Corretora de Imóveis</p>
              <p>Mentora</p>
              <p>CRECI 131.693</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.6} direction="up">
            <div>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ marginTop: '20px' }}
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </Reveal>
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
