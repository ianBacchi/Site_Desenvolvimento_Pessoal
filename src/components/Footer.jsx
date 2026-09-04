import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logoImg from '../assets/logo.png'

const navCols = [
  {
    heading: 'Soluções',
    links: [
      { label: 'Mentoria Estratégica', to: '/mentoria' },
      { label: 'Curso Online',         to: '/curso' },
      { label: 'Livros',               to: '/livros' },
    ],
  },
  {
    heading: 'Keyla Kin',
    links: [
      { label: 'Sobre',       to: '/keyla-kin' },
      { label: 'Mídia',       to: '/midia' },
      { label: 'Blog',        to: '/blog' },
    ],
  },
]

const socials = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
    href: 'https://youtube.com',
    label: 'YouTube',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: <MessageCircle size={18} />,
    href: 'https://wa.me/5511984591195',
    label: 'WhatsApp',
  },
]


export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Chevron gold pattern top */}
      <div className={styles.chevronBar} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <svg key={i} viewBox="0 0 40 60" className={styles.chevSvg}>
            <polyline points="5,5 20,30 5,55"  stroke="#c9a84c" strokeWidth="3" fill="none"/>
            <polyline points="18,5 33,30 18,55" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
          </svg>
        ))}
      </div>

      <div className="container">
        <div className={styles.main}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/">
              <img src={logoImg} alt="Keyla Kin Logo" style={{ maxWidth: '150px' }} />
            </Link>
            <p className={styles.tagline}>
              Mentoria, curso e estratégia para quem quer resultados reais no mercado imobiliário.
            </p>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                   className={styles.social} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map(col => (
            <div key={col.heading} className={styles.col}>
              <h4 className={styles.colHead}>{col.heading}</h4>
              <ul className={styles.colLinks}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className={styles.colLink}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colHead}>Contato</h4>
            <ul className={styles.colLinks}>
              <li><a href="mailto:contato@keylakin.com.br" className={styles.colLink}>contato@keylakin.com.br</a></li>
              <li><a href="https://wa.me/5511984591195" target="_blank" rel="noopener noreferrer" className={styles.colLink}>WhatsApp Direto</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Keyla Kin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
