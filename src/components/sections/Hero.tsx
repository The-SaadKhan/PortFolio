'use client'

import { Github, Linkedin, Download, Code2, Phone, Mail } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'
import AnimatedShaderHero from '@/components/ui/animated-shader-hero'

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/SAAD_KHAN_RESUME.pdf'
    link.download = 'Saad_Khan_Resume.pdf'
    link.click()
  }

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative">
      <AnimatedShaderHero
        trustBadge={{
          text: `${PERSONAL_INFO.university} • CSE Student • Hackathon Finalist`,
          icons: []
        }}
        headline={{
          line1: `Hi, I'm ${PERSONAL_INFO.name}`,
          line2: 'DSA Expert & Full Stack Developer'
        }}
        subtitle={PERSONAL_INFO.tagline}
        buttons={{
          primary: {
            text: 'Download Resume',
            onClick: handleDownloadResume
          },
          secondary: {
            text: 'View Projects',
            onClick: handleViewProjects
          }
        }}
      />
      
      {/* Contact & Social Links Overlay */}
      <div className="absolute bottom-6 sm:bottom-12 md:bottom-16 left-0 right-0 z-20 flex flex-col items-center gap-4 sm:gap-6 px-4">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1.5 sm:space-x-2 bg-gray-800/80 hover:bg-gray-900/90 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 text-xs sm:text-sm"
          >
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1.5 sm:space-x-2 bg-blue-600/80 hover:bg-blue-700/90 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/50 hover:border-blue-400/50 text-xs sm:text-sm"
          >
            <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a
            href={PERSONAL_INFO.dsaProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1.5 sm:space-x-2 bg-green-600/80 hover:bg-green-700/90 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/50 hover:border-green-400/50 text-xs sm:text-sm"
          >
            <Code2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">DSA Profile</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center space-x-1.5 sm:space-x-2 text-orange-100/90 hover:text-white transition-colors duration-300 backdrop-blur-sm bg-black/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
          >
            <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="font-medium truncate max-w-[150px] sm:max-w-none">{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="inline-flex items-center space-x-1.5 sm:space-x-2 text-orange-100/90 hover:text-white transition-colors duration-300 backdrop-blur-sm bg-black/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm"
          >
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="font-medium">{PERSONAL_INFO.phone}</span>
          </a>

          <a
            href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#25d366] shadow-lg hover:shadow-2xl hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300 flex-shrink-0"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
