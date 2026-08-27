import { useState, useEffect } from 'react'
import { Link, useLocation }   from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import styles from './Navbar.module.css'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'KEYLA KIN', to: '/keyla-kin' },
  { label: 'MENTORIA',  to: '/mentoria'  },
  { label: 'CURSO',     to: '/curso'     },
  { label: 'LIVROS',    to: '/livros'    },
  { label: 'BLOG',      to: '/blog'      },
  { label: 'MÍDIA',     to: '/midia'     },
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
          <img src={logoImg} alt="Keyla Kin Logo" style={{ height: '90px', width: 'auto' }} />
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
