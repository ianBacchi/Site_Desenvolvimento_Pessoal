import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './KeylaKinPage.module.css'
import cityBg     from '../assets/city-bg-keyla.png'
import keylaPhoto from '../assets/keyla-kin-cutout.png'
import keylaPurpose from '../assets/keyla-purpose.png'
import equipeLideranca from '../assets/equipe-lideranca.jpg'
import keylaMentoria from '../assets/keyla-mentoria.jpg'
import logoImg    from '../assets/logo.png'

import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

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
              <Reveal delay={0.2} direction="up">
                <img
                  src={keylaPhoto}
                  alt="Keyla Kin"
                  className={styles.keylaPhoto}
                />
              </Reveal>
            </div>
            
            <div className={styles.textBlock}>
              <Reveal delay={0.4} direction="up">
                <h1 className={styles.quoteText}>
                  "Minha paixão é desenvolver pessoas e transformar negócios."
                </h1>
              </Reveal>
              <Reveal delay={0.6} direction="up">
                <img src={logoImg} alt="Keyla Kin Logo" className={styles.heroLogo} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* BIO SECTION */}
        <section className={styles.bioSection}>
          <div className={`container ${styles.bioContainer}`}>
            <Reveal delay={0.2} direction="up">
              <h2 className={styles.bioTitle}>
                EXPERIÊNCIA QUE GERA RESULTADOS.<br />
                CONHECIMENTO QUE TRANSFORMA PESSOAS.
              </h2>
            </Reveal>
            
            <Reveal delay={0.4} direction="up">
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
            </Reveal>
          </div>
        </section>

        {/* PURPOSE SECTION */}
        <section className={styles.purposeSection}>
          <div className={`container ${styles.statsContainer}`}>
            <div className={styles.statsRow}>
              <Reveal delay={0.1} direction="up">
                <div className={styles.statItem}>
                  <span className={styles.statValue}><CountUp to="15" prefix="+" /></span>
                  <span className={styles.statLabel}>EXPERIÊNCIA NO<br/>MERCADO</span>
                </div>
              </Reveal>
              <Reveal delay={0.2} direction="up">
                <div className={styles.statItem}>
                  <span className={styles.statValue}><CountUp to="11" prefix="+" /></span>
                  <span className={styles.statLabel}>KIN IMÓVEIS</span>
                </div>
              </Reveal>
              <Reveal delay={0.3} direction="up">
                <div className={styles.statItem}>
                  <span className={styles.statValue}><CountUp to="25" prefix="+" /></span>
                  <span className={styles.statLabel}>CORRETORES</span>
                </div>
              </Reveal>
              <Reveal delay={0.4} direction="up">
                <div className={styles.statItem}>
                  <span className={styles.statValue}><CountUp to="40" prefix="+" suffix="%" /></span>
                  <span className={styles.statLabel}>VGV</span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className={`container ${styles.purposeContent}`}>
            <div className={styles.purposePhotoCol}>
              <Reveal delay={0.2} direction="right" fullHeight={true}>
                <img
                  src={keylaPurpose}
                  alt="Keyla Kin"
                  className={styles.purposePhoto}
                />
              </Reveal>
            </div>
            
            <div className={styles.purposeTextCol}>
              <Reveal delay={0.4} direction="left">
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
              </Reveal>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className={styles.leadershipSection}>
          <div className={`container ${styles.leadershipContainer}`}>
            <div className={styles.leadershipTextCol}>
              <Reveal delay={0.2} direction="right">
                <h2 className={styles.leadershipTitle}>
                  LIDERANÇA COMEÇA<br/>COM PESSOAS
                </h2>
                <p className={styles.leadershipSubtitle}>
                  Gestão não é apenas cobrar resultados. É desenvolver quem está por trás deles.
                </p>
                <div className={styles.leadershipText}>
                  <p>
                    À frente de uma equipe de mais de <strong>25 corretores</strong>, acredito que alta performance é consequência de <strong>treinamento, acompanhamento, direcionamento e constância</strong>.
                  </p>
                  <p>
                    Meu papel como gestora vai muito além dos números. É entender pessoas, identificar potencialidades, corrigir rotas e criar uma cultura em que cada profissional saiba exatamente onde quer chegar — e o que precisa fazer para chegar lá.
                  </p>
                </div>
              </Reveal>
            </div>
    <div className={styles.leadershipPhotoCol}>
      <Reveal delay={0.4} direction="left" fullHeight={true}>
        <img src={equipeLideranca} alt="Equipe de Corretores" className={styles.leadershipPhoto} />
      </Reveal>
    </div>
  </div>
</section>

        {/* MENTORSHIP SECTION */}
        <section className={styles.mentorshipSection}>
          <div className={`container ${styles.mentorshipContainer}`}>
            <div className={styles.mentorshipPhotoCol}>
              <Reveal delay={0.2} direction="right" fullHeight={true}>
                <img src={keylaMentoria} alt="Keyla Palestrando" className={styles.mentorshipPhoto} />
              </Reveal>
            </div>
            
            <div className={styles.mentorshipTextCol}>
              <h2 className={styles.leadershipTitle}>
                DA EXPERIÊNCIA À MENTORIA
              </h2>
              <p className={styles.mentorshipSubtitle}>
                Compartilhar conhecimento também é uma forma de transformar o mercado.
              </p>
              <div className={styles.mentorshipText}>
                <p>
                  Depois de anos vivendo a <strong>gestão imobiliária na prática</strong>, percebi que muitos gestores enfrentavam desafios que eu já havia enfrentado — e que muitas das soluções que encontrei poderiam ajudar outras empresas a crescer.
                </p>
                <p>
                  Foi assim que nasceu minha atuação como <strong>mentora de donos de imobiliárias.</strong> Hoje, ajudo gestores e empresários do mercado imobiliário a olhar para seus negócios de forma <strong>mais estratégica, estruturando processos, desenvolvendo equipes e criando uma gestão mais eficiente</strong> e preparada para crescer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
