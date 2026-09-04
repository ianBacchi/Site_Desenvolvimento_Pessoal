import { useParams, Link } from 'react-router-dom'
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
                TÍTULO DO ARTIGO
              </h1>
              <h2 className={styles.postSubtitle}>
                Subtítulo do artigo ou breve resumo para introduzir o tema
              </h2>
            </header>

            <div className={styles.postBody}>
              <img 
                src={postImage} 
                alt="Imagem de destaque do post" 
                className={styles.postFeaturedImage} 
              />
              
              <p>
                Este é o corpo do artigo onde o conteúdo escrito no WordPress será exibido. A imagem ao lado é a <strong>Imagem Destacada (Featured Image)</strong> que a sua cliente cadastrar lá no painel.
              </p>
              <p>
                Quando a integração for feita, todo esse texto será substituído pelo conteúdo real do post. O layout já está preparado para receber os parágrafos, negritos, links e imagens adicionais que forem inseridos no editor do site.
              </p>
              <p>
                A estruturação do título e do subtítulo logo acima também está mapeada para puxar as informações certas (Título e Resumo/Excerpt) para que a experiência de leitura fique perfeita e alinhada ao design do site.
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
      <Footer />
      <WhatsApp />
    </>
  )
}
