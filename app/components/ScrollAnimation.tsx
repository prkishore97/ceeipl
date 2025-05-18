"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
}

export default function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    } else {
      mainControls.start("hidden")
    }
  }, [isInView, mainControls])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
