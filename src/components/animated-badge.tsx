"use client"

import { motion } from "framer-motion"
import React from "react"
import { Badge } from "@/components/ui/badge"

interface AnimatedBadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "secondary" | "destructive" | "outline"
  delay?: number
}

export function AnimatedBadge({ 
  children, 
  className = "", 
  variant = "secondary",
  delay = 0 
}: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 } 
      }}
    >
      <Badge 
        variant={variant} 
        className={`${className} font-medium shadow-sm`}
      >
        {children}
      </Badge>
    </motion.div>
  )
}
