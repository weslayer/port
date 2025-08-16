"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export function FadeInOnScroll({ 
  children, 
  delay = 0, 
  className = "", 
  once = true 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  className?: string, 
  once?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
}: {
  src: string
  alt: string
  className?: string
  speed?: number
}) {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`${speed * 50}%`, `${-speed * 50}%`]
  )

  useEffect(() => {
    if (!ref.current) return
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop ?? 0)
      setClientHeight(window.innerHeight)
    }
    
    setValues()
    window.addEventListener("resize", setValues)
    
    return () => window.removeEventListener("resize", setValues)
  }, [ref])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="w-full h-full object-cover object-center" 
        />
      </motion.div>
    </div>
  )
}
