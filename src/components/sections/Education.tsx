'use client'

import { AnimatedTabs } from '@/components/ui/animated-tabs'
import { GraduationCap, School, Award, Book, Calendar, Trophy } from 'lucide-react'
import { PERSONAL_INFO } from '@/utils/constants'

export default function Education() {
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

  const educationTabs = [
    {
      id: 'bachelor',
      label: "Bachelor's Degree",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-orange-100 mb-2">
                {PERSONAL_INFO.university}
              </h3>
              <p className="text-orange-200/80 font-medium mb-1">
                {PERSONAL_INFO.degree}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-orange-200/60 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2022 - 2026
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  CGPA: {PERSONAL_INFO.cgpa}
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                Currently in 8th Semester
              </span>
            </div>
          </div>
          
          {/* Key Coursework */}
          {/* <div className="mt-6">
            <h4 className="text-sm font-semibold text-orange-200 mb-3 flex items-center gap-2">
              <Book className="w-4 h-4" />
              Key Coursework & Specializations
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {coursework.map((course) => (
                <div
                  key={course}
                  className="bg-orange-500/10 rounded-lg px-3 py-2 text-xs text-orange-100/80 text-center border border-orange-400/20 hover:border-orange-400/40 hover:bg-orange-500/20 transition-all"
                >
                  {course}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      ),
    },
    {
      id: 'higher-secondary',
      label: 'Higher Secondary (12th)',
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
              <School className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-orange-100 mb-2">
                Green Modern School
              </h3>
              <p className="text-orange-200/80 font-medium mb-1">
                PCM (Physics, Chemistry, Mathematics)
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-orange-200/60 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2020 - 2021
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  Grade: 78%
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30">
                Completed
              </span>
            </div>
          </div>
          
          {/* <div className="mt-6 bg-orange-500/5 rounded-lg p-4 border border-orange-400/20">
            <p className="text-sm text-orange-100/80 leading-relaxed">
              Focused on science and mathematics, building strong foundations in analytical thinking and problem-solving. 
              Developed core understanding of mathematical principles and scientific reasoning essential for computer science.
            </p>
          </div> */}
        </div>
      ),
    },
    {
      id: 'secondary',
      label: 'Secondary (10th)',
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-orange-100 mb-2">
                Hamdard Public School
              </h3>
              <p className="text-orange-200/80 font-medium mb-1">
                CBSE Board
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-orange-200/60 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  2018 - 2019
                </span>
                <span className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  Grade: 84%
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-400/30">
                Completed
              </span>
            </div>
          </div>
          
          {/* <div className="mt-6 bg-orange-500/5 rounded-lg p-4 border border-orange-400/20">
            <p className="text-sm text-orange-100/80 leading-relaxed">
              Completed secondary education with strong academic performance across all subjects. 
              Established fundamental knowledge in mathematics, science, and languages that paved the way for higher studies in technology.
            </p>
          </div> */}
        </div>
      ),
    },
  ]

  return (
    <section id="education" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Animated Background - similar to hero */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 10%, #ffffff00 40%, #13131300 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#a3a3a32e_1px,transparent_1px),linear-gradient(to_bottom,#a3a3a32e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-orange-500/10 backdrop-blur-md border border-orange-300/30 rounded-full">
            <span className="text-orange-200 text-sm font-semibold uppercase tracking-wider">Education</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-4">
            My <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-orange-100/80 max-w-3xl mx-auto">
            Academic journey from school to university, building strong foundations in science, mathematics, and computer science
          </p>
        </div>

        {/* Animated Tabs */}
        <AnimatedTabs tabs={educationTabs} defaultTab="bachelor" />
      </div>
    </section>
  )
}
