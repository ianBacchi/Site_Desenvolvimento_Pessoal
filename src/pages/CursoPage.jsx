import PageShell  from '../components/PageShell'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import ComingSoon from '../components/ComingSoon'

/**
 * Página /curso
 * ─────────────────────────────────────────────────────────
 * Estrutura (baseado no Canva):
 *   1. PageShell banner  — título + descrição do curso
 *   2. Manchete / Hook   — frase de impacto + vídeo ou foto
 *   3. Para quem é       — perfil do aluno ideal
 *   4. O que você vai aprender — módulos / conteúdo
 *   5. Diferenciais      — por que este curso é diferente
 *   6. Depoimentos       — ex-alunos com resultados
 *   7. CTA / Inscrição   — botão principal de compra/inscrição
 * ─────────────────────────────────────────────────────────
 */
export default function CursoPage() {
  return (
    <>
      <PageShell
        tag="Para corretores de alto padrão"
        title={<>Formação Online <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>para Corretores</em></>}
        subtitle="Aprenda a escalar vendas no mercado imobiliário de alto padrão, construir autoridade e atender os melhores clientes com confiança e método."
      >

        {/* ── SEÇÃO 1: Hook / vídeo de apresentação ── */}
        <ComingSoon
          section="Apresentação do Curso — Vídeo ou foto de destaque"
          description="Bloco com vídeo incorporado ou imagem grande da Keyla. Frase de impacto acima: 'A professora que toda mentora mente, que todo corretor de sucesso precisaria ter.'"
        />

        {/* ── SEÇÃO 2: Para quem é ─────────────────── */}
        <ComingSoon
          section="Para quem é este curso"
          description="Lista com ícones: corretores iniciantes querendo se posicionar, corretores experientes querendo escalar, profissionais que querem atender alto padrão."
        />

        {/* ── SEÇÃO 3: Módulos / Grade do curso ────── */}
        <ComingSoon
          section="O que você vai aprender — Módulos"
          description="Lista numerada de módulos com título, descrição curta e número de aulas. Visual escuro com destaque dourado em cada número."
        />

        {/* ── SEÇÃO 4: Diferenciais ────────────────── */}
        <ComingSoon
          section="Por que este curso é diferente"
          description="3 a 5 diferenciais em cards: Conteúdo prático, Método testado, Comunidade exclusiva, Suporte, Atualizações inclusas."
        />

        {/* ── SEÇÃO 5: Depoimentos de ex-alunos ────── */}
        <ComingSoon
          section="O que dizem os alunos"
          description="Cards de depoimentos com foto, nome, resultado específico e estrelas. Foco em transformações reais e números."
        />

      </PageShell>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
