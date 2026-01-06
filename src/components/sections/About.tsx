'use client'

import { useRef } from 'react'
import EditorialStats from '@/components/ui/editorial-stats'

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section id="about" className="relative py-12 flex items-center justify-center overflow-hidden bg-black" ref={heroRef}>
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            About <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-orange-100/80 max-w-2xl mx-auto px-4">
            Dynamic Full Stack Developer & DSA Enthusiast
          </p>
        </div>

        {/* Editorial Stats Component */}
        <EditorialStats />
      </div>
    </section>
  )
}
