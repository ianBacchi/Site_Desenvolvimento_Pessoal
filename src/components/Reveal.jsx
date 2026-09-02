import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

/**
 * Reveal Component
 * A premium scroll-reveal wrapper using Framer Motion.
 * It detects when the element is in the viewport and triggers a smooth reveal animation.
 */
export default function Reveal({ children, width = "100%", delay = 0, direction = "up", fullHeight = false }) {
  const ref = useRef(null)
  
  // Trigger animation once when 15% of the element is visible
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  // Variants for different directions
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: direction === "scale" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
    }
  }

  return (
    <div ref={ref} style={{ position: "relative", width, height: fullHeight ? "100%" : "auto", overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.17, 0.55, 0.1, 1] // Super smooth custom easing (very premium)
        }}
        style={{ height: fullHeight ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  )
}
