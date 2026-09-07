import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './BlogPostPage.module.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPost(data[0])
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao buscar post:', err)
        setLoading(false)
      })
  }, [slug])

  return (
    <>
      <main className={styles.main}>
        
        {/* CUSTOM BLOG HEADER */}
        <section className={styles.blogHeader}>
          <div className={`container ${styles.headerContainer}`}>
            <h1 className={styles.bgTitle}>BLOG</h1>
          </div>
        </section>

        {/* POST CONTENT */}
        <section className={styles.postSection}>
          <div className={`container ${styles.postContainer}`}>
            
            {loading ? (
              <p style={{ textAlign: 'center', width: '100%', color: 'var(--text-muted)' }}>
                Carregando artigo...
              </p>
            ) : !post ? (
              <div style={{ textAlign: 'center', width: '100%' }}>
                <h2 style={{ color: 'var(--text-white)' }}>Artigo não encontrado</h2>
                <Link to="/blog" className={styles.backLink} style={{ display: 'inline-block', marginTop: '20px' }}>
                  &larr; Voltar para o Blog
                </Link>
              </div>
            ) : (
              <>
                {/* 1. TÍTULO do post */}
                <header className={styles.postHead}>
                  <h1 
                    className={styles.postTitle}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </header>

                {/* 2. FOTO DE CAPA (Imagem Destacada do WordPress) */}
                {(() => {
                  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  if (featuredMedia) {
                    return (
                      <div className={styles.featuredImageWrapper}>
                        <img 
                          src={featuredMedia} 
                          alt={post.title.rendered} 
                          className={styles.postFeaturedImage} 
                        />
                      </div>
                    )
                  }
                  return null;
                })()}

                {/* 3. CONTEÚDO do post (texto, imagens internas, áudio, vídeo — tudo que foi escrito no editor do WordPress) */}
                <div 
                  className={styles.postBody}
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />

                <div className={styles.backLinkWrapper}>
                  <Link to="/blog" className={styles.backLink}>
                    &larr; Voltar para o Blog
                  </Link>
                </div>
              </>
            )}
            
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
