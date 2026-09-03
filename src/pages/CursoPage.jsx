import { Play } from 'lucide-react'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './CursoPage.module.css'
import keylaPhoto from '../assets/keyla-kin-cutout.png' /* Placeholder */
import bgCurso    from '../assets/bg-curso.png'
import Reveal     from '../components/Reveal'

export default function CursoPage() {
  return (
    <>
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.bgWrap}>
            <img src={bgCurso} alt="Background" className={styles.bgImage} />
            <div className={styles.bgOverlay} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <div className={styles.textCol}>
              <Reveal delay={0.2} direction="up">
                <h3 className={styles.heroLabel}>CURSO ONLINE</h3>
              </Reveal>
              <Reveal delay={0.4} direction="up">
                <h1 className={styles.heroTitle}>
                  ALTA PERFORMANCE PARA<br />
                  CORRETORES DE IMÓVEIS
                </h1>
              </Reveal>
              <Reveal delay={0.6} direction="up">
                <div className={styles.heroDescBox}>
                  <p>
                    Aprenda a vender imóveis de forma prática, eficiente e organizada, mesmo começando do zero ou sem uma carteira sólida.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.8} direction="up">
                <a href="#comprar" className={styles.heroBtn}>
                  COMPRE AGORA
                </a>
              </Reveal>
            </div>
            
            <div className={styles.photoCol}>
              <Reveal delay={0.4} direction="left">
                <img
                  src={keylaPhoto}
                  alt="Keyla Kin Curso"
                  className={styles.keylaPhoto}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SALES PITCH SECTION */}
        <section className={styles.salesSection}>
          <div className={`container ${styles.salesContainer}`}>
            <Reveal delay={0.2} direction="up">
              <h2 className={styles.salesTitle}>
                Descubra o que realmente funciona no dia a dia do corretor e alcance o sucesso nas suas vendas.
              </h2>
            </Reveal>
            
            <Reveal delay={0.4} direction="scale">
              <div className={styles.videoWrapper}>
                <div className={styles.videoPlaceholder}>
                  <button className={styles.playBtn}>
                    <Play size={48} fill="white" />
                  </button>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.5} direction="up">
              <div className={styles.salesTextWrapper}>
                <p>
                  Com o Curso de Alta Performance para Corretores de Imóveis com Keyla Kin, aprenda o caminho completo da venda, desde o posicionamento até a negociação.
                </p>
                <p>
                  Aprenda de forma simples, prática, sem teoria excessiva e sem enrolação, como destravar as vendas e se tornar um profissional mais organizado e confiante no processo comercial.
                </p>
                <p>
                  Adquira o curso agora e alcance o sucesso nas suas vendas de imóveis.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.6} direction="up">
              <a href="#comprar" className={styles.salesBtn}>
                <span>QUERO O</span>
                <span>CURSO</span>
              </a>
            </Reveal>
          </div>
        </section>

      </main>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
