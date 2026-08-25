import { useState, useEffect } from 'react'
import { Link, useLocation }   from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Keyla Kin', to: '/keyla-kin' },
  { label: 'Mentoria',  to: '/mentoria'  },
  { label: 'Curso',     to: '/curso'     },
  { label: 'Livros',    to: '/livros'    },
  { label: 'Blog',      to: '/blog'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Fecha drawer ao mudar de rota
  useEffect(() => { setOpen(false) }, [location])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>

        {/* LOGO → home */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMain}>KEYLA KIN</span>
          <span className={styles.logoSub}>Estratégia Imobiliária</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.navLink} ${location.pathname === l.to ? styles.navLinkActive : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* SOCIAL + CTA */}
        <div className={styles.actions}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaBtn} btn btn-gold`}
          >
            Falar com a Keyla
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav}>
          {navLinks.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`${styles.drawerLink} ${location.pathname === l.to ? styles.drawerLinkActive : ''}`}
              onClick={close}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-gold ${styles.drawerCta}`}
            onClick={close}
          >
            <MessageCircle size={16} />
            Falar com a Keyla
          </a>
        </nav>
      </div>
    </header>
  )
}
