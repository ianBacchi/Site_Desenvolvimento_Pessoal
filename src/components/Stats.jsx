import styles from './Stats.module.css'
import Reveal from './Reveal'
import CountUp from './CountUp'

const stats = [
  { value: '500', prefix: '+', label: 'VGV' },
  { value: '500', prefix: '+', label: 'SUPLY' },
  { value: '50',  prefix: '+', label: 'CORRETORES' },
  { value: '50',  prefix: '+', label: 'MENTORADOS' },
]

export default function Stats() {
  return (
    <section id="numeros" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.15} direction="up">
            <div className={styles.card}>
              <span className={styles.value}>
                <CountUp to={s.value} prefix={s.prefix} duration={2} />
              </span>
              <span className={styles.label}>{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
