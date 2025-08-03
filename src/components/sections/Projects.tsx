'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react'
import { GitHubRepo } from '@/types/github'
import { GITHUB_API_URL } from '@/utils/constants'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        console.log('Fetching repos from:', GITHUB_API_URL)
        const response = await fetch(GITHUB_API_URL)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: GitHubRepo[] = await response.json()
        console.log('Raw GitHub data:', data)
        
        // COMPLETELY SIMPLIFIED FILTERING - Only exclude forks and profile repo
        const filteredRepos = data
          .filter(repo => {
            console.log(`Checking repo: ${repo.name}, Fork: ${repo.fork}`)
            
            return (
              !repo.fork && // Exclude forks
              repo.name !== 'The-SaadKhan' // Exclude profile repository
              // NO OTHER FILTERS - show ALL other public repos
            )
          })
          .sort((a, b) => {
            // Sort by last updated
            const dateA = new Date(a.updated_at).getTime()
            const dateB = new Date(b.updated_at).getTime()
            return dateB - dateA
          })
        
        console.log('Filtered repos count:', filteredRepos.length)
        console.log('Filtered repos:', filteredRepos)
        setRepos(filteredRepos)
        
      } catch (err) {
        console.error('Error fetching repos:', err)
        setError('Failed to load projects. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // FIXED: Safe reload function
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      'C++': 'bg-blue-600',
      C: 'bg-gray-600',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
      PHP: 'bg-purple-500',
      Java: 'bg-red-500',
      React: 'bg-cyan-500',
      'Jupyter Notebook': 'bg-orange-400'
    }
    return colors[language || ''] || 'bg-gray-500'
  }

  // Function to generate a description based on repository name and language
  const generateDescription = (name: string, language: string | null, homepage: string | null) => {
    const cleanName = name.replace(/-/g, ' ').replace(/_/g, ' ')
    
    if (homepage) {
      return `${cleanName} - A ${language || 'web'} project with live demo available.`
    }
    
    if (language) {
      return `${cleanName} - Built with ${language} showcasing development skills.`
    }
    
    return `${cleanName} - An innovative project demonstrating coding expertise.`
  }

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my latest GitHub projects demonstrating full-stack development and problem-solving skills
          </motion.p>
        </motion.div>

        {loading ? (
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects from GitHub...</p>
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <Code className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Unable to Load Projects
              </h3>
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <motion.button
                onClick={handleReload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Try Again
              </motion.button>
            </div>
          </motion.div>
        ) : repos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <Github className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check console for debugging information.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass-effect rounded-xl p-6 group hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-white/10"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                    {repo.language && (
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2 ml-4">
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                    {repo.homepage && (
                      <motion.a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {repo.description || generateDescription(repo.name, repo.language, repo.homepage)}
                </p>

                {/* Stats Bar - REMOVED DATE SECTION */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="h-4 w-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Project Status - REMOVED DATE FROM STATUS */}
                <div className="flex items-center justify-center">
                  {repo.homepage ? (
                    <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-full">
                      ✨ Live Demo
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                      🔧 In Development
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/The-SaadKhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
