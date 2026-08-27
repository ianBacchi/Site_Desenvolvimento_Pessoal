import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './KeylaKinPage.module.css'
import cityBg     from '../assets/city-bg.png'
import keylaPhoto from '../assets/keyla-kin-cutout.png'
import keylaPurpose from '../assets/keyla-purpose.png'
import logoImg    from '../assets/logo.png'

export default function KeylaKinPage() {
  return (
    <>
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.bgWrap}>
            <img src={cityBg} alt="Background" className={styles.bgImage} />
            <div className={styles.bgOverlay} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <div className={styles.photoCol}>
              <img
                src={keylaPhoto}
                alt="Keyla Kin"
                className={styles.keylaPhoto}
              />
            </div>
            
            <div className={styles.textBlock}>
              <h1 className={styles.quoteText}>
                "Minha paixão é desenvolver pessoas e transformar negócios."
              </h1>
              <img src={logoImg} alt="Keyla Kin Logo" className={styles.heroLogo} />
            </div>
          </div>
        </section>

        {/* BIO SECTION */}
        <section className={styles.bioSection}>
          <div className={`container ${styles.bioContainer}`}>
            <h2 className={styles.bioTitle}>
              EXPERIÊNCIA QUE GERA RESULTADOS.<br />
              CONHECIMENTO QUE TRANSFORMA PESSOAS.
            </h2>
            
            <div className={styles.bioText}>
              <p>
                Há mais de <strong>15 anos</strong>, construo minha trajetória no mercado imobiliário, unindo <strong>gestão, estratégia comercial, desenvolvimento de pessoas e visão de negócios.</strong>
              </p>
              
              <p>
                Há 11 anos, estou à frente da <strong>KIN Imóveis</strong>, onde transformo desafios do dia a dia em estratégias, processos e oportunidades de crescimento.
              </p>

              <p>
                Minha experiência foi construída na prática: <strong>liderando equipes</strong>, acompanhando <strong>negociações</strong>, <strong>desenvolvendo profissionais</strong> e tomando decisões que impactam diretamente os resultados de uma empresa.
              </p>
              
              <p>
                Hoje, além de gestora, sou <strong>mentora de donos de imobiliárias, palestrante e criadora de conteúdo e treinamentos para profissionais</strong> do mercado imobiliário.
              </p>
            </div>
          </div>
        </section>

        {/* PURPOSE SECTION */}
        <section className={styles.purposeSection}>
          <div className={`container ${styles.statsContainer}`}>
            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+15</span>
                <span className={styles.statLabel}>EXPERIÊNCIA NO<br/>MERCADO</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+11</span>
                <span className={styles.statLabel}>KIN IMÓVEIS</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+25</span>
                <span className={styles.statLabel}>CORRETORES</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+40%</span>
                <span className={styles.statLabel}>VGV</span>
              </div>
            </div>
          </div>

          <div className={`container ${styles.purposeContent}`}>
            <div className={styles.purposePhotoCol}>
              <img
                src={keylaPurpose}
                alt="Keyla Kin"
                className={styles.purposePhoto}
              />
            </div>
            
            <div className={styles.purposeTextCol}>
              <h2 className={styles.purposeTitle}>
                UMA TRAJETÓRIA CONSTRUÍDA<br/>COM PROPÓSITO
              </h2>
              <div className={styles.purposeText}>
                <p>
                  Acredito que uma imobiliária não cresce apenas porque vende mais.<br/>
                  Ela cresce quando possui processos bem estruturados, pessoas preparadas, liderança próxima e uma estratégia clara.
                </p>
                <p>
                  Foi a partir dessa visão que construí minha forma de fazer gestão: acompanhando indicadores, desenvolvendo pessoas, treinando equipes e buscando constantemente novas maneiras de melhorar a performance comercial.
                </p>
                <p>
                  Ao longo dessa trajetória, participei de centenas de negociações, acompanhei as transformações do mercado e vivi, na prática, os desafios e as oportunidades de empreender e liderar uma imobiliária.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className={styles.leadershipSection}>
          <div className={`container ${styles.leadershipContainer}`}>
            <div className={styles.leadershipTextCol}>
              <h2 className={styles.leadershipTitle}>
                LIDERANÇA COMEÇA<br/>COM PESSOAS
              </h2>
              <p className={styles.leadershipSubtitle}>
                Gestão não é apenas cobrar resultados. É desenvolver quem está por trás deles.
              </p>
            </div>
            <div className={styles.leadershipPhotoCol}>
              {/* Placeholder for the team photo from the mockup */}
              <div className={styles.teamPhotoPlaceholder}>
                <span className={styles.placeholderText}>Foto da Equipe / Palestra</span>
              </div>
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
