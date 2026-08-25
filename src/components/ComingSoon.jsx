import styles from './ComingSoon.module.css'

/**
 * Placeholder visual para seções ainda não desenvolvidas.
 * Recebe o nome da seção que será construída.
 */
export default function ComingSoon({ section, description }) {
  return (
    <div className={styles.block}>
      <div className={styles.icon}>◆</div>
      <p className={styles.label}>Seção em desenvolvimento</p>
      <h3 className={styles.title}>{section}</h3>
      {description && <p className={styles.desc}>{description}</p>}
      <div className={styles.dots}>
        <span /><span /><span />
      </div>
    </div>
  )
}
