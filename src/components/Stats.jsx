import styles from './Stats.module.css'
import Reveal from './Reveal'
import CountUp from './CountUp'

const stats = [
  { value: '100', prefix: '+', label: 'MILHÕES', sub: 'VGV' },
  { value: '11',  prefix: '+', label: 'ANOS', sub: 'KIN IMÓVEIS' },
  { value: '25',  prefix: '+', label: 'CORRETORES' },
  { value: '15',  prefix: '+', label: 'MENTORADOS' },
]

export default function Stats() {
  return (
    <section id="numeros" className={styles.section}>
      <div className="container">
        <div className={styles.year}>2026</div>
        <div className={styles.inner}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.15} direction="up">
              <div className={styles.card}>
                <span className={styles.value}>
                  <CountUp to={s.value} prefix={s.prefix} duration={2} />
                </span>
                <span className={styles.label}>{s.label}</span>
                {s.sub && <span className={styles.label}>{s.sub}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
