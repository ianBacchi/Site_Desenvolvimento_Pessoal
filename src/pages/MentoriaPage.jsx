import { useState } from 'react'
import { ChevronDown, ChevronUp, Briefcase, TrendingDown, Target, Dices, Check, ArrowRight } from 'lucide-react'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './MentoriaPage.module.css'
import keylaPhoto from '../assets/keyla-mentoria-hero.png'
import logoImg    from '../assets/logo.png'
import bgMentoria from '../assets/bg-mentoria.png'
import imgRenata  from '../assets/testi-renata.jpg'
import imgDiego   from '../assets/testi-diego.jpg'
import imgPaulo   from '../assets/testi-paulo.jpg'

import Reveal from '../components/Reveal'
import WeeksCarousel from '../components/WeeksCarousel'
import CountUp from '../components/CountUp'

const painPoints = [
  {
    icon: <Briefcase size={28} />,
    title: 'Vendedor da própria empresa',
    desc: 'Você é o melhor vendedor da sua própria imobiliária e por isso não consegue sair da operação.'
  },
  {
    icon: <TrendingDown size={28} />,
    title: 'Crescimento sem resultado',
    desc: 'A equipe cresce, mas o resultado não acompanha na mesma proporção.'
  },
  {
    icon: <Target size={28} />,
    title: 'Sem números claros',
    desc: 'Não existe um número claro de meta, funil e produtividade por corretor.'
  },
  {
    icon: <Dices size={28} />,
    title: 'Mês no improviso',
    desc: 'Todo mês termina na base do improviso e da torcida.'
  },
]

const WHATS_BASE = 'https://api.whatsapp.com/send?phone=5511984591195&text='

const plans = [
  {
    name: 'Diagnóstico KIN',
    desc: 'Para quem quer enxergar onde está o gargalo antes de começar. Um dia de análise profunda da sua operação.',
    price: 'R$ 3.200',
    installment: 'À vista ou em até 6x no cartão (juros da operadora)',
    duration: 'Imersão de 1 dia',
    features: [
      'Análise do funil de vendas atual',
      'Mapeamento de processos comerciais',
      'Planilha de indicadores pronta para usar',
      'Plano de ação com prioridades',
      '1 visita na Kin Imóveis',
    ],
    cta: 'Quero o diagnóstico',
    whats: WHATS_BASE + encodeURIComponent('Oi Keyla, quero saber mais sobre o Diagnóstico KIN'),
  },
  {
    name: 'Método KIN',
    badge: 'Mais procurado',
    featured: true,
    desc: 'A mentoria que apliquei na Kin Imóveis para sair de R$ 66 milhões para R$ 97 milhões em VGV em 12 meses.',
    price: 'R$ 7.000',
    installment: 'À vista ou em até 12x no cartão (juros da operadora) ou no boleto sem juros de R$ 1.250,00',
    duration: '4 meses de mentoria em grupo',
    features: [
      'Sessões semanais ao vivo em grupo',
      'Materiais entregues em cada etapa',
      'Planilhas de gestão e modelos de contrato',
      'Acompanhamento mensal de metas',
      'Comunidade de donos de imobiliária',
    ],
    cta: 'Quero entrar na próxima turma',
    whats: WHATS_BASE + encodeURIComponent('Oi Keyla, quero entrar na próxima turma do Método KIN'),
  },
  {
    name: 'Mentoria Individual',
    desc: 'Para donos que querem olhar a fundo na sua imobiliária com encontros personalizados e acompanhamento próximo.',
    price: 'R$ 11.500',
    installment: 'À vista ou em até 12x no cartão (juros da operadora) ou no boleto sem juros de R$ 2.000,00',
    duration: '4 meses de acompanhamento 1:1',
    features: [
      'Encontros quinzenais 1:1 com Keyla Kin',
      'Diagnóstico KIN com direito a 1 visita na Kin Imóveis',
      'Plano de implementação sob medida',
      'Intermediação direta com sua equipe',
      'Acesso aos materiais do Método KIN',
    ],
    cta: 'Quero a mentoria individual',
    whats: WHATS_BASE + encodeURIComponent('Oi Keyla, quero saber mais sobre a Mentoria Individual'),
  },
]

