import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Navbar        from './components/Navbar'
import ScrollToTop   from './components/ScrollToTop'

// ── Pages ──────────────────────────────────
import HomePage      from './pages/HomePage'
import KeylaKinPage  from './pages/KeylaKinPage'
import MentoriaPage  from './pages/MentoriaPage'
import CursoPage     from './pages/CursoPage'
import LivrosPage    from './pages/LivrosPage'
import BlogPage      from './pages/BlogPage'
import BlogPostPage  from './pages/BlogPostPage'
import MidiaPage     from './pages/MidiaPage'

export default function App() {
  return (
    <HashRouter>
      {/* Sobe ao topo em cada navegação */}
      <ScrollToTop />

      {/* Navbar aparece em TODAS as páginas */}
      <Navbar />

      <Routes>
        <Route path="/"           element={<HomePage />}     />
        <Route path="/keyla-kin"  element={<KeylaKinPage />} />
        <Route path="/mentoria"   element={<MentoriaPage />} />
        <Route path="/curso"      element={<CursoPage />}    />
        <Route path="/livros"     element={<LivrosPage />}   />
        <Route path="/blog"       element={<BlogPage />}     />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/midia"      element={<MidiaPage />}    />
      </Routes>
    </HashRouter>
  )
}
