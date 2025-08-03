'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/utils/constants'

const skillCategories = [
  { name: 'Programming Languages', skills: SKILLS.programming, color: 'from-blue-500 to-cyan-500' },
  { name: 'Frontend', skills: SKILLS.frontend, color: 'from-green-500 to-emerald-500' },
  { name: 'Backend', skills: SKILLS.backend, color: 'from-purple-500 to-violet-500' },
  { name: 'Databases', skills: SKILLS.databases, color: 'from-orange-500 to-red-500' },
  { name: 'Cloud & DevOps', skills: SKILLS.cloud, color: 'from-pink-500 to-rose-500' },
  { name: 'Tools', skills: SKILLS.tools, color: 'from-indigo-500 to-blue-500' },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Proficient in modern technologies across the full stack development spectrum
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-xl p-6"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm bg-white/20 dark:bg-black/20 rounded-full text-gray-700 dark:text-gray-300 border border-white/30 dark:border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
