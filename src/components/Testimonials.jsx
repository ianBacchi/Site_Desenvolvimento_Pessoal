import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Carlos Mendonça',
    role: 'Diretor de Imobiliária, SP',
    text: 'A mentoria da Keyla transformou completamente a forma como gerencio minha equipe. Em 6 meses aumentamos o faturamento em 60% e reduímos a rotatividade de corretores.',
    stars: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Corretora Premium, RJ',
    text: 'O curso me deu ferramentas práticas e uma visão de mercado que eu nunca teria sozinha. Hoje atendo clientes de alto padrão com confiança e autoridade.',
    stars: 5,
  },
  {
    name: 'André Souza',
    role: 'Gestor Comercial, MG',
    text: 'A palestra da Keyla foi o ponto de virada para minha equipe. O conteúdo é profundo, direto e aplicável no dia seguinte. Resultados visíveis em semanas.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className={`${styles.section} section-py`}>
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">O que dizem sobre mim</p>
          <h2 className="section-title">
            Resultados que <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>falam</em> por si
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <Quote size={24} className={styles.quoteIcon} />
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.stars}>
                {'★'.repeat(t.stars)}
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event photo strip */}
        <div className={styles.photoStrip}>
          {[1,2,3,4].map(i => (
            <div key={i} className={styles.stripPhoto}>
              <img
                src={`https://placehold.co/300x200/1a1610/c9a84c?text=Evento+${i}`}
                alt={`Evento ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
