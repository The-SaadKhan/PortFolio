'use client'

import { BentoGrid, type BentoItem } from '@/components/ui/bento-grid'
import { Code2, Layers, Database, Cloud, Wrench, Cpu } from 'lucide-react'
import { SKILLS } from '@/utils/constants'

const skillItems: BentoItem[] = [
  {
    title: 'Programming Languages',
    meta: `${SKILLS.programming.length} languages`,
    description: 'Proficient in multiple programming languages with strong focus on C++, JavaScript, and TypeScript',
    icon: <Code2 className="w-4 h-4 text-orange-400" />,
    status: 'Expert',
    tags: SKILLS.programming.slice(0, 4),
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Frontend Development',
    meta: `${SKILLS.frontend.length} frameworks`,
    description: 'Modern frontend technologies with React, Next.js, and Tailwind CSS',
    icon: <Layers className="w-4 h-4 text-yellow-400" />,
    status: 'Advanced',
    tags: SKILLS.frontend.slice(0, 3),
  },
  {
    title: 'Backend & APIs',
    meta: `${SKILLS.backend.length} technologies`,
    description: 'Server-side development with Node.js, Express.js, and RESTful APIs',
    icon: <Cpu className="w-4 h-4 text-amber-400" />,
    status: 'Proficient',
    tags: SKILLS.backend.slice(0, 3),
    colSpan: 2,
  },
  {
    title: 'Databases',
    meta: `${SKILLS.databases.length} systems`,
    description: 'Database design and management across SQL and NoSQL platforms',
    icon: <Database className="w-4 h-4 text-orange-500" />,
    tags: SKILLS.databases.slice(0, 3),
  },
  {
    title: 'Cloud & DevOps',
    meta: `${SKILLS.cloud.length} platforms`,
    description: 'Cloud deployment and infrastructure with GCP, Firebase, and Vercel',
    icon: <Cloud className="w-4 h-4 text-yellow-500" />,
    status: 'Active',
    tags: SKILLS.cloud.slice(0, 3),
  },
  {
    title: 'Development Tools',
    meta: `${SKILLS.tools.length} tools`,
    description: 'Version control, API testing, and development environment setup',
    icon: <Wrench className="w-4 h-4 text-amber-500" />,
    tags: SKILLS.tools.slice(0, 3),
    colSpan: 2,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
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

      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Technical <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-orange-100/80 max-w-3xl mx-auto px-4">
            Proficient in modern technologies across the full stack development spectrum
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid items={skillItems} />
      </div>
    </section>
  )
}
