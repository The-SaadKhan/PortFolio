'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Award, Code } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Dynamic and results-driven Full Stack Specialist with a solid foundation in both frontend and backend technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer and DSA enthusiast currently pursuing B.Tech in Computer Science 
              from Bennett University. With expertise in modern web technologies like React, Node.js, and MongoDB, 
              I love building scalable applications that solve real-world problems.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Having solved 600+ DSA problems in C++ and participated in multiple hackathons, I combine strong 
              problem-solving skills with practical development experience. I'm always eager to learn new 
              technologies and contribute to innovative projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg"
              >
                <MapPin className="h-5 w-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">{PERSONAL_INFO.location}</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg"
              >
                <GraduationCap className="h-5 w-5 text-primary-600" />
                <span className="text-gray-700 dark:text-gray-300">{PERSONAL_INFO.university}</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <Code className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">600+</h3>
              <p className="text-gray-600 dark:text-gray-400">DSA Problems Solved</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">10+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <GraduationCap className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">8.4</h3>
              <p className="text-gray-600 dark:text-gray-400">CGPA (7th Sem)</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Top 10</h3>
              <p className="text-gray-600 dark:text-gray-400">Hackathon Finalist</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
