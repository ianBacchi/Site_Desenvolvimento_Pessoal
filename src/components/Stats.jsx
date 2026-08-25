import styles from './Stats.module.css'

const stats = [
  { value: '+500',  label: 'VGV',             sub: 'Acelerado' },
  { value: '+500',  label: 'Corretores',       sub: 'Formados' },
  { value: '+50',   label: 'Imobiliárias',     sub: 'Atendidas' },
  { value: '+50',   label: 'Treinamentos',     sub: 'Realizados' },
]

export default function Stats() {
  return (
    <section id="numeros" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.value}>{s.value}</span>
            <div className={styles.labels}>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.sub}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
