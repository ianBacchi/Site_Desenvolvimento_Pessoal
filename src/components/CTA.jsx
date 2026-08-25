import { MessageCircle, Send } from 'lucide-react'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="contato" className={styles.section}>
      {/* Geometric chevron decoration */}
      <div className={styles.decoLeft} aria-hidden="true">
        {[0,1,2].map(i => (
          <svg key={i} viewBox="0 0 60 100" className={styles.decoSvg}>
            <polyline points="5,5 30,50 5,95"  stroke="#c9a84c" strokeWidth="4" fill="none"/>
            <polyline points="22,5 47,50 22,95" stroke="#c9a84c" strokeWidth="2" fill="none"/>
          </svg>
        ))}
      </div>
      <div className={styles.decoRight} aria-hidden="true">
        {[0,1,2].map(i => (
          <svg key={i} viewBox="0 0 60 100" className={styles.decoSvg} style={{ transform: 'rotate(180deg)' }}>
            <polyline points="5,5 30,50 5,95"  stroke="#c9a84c" strokeWidth="4" fill="none"/>
            <polyline points="22,5 47,50 22,95" stroke="#c9a84c" strokeWidth="2" fill="none"/>
          </svg>
        ))}
      </div>

      <div className="container">
        <div className={styles.inner}>
          <p className="eyebrow">Próximo passo</p>

          <h2 className={styles.title}>
            Pronta para transformar{' '}
            <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>seus resultados?</em>
          </h2>

          <p className={styles.sub}>
            Agende uma conversa e descubra qual solução da Keyla Kin é a certa para o seu momento.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-gold ${styles.mainBtn}`}
            >
              <MessageCircle size={18} />
              Falar com a Keyla
            </a>
            <a href="mailto:contato@keylakin.com.br" className="btn btn-outline">
              <Send size={16} />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
