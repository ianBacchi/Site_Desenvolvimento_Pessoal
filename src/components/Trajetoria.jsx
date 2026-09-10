import styles from './Trajetoria.module.css'
import Reveal from './Reveal'
import keylaSobre from '../assets/keyla-sobre.jpg'

const credenciais = [
  { title: 'Advogada',  desc: 'Graduada em direito, inscrita na OAB.' },
  { title: 'Corretora', desc: 'CRECI ativo, atuando no mercado desde 2013.' },
  { title: 'MBA FGV',   desc: 'Pós-graduação em gestão empresarial.' },
  { title: 'CEO',       desc: 'Fundadora da Kin Imóveis, com equipe de 26 corretores de vendas.' },
]

export default function Trajetoria() {
  return (
    <section id="quem-e-keyla" className={styles.section}>
      <div className={`container ${styles.layout}`}>

        <Reveal direction="right">
          <img
            src={keylaSobre}
            alt="Keyla Kin"
            className={styles.photo}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow">Quem é Keyla</p>
          <h2 className={styles.title}>
            Trajetória construída na rua, no direito e na gestão.
          </h2>
          <p className={styles.text}>
            Formada em direito com inscrição na OAB e corretora com CRECI ativo,
            fiz MBA em gestão pela FGV enquanto criava minha filha sozinha e
            montava a Kin Imóveis do zero.
          </p>
          <p className={styles.text}>
            Hoje sou coautora de dois livros, colunista do ConteúdoImob e
            palestrante em eventos do setor. Tudo o que ensino no Método KIN é o
            que aplico na minha própria operação, todo dia.
          </p>
        </Reveal>

      </div>

      <div className={styles.credentials}>
        <div className="container">
          <span className={styles.credentialsLabel}>Credenciais</span>
          <div className={styles.credentialsGrid}>
            {credenciais.map((c, i) => (
              <Reveal key={i} delay={i * 0.1} direction="up">
                <div className={styles.credential}>
                  <h3 className={styles.credentialTitle}>{c.title}</h3>
                  <p className={styles.credentialDesc}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
