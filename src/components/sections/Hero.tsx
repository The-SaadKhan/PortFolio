'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Code2, Phone, Mail, ArrowDown } from 'lucide-react'
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
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const socialLinks = [
    {
      href: PERSONAL_INFO.github,
      icon: Github,
      label: 'GitHub',
      color: 'from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black',
      textColor: 'text-white',
    },
    {
      href: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      textColor: 'text-white',
    },
    {
      href: PERSONAL_INFO.dsaProfile,
      icon: Code2,
      label: 'DSA Profile',
      color: 'from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800',
      textColor: 'text-white',
    },
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
              ease: 'easeInOut',
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
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center">
          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 mt-16 pointer-events-none select-text">
            Hi, I'm{' '}
            <span className="gradient-text inline-block">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-20 flex items-center justify-center pointer-events-none">
            <div className="glass-effect px-6 py-3 rounded-2xl pointer-events-none">
              <Typewriter
                options={{
                  strings: [
                    'DSA Expert & Problem Solver',
                    'Full Stack Developer',
                    'React & Node.js Enthusiast',
                    'AI & Machine Learning Explorer',
                    'Hackathon Finalist',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  wrapperClassName: 'font-semibold gradient-text',
                }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-4xl mx-auto leading-relaxed pointer-events-none select-text">
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-10">
            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownloadResume}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}>
              <Download className="h-5 w-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.button>

            {/* Social Links */}
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
                onClick={(e) => e.stopPropagation()}>
                <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {/* Show label only on md and larger screens */}
                <span className="hidden md:inline">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {/* Email Link */}
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 pointer-events-auto"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              onClick={(e) => e.stopPropagation()}>
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
              onClick={(e) => e.stopPropagation()}>
              <Phone className="h-5 w-5" />
              <div className="text-left">
                <p className="text-sm font-semibold">{PERSONAL_INFO.phone}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Call me</p>
              </div>
            </motion.a>

            {/* WhatsApp Button with authentic SVG */}
            <motion.a
  href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25d366] shadow-lg hover:shadow-2xl hover:bg-[#1ebe57] transition-all duration-300"
  whileHover={{ scale: 1.10, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2 }}
  onClick={(e) => e.stopPropagation()}
>
  <svg className="w-7 h-7" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
