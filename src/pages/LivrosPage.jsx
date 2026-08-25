import PageShell  from '../components/PageShell'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import ComingSoon from '../components/ComingSoon'

/**
 * Página /livros
 * ─────────────────────────────────────────────────────────
 * Estrutura (baseado no Canva):
 *   1. PageShell banner  — "Livros & Publicações"
 *   2. Livro em destaque — capa grande + descrição + CTA compra
 *   3. Grid de livros    — outros títulos em cards
 *   4. Sobre a autora    — mini bio no contexto de escritora
 *   5. CTA               — "Adquirir meu exemplar"
 * ─────────────────────────────────────────────────────────
 */
export default function LivrosPage() {
  return (
    <>
      <PageShell
        tag="Conhecimento & Autoridade"
        title={<>Livros <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>que transformam</em></>}
        subtitle="Publicações com estratégias práticas, visão de mercado e conteúdo de autoridade para profissionais do setor imobiliário."
      >

        {/* ── SEÇÃO 1: Livro em destaque ───────────── */}
        <ComingSoon
          section="Livro em Destaque"
          description="Bloco dois colunas: capa do livro em destaque à esquerda, título + sinopse + pontos principais + botão de compra à direita. Fundo escuro com borda dourada."
        />

        {/* ── SEÇÃO 2: Outros livros (grid de cards) ─ */}
        <ComingSoon
          section="Outros Títulos"
          description="Grid 3 colunas: card com capa, título, descrição curta e link de compra para cada livro publicado."
        />

        {/* ── SEÇÃO 3: Sobre a autora (contexto livros) */}
        <ComingSoon
          section="Keyla Kin — Escritora e Especialista"
          description="Mini bloco sobre a trajetória como autora: motivação para escrever, público que impacta, reconhecimentos e premiações literárias/profissionais."
        />

      </PageShell>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
