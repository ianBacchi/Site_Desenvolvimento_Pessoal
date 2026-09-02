import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './LivrosPage.module.css'
import Reveal     from '../components/Reveal'

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
                {/* Placeholder for the two books mockup */}
                <div className={styles.booksPlaceholder}>
                  <span className={styles.placeholderText}>FOTO DOS 2 LIVROS AQUI</span>
                </div>
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
              <Reveal delay={0.8} direction="up">
                <a href="#comprar-geral" className={styles.heroBtn}>
                  COMPRE AGORA
                </a>
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
                {/* Placeholder for Keyla holding Book 1 */}
                <div className={styles.keylaBookPlaceholder}>
                  <span className={styles.placeholderText}>FOTO DA KEYLA SEGURANDO LIVRO 1</span>
                </div>
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
                
                <a href="#livro1" className={styles.buyBookBtn}>
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
                
                <a href="#livro2" className={styles.buyBookBtn}>
                  QUERO ESSE LIVRO
                </a>
              </Reveal>
            </div>

            <div className={styles.bookPhotoCol}>
              <Reveal delay={0.4} direction="left" fullHeight={true}>
                {/* Placeholder for Keyla holding Book 2 */}
                <div className={styles.keylaBookPlaceholder}>
                  <span className={styles.placeholderText}>FOTO DA KEYLA SEGURANDO LIVRO 2</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
