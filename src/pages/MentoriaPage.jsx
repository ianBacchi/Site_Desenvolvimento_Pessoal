import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MentoriaPage.module.css'
import keylaPhoto from '../assets/keyla-kin-cutout.png' /* Placeholder */
import logoImg    from '../assets/logo.png'
import cityBg     from '../assets/city-bg.png'

import Reveal from '../components/Reveal'

export default function MentoriaPage() {
  const [selectedMonth, setSelectedMonth] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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

                {selectedMonth === 1 && (
                  <div className={styles.weeksGrid}>
                    {/* WEEK 1 */}
                    <div className={styles.weekCard}>
                      <div className={styles.weekCardHeader}>
                        <span className={styles.weekBadge}>SEMANA 1</span>
                        <h4 className={styles.weekCardTitle}>IMERSÃO E COLETA DE DADOS</h4>
                      </div>
                      <ul className={styles.weekCardList}>
                        <li>Número de leads de venda e locação</li>
                        <li>Distribuição de leads por corretor</li>
                        <li>Número de captações (venda e locação)</li>
                        <li>Quantidade de visitas realizadas</li>
                        <li>Número de vendas e locações</li>
                        <li>VGV e VGL total</li>
                      </ul>
                    </div>

                    {/* WEEK 2 */}
                    <div className={styles.weekCard}>
                      <div className={styles.weekCardHeader}>
                        <span className={styles.weekBadge}>SEMANA 2</span>
                        <h4 className={styles.weekCardTitle}>ANÁLISE E DIAGNÓSTICO ESTRATÉGICO</h4>
                      </div>
                      <p className={styles.weekCardDesc}>Análise completa da operação</p>
                      <ul className={styles.weekCardList}>
                        <li>Identificação dos gargalos principais</li>
                        <li>Onde o funil trava</li>
                        <li>Onde se perde dinheiro, tempo ou oportunidade</li>
                        <li>Quais processos estão falhando</li>
                        <li>Micro tarefas práticas</li>
                      </ul>
                    </div>

                    {/* WEEK 3 */}
                    <div className={styles.weekCard}>
                      <div className={styles.weekCardHeader}>
                        <span className={styles.weekBadge}>SEMANA 3</span>
                        <h4 className={styles.weekCardTitle}>CONTROLE E ACOMPANHAMENTO DE NÚMEROS</h4>
                      </div>
                      <p className={styles.weekCardDesc}>Planilha de Gestão — Indicadores acompanhados:</p>
                      <ul className={styles.weekCardList}>
                        <li>Leads</li>
                        <li>Captação</li>
                        <li>Visitas</li>
                        <li>Vendas / locações</li>
                        <li>Conversão</li>
                        <li>VGV e VGL</li>
                      </ul>
                    </div>

                    {/* WEEK 4 */}
                    <div className={styles.weekCard}>
                      <div className={styles.weekCardHeader}>
                        <span className={styles.weekBadge}>SEMANA 4</span>
                        <h4 className={styles.weekCardTitle}>GESTÃO E REUNIÃO MENSAL</h4>
                      </div>
                      <p className={styles.weekCardDesc}>Estruturar a reunião mensal de resultados, com:</p>
                      <ul className={styles.weekCardList}>
                        <li>Números claros</li>
                        <li>Metas de venda e captação</li>
                        <li>Pontos de atenção</li>
                        <li>Direcionamento para o time</li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {selectedMonth === 2 && (
                  <div className={styles.weeksGrid}>
                    <p style={{ color: 'var(--text-white)', gridColumn: '1 / -1' }}>Conteúdo do Mês 2 será inserido aqui...</p>
                  </div>
                )}
                
                {selectedMonth === 3 && (
                  <div className={styles.weeksGrid}>
                    <p style={{ color: 'var(--text-white)', gridColumn: '1 / -1' }}>Conteúdo do Mês 3 será inserido aqui...</p>
                  </div>
                )}
                
                {selectedMonth === 4 && (
                  <div className={styles.weeksGrid}>
                    <p style={{ color: 'var(--text-white)', gridColumn: '1 / -1' }}>Conteúdo do Mês 4 será inserido aqui...</p>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="up">
              <div className={styles.timelineAction}>
                <a href="#aplicar" className={styles.applyBtn}>
                  QUERO APLICAR
                </a>
              </div>
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
