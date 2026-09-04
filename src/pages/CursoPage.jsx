import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './CursoPage.module.css'
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
                <a 
                  href="https://pay.hotmart.com/I104018704I?off=wylff7hn&hotfeature=51&_hi=eyJjaWQiOiIxNzgxNjUwMTE3MDE1NzczOTE4NDA3MTgzMTgyMzAwIiwiYmlkIjoiMTc4MTY1MDExNzAxNTc3MzkxODQwNzE4MzE4MjMwMCIsInNpZCI6ImVlMWI0ZjJkYmUyZjQ3NmQ5NjNjNTk1NTZhOWE0NzQ1In0=.1788460340205&bid=1788460341100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.heroBtn}
                >
                  COMPRE AGORA
                </a>
              </Reveal>
            </div>
            
            <div className={styles.photoCol}>
              <Reveal delay={0.4} direction="left">
                <div className={styles.videoWrapper}>
                  <iframe 
                    src="https://www.youtube.com/embed/062JzVBGm_s?autoplay=1"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className={styles.iframeVideo}
                  ></iframe>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE SECTION */}
        <section className={styles.targetSection}>
          <div className={`container ${styles.targetContainer}`}>
            <Reveal delay={0.2} direction="up">
              <h2 className={styles.targetTitle}>Para quem é esse produto?</h2>
            </Reveal>
            <Reveal delay={0.4} direction="up">
              <div className={styles.targetContentBox}>
                <p>O curso Alta Performance para Corretores de Imóveis é para você que:</p>
                <ul className={styles.targetList}>
                  <li>Está começando na corretagem e quer aprender o caminho certo desde o início.</li>
                  <li>Já atua como corretor, mas sente que trabalha muito e vende pouco.</li>
                  <li>Quer sair do improviso e atuar com mais método, segurança e clareza.</li>
                  <li>Deseja captar mais imóveis e atender clientes com postura profissional.</li>
                  <li>Quer aumentar suas chances de fechamento sem depender de sorte.</li>
                  <li>Enxerga a corretagem como carreira e não como bico.</li>
                </ul>
                <p className={styles.targetFooter}>
                  Se você está disposto a aprender, aplicar e manter disciplina no dia a dia, esse curso foi feito para você. Aqui, o foco é prática, constância e resultado real no mercado imobiliário.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GUARANTEE & PRICING SECTION */}
        <section className={styles.offerSection} id="comprar">
          <div className={`container ${styles.offerContainer}`}>
            
            <div className={styles.pricingCard}>
              <Reveal delay={0.2} direction="up">
                <p className={styles.priceLabel}>POR APENAS</p>
                <p className={styles.priceInstallments}>6x de</p>
                <h2 className={styles.priceValue}>R$ 49,50</h2>
                <p className={styles.priceCash}>
                  ou R$ 297,00 à vista
                </p>
                <a 
                  href="https://pay.hotmart.com/I104018704I?off=wylff7hn&hotfeature=51&_hi=eyJjaWQiOiIxNzgxNjUwMTE3MDE1NzczOTE4NDA3MTgzMTgyMzAwIiwiYmlkIjoiMTc4MTY1MDExNzAxNTc3MzkxODQwNzE4MzE4MjMwMCIsInNpZCI6ImVlMWI0ZjJkYmUyZjQ3NmQ5NjNjNTk1NTZhOWE0NzQ1In0=.1788460340205&bid=1788460341100" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buyBtn}
                >
                  COMPRAR AGORA
                </a>
                <p className={styles.secureText}>PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO</p>
              </Reveal>
            </div>

            <div className={styles.offerCard}>
              <Reveal delay={0.4} direction="up">
                <h3 className={styles.guaranteeTitle}>Garantia incondicional de 7 dias</h3>
                <p className={styles.guaranteeDesc}>
                  Seu dinheiro de volta sem perguntas até 7 dias após a compra.
                </p>
              </Reveal>
            </div>

            <div className={styles.offerCard}>
              <Reveal delay={0.6} direction="up">
                <h3 className={styles.certificateTitle}>Certificado de Conclusão Digital</h3>
                <p className={styles.certificateDesc}>
                  Ao final do curso você receberá um Certificado Online que concluiu as aulas. Poderá compartilhar em plataformas digitais.
                </p>
              </Reveal>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
