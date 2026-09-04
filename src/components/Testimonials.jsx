import { Quote } from 'lucide-react'
import styles from './Testimonials.module.css'
import strip1 from '../assets/home-strip-1.jpg'
import strip2 from '../assets/home-strip-5.jpg'
import strip3 from '../assets/home-strip-3.jpg'
import strip4 from '../assets/home-strip-4.jpg'

const testimonials = [
  {
    name: 'Carlos Mendonça',
    role: 'Diretor de Imobiliária, SP',
    text: 'A mentoria da Keyla transformou completamente a forma como gerencio minha equipe. Em 6 meses aumentamos o faturamento em 60% e reduzimos a rotatividade de corretores.',
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
  const stripPhotos = [strip1, strip2, strip3, strip4]

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
          {stripPhotos.map((photo, i) => (
            <div key={i} className={styles.stripPhoto}>
              <img
                src={photo}
                alt={`Keyla Kin - Experiência Internacional ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
