import { useState, useEffect } from 'react'
import { Link, useLocation }   from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import styles from './Navbar.module.css'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'HOME',      to: '/' },
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

  // Fecha drawer ao scrollar no mobile
  useEffect(() => {
    if (!open) return
    const onScroll = () => setOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Bloqueia scroll do body quando drawer está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
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
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER — fora do header para não quebrar com backdrop-filter */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <button
          className={styles.drawerClose}
          onClick={close}
          aria-label="Fechar menu"
        >
          <X size={28} />
        </button>
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
    </>
  )
}
