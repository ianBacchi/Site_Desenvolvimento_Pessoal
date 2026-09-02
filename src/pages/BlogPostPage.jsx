import { useParams, Link } from 'react-router-dom'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './BlogPostPage.module.css'
import postImage  from '../assets/keyla-kin-cutout.png' // Placeholder

// In a real headless WP, this component would fetch the post by slug:
// useEffect(() => { fetch(`/wp-json/wp/v2/posts?slug=${slug}`) }, [slug])

export default function BlogPostPage() {
  const { slug } = useParams()

  return (
    <>
      <main className={styles.main}>
        
        {/* CUSTOM BLOG HEADER (Shared with BlogPage) */}
        <section className={styles.blogHeader}>
          <div className={`container ${styles.headerContainer}`}>
            <h1 className={styles.bgTitle}>BLOG</h1>
          </div>
        </section>

        {/* POST CONTENT */}
        <section className={styles.postSection}>
          <div className={`container ${styles.postContainer}`}>
            
            <header className={styles.postHead}>
              <h1 className={styles.postTitle}>
                ALTA PERFORMANCE PARA CORRETORES DE IMÓVEIS
              </h1>
              <h2 className={styles.postSubtitle}>
                SUBTÍTULO
              </h2>
            </header>

            <div className={styles.postBody}>
              <img 
                src={postImage} 
                alt="Imagem de destaque do post" 
                className={styles.postFeaturedImage} 
              />
              
              <p>
                Com o Curso de Alta Performance para Corretores de Imóveis com Keyla Kin, aprenda o caminho completo da venda, desde o posicionamento até a negociação.
              </p>
              <p>
                Aprenda de forma simples, prática, sem teoria excessiva e sem enrolação, como destravar as vendas e se tornar um profissional mais organizado e confiante no processo comercial.
              </p>
              <p>
                Adquira o curso agora e alcance o sucesso nas suas vendas de imóveis.
              </p>
              <p>
                Com o Curso de Alta Performance para Corretores de Imóveis com Keyla Kin, aprenda o caminho completo da venda, desde o posicionamento até a negociação.
              </p>
              <p>
                Aprenda de forma simples, prática, sem teoria excessiva e sem enrolação, como destravar as vendas e se tornar um profissional mais organizado e confiante no processo comercial.
              </p>
              <p>
                Adquira o curso agora e alcance o sucesso nas suas vendas de imóveis.
              </p>
              <p>
                Com o Curso de Alta Performance para Corretores de Imóveis com Keyla Kin, aprenda o caminho completo da venda, desde o posicionamento até a negociação.
              </p>
              <p>
                Aprenda de forma simples, prática, sem teoria excessiva e sem enrolação, como destravar as vendas e se tornar um profissional mais organizado e confiante no processo comercial.
              </p>
              <p>
                Adquira o curso agora e alcance o sucesso nas suas vendas de imóveis.
              </p>
              
              {/* This content will eventually come from WP as dangerouslySetInnerHTML */}
            </div>

            <div className={styles.backLinkWrapper}>
              <Link to="/blog" className={styles.backLink}>
                &larr; Voltar para o Blog
              </Link>
            </div>
            
          </div>
        </section>

      </main>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
