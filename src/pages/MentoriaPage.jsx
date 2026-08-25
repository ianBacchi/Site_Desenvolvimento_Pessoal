import PageShell  from '../components/PageShell'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import ComingSoon from '../components/ComingSoon'

/**
 * Página /mentoria
 * ─────────────────────────────────────────────────────────
 * Estrutura (baseado no Canva):
 *   1. PageShell banner  — título + descrição
 *   2. Intro / Destaque  — para quem é + foto Keyla
 *   3. Benefícios        — lista numerada (4 pontos do método)
 *   4. Como funciona     — passo a passo (1 → 2 → 3 → 4)
 *   5. Depoimentos       — prova social específica de mentoria
 *   6. CTA final         — "Quero minha mentoria"
 * ─────────────────────────────────────────────────────────
 * 🔧 Seções marcadas com <ComingSoon> ainda serão desenvolvidas.
 */
export default function MentoriaPage() {
  return (
    <>
      <PageShell
        tag="Para gestores e donos de imobiliária"
        title={<>Mentoria Estratégica <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>Individual</em></>}
        subtitle="Acompanhamento personalizado para donos e gestores que querem escalar resultados com método, gestão de equipe e posicionamento de alto padrão."
      >

        {/* ── SEÇÃO 1: Para quem é + foto ───────────── */}
        <ComingSoon
          section="Para quem é a Mentoria"
          description="Bloco: foto da Keyla + lista de perfis ideais (donos, gestores, líderes de equipe) com linguagem direta e destaques em dourado."
        />

        {/* ── SEÇÃO 2: Benefícios / O que você vai ganhar */}
        <ComingSoon
          section="O que você vai transformar"
          description="Grid de benefícios: Gestão de equipe, Processos de venda, Posicionamento premium, Recrutamento e seleção, Cultura de resultado."
        />

        {/* ── SEÇÃO 3: Como funciona (passo a passo) ── */}
        <ComingSoon
          section="Como funciona a Mentoria — Passo a passo"
          description="Timeline vertical numerada (1→2→3→4): Diagnóstico → Planejamento → Execução Acompanhada → Revisão e Expansão."
        />

        {/* ── SEÇÃO 4: Prova social ──────────────────── */}
        <ComingSoon
          section="O que dizem os mentorados"
          description="Cards de depoimentos com foto, nome, cargo e resultado obtido. Mínimo 3 casos reais."
        />

      </PageShell>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
