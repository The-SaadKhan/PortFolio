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

      {/* Container with click prevention */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" onClick={handleContainerClick}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pointer-events-none select-text"
          >
            Hi, I'm{' '}
            <span className="gradient-text inline-block">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Typewriter Effect */}
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

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed pointer-events-none select-text"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownloadResume}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.button>

            {/* Social Links with icon only on mobile */}
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
                {/* Show label only on md and larger screens */}
                <span className="hidden md:inline">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12"
          >
            {/* Email Link */}
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

            {/* Phone Link */}
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

            {/* WhatsApp Button */}
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
                {/* WhatsApp SVG Path (shortened here): */}
                <path d="M17.472 14.382c-..." />
              </svg>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
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
