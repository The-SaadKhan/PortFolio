'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Book, School, Award } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'

export default function Education() {
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

  const coursework = [
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Database Management Systems',
    'Computer Networks',
    'Software Engineering',
    'Web Development',
    'Machine Learning Fundamentals',
    'System Design'
  ]

  // Education timeline data
  const educationHistory = [
    {
      level: 'Bachelor\'s Degree',
      institution: PERSONAL_INFO.university,
      degree: PERSONAL_INFO.degree,
      duration: '2022 - 2026',
      grade: PERSONAL_INFO.cgpa,
      status: 'current',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-600'
    },
    {
      level: 'Higher Secondary (12th)',
      institution: 'Green Modern School', // Replace with actual school name
      degree: 'PCM (Physics, Chemistry, Mathematics)',
      duration: '2020 - 2021',
      grade: '78%', // Replace with actual percentage
      status: 'completed',
      icon: School,
      color: 'from-green-500 to-emerald-600'
    },
    {
      level: 'Secondary (10th)',
      institution: 'hamdard Public School', // Replace with actual school name
      degree: 'CBSE Board',
      duration: '2018 - 2019',
      grade: '84%', // Replace with actual percentage
      status: 'completed',
      icon: Award,
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section id="education" className="py-20">
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
            My <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Academic journey from school to university, building strong foundations in science, mathematics, and computer science
          </motion.p>
        </motion.div>

        {/* Education Timeline Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8 mb-16"
        >
          {educationHistory.map((education, index) => (
            <motion.div
              key={education.level}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 border border-white/20 dark:border-white/10"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${education.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <education.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {education.level}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {education.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        education.status === 'current' 
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                      }`}>
                        {education.status === 'current' ? 'In Progress' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Book className="h-4 w-4" />
                      <span>{education.degree}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {education.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current University Details (Expanded) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect rounded-2xl p-8 border border-white/20 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Current Academic Focus
            </h3>

            {/* Academic Progress */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Current CGPA</h4>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {PERSONAL_INFO.cgpa}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white">Academic Status</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Currently in 7th Semester • Expected Graduation: {PERSONAL_INFO.graduationYear}
                </p>
              </div>
            </div>

            {/* Key Coursework */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Coursework & Specializations</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {coursework.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/30 dark:bg-black/30 rounded-lg p-3 text-center border border-white/20 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">
                      {course}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Academic Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >

        </motion.div>
      </div>
    </section>
  )
}
