"use client"

import { motion } from "framer-motion"
import React from "react"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-3xl font-bold relative pb-2 mb-8 ${className}`}
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: "3rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute bottom-0 left-0 h-1 bg-primary rounded"
      />
    </motion.h2>
  )
}
