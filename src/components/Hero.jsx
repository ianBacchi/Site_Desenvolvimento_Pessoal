import { MessageCircle, ChevronDown } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Dark overlay with texture */}
      <div className={styles.overlay} />

      {/* Geometric chevron decorations */}
      <div className={styles.chevrons} aria-hidden="true">
        <ChevronDecoration className={styles.chev1} />
        <ChevronDecoration className={styles.chev2} />
        <ChevronDecoration className={styles.chev3} />
      </div>

      {/* Placeholder photo column */}
      <div className={styles.photoCol}>
        <div className={styles.photoWrap}>
          {/* Replace src with real Keyla photo */}
          <img
            src="https://placehold.co/600x900/1a1610/c9a84c?text=Keyla+Kin"
            alt="Keyla Kin — Especialista em Mercado Imobiliário"
            className={styles.photo}
          />
          <div className={styles.photoGold} />
        </div>
      </div>

      {/* Text column */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <p className={`eyebrow anim-fade-up`}>Especialista em Mercado Imobiliário</p>

          <h1 className={`${styles.title} anim-fade-up delay-1`}>
            Mentoria, curso e estratégia{' '}
            <em className={styles.titleHighlight}>para acelerar resultados</em>{' '}
            no mercado imobiliário.
          </h1>

          <p className={`${styles.subtitle} anim-fade-up delay-2`}>
            Transforme sua imobiliária, sua equipe e sua carreira com método,
            posicionamento e estratégia de quem vive o mercado há mais de 15 anos.
          </p>

          <div className={`${styles.ctas} anim-fade-up delay-3`}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={16} />
              Falar com a Keyla
            </a>
            <a href="#servicos" className="btn btn-outline">
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#numeros" className={styles.scroll} aria-label="Rolar para baixo">
        <ChevronDown size={20} />
      </a>
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
