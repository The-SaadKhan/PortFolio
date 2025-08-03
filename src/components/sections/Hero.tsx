'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, ExternalLink, Phone, Mail, ArrowDown, Code2, MessageCircle } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'
import Typewriter from 'typewriter-effect'

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/SAAD_KHAN_RESUME.pdf'
    link.download = 'Saad_Khan_Resume.pdf'
    link.click()
  }

  // Prevent event bubbling from containers
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialLinks = [
    { 
      href: PERSONAL_INFO.github, 
      icon: Github, 
      label: 'GitHub',
      color: 'from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black',
      textColor: 'text-white'
    },
    { 
      href: PERSONAL_INFO.linkedin, 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      textColor: 'text-white'
    },
    { 
      href: PERSONAL_INFO.dsaProfile, 
      icon: Code2, 
      label: 'DSA Profile',
      color: 'from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800',
      textColor: 'text-white'
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* FIXED: Added onClick handler to prevent bubbling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" onClick={handleContainerClick}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          {/* Name - NO CLICKABLE WRAPPER */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pointer-events-none select-text"
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Typewriter Effect - NO CLICKABLE WRAPPER */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20 flex items-center justify-center pointer-events-none"
          >
            <div className="glass-effect px-6 py-3 rounded-2xl pointer-events-none">
              <Typewriter
                options={{
                  strings: [
                    'DSA Expert & Problem Solver',
                    'Full Stack Developer',
                    'React & Node.js Enthusiast',
                    'AI & Machine Learning Explorer',
                    'Hackathon Finalist'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  wrapperClassName: "font-semibold gradient-text"
                }}
              />
            </div>
          </motion.div>

          {/* Description - NO CLICKABLE WRAPPER */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed pointer-events-none select-text"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Action Buttons - ONLY BUTTONS CLICKABLE */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {/* Download Resume Button - ISOLATED CLICKABLE AREA */}
            <motion.button
              onClick={handleDownloadResume}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.button>

            {/* Social Links - ONLY ANCHOR CONTENT CLICKABLE */}
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center space-x-3 bg-gradient-to-r ${link.color} ${link.textColor} px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 pointer-events-auto`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info - ONLY LINKS CLICKABLE */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {/* Email Link - ISOLATED CLICKABLE AREA */}
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Mail className="h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">{PERSONAL_INFO.email}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Email me</p>
              </div>
            </motion.a>

            {/* Phone Link - ISOLATED CLICKABLE AREA */}
            <motion.a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">{PERSONAL_INFO.phone}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Call me</p>
              </div>
            </motion.a>

            {/* WhatsApp Button - With Proper WhatsApp Logo */}
<motion.a
  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2 }}
  onClick={(e) => e.stopPropagation()}
>
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
</motion.a>

          </motion.div>

          {/* Scroll Indicator - NO CLICKABLE AREA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center pointer-events-none"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full glass-effect"
            >
              <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
