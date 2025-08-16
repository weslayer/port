"use client"

import { motion } from "framer-motion"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className = "", delay = 0.1 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
    >
      <Card className={`overflow-hidden border-border/40 ${className}`}>
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.div>
  )
}
