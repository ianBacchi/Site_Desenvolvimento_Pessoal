import { useEffect, useRef, useState } from 'react'
import styles from '../pages/MentoriaPage.module.css'

const mentoriaData = {
  1: [
    { badge: 'SEMANA 1', title: 'DIAGNÓSTICO E ALINHAMENTO', desc: 'Mapeamento da situação', list: ['Onde a sua imobiliária está hoje?', 'Identificando os maiores gargalos de vendas'] },
    { badge: 'SEMANA 2', title: 'ANÁLISE DE ROTINA', desc: 'Como sua equipe trabalha', list: ['O dia a dia do seu corretor', 'Onde o tempo (e o dinheiro) está sendo perdido'] },
    { badge: 'SEMANA 3', title: 'REESTRUTURAÇÃO BÁSICA', desc: 'Arrumando a casa', list: ['Ajustes rápidos para resultados imediatos', 'O que mudar no funil de vendas hoje'] },
    { badge: 'SEMANA 4', title: 'ALINHAMENTO DE METAS', desc: 'Direção clara', list: ['Definindo objetivos reais para o time', 'Como comunicar metas sem gerar atrito'] }
  ],
  2: [
    { badge: 'SEMANA 1', title: 'LIDERANÇA NA PRÁTICA', desc: 'Postura de gestor', list: ['Como cobrar resultados do jeito certo', 'Acompanhamento de métricas de quem vende'] },
    { badge: 'SEMANA 2', title: 'PLANEJAMENTO DE SOLUÇÕES', desc: 'Ajustes práticos', list: ['Como planejar soluções possíveis', 'Ajustes práticos nos processos da equipe'] },
    { badge: 'SEMANA 3', title: 'AJUSTES E CORREÇÕES', desc: 'Implementação estratégica', list: ['Como ajustar processos sem travar a operação', 'Aplicação das correções orientadas'] },
    { badge: 'SEMANA 4', title: 'MATURIDADE DE GESTÃO', desc: 'Consolidação', list: ['Revisão dos ajustes do mês', 'Análise de impacto nos números'] }
  ],
  3: [
    { badge: 'SEMANA 1', title: 'CONTROLE E NÚMEROS', desc: 'Escala, Nicho e Consistência', list: ['Revisão de mudanças já aplicadas', 'Processos mais organizados', 'Indicadores mais claros'] },
    { badge: 'SEMANA 2', title: 'NICHO E POSICIONAMENTO', desc: 'Foco e assertividade', list: ['Definir região e nicho de atuação', 'Trabalhar faixa de ticket ideal'] },
    { badge: 'SEMANA 3', title: 'MANUTENÇÃO DA GESTÃO', desc: 'Criando hábitos', list: ['Ensinar como manter a consistência', 'Táticas para evitar regressão da gestão'] },
    { badge: 'SEMANA 4', title: 'ESCALA E PRODUÇÃO', desc: 'Crescimento direcionado', list: ['Aumentar produção com mais assertividade', 'Preparação para o próximo ciclo'] }
  ],
  4: [
    { badge: 'SEMANA 1', title: 'DIAGNÓSTICO AVANÇADO', desc: 'Acompanhamento contínuo', list: ['Acompanhamento semanal dos indicadores', 'Como identificar gargalos remanescentes'] },
    { badge: 'SEMANA 2', title: 'SOLUÇÕES ESTRATÉGICAS', desc: 'Alto nível de gestão', list: ['Como planejar soluções possíveis', 'Ajustes práticos nos processos'] },
    { badge: 'SEMANA 3', title: 'OTIMIZAÇÃO OPERACIONAL', desc: 'Correções em movimento', list: ['Como ajustar processos sem travar a operação', 'Aplicação das correções orientadas'] },
    { badge: 'SEMANA 4', title: 'FOCO NA CONVERSÃO', desc: 'Do Lead ao Contrato', list: ['Acompanhamento próximo da chegada do lead ao contrato', 'Avaliação final de resultados da mentoria'] }
  ]
}

export default function WeeksCarousel({ month }) {
  const scrollRef = useRef(null)
  const exactScroll = useRef(0)
  
  const [isHovered, setIsHovered] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const weeks = mentoriaData[month] || []

  useEffect(() => {
    let animationFrameId
    const scroll = () => {
      const el = scrollRef.current
      if (el && !isHovered && !isInteracting && !isDragging) {
        const firstGroup = el.firstElementChild
        if (firstGroup) {
          const jumpPoint = firstGroup.offsetWidth
          exactScroll.current += 1.2 // Velocidade de scroll
          
          if (exactScroll.current >= jumpPoint * 2) {
            exactScroll.current -= jumpPoint
          }
          el.scrollLeft = exactScroll.current
        }
      } else if (el) {
        // Quando o usuário está arrastando ou usando o touch, paramos de forçar o loop pra não travar o dedo dele.
        exactScroll.current = el.scrollLeft
        
        // Apenas fazemos o loop SE ele não estiver interagindo ativamente (dedo solto, rolagem livre parando)
        // E usamos uma margem segura pra não cortar o embalo (momentum).
        if (!isInteracting && !isDragging) {
            const firstGroup = el.firstElementChild
            if (firstGroup) {
              const jumpPoint = firstGroup.offsetWidth
              if (el.scrollLeft >= jumpPoint * 2) {
                el.scrollLeft -= jumpPoint
                exactScroll.current -= jumpPoint
              } else if (el.scrollLeft <= 5) {
                // Se rolar demais pra trás, joga pro meio pra ter mais espaço
                el.scrollLeft += jumpPoint
                exactScroll.current += jumpPoint
              }
            }
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }
    
    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, isInteracting, isDragging])

  // Reset when month changes
  useEffect(() => {
    if (scrollRef.current) {
      const firstGroup = scrollRef.current.firstElementChild
      const jumpPoint = firstGroup ? firstGroup.offsetWidth : 0
      // Começamos no segundo bloco para permitir que o usuário role para trás livremente sem bater na borda 0
      scrollRef.current.scrollLeft = jumpPoint
      exactScroll.current = jumpPoint
    }
  }, [month])

  // Mouse Drag Logic
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovered(false)
  }

  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const renderTrackGroup = (keyPrefix) => (
    <div className={styles.trackGroup} key={keyPrefix}>
      {weeks.map((week, idx) => (
        <div key={idx} className={styles.weekCard}>
          <div className={styles.weekCardHeader}>
            <span className={styles.weekBadge}>{week.badge}</span>
            <h4 className={styles.weekCardTitle}>{week.title}</h4>
          </div>
          <p className={styles.weekCardDesc}>{week.desc}</p>
          <ul className={styles.weekCardList}>
            {week.list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )

  return (
    <div 
      ref={scrollRef}
      className={styles.carouselActive}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => {
        // Dá um pequeno atraso antes de religar o loop pra não cortar o "embalo" do touch (momentum scrolling)
        setTimeout(() => setIsInteracting(false), 800)
      }}
      onWheel={() => {
        setIsInteracting(true)
        // Reseta isInteracting após a rolagem do mouse parar
        clearTimeout(window.wheelTimeout)
        window.wheelTimeout = setTimeout(() => setIsInteracting(false), 800)
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* 4 grupos para garantir espaço infinito para os dois lados (rolagem de segurança) */}
      {renderTrackGroup('track-1')}
      {renderTrackGroup('track-2')}
      {renderTrackGroup('track-3')}
      {renderTrackGroup('track-4')}
    </div>
  )
}
