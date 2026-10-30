import { useState } from 'react'
import styles from './Testimonials.module.css'
import strip1 from '../assets/home-strip-1.jpg'
import strip2 from '../assets/home-strip-5.jpg'
import strip3 from '../assets/home-strip-3.jpg'
import strip4 from '../assets/home-strip-4.jpg'

import imgFabio from '../assets/fabio_ferezin.jpg'
import imgCamila from '../assets/camila_badain.jpg'
import imgCenith from '../assets/cenith_imoveis.png'

const testimonials = [
  {
    name: 'Fabio Ferezin',
    role: 'Sócio Diretor da Nacional Corretores, Santo André - SP',
    text: 'Acompanho o trabalho e a liderança da Keyla tanto no presencial quanto no digital desde 2025. Seu tom provocativo no digital e o protagonismo natural que ela exerce sobre sua equipe, através de dados, treinamento e rituais é altamente inspirador!',
    stars: 5,
    img: imgFabio
  },
  {
    name: 'Camila Badain',
    role: 'Badain Imóveis',
    text: 'Conheci a Keyla em 2025 e, em fevereiro de 2026, comecei minha mentoria com ela. Desde então, minha imobiliária vem alcançando resultados que, em anos trabalhando sozinha, eu não consegui conquistar. A Keyla é uma profissional e uma pessoa extraordinária! Hoje, tenho ela não só como mentora, mas também como uma amiga e alguém muito especial na minha vida. Através dela, estou conhecendo novos ares no mercado imobiliário, abrindo portas e enxergando possibilidades que antes pareciam tão distantes. Sou muito grata por ter cruzado o caminho dela. Mais do que me ajudar a crescer profissionalmente, a Keyla tem feito parte de uma transformação muito importante na minha vida e na história da minha imobiliária. ❤️',
    stars: 5,
    img: imgCamila
  },
  {
    name: 'Carlos Correa',
    role: 'Cenith Imóveis',
    text: 'Tenho sido mentoriado pela Keyla há 03 meses e tem sido muito importante para o crescimento da nossa imobiliária, cada encontro podemos falar de processos, ferramentas e estratégias que corroboram para o sucesso da Cenith Imóveis! GRATIDÃO!!!',
    stars: 5,
    img: imgCenith
  },
]

const LONG_TEXT = 260

function TestimonialCard({ t }) {
  const [open, setOpen] = useState(false)
  const isLong = t.text.length > LONG_TEXT

  return (
    <div className={styles.card}>
      <img src={t.img} alt={t.name} className={styles.avatar} />
      <p
        className={`${styles.text} ${isLong && !open ? styles.clamped : ''}`}
      >
        "{t.text}"
      </p>
      {isLong && (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {open ? 'Ler menos' : 'Ler mais'}
        </button>
      )}
      <div className={styles.name}>{t.name}</div>
      <div className={styles.role}>{t.role}</div>
    </div>
  )
}

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
            <TestimonialCard key={i} t={t} />
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
