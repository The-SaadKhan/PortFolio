"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlowingEffectProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowingEffect({
  children,
  className,
  glowColor = "rgba(255, 165, 0, 0.5)", // Orange glow
}: GlowingEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing border effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Inner border */}
      <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
        {children}
      </div>
    </div>
  )
}

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowingCard({
  children,
  className,
  glowColor = "rgba(255, 165, 0, 0.4)",
}: GlowingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <GlowingEffect className={className} glowColor={glowColor}>
        <div className="p-6 h-full">{children}</div>
      </GlowingEffect>
    </motion.div>
  )
}
