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
          
          if (exactScroll.current >= jumpPoint) {
            exactScroll.current -= jumpPoint
          }
          el.scrollLeft = exactScroll.current
        }
      } else if (el) {
        // Se o usuário interagiu, sincronizamos a posição real
        exactScroll.current = el.scrollLeft
        // Também aplicamos a lógica do loop infinito manualmente enquanto ele arrasta, para nunca bater no final!
        const firstGroup = el.firstElementChild
        if (firstGroup) {
          const jumpPoint = firstGroup.offsetWidth
          if (el.scrollLeft >= jumpPoint) {
            el.scrollLeft -= jumpPoint
            exactScroll.current -= jumpPoint
          } else if (el.scrollLeft <= 0) {
            // Se tentar rolar pra trás no começo, pula pro segundo set
            el.scrollLeft += jumpPoint
            exactScroll.current += jumpPoint
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
      scrollRef.current.scrollLeft = 0
      exactScroll.current = 0
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

  // Função helper para renderizar um grupo
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
      onTouchEnd={() => setIsInteracting(false)}
      onWheel={() => setIsInteracting(true)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {/* 
        Renderizamos múltiplos grupos para dar a ilusão de um círculo infinito. 
        3 grupos garantem que, mesmo em telas muito largas, não apareça espaço em branco.
      */}
      {renderTrackGroup('track-1')}
      {renderTrackGroup('track-2')}
      {renderTrackGroup('track-3')}
    </div>
  )
}
