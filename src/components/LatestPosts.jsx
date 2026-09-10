import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './LatestPosts.module.css'
import Reveal from './Reveal'

function stripHtml(html, maxLength = 130) {
  if (!html) return ''
  const text = html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLength) return text
  const trimmed = text.substring(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(' ')
  return trimmed.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...'
}

function formatDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function LatestPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let active = true
    fetch('/wp-json/wp/v2/posts?_embed&per_page=3')
      .then(res => res.json())
      .then(data => {
        if (active && Array.isArray(data)) setPosts(data)
      })
      .catch(() => {})
    return () => { active = false }
  }, [])

  // Sem posts (ou WordPress fora do ar) a seção simplesmente não aparece
  if (posts.length === 0) return null

  return (
    <section id="ultimos-textos" className={`${styles.section} section-py`}>
      <div className="container">

        <Reveal>
          <div className={styles.header}>
            <div>
              <p className="eyebrow">Blog</p>
              <h2 className={styles.title}>Últimos textos</h2>
            </div>
            <Link to="/blog" className={styles.seeAll}>Ver todos</Link>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {posts.map((post, i) => {
            const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
            const date = formatDate(post.date)
            const excerpt = stripHtml(post.excerpt?.rendered || post.content?.rendered)

            return (
              <Reveal key={post.id} delay={i * 0.1} direction="up" fullHeight={true}>
                <Link to={`/blog/${post.slug}`} className={styles.card}>
                  <p className={styles.meta}>
                    {category && <span className={styles.category}>{category}</span>}
                    {category && date && <span className={styles.dot}>·</span>}
                    {date}
                  </p>
                  <h3
                    className={styles.cardTitle}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <p className={styles.excerpt}>{excerpt}</p>
                </Link>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}
