'use client'

import { Moon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  return (
    <motion.div
      className="relative p-3 rounded-xl glass-effect"
      whileHover={{ scale: 1.05 }}
      aria-label="Dark mode"
    >
      <motion.div
        className="relative z-10"
        animate={{ 
          rotate: 180,
          scale: 1.1
        }}
        transition={{ 
          duration: 0.5, 
          ease: "easeInOut",
          type: "spring",
          stiffness: 200,
          damping: 10
        }}
      >
        <Moon className="h-5 w-5 text-blue-400" />
      </motion.div>
    </motion.div>
  )
}
