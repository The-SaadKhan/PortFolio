'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from '@/components/ui/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false)
      setMounted(true)
      // FIXED: Don't force dark mode - let the theme toggle work
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {mounted && (
        <div className="min-h-screen bg-black relative">
          {/* Simplified global background */}
          <div className="fixed inset-0 z-0 bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
          </div>
          
          <Navbar />
          
          <div className="relative z-10">
            <main className="relative">
              <Hero />
              <About />
              <Skills />
              <Education />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}