const pilares = [
  {
    num: '01',
    title: 'Diagnóstico e números',
    desc: 'Mapeamos VGV, funil, ticket médio, quantidade de visitas e propostas, analisando cada etapa para identificar exatamente onde está o gargalo do time.',
  },
  {
    num: '02',
    title: 'Captação e processo comercial',
    desc: 'Rotina de captação estruturada, do zero até como montar uma equipe própria de captação, além de atendimento e follow up com responsáveis definidos.',
  },
  {
    num: '03',
    title: 'Time e liderança',
    desc: 'Recrutamento, treinamento, integração dos primeiros 60 dias e ritual semanal de gestão.',
  },
  {
    num: '04',
    title: 'Blindagem jurídica',
    desc: 'Contratos, modelos, exclusividade e comissão revisados com olhar de advogada.',
  },
]

const testimonials = [
  {
    quote: 'Em quatro meses saí de planilha bagunçada para uma rotina de gestão semanal. O time dobrou o número de visitas.',
    name: 'Renata M.',
    role: 'Sócia de imobiliária, Curitiba',
    img: imgRenata,
  },
  {
    quote: 'A Keyla não entrega teoria. Ela senta com o seu número, aponta o gargalo e cobra na semana seguinte.',
    name: 'Diego A.',
    role: 'Gestor comercial, Londrina',
    img: imgDiego,
  },
  {
    quote: 'Meu maior ganho foi parar de vender sozinho. Hoje tenho seis corretores produzindo com processo.',
    name: 'Paulo S.',
    role: 'Dono de imobiliária, Maringá',
    img: imgPaulo,
  },
]

const faqs = [
  {
    q: 'Para quem é a mentoria?',
    a: 'Para donos e gestores de imobiliária que já têm equipe e faturamento, mas sentem que o crescimento não é previsível nem depende de um processo claro.',
  },
  {
    q: 'Qual é o formato?',
    a: '4 meses de mentoria em grupo, com sessões semanais ao vivo, materiais entregues em cada etapa e acompanhamento mensal de metas.',
  },
  {
    q: 'Quanto custa?',
    a: 'R$ 7.000, à vista ou em até 12x no cartão (juros da operadora), ou no boleto sem juros de R$ 1.250,00.',
  },
  {
    q: 'Preciso ter equipe grande?',
    a: 'Não. A mentoria serve tanto para quem está começando a estruturar a equipe quanto para quem já lidera um time maior.',
  },
  {
    q: 'E se eu não conseguir acompanhar ao vivo?',
    a: 'Todas as sessões ficam gravadas e disponíveis na plataforma, então você acompanha no seu ritmo.',
  },
]

