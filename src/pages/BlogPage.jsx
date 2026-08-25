import PageShell  from '../components/PageShell'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import ComingSoon from '../components/ComingSoon'

/**
 * Página /blog
 * ─────────────────────────────────────────────────────────
 * Estrutura (baseado no Canva — duas variações vistas):
 *   1. PageShell banner  — "Blog / Conteúdo"
 *   2. Post em destaque  — artigo principal com imagem grande
 *   3. Grid de posts     — cards menores (foto + título + data + tag)
 *   4. Sidebar / filtros — categorias ou mais recentes (opcional)
 *   5. CTA newsletter    — "Receba conteúdo exclusivo"
 * ─────────────────────────────────────────────────────────
 */
export default function BlogPage() {
  return (
    <>
      <PageShell
        tag="Conteúdo & Estratégia"
        title={<>Alta Performance <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>para corretores</em> de mente</>}
        subtitle="Artigos, estratégias e insights sobre o mercado imobiliário de alto padrão, gestão de equipes e posicionamento profissional."
      >

        {/* ── SEÇÃO 1: Post em destaque ────────────── */}
        <ComingSoon
          section="Post em Destaque"
          description="Card grande com imagem de capa, categoria, título, trecho do artigo, data e botão 'Ler artigo'. Layout horizontal dois colunas."
        />

        {/* ── SEÇÃO 2: Grid de posts recentes ──────── */}
        <ComingSoon
          section="Artigos Recentes — Grid"
          description="Grid 3 colunas de cards: foto, tag de categoria (dourada), título, data, tempo de leitura e link 'Ler mais'. Fundo escuro com hover sutil."
        />

        {/* ── SEÇÃO 3: CTA Newsletter ──────────────── */}
        <ComingSoon
          section="Receba Conteúdo Exclusivo — Newsletter"
          description="Faixa com campo de e-mail + botão de inscrição. Texto: 'Receba estratégias e insights diretamente no seu e-mail.' Fundo dourado translúcido."
        />

      </PageShell>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
