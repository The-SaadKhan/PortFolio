'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ExternalLink, Heart } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { href: PERSONAL_INFO.github, icon: Github, label: 'GitHub' },
    { href: PERSONAL_INFO.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: PERSONAL_INFO.dsaProfile, icon: ExternalLink, label: 'DSA Profile' },
    { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Email' },
    { href: `tel:${PERSONAL_INFO.phone}`, icon: Phone, label: 'Phone' },
  ]

  return (
    <footer className="bg-white/80 dark:bg-black/40 backdrop-blur-sm border-t border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Saad Khan</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              DSA Expert & Full Stack Developer passionate about creating innovative solutions 
              and solving complex problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Skills','Education', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Get In Touch</h4>
            <div className="space-y-2">
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{PERSONAL_INFO.email}</span>
              </motion.a>
              <motion.a
                href={`tel:${PERSONAL_INFO.phone}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{PERSONAL_INFO.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Social Links - REMOVED BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center space-x-6 pt-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright - REMOVED BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center pt-8 mt-8"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Saad Khan.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
