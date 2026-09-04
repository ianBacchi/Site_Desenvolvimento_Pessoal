import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './LivrosPage.module.css'
import Reveal     from '../components/Reveal'
import livrosHero from '../assets/livros-hero.png'
import keylaLivro1 from '../assets/keyla-livro1.png'
import keylaLivro2 from '../assets/keyla-livro2.jpg'

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
                  src={livrosHero} 
                  alt="Livros Keyla Kin" 
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

        {/* BOOK 1 SECTION */}
        <section className={styles.bookSection}>
          <div className={`container ${styles.bookContainer}`}>
            <div className={styles.bookPhotoCol}>
              <Reveal delay={0.2} direction="right" fullHeight={true}>
                <img 
                  src={keylaLivro1} 
                  alt="Keyla segurando o livro Gestão para Imobiliária" 
                  className={styles.keylaBookImg} 
                />
              </Reveal>
            </div>
            
            <div className={styles.bookTextCol}>
              <Reveal delay={0.4} direction="left">
                <h2 className={styles.bookTitle}>
                  Gestão para Imobiliária:
                </h2>
                <p className={styles.bookSubtitle}>estratégia, inovação e lucratividade</p>
                
                <ul className={styles.bookList}>
                  <li>Estratégias para aumentar captação e vendas;</li>
                  <li>Uso da inovação e da tecnologia para ganhar competitividade;</li>
                  <li>Metodologia de gestão ágil e OKRs para direcionar resultados;</li>
                  <li>Técnicas para fidelizar clientes e ampliar a lucratividade.</li>
                </ul>
                
                <a 
                  href="https://pay.hotmart.com/O101742512F?sck=HOTMART_PRODUCT_PAGE&off=0aybcre9&hotfeature=32,34&_gl=1*6uks1q*_gcl_aw*R0NMLjE3ODY5OTcxNTguQ2owS0NRanc0b3JVQmhDakFSSXNBSWJGM3F4UDNPaExNS2U2aktCUlJyZmlWVE5mUmhacWJRRlRwNl9IWk11NVBOLThPaHJ4VU9aRzFhY2FBb3BVRUFMd193Y0I.*_gcl_au*MjE0Mzg4MjIzNy4xNzg2OTczMzE2*FPAU*MjE0Mzg4MjIzNy4xNzg2OTczMzE2*_ga*MTU1OTg1NjEzMS4xNzc5MTE3MjYy*_ga_GQH2V1F11Q*czE3ODg0NjAzNDEkbzUwJGcxJHQxNzg4NDYwNDEwJGo2MCRsMSRoMTMwNTIwMjk0NQ..&bid=1788460421307" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buyBookBtn}
                >
                  QUERO ESSE LIVRO
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* BOOK 2 SECTION */}
        <section className={`${styles.bookSection} ${styles.bookSectionReverse}`}>
          <div className={`container ${styles.bookContainer} ${styles.bookContainerReverse}`}>
            <div className={styles.bookTextCol}>
              <Reveal delay={0.2} direction="right">
                <h2 className={styles.bookTitle}>
                  Experiências de MULHERES no Mercado Imobiliário 2
                </h2>
                
                <ul className={styles.bookList}>
                  <li>Estratégias para aumentar captação e vendas;</li>
                  <li>Uso da inovação e da tecnologia para ganhar competitividade;</li>
                  <li>Metodologia de gestão ágil e OKRs para direcionar resultados;</li>
                  <li>Técnicas para fidelizar clientes e ampliar a lucratividade.</li>
                </ul>
                
                <a 
                  href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%2C%20quero%20saber%20mais%20sobre%20como%20comprar%20o%20livro%20Experi%C3%AAncias%20de%20Mulheres%20no%20Mercado%20Imobili%C3%A1rio%202!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buyBookBtn}
                >
                  QUERO ESSE LIVRO
                </a>
              </Reveal>
            </div>

            <div className={styles.bookPhotoCol}>
              <Reveal delay={0.4} direction="left" fullHeight={true}>
                <img 
                  src={keylaLivro2} 
                  alt="Keyla com microfone segurando o livro Experiências de Mulheres 2" 
                  className={styles.keylaBookImg} 
                />
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
