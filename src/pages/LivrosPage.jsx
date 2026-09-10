import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './LivrosPage.module.css'
import Reveal     from '../components/Reveal'
import livrosHero from '../assets/livro-gestao-imob2.jpg'
import keylaLivro3 from '../assets/keyla-livro3.jpg'

export default function LivrosPage() {
  return (
    <>
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.bgOverlay} />
          
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroPhotoCol}>
              <Reveal delay={0.2} direction="scale">
                <img
                  src={keylaLivro3}
                  alt="Keyla Kin com o livro Experiências de Mulheres no Mercado Imobiliário 2"
                  className={styles.heroBooksImg}
                />
              </Reveal>
            </div>
            
            <div className={styles.heroTextCol}>
              <Reveal delay={0.4} direction="up">
                <p className={styles.heroText}>
                  Conheça minhas publicações voltadas ao <strong>desenvolvimento de líderes, gestores e profissionais do mercado imobiliário.</strong>
                </p>
              </Reveal>
              <Reveal delay={0.6} direction="up">
                <p className={styles.heroText}>
                  Cada livro reúne <strong>metodologias práticas, estratégias de aceleração e experiências reais</strong> para impulsionar seus resultados e transformar sua atuação nos negócios.
                </p>
              </Reveal>
              </div>
            </div>
          </section>

        {/* QUOTE SECTION */}
        <section className={styles.quoteSection}>
          <Reveal delay={0.2} direction="up">
            <div className={`container ${styles.quoteContainer}`}>
              <span className={styles.quoteMark}>&ldquo;</span>
              <p className={styles.quoteText}>
                Acredito que conhecimento é a base para construir autoridade e resultados consistentes
              </p>
              <span className={styles.quoteMark}>&rdquo;</span>
            </div>
          </Reveal>
        </section>

        {/* BOOKS GRID */}
        <section className={`${styles.booksSection} section-py`}>
          <div className={`container ${styles.booksGrid}`}>

            <Reveal delay={0.1} direction="up" fullHeight={true}>
              <div className={styles.bookCard}>
                <div className={`${styles.bookCardImgWrap} ${styles.bookCardImgWrapSquare}`}>
                  <img src={livrosHero} alt="Gestão para Imobiliária" className={styles.bookCardImg} />
                </div>
                <div className={styles.bookCardBody}>
                  <p className={styles.bookCardMeta}>PUBLICADO · 2025</p>
                  <h3 className={styles.bookCardTitle}>Gestão para Imobiliária</h3>
                  <p className={styles.bookCardExcerpt}>
                    Coletânea sobre estratégia, inovação e lucratividade no mercado imobiliário. No meu capítulo mostro como construí o sucesso da...
                  </p>
                  <a
                    href="https://pay.hotmart.com/O101742512F?sck=HOTMART_PRODUCT_PAGE&off=0aybcre9&hotfeature=32,34&_gl=1*6uks1q*_gcl_aw*R0NMLjE3ODY5OTcxNTguQ2owS0NRanc0b3JVQmhDakFSSXNBSWJGM3F4UDNPaExNS2U2aktCUlJyZmlWVE5mUmhacWJRRlRwNl9IWk11NVBOLThPaHJ4VU9aRzFhY2FBb3BVRUFMd193Y0I.*_gcl_au*MjE0Mzg4MjIzNy4xNzg2OTczMzE2*FPAU*MjE0Mzg4MjIzNy4xNzg2OTczMzE2*_ga*MTU1OTg1NjEzMS4xNzc5MTE3MjYy*_ga_GQH2V1F11Q*czE3ODg0NjAzNDEkbzUwJGcxJHQxNzg4NDYwNDEwJGo2MCRsMSRoMTMwNTIwMjk0NQ..&bid=1788460421307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookCardBtn}
                  >
                    QUERO ESSE LIVRO
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up" fullHeight={true}>
              <div className={styles.bookCard}>
                <div className={`${styles.bookCardImgWrap} ${styles.bookCardImgWrapSquare}`}>
                  <img src={keylaLivro3} alt="Experiências de Mulheres no Mercado Imobiliário 2" className={styles.bookCardImg} />
                </div>
                <div className={styles.bookCardBody}>
                  <p className={styles.bookCardMeta}>PUBLICADO · 2026</p>
                  <h3 className={styles.bookCardTitle}>Experiências de Mulheres no Mercado Imobiliário 2</h3>
                  <p className={styles.bookCardExcerpt}>
                    Coletânea de histórias de mulheres do mercado imobiliário brasileiro. Meu capítulo traz...
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%2C%20quero%20saber%20mais%20sobre%20como%20comprar%20o%20livro%20Experi%C3%AAncias%20de%20Mulheres%20no%20Mercado%20Imobili%C3%A1rio%202!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookCardBtn}
                  >
                    QUERO ESSE LIVRO
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up" fullHeight={true}>
              <div className={`${styles.bookCard} ${styles.bookCardSolo}`}>
                <div className={styles.bookCardBody}>
                  <p className={styles.bookCardMeta}>AUTORIA SOLO</p>
                  <h3 className={styles.bookCardTitle}>Pare de Torcer. Comece a Gerir.</h3>
                  <p className={styles.bookCardExcerpt}>
                    Manual prático de ações para que gestores coloquem dentro da imobiliária: reunir dados, traçar estratégia e aplicar para aumentar o...
                  </p>
                  <p className={styles.bookCardAuthor}>Keyla Kin</p>
                  <span className={styles.bookCardTag}>EM PRODUÇÃO · DEZEMBRO 2026</span>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
