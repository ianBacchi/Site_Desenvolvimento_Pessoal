import styles from './Stats.module.css'

const stats = [
  { value: '+500',  label: 'VGV' },
  { value: '+500',  label: 'SUPLY' },
  { value: '+50',   label: 'CORRETORES' },
  { value: '+50',   label: 'MENTORADOS' },
]

export default function Stats() {
  return (
    <section id="numeros" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
