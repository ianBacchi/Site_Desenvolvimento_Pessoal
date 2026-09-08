import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import cityBg from '../assets/city-bg.png'
import keylaCutout from '../assets/keyla-cutout-new.png'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Image & Overlay with subtle slow zoom (Ken Burns effect) */}
      <div className={styles.bgWrap}>
        <motion.img 
          src={cityBg} 
          alt="Background" 
          className={styles.bgImage} 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={`container ${styles.content}`}>
        
        {/* Photo on the left */}
        <div className={styles.photoCol}>
          <motion.img
            src={keylaCutout}
            alt="Keyla Kin"
            className={styles.keylaPhoto}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.17, 0.55, 0.1, 1] }}
          />
        </div>

        {/* Text on the right */}
        <div className={styles.textBlock}>
          <Reveal delay={0.1} direction="up">
            <span className={styles.nameLabel}>KEYLA KIN</span>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <h1 className={styles.title}>De panfleteira a CEO de uma imobiliária que fatura R$ 97 milhões em VGV.</h1>
          </Reveal>
          
          <Reveal delay={0.4} direction="up">
            <div className={styles.subtitle}>
              <p>Advogada, corretora e fundadora da Kin Imóveis, ajudo donos de imobiliária a saírem da torcida e passarem a gerir de verdade.</p>
            </div>
            <div className={styles.description}>
              <p>Comecei entregando panfleto na rua em São José do Rio Preto para pagar as contas. Vim para São Paulo, entrei no mercado imobiliário vendendo lançamentos do Minha Casa Minha Vida, passei por mais duas imobiliárias e em 2015 fundei a Kin Imóveis. Em 2024 mudei minha forma de gerir e levei o VGV de R$ 66 milhões para R$ 97 milhões em um ano, um crescimento de 47%. Hoje ajudo outros donos de imobiliária a percorrerem esse mesmo caminho.</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.6} direction="up">
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=5511984591195&text=Oi%20Keyla%2C%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20os%20seus%20servi%C3%A7os!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ marginTop: '20px' }}
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* Inline SVG chevrons for the gold geometric decorations */
function ChevronDecoration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="10,10 60,100 10,190"  stroke="#c9a84c" strokeWidth="8"  fill="none" />
      <polyline points="40,10 90,100 40,190"  stroke="#c9a84c" strokeWidth="8"  fill="none" />
      <polyline points="70,10 120,100 70,190" stroke="#c9a84c" strokeWidth="4"  fill="none" />
    </svg>
  )
}
