'use client'

import { useRef } from 'react'
import EditorialStats from '@/components/ui/editorial-stats'

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" ref={heroRef}>
      {/* Animated Background - similar to hero */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, #13131300 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
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
