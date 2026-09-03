import styles from './About.module.css'
import equipeImg from '../assets/equipe.jpg'

import Reveal from './Reveal'

export default function About() {
  return (
    <section className={`${styles.section} section-py`}>
      <div className={`container ${styles.layout}`}>
        
        {/* Quote on the left */}
        <div className={styles.quoteSide}>
          <Reveal delay={0} direction="right">
            <div className={styles.quoteMarksUp}>&ldquo;</div>
            <h2 className={styles.quoteText}>
              Minha missão é transformar carreiras e gerar resultados através do mercado imobiliário.
            </h2>
            <div className={styles.quoteMarksDown}>&rdquo;</div>
          </Reveal>
        </div>

        {/* Photo on the right */}
        <div className={styles.photoSide}>
          <Reveal delay={0.2} direction="scale">
            <img
              src={equipeImg}
              alt="Equipe Kin Imóveis"
              className={styles.photo}
            />
          </Reveal>
        </div>

      </div>
    </section>
  )
}
