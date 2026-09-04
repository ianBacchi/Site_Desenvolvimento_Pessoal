import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MentoriaPage.module.css'
import keylaPhoto from '../assets/keyla-mentoria-hero.png'
import logoImg    from '../assets/logo.png'
import bgMentoria from '../assets/bg-mentoria.png'

import Reveal from '../components/Reveal'
import WeeksCarousel from '../components/WeeksCarousel'

export default function MentoriaPage() {
  const [selectedMonth, setSelectedMonth] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.bgWrap}>
            <img src={bgMentoria} alt="Background" className={styles.bgImage} />
            <div className={styles.bgOverlay} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <div className={styles.textBlock}>
              <Reveal delay={0.2} direction="up">
                <h3 className={styles.heroLabel}>MENTORIA</h3>
              </Reveal>
              <Reveal delay={0.4} direction="up">
                <h1 className={styles.heroTitle}>
                  ALTA PERFORMANCE PARA <br />
                  CORRETORES DE IMÓVEIS
                </h1>
              </Reveal>
              <Reveal delay={0.6} direction="up">
                <p className={styles.heroDesc}>
                  Descubra o que realmente funciona no dia a dia do corretor de 
                  imóveis e alcance o sucesso nas suas vendas.
                </p>
              </Reveal>
              <Reveal delay={0.8} direction="up">
                <a 
                  href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%20quero%20aplicar%20a%20mentoria%2C%20me%20conte%20mais%20sobre%20como%20funciona" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.heroBtn}
                >
                  QUERO APLICAR
                </a>
              </Reveal>
            </div>
            
            <div className={styles.photoCol}>
              <Reveal delay={0.4} direction="left">
                <img
                  src={keylaPhoto}
                  alt="Keyla Kin Mentoria"
                  className={styles.keylaPhoto}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* OBJETIVOS SECTION */}
        <section className={styles.objectiveSection}>
          <div className={`container ${styles.objectiveContainer}`}>
            <Reveal delay={0.2} direction="up">
              <h2 className={styles.objTitleTop}>
                MENTORIA PARA GESTORES E DONOS DE IMOBILIARIA - 4 MESES
              </h2>
            </Reveal>
            <Reveal delay={0.3} direction="up">
              <h3 className={styles.objTitleBottom}>
                GESTÃO, NÚMEROS E CRESCIMENTO PREVISÍVEL PARA IMOBILIÁRIAS
              </h3>
            </Reveal>
            <Reveal delay={0.4} direction="up">
              <p className={styles.objText}>
                <span className={styles.objHighlight}>OBJETIVO:</span> Capacitar gestores imobiliários a estruturar processos, dominar seus números, eliminar gargalos e escalar resultados com consistência, construindo uma gestão previsível, orientada por dados e preparada para crescer.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className={styles.timelineSection}>
          <div className={`container ${styles.timelineContainer}`}>
            <Reveal delay={0.2} direction="up">
              <div className={styles.monthBlock}>
                <div className={styles.monthHeaderWrapper}>
                  <div 
                    className={styles.monthPill}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    MENTORIA PARA GESTORES - MÊS {selectedMonth}
                    <span className={styles.monthToggleIcon}>
                      {isDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </div>
                  
                  {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {[1, 2, 3, 4].map(m => (
                        <button 
                          key={m}
                          className={`${styles.dropdownItem} ${selectedMonth === m ? styles.activeItem : ''}`}
                          onClick={() => {
                            setSelectedMonth(m)
                            setIsDropdownOpen(false)
                          }}
                        >
                          MÊS {m}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <WeeksCarousel month={selectedMonth} />
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className={styles.timelineAction}>
                <a 
                  href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%20quero%20aplicar%20a%20mentoria%2C%20me%20conte%20mais%20sobre%20como%20funciona" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.applyBtn}
                >
                  QUERO APLICAR
                </a>
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
