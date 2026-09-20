import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ to, duration = 2, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = parseInt(to.replace(/\D/g, '')) // Extract only numbers
    if (isNaN(end)) {
      setCount(to) // Fallback if it's not a number
      return
    }

    let startTime = null

    const easeOutQuad = t => t * (2 - t)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percent = Math.min(progress / (duration * 1000), 1)
      
      const easedPercent = easeOutQuad(percent)
      
      setCount(Math.floor(easedPercent * end))

      if (percent < 1) {
        window.requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    window.requestAnimationFrame(animate)
  }, [isInView, to, duration])

  // Pad so the digit count stays fixed during the animation (avoids layout
  // reflow/jitter as the number grows from 1 digit to 2+ digits).
  const digits = typeof count === 'number' ? String(count).padStart(String(to.replace(/\D/g, '')).length, '0') : count

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{digits}{suffix}
    </span>
  )
}
