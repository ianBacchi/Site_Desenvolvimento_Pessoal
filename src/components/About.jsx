import styles from './About.module.css'

const pillars = [
  { n: '01', title: 'Visão',         desc: 'Enxergar o mercado antes dos outros e preparar você para atuar onde o negócio acontece de verdade.' },
  { n: '02', title: 'Posicionamento',desc: 'Construir sua marca pessoal e profissional com autoridade, diferenciação e atração de clientes de alto padrão.' },
  { n: '03', title: 'Método',        desc: 'Processos claros, replicáveis e adaptáveis para escalar vendas sem perder a qualidade do atendimento.' },
  { n: '04', title: 'Execução',      desc: 'Acompanhamento e estratégia para transformar planejamento em resultado concreto e mensurável.' },
]

export default function About() {
  return (
    <section id="sobre" className={`${styles.section} section-py`}>
      <div className="container">
        <div className={styles.layout}>

          {/* Photo side */}
          <div className={styles.photoSide}>
            <div className={styles.photoWrap}>
              <img
                src="https://placehold.co/560x700/1a1610/c9a84c?text=Keyla+Kin"
                alt="Keyla Kin"
                className={styles.photo}
              />
              {/* Floating metrics badge */}
              <div className={styles.badge}>
                <div className={styles.badgeMetrics}>
                  <Metric value="+15" label="Anos de mercado" />
                  <Metric value="+11" label="Prêmios recebidos" />
                  <Metric value="+25" label="Palestras por ano" />
                  <Metric value="+60%" label="Aumento médio de conversão" />
                </div>
              </div>
            </div>

            {/* Gold left bar decoration */}
            <div className={styles.goldBar} />
          </div>

          {/* Text side */}
          <div className={styles.textSide}>
            <p className="eyebrow">Keyla Kin</p>
            <h2 className="section-title">
              Uma trajetória construída <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>dentro</em> do mercado
            </h2>

            <p className={styles.bio}>
              Com mais de 15 anos de atuação no mercado imobiliário, Keyla Kin é especialista em
              estratégia comercial, gestão de equipes e formação de corretores de alta performance.
            </p>
            <p className={styles.bio}>
              Já treinou centenas de profissionais e transformou imobiliárias de diferentes portes,
              levando método, posicionamento e cultura de resultados para dentro das equipes.
            </p>

            <blockquote className={styles.quote}>
              "Não basta vender bem — você precisa construir um negócio que vende
              consistentemente, com propósito e com as pessoas certas."
            </blockquote>

            {/* Pillars */}
            <div className={styles.pillars}>
              {pillars.map(p => (
                <div key={p.n} className={styles.pillar}>
                  <span className={styles.pillarNum}>{p.n}</span>
                  <div>
                    <h4 className={styles.pillarTitle}>{p.title}</h4>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <a href="#servicos" className="btn btn-gold">Conhecer as Soluções</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-primary)' }}>
        {value}
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', color: 'var(--text-off)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>
        {label}
      </div>
    </div>
  )
}
