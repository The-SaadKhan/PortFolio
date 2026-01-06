"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => item.url.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      
      if (currentSection) {
        const activeItem = items.find(item => item.url === `#${currentSection}`)
        if (activeItem) {
          setActiveTab(activeItem.name)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault()
    setActiveTab(item.name)
    
    const targetId = item.url.substring(1)
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] pt-3 sm:pt-6 px-4 pointer-events-none",
        className,
      )}
      style={{ position: 'fixed' }}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-3 bg-black/70 border border-orange-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg shadow-orange-500/10 pointer-events-auto w-fit mx-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors",
                "text-gray-400 hover:text-orange-400",
                isActive && "bg-orange-500/10 text-orange-400",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={16} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-orange-500/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-t-full">
                    <div className="absolute w-8 sm:w-12 h-4 sm:h-6 bg-orange-500/30 rounded-full blur-md -top-1 sm:-top-2 -left-1 sm:-left-2" />
                    <div className="absolute w-6 sm:w-8 h-4 sm:h-6 bg-yellow-500/30 rounded-full blur-md -top-0.5 sm:-top-1" />
                    <div className="absolute w-3 sm:w-4 h-3 sm:h-4 bg-orange-500/30 rounded-full blur-sm top-0 left-1.5 sm:left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
