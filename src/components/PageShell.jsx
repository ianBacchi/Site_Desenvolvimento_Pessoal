import styles from './PageShell.module.css'

/**
 * PageShell — wrapper padrão de todas as páginas internas.
 * Recebe: tag (eyebrow), title, subtitle e children (seções).
 */
export default function PageShell({ tag, title, subtitle, children }) {
  return (
    <div className={styles.page}>
      {/* Page hero / banner */}
      <div className={styles.banner}>
        {/* Chevron deco */}
        <div className={styles.chevDeco} aria-hidden="true">
          {[0, 1, 2, 3].map(i => (
            <svg key={i} viewBox="0 0 60 100" className={styles.chevSvg}>
              <polyline points="5,5 30,50 5,95"  stroke="#c9a84c" strokeWidth="4" fill="none" />
              <polyline points="22,5 47,50 22,95" stroke="#c9a84c" strokeWidth="2" fill="none" />
            </svg>
          ))}
        </div>

        <div className="container">
          <div className={styles.bannerInner}>
            {tag && <p className="eyebrow">{tag}</p>}
            <h1 className={styles.bannerTitle}>{title}</h1>
            {subtitle && <p className={styles.bannerSub}>{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
