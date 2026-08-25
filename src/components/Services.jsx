import { ArrowRight } from 'lucide-react'
import styles from './Services.module.css'

const services = [
  {
    icon: '◆',
    tag: 'Para Gestores e Donos',
    title: 'Mentoria Estratégica',
    desc: 'Acelere os resultados da sua imobiliária com método, gestão de equipe e posicionamento de alto padrão.',
    href: '#mentoria',
    featured: true,
  },
  {
    icon: '◈',
    tag: 'Para Corretores',
    title: 'Curso Online',
    desc: 'Formação completa para corretores que querem escalar vendas, construir autoridade e atender clientes de alto padrão.',
    href: '#curso',
    featured: false,
  },
  {
    icon: '◇',
    tag: 'Para Times e Convenções',
    title: 'Palestras & Treinamentos',
    desc: 'Conteúdo de alto impacto para eventos corporativos, convenções de vendas e treinamentos in-company.',
    href: '#mentoria',
    featured: false,
  },
  {
    icon: '❖',
    tag: 'Conhecimento & Autoridade',
    title: 'Livros',
    desc: 'Publicações com estratégias práticas e visão de mercado para profissionais do setor imobiliário.',
    href: '#livros',
    featured: false,
  },
]

export default function Services() {
  return (
    <section id="servicos" className={`${styles.section} section-py`}>
      {/* Geometric decoration */}
      <div className={styles.decoRight} aria-hidden="true">
        {[0,1,2].map(i => (
          <svg key={i} viewBox="0 0 60 100" className={styles.decoSvg}>
            <polyline points="5,5 30,50 5,95"  stroke="#c9a84c" strokeWidth="4" fill="none"/>
            <polyline points="20,5 45,50 20,95" stroke="#c9a84c" strokeWidth="2" fill="none"/>
          </svg>
        ))}
      </div>

      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="eyebrow">O que eu ofereço</p>
            <h2 className="section-title">
              Soluções para <em style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>acelerar</em> sua carreira
            </h2>
          </div>
          <p className="section-subtitle">
            Cada solução foi desenvolvida para um momento específico da sua jornada no mercado imobiliário.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <a key={i} href={s.href} className={`${styles.card} ${s.featured ? styles.cardFeatured : ''}`}>
              <span className={styles.cardIcon}>{s.icon}</span>
              <span className={styles.cardTag}>{s.tag}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardCta}>
                Saiba mais <ArrowRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
