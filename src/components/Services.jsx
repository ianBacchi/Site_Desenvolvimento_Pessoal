import { Clock, Trophy, TrendingUp, Camera, Mic, BookOpen } from 'lucide-react'
import styles from './Services.module.css'

const experiences = [
  {
    icon: <Clock size={28} />,
    title: 'Gestão Consolidada',
    desc: 'Há 11 anos à frente da KIN Imóveis, liderando estratégias de expansão e consolidação no mercado.'
  },
  {
    icon: <Trophy size={28} />,
    title: 'Liderança de Aceleração',
    desc: 'Gestão, treinamento e supervisão direta de uma equipe de alta performance com 25 corretores de vendas.'
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Aumento de 40% no VGV',
    desc: 'Histórico comprovado de crescimento expressivo no Valor Geral de Vendas no ciclo de 2024 a 2025.'
  },
  {
    icon: <Camera size={28} />, // Using Camera as a placeholder for the icon in mockup
    title: 'Alta Performance',
    desc: 'Criadora do curso Alta Performance para Corretores, voltado para profissionais que buscam posicionamento forte e mais vendas.'
  },
  {
    icon: <Mic size={28} />,
    title: 'Palestrante do Setor',
    desc: 'Presença em eventos e encontros do setor, compartilhando tendências, estratégias práticas e experiências de mercado.'
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Coautora & Autora',
    desc: 'Coautora de 2 livros no mercado imobiliário, dedicada a compartilhar conhecimento, formar novos líderes e construir um legado.'
  }
]

import Reveal from './Reveal'

export default function Services() {
  return (
    <section id="experiencia" className={`${styles.section} section-py`}>
      <div className={`container ${styles.container}`}>
        <Reveal delay={0.2}>
          <div className={styles.header}>
            <h2 className={styles.sectionTitle}>
              LIDERANÇA E RESULTADOS<br/>
              COMPROVADOS NO MERCADO<br/>
              IMOBILIÁRIO
            </h2>
            <p className={styles.sectionSubtitle}>
              Estratégias validadas em gestão, liderança e alta<br/>
              performance no mercado imobiliário.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={0.1 * i} direction="up" fullHeight={true}>
              <div className={styles.card} style={{ height: '100%' }}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{exp.icon}</span>
                  <h3 className={styles.cardTitle}>{exp.title}</h3>
                </div>
                <p className={styles.cardDesc}>{exp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
