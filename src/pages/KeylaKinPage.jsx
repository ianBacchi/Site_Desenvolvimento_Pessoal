import PageShell  from '../components/PageShell'
import CTA        from '../components/CTA'
import Footer     from '../components/Footer'
import WhatsApp   from '../components/WhatsApp'
import ComingSoon from '../components/ComingSoon'

/**
 * Página /keyla-kin
 * ─────────────────────────────────────────────────────────
 * Estrutura (baseado no Canva — página "KEYLA KIN"):
 *   1. PageShell banner  — "Quem é Keyla Kin"
 *   2. Bio principal     — foto grande + trajetória
 *   3. Métricas          — +15 anos, +11 prêmios, +25 palestras, +60%
 *   4. Método            — os 4 pilares (visual diferenciado)
 *   5. Premiações        — logos / conquistas / credenciais
 *   6. Eventos           — galeria de fotos de palestras
 *   7. Missão & Visão    — frase de impacto
 *   8. CTA               — "Vamos trabalhar juntos"
 * ─────────────────────────────────────────────────────────
 */
export default function KeylaKinPage() {
  return (
    <>
      <PageShell
        tag="Especialista em Mercado Imobiliário"
        title={<>Conheça <em style={{ fontStyle:'italic', color:'var(--gold-primary)' }}>Keyla Kin</em></>}
        subtitle="Mais de 15 anos transformando carreiras e imobiliárias no mercado de alto padrão. Método, resultado e autoridade em cada etapa."
      >

        {/* ── SEÇÃO 1: Bio principal + foto ────────── */}
        <ComingSoon
          section="Trajetória — Foto + Texto"
          description="Layout dois colunas: foto grande da Keyla (recorte limpo, fundo escuro) à esquerda. À direita: história de vida, início no mercado, virada de carreira, propósito."
        />

        {/* ── SEÇÃO 2: Métricas de autoridade ──────── */}
        <ComingSoon
          section="Números de Autoridade"
          description="Faixa dourada com 4 métricas: +15 anos de mercado | +11 prêmios | +25 palestras por ano | +60% aumento médio de conversão dos mentorados."
        />

        {/* ── SEÇÃO 3: Os 4 pilares do método ──────── */}
        <ComingSoon
          section="Método Keyla Kin — Os 4 Pilares"
          description="Cards ou timeline: Visão → Posicionamento → Método → Execução. Cada pilar com ícone geométrico dourado, título e descrição."
        />

        {/* ── SEÇÃO 4: Premiações & Credenciais ────── */}
        <ComingSoon
          section="Premiações & Reconhecimentos"
          description="Faixa horizontal com logos de prêmios, veículos de imprensa, editoras ou associações que reconhecem o trabalho da Keyla."
        />

        {/* ── SEÇÃO 5: Galeria de eventos ──────────── */}
        <ComingSoon
          section="Palestras & Eventos — Galeria"
          description="Grid masonry ou linha horizontal de fotos em eventos, congressos e treinamentos. Fotos reais com hover mostrando o nome do evento."
        />

        {/* ── SEÇÃO 6: Missão / Frase de impacto ───── */}
        <ComingSoon
          section="Missão & Frase de Impacto"
          description="Bloco centralizado, fundo dourado translúcido ou escuro: citação da Keyla com fonte serifada grande e italico. Ex: 'Minha missão é fazer o mercado imobiliário produzir mais e melhor.'"
        />

      </PageShell>

      <CTA />
      <Footer />
      <WhatsApp />
    </>
  )
}
