'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Code, Calendar } from 'lucide-react'
import { GitHubRepo } from '@/types/github'
import { GITHUB_API_URL } from '@/utils/constants'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { GlowingCard } from '../ui/glowing-effect'

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        console.log('Fetching repos from GitHub API...')
        const response = await fetch('/api/github-repos')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: GitHubRepo[] = await response.json()
        console.log('Raw GitHub data:', data)
        
        // Filter and sort repos
        const filteredRepos = data
          .filter(repo => {
            console.log(`Checking repo: ${repo.name}, Fork: ${repo.fork}, Homepage: ${repo.homepage}`)
            
            return (
              !repo.fork && // Exclude forks
              repo.name !== 'The-SaadKhan' // Exclude profile repository
            )
          })
          .sort((a, b) => {
            // Sort by last updated
            const dateA = new Date(a.updated_at).getTime()
            const dateB = new Date(b.updated_at).getTime()
            return dateB - dateA
          })
          .slice(0, 5) // Limit to 5 projects
        
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

  // Safe reload function
  const handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  // Manual deployment URLs for immediate fix - TYPED PROPERLY
  const DEPLOYED_PROJECTS: Record<string, string> = {
    'AI-COURSES': 'https://ai-courses-alpha.vercel.app',
    // Add other deployed projects here as needed
  }

  // Enhanced deployment detection with manual fallback - FIXED TYPE ERROR
  const getDeploymentInfo = (repo: GitHubRepo) => {
    // Check manual config first (immediate fix)
    const manualUrl = DEPLOYED_PROJECTS[repo.name]
    
    // Check GitHub homepage field
    const githubHomepage = repo.homepage && 
      repo.homepage.trim() !== '' && 
      (repo.homepage.startsWith('http://') || repo.homepage.startsWith('https://'))
    
    // Use manual URL first, then GitHub homepage
    const deploymentUrl = manualUrl || (githubHomepage ? repo.homepage : null)
    
    return {
      hasDeployment: !!deploymentUrl,
      deploymentUrl
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
      Vue: 'bg-green-400',
      'Jupyter Notebook': 'bg-orange-400',
      'Next.js': 'bg-black'
    }
    return colors[language || ''] || 'bg-gray-500'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  // Enhanced description generation
  const generateDescription = (name: string, language: string | null, hasDeployment: boolean) => {
    const cleanName = name.replace(/-/g, ' ').replace(/_/g, ' ')
    
    // Special descriptions for known projects
    if (name === 'AI-COURSES') {
      return 'AI-powered course generation platform built with Next.js. Create comprehensive courses using artificial intelligence with interactive learning features.'
    }
    
    if (hasDeployment) {
      return `${cleanName} - A ${language || 'web'} project with live demo available.`
    }
    
    if (language) {
      return `${cleanName} - Built with ${language} showcasing development skills.`
    }
    
    return `${cleanName} - An innovative project demonstrating coding expertise.`
  }

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <span className="px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-sm font-medium">
              💼 My Work
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            Featured <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-orange-100/80 max-w-3xl mx-auto px-4 text-center">
            A showcase of my latest GitHub projects demonstrating full-stack development and problem-solving skills
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center">
            <LoadingSpinner />
            <p className="mt-4 text-orange-200/80">Loading projects from GitHub...</p>
          </div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <GlowingCard glowColor="rgba(239, 68, 68, 0.4)">
              <div className="text-center py-8">
                <Code className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-100 mb-2">
                  Unable to Load Projects
                </h3>
                <p className="text-orange-200/80 mb-4">{error}</p>
                <motion.button
                  onClick={handleReload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-orange-500/50"
                >
                  Try Again
                </motion.button>
              </div>
            </GlowingCard>
          </motion.div>
        ) : repos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <GlowingCard>
              <div className="text-center py-8">
                <Github className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-orange-100 mb-2">
                  No Projects Found
                </h3>
                <p className="text-orange-200/80 mb-4">
                  Check console for debugging information.
                </p>
              </div>
            </GlowingCard>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => {
              const { hasDeployment, deploymentUrl } = getDeploymentInfo(repo)
              
              return (
                <GlowingCard key={repo.id}>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-orange-100 group-hover:text-orange-300 transition-colors mb-2">
                        {repo.name === 'AI-COURSES' ? 'AI Course Generator' : repo.name.replace(/-/g, ' ')}
                      </h3>
                      {repo.language && (
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                          <span className="text-sm font-medium text-orange-200/60">
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
                        className="p-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-400/20 transition-colors"
                        title="View on GitHub"
                      >
                        <Github className="h-4 w-4 text-orange-300" />
                      </motion.a>
                      {hasDeployment && (
                        <motion.a
                          href={deploymentUrl || ''}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 text-black transition-colors hover:shadow-lg hover:shadow-orange-500/50"
                          title="Live Demo"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-orange-200/70 mb-4 text-sm leading-relaxed">
                    {repo.description || generateDescription(repo.name, repo.language, hasDeployment)}
                  </p>

                  {/* Stats Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-orange-200/50">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="h-4 w-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-orange-200/50">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(repo.updated_at)}</span>
                    </div>
                  </div>

                  {/* Project Status */}
                  <div className="flex items-center justify-between">
                    {hasDeployment ? (
                      <span className="px-2 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                         Live
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                        🔧 In Development
                      </span>
                    )}
                    
                    <span className="text-xs text-orange-200/50">
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </GlowingCard>
              )
            })}
          </div>
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-orange-500/50"
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