export default function MentoriaPage() {
  const [selectedMonth, setSelectedMonth] = useState(1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

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
                  Método KIN: a gestão que fez minha imobiliária crescer, aplicada na sua.
                </h1>
              </Reveal>
              <Reveal delay={0.6} direction="up">
                <p className={styles.heroDesc}>
                  Quatro meses de mentoria em grupo com sessões semanais, para donos e
                  gestores que querem sair da operação e comandar o negócio pelos números.
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

        {/* VOCÊ SE RECONHECE AQUI SECTION */}
        <section className={styles.painSection}>
          <div className={`container ${styles.painContainer}`}>
            <Reveal delay={0.2}>
              <div className={styles.painHeader}>
                <h2 className={styles.painTitle}>Você se reconhece aqui?</h2>
              </div>
            </Reveal>

            <div className={styles.painGrid}>
              {painPoints.map((p, i) => (
                <Reveal key={i} delay={0.1 * i} direction="up" fullHeight={true}>
                  <div className={styles.painCard} style={{ height: '100%' }}>
                    <div className={styles.painCardHeader}>
                      <span className={styles.painCardIcon}>{p.icon}</span>
                      <h3 className={styles.painCardTitle}>{p.title}</h3>
                    </div>
                    <p className={styles.painCardDesc}>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL SECTION */}
        <section className={styles.proofSection}>
          <div className={`container ${styles.proofGrid}`}>
            <Reveal delay={0.1} direction="up">
              <div>
                <h2 className={styles.proofTitle}>
                  De <CountUp to="66" prefix="R$ " suffix=" milhões" duration={2} /><br />
                  para <CountUp to="97" prefix="R$ " suffix=" milhões" duration={2} />
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className={styles.proofStat}>
                <span className={styles.proofPercent}>
                  <CountUp to="47" suffix="%" duration={2} />
                </span>
                <p className={styles.proofGrowthLabel}>de crescimento em 12 meses</p>
                <p className={styles.proofCaption}>
                  Gestão de leads estruturada. Marca pessoal no Instagram.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OS 4 PILARES SECTION */}
        <section className={styles.pilaresSection}>
          <div className="container">
            <Reveal direction="up">
              <div className={styles.pilaresHeader}>
                <h2 className={styles.pilaresTitle}>
                  OS <span className={styles.pilaresNum}>4</span> PILARES
                </h2>
              </div>
            </Reveal>

            <div className={styles.pilaresGrid}>
              {pilares.map((p, i) => (
                <Reveal key={p.num} delay={0.15 * i} direction="up">
                  <div className={styles.pilarItem}>
                    <span className={styles.pilarBg} aria-hidden="true">{p.num.replace('0', '')}</span>
                    <span className={styles.pilarIndex}>{p.num}</span>
                    <h3 className={styles.pilarTitle}>{p.title}</h3>
                    <p className={styles.pilarDesc}>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.6} direction="up">
              <div className={styles.pilaresCtaWrap}>
                <button
                  type="button"
                  className={styles.pilaresBtn}
                  onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Conhecer o Método KIN <ArrowRight size={16} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PLANOS SECTION */}
        <section id="planos" className={styles.plansSection}>
          <div className="container">
            <div className={styles.plansHeader}>
              <Reveal direction="up">
                <h2 className={styles.plansTitle}>Planos</h2>
                <p className={styles.plansSubtitle}>
                  Escolha o formato ideal para estruturar sua imobiliária.
                </p>
              </Reveal>
            </div>

            <div className={styles.plansGrid}>
              {plans.map((p, i) => (
                <Reveal key={p.name} delay={0.1 * i} direction="up" fullHeight={true}>
                  <div className={`${styles.planCard} ${p.featured ? styles.planCardFeatured : ''}`} style={{ height: '100%' }}>
                    {p.badge && <span className={styles.planBadge}>{p.badge}</span>}

                    <h3 className={styles.planName}>{p.name}</h3>
                    <p className={styles.planDesc}>{p.desc}</p>

                    <div className={styles.planPriceBlock}>
                      <span className={styles.planPrice}>{p.price}</span>
                      <p className={styles.planInstallment}>{p.installment}</p>
                    </div>
                    <p className={styles.planDuration}>{p.duration}</p>

                    <ul className={styles.planFeatures}>
                      {p.features.map(f => (
                        <li key={f}>
                          <Check size={16} className={styles.planCheck} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={p.whats}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={p.featured ? styles.planBtnFeatured : styles.planBtnOutline}
                    >
                      {p.cta} <ArrowRight size={16} />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
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

        {/* DEPOIMENTOS SECTION */}
        <section className={styles.testiSection}>
          <div className="container">
            <p className={styles.testiLabel}>Depoimentos</p>
            <div className={styles.testiGrid}>
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={0.1 * i} direction="up" fullHeight={true}>
                  <div className={styles.testiCard} style={{ height: '100%' }}>
                    <img src={t.img} alt={t.name} className={styles.testiAvatar} />
                    <p className={styles.testiQuote}>"{t.quote}"</p>
                    <p className={styles.testiName}>{t.name}</p>
                    <p className={styles.testiRole}>{t.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={styles.faqSection}>
          <div className="container">
            <p className={styles.faqLabel}>Perguntas frequentes</p>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div key={f.q} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === i && <p className={styles.faqAnswer}>{f.a}</p>}
                </div>
              ))}
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

        {/* TURMAS REDUZIDAS BANNER */}
        <section className={styles.closeBanner}>
          <div className={`container ${styles.closeBannerInner}`}>
            <p className={styles.closeBannerText}>
              Turmas reduzidas e abrem poucas vezes por ano.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%2C%20quero%20entrar%20na%20pr%C3%B3xima%20turma%20do%20M%C3%A9todo%20KIN"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.closeBannerBtn}
            >
              Quero entrar na próxima turma <ArrowRight size={16} />
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
