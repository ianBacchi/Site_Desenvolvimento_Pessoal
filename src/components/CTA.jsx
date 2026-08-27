import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          Sua carreira no próximo nível, mentoria e cursos para profissionais de alto performance.
        </h2>

        <p className={styles.sub}>
          Metodologias práticas e direcionamento exclusivo para alavancar seu crescimento profissional, conquistar novos cargos e liderar com autoridade
        </p>

        <div className={styles.actions}>
          <a
            href="#mentoria"
            className={`btn ${styles.mainBtn}`}
          >
            MENTORIA
          </a>
          <a
            href="#curso"
            className={`btn ${styles.mainBtn}`}
          >
            CURSOS
          </a>
          <a
            href="#livros"
            className={`btn ${styles.mainBtn}`}
          >
            LIVROS
          </a>
        </div>
      </div>
    </section>
  )
}
