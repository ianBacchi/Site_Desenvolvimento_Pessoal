import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './BlogPage.module.css'
import postImage  from '../assets/keyla-kin-cutout.png'
import Reveal     from '../components/Reveal'

// Função utilitária para extrair texto puro do HTML e limitar caracteres
function getExcerptText(html, maxLength = 120) {
  if (!html) return ''
  // Remove todas as tags HTML
  const text = html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim()
  if (text.length <= maxLength) return text
  // Corta na última palavra inteira antes do limite
  const trimmed = text.substring(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  return trimmed.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...'
}

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/wp-json/wp/v2/posts?_embed')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data)
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao buscar posts:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <main className={styles.main}>
        
        {/* CUSTOM BLOG HEADER */}
        <section className={styles.blogHeader}>
          <div className={`container ${styles.headerContainer}`}>
            <h1 className={styles.bgTitle}>BLOG</h1>
          </div>
        </section>

        {/* POSTS GRID */}
        <section className={styles.blogGridSection}>
          <div className={`container ${styles.gridContainer}`}>
            {loading ? (
              <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
                Carregando artigos...
              </p>
            ) : posts.length === 0 ? (
              <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
                Nenhum artigo encontrado no momento.
              </p>
            ) : (
              posts.map((post, i) => {
                const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || postImage;
                const excerptText = getExcerptText(post.excerpt?.rendered || post.content?.rendered)
                
                return (
                  <Reveal key={post.id} delay={i * 0.1} direction="up" fullHeight={true}>
                    <Link to={`/blog/${post.slug}`} className={styles.postCardLink}>
                      <div className={styles.postCard}>
                        {/* Foto de capa no topo */}
                        <div className={styles.cardPhotoWrapper}>
                          <img src={featuredMedia} alt={post.title.rendered} className={styles.cardImage} />
                        </div>
                        {/* Texto embaixo */}
                        <div className={styles.cardTextCol}>
                          <h3 
                            className={styles.cardTitle}
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                          <p className={styles.cardExcerpt}>
                            {excerptText}
                          </p>
                          <span className={styles.cardBtn}>
                            SAIBA MAIS
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                )
              })
            )}
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
