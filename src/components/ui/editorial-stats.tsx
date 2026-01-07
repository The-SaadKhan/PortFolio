"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Code, Award, Trophy, GraduationCap } from "lucide-react"

interface StatItem {
  id: number
  title: string
  description: string
  stat: string
  label: string
  icon: React.ElementType
  gradient: string
}

const stats: StatItem[] = [
  {
    id: 1,
    title: "About Me",
    description: "I'm a passionate Full Stack Developer and DSA enthusiast pursuing B.Tech in Computer Science from Bennett University. I combine strong problem-solving skills with practical development experience in modern web technologies.",
    stat: "CSE",
    label: "Bennett University • 2026",
    icon: GraduationCap,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    id: 2,
    title: "DSA Expertise",
    description: "Solved 800+ data structures and algorithms problems in C++. Strong foundation in problem-solving with focus on optimized solutions and competitive programming techniques.",
    stat: "800+",
    label: "Problems Solved • C++",
    icon: Code,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    id: 3,
    title: "Projects",
    description: "Built 10+ full-stack applications using React, Node.js, and MongoDB. Experienced in creating scalable solutions that solve real-world problems with modern technologies.",
    stat: "10+",
    label: "Completed Projects",
    icon: Trophy,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    title: "Achievements",
    description: "Top 10 finalist in multiple hackathons. Maintained 8.5 CGPA while actively contributing to innovative projects and participating in competitive programming contests.",
    stat: "Top 10",
    label: "Hackathon Finalist • 8.5 CGPA",
    icon: Award,
    gradient: "from-orange-600 to-red-500"
  }
]

export default function EditorialStats() {
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActive(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 300)
  }

  const handlePrev = () => {
    const newIndex = active === 0 ? stats.length - 1 : active - 1
    handleChange(newIndex)
  }

  const handleNext = () => {
    const newIndex = active === stats.length - 1 ? 0 : active + 1
    handleChange(newIndex)
  }

  const current = stats[active]
  const IconComponent = current.icon

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Large index number */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8">
        <span
          className={`text-7xl sm:text-[120px] font-light leading-none bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent select-none transition-all duration-500`}
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 sm:pt-6 w-full">
          {/* Title */}
          <h3
            className={`text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.title}
          </h3>

          {/* Description */}
          <p
            className={`text-base sm:text-lg font-light leading-relaxed text-orange-100/90 tracking-tight transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            {current.description}
          </p>

          {/* Stat info with icon */}
          <div
            className={`mt-6 sm:mt-10 group cursor-default transition-all duration-300 delay-100 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${current.gradient} ring-2 ring-orange-300/20 group-hover:ring-orange-300/40 transition-all duration-300`}>
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
              <div>
                <p className="font-bold text-lg sm:text-xl text-white">{current.stat}</p>
                <p className="text-xs sm:text-sm text-orange-200/80">
                  {current.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - horizontal line selector */}
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex items-center gap-2 sm:gap-3">
            {stats.map((_, index) => (
              <button key={index} onClick={() => handleChange(index)} className="group relative py-3 sm:py-4">
                <span
                  className={`block h-px transition-all duration-500 ease-out ${
                    index === active
                      ? `w-10 sm:w-12 bg-gradient-to-r ${stats[active].gradient}`
                      : "w-4 sm:w-6 bg-orange-300/20 group-hover:w-6 sm:group-hover:w-8 group-hover:bg-orange-300/40"
                  }`}
                />
              </button>
            ))}
          </div>
          <span className="text-xs text-orange-200/60 tracking-widest uppercase">
            {String(active + 1).padStart(2, "0")} / {String(stats.length).padStart(2, "0")}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full text-orange-200/40 hover:text-orange-100 hover:bg-orange-500/10 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full text-orange-200/40 hover:text-orange-100 hover:bg-orange-500/10 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
