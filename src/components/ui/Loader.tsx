'use client'

import { motion } from 'framer-motion'
import { ShaderAnimation } from './shader-animation'

export default function Loader() {

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
    >
      {/* Shader Animation Background */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-28 h-28 mx-auto mb-10 bg-gradient-to-br from-cyan-400/20 via-emerald-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-2xl border border-cyan-400/30"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-pink-300 bg-clip-text text-transparent"
            >
              SK
            </motion.span>
          </motion.div>

          {/* Name Animation */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl font-bold bg-gradient-to-r from-cyan-200 via-emerald-200 to-pink-200 bg-clip-text text-transparent mb-3 drop-shadow-2xl"
          >
            Saad Khan
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-cyan-100/90 text-xl drop-shadow-lg mb-12"
          >
            DSA Expert & Full Stack Developer
          </motion.p>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: i === 0 ? 'linear-gradient(to right, #22d3ee, #10b981)' : 
                             i === 1 ? 'linear-gradient(to right, #10b981, #ec4899)' :
                             'linear-gradient(to right, #ec4899, #22d3ee)'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
