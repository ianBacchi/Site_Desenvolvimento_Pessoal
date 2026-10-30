import { Play, ArrowUpRight } from 'lucide-react'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MidiaPage.module.css'
import Reveal     from '../components/Reveal'

import imgEvento1    from '../assets/home-strip-1.jpg' // Bali
import imgLivro      from '../assets/midia-group.jpg' // Lançamento do livro
import imgBastidores from '../assets/home-strip-5.jpg' // Falcon
import imgEvento2    from '../assets/home-strip-4.jpg' // RE/MAX
import imgTerra      from '../assets/reportagem-terra.png'
import imgValor      from '../assets/reportagem-valor.png'
import imgTerraLuxo  from '../assets/reportagem-terra-luxo.png'
import imgGazeta     from '../assets/reportagem-gazeta-eleicao.png'

const podcasts = [
  {
    title: 'Elas Constroem',
    href: 'https://www.youtube.com/watch?v=M0ZOhGHMu60',
    thumb: 'https://img.youtube.com/vi/M0ZOhGHMu60/hqdefault.jpg',
  },
  {
    title: 'ConteúdoImob',
    href: 'https://www.youtube.com/watch?v=S0aQWuiEdAU',
    thumb: 'https://img.youtube.com/vi/S0aQWuiEdAU/hqdefault.jpg',
  },
]

const articles = [
  {
    outlet: 'Terra',
    thumb: imgTerra,
    title: 'Keyla Kin amplia atuação internacional no setor imobiliário',
    href: 'https://www.terra.com.br/noticias/keyla-kin-amplia-atuacao-internacional-no-setor-imobiliario,c61ea6ceff9afb00d334d79df387159cj8wr8adu.html',
  },
  {
    outlet: 'Valor',
    thumb: imgValor,
    title: 'Keyla Kin amplia atuação internacional no setor imobiliário',
    href: 'https://valor.globo.com/patrocinado/dino/noticia/2026/04/08/keyla-kin-amplia-atuacao-internacional-no-setor-imobiliario-1.ghtml',
  },
  {
    outlet: 'Terra',
    thumb: imgTerraLuxo,
    thumbPos: '50% 45%',
    title: 'O novo mapa do luxo paulistano: por que morar melhor já não significa morar maior',
    href: 'https://terra.afontemagazine.com.br/o-novo-mapa-do-luxo-paulistano-por-que-morar-melhor-ja-nao-significa-morar-maior/',
  },
  {
    outlet: 'Gazeta da Semana',
    thumb: imgGazeta,
    thumbPos: '50% 33%',
    title: 'Eleição e mercado imobiliário: o que muda no bolso do comprador e na ponta final de vendas?',
    href: 'https://gazetadasemana.com.br/noticia/305363/eleicao-e-mercado-imobiliario-o-que-muda-no-bolso-do-comprador-e-na-ponta-final-de-vendas',
  },
]

const gallery = [
  { src: imgEvento1,    alt: 'Evento internacional com Keyla Kin' },
  { src: imgLivro,      alt: 'Lançamento do livro' },
  { src: imgBastidores, alt: 'Bastidores' },
  { src: imgEvento2,    alt: 'Evento RE/MAX' },
]

export default function MidiaPage() {
  return (
    <>
      <main className={styles.main}>

        {/* HEADER */}
        <section className={styles.header}>
          <div className="container">
            <Reveal direction="up">
              <span className="eyebrow">Na mídia</span>
              <h1 className={styles.title}>Keyla Kin em podcasts, reportagens e eventos</h1>
              <p className={styles.lead}>
                Entrevistas, matérias e bastidores da trajetória de quem transforma a
                gestão do mercado imobiliário.
              </p>
            </Reveal>
          </div>
        </section>

        {/* PODCASTS */}
        <section className={styles.section}>
          <div className="container">
            <Reveal direction="up">
              <h2 className={styles.sectionTitle}>Podcasts</h2>
            </Reveal>

            <div className={styles.podcastGrid}>
              {podcasts.map((p, i) => (
                <Reveal key={p.href} delay={0.1 * i} direction="up">
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={styles.podcastCard}>
                    <div className={styles.podcastThumb}>
                      <img src={p.thumb} alt={p.title} className={styles.podcastImg} />
                      <span className={styles.playBtn}>
                        <Play size={26} fill="currentColor" />
                      </span>
                    </div>
                    <div className={styles.cardBody}>
                      <div>
                        <span className={styles.cardTag}>Podcast</span>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                      </div>
                      <span className={styles.cardLink}>
                        Assistir no YouTube <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* REPORTAGENS */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <Reveal direction="up">
              <h2 className={styles.sectionTitle}>Reportagens</h2>
            </Reveal>

            <div className={styles.articleGrid}>
              {articles.map((a, i) => (
                <Reveal key={a.href} delay={0.1 * i} direction="up" fullHeight>
                  <a href={a.href} target="_blank" rel="noopener noreferrer" className={styles.articleCard}>
                    <div className={styles.articleThumb}>
                      <img src={a.thumb} alt={`Reportagem ${a.outlet}`} className={styles.articleImg} style={a.thumbPos ? { objectPosition: a.thumbPos } : undefined} />
                    </div>
                    <div className={styles.articleBody}>
                      <span className={styles.outlet}>{a.outlet}</span>
                      <h3 className={styles.articleTitle}>{a.title}</h3>
                      <span className={styles.cardLink}>
                        Ler reportagem <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section className={styles.section}>
          <div className="container">
            <Reveal direction="up">
              <h2 className={styles.sectionTitle}>Bastidores e eventos</h2>
            </Reveal>

            <div className={styles.galleryGrid}>
              {gallery.map((g, i) => (
                <Reveal key={g.alt} delay={0.1 * i} direction="scale" fullHeight>
                  <div className={styles.galleryItem}>
                    <img src={g.src} alt={g.alt} className={styles.galleryImg} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
