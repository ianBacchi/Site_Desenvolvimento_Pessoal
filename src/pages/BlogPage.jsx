import { Link } from 'react-router-dom'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import styles     from './BlogPage.module.css'
import postImage  from '../assets/keyla-kin-cutout.png' // Placeholder post image
import Reveal     from '../components/Reveal'

// Mock data simulating what the WordPress REST API will return
const MOCK_POSTS = [
  {
    id: 1,
    slug: 'artigo-exemplo',
    title: 'TÍTULO DO ARTIGO',
    subtitle: 'Resumo ou subtítulo do artigo que será puxado do WordPress',
    image: postImage
  }
]

export default function BlogPage() {
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
            {MOCK_POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.1} direction="up" fullHeight={true}>
                <div className={styles.postCard} style={{ height: '100%' }}>
                  <div className={styles.cardPhotoCol}>
                    <img src={post.image} alt={post.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardTextCol}>
                    <h3 className={styles.cardTitle}>{post.title}</h3>
                    <h4 className={styles.cardSubtitle}>{post.subtitle}</h4>
                    <Link to={`/blog/${post.slug}`} className={styles.cardBtn}>
                      SAIBA MAIS
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

      </main>
      <Footer />
      <WhatsApp />
    </>
  )
}
