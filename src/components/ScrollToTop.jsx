import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Sobe para o topo da página ao navegar entre rotas */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
