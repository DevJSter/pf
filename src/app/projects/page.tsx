'use client'
import { useEffect, useState, useRef } from 'react'
import { Octokit } from '@octokit/core'
import { motion } from 'framer-motion'
import { Github, ExternalLink, AlertCircle, Search, Code, Star, GitFork } from 'lucide-react'

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
})

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics?: string[]
  language?: string
  stargazers_count?: number
  forks_count?: number
  updated_at?: string
}

interface ProjectData {
  name: string
  description: string
  repoUrl: string
  liveLink: string
  language?: string
  stars?: number
  forks?: number
  updatedAt?: string
  topics?: string[]
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [languages, setLanguages] = useState<string[]>([])
  const [hasScrolled, setHasScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  // Handle scroll for sticky header animation
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)

        const { data: repos } = await octokit.request('GET /user/repos', {
          per_page: 100,
          affiliation: 'owner',
          sort: 'updated',
          direction: 'desc',
        })

        const transformedProjects = repos
          .filter((repo: GitHubRepo) => !repo.topics?.includes('ignore'))
          .map((repo: GitHubRepo) => ({
            name: repo.name,
            description: repo.description || 'No description provided',
            repoUrl: repo.html_url,
            liveLink: repo.homepage || repo.html_url,
            language: repo.language || 'Unknown',
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
            updatedAt: repo.updated_at,
            topics: repo.topics || []
          }))

        // Extract unique languages for filtering
        const allLanguages = [...new Set(transformedProjects.map(project => project.language))].filter(Boolean)
        setLanguages(allLanguages as string[])
        
        setProjects(transformedProjects)
        setFilteredProjects(transformedProjects)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch projects',
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Filter projects based on search query and language filter
  useEffect(() => {
    let result = [...projects]
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        project => 
          project.name.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          (project.topics && project.topics.some(topic => topic.toLowerCase().includes(query)))
      )
    }
    
    if (selectedLanguage) {
      result = result.filter(project => project.language === selectedLanguage)
    }
    
    setFilteredProjects(result)
  }, [searchQuery, selectedLanguage, projects])

  // Format date to relative time
  const getRelativeTime = (dateString: string | undefined) => {
    if (!dateString) return ''
    
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return 'today'
    if (diffDays === 1) return 'yesterday'
    if (diffDays < 30) return `${diffDays} days ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  // Project card component
  const ProjectCard = ({ project }: { project: ProjectData }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full rounded-lg border-2 border-border bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg dark:border-darkBorder dark:bg-gray-900 dark:shadow-dark"
    >
      <div className="flex h-full flex-col font-base text-text">
        <div className="mb-2 flex items-start justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.name}
          </h2>
          {project.language && (
            <span className="ml-2 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-300">
              {project.language}
            </span>
          )}
        </div>

        <p className="mb-4 flex-grow text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        {project.topics && project.topics.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.topics.slice(0, 5).map(topic => (
              <span key={topic} className="rounded-md bg-orange-100 px-2 py-1 text-xs text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="mb-4 flex items-center justify-start space-x-4 text-sm text-gray-600 dark:text-gray-400">
          {project.stars !== undefined && (
            <div className="flex items-center">
              <Star size={14} className="mr-1" />
              <span>{project.stars}</span>
            </div>
          )}
          {project.forks !== undefined && (
            <div className="flex items-center">
              <GitFork size={14} className="mr-1" />
              <span>{project.forks}</span>
            </div>
          )}
          {project.updatedAt && (
            <div className="text-xs italic">
              Updated {getRelativeTime(project.updatedAt)}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a
            className="flex items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 hover:bg-orange-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-orange-700 dark:hover:bg-gray-700"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-2" />
            Preview
          </a>
          <a
            className="flex items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-700"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} className="mr-2" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )

  // Error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-8 rounded-lg border-2 border-red-500 bg-red-50 p-5 text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400"
        >
          <div className="flex items-center">
            <AlertCircle size={20} className="mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium">Failed to load projects</p>
              <p className="mt-1 text-sm">{error}</p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-bg">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            My <span className="text-orange-500">Projects</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
            A collection of my GitHub repositories and personal projects. Browse through to see what I've been working on.
          </p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          ref={headerRef}
          className={`sticky top-0 z-10 mb-8 rounded-lg bg-white p-4 shadow-md transition-all duration-300 dark:bg-gray-900 ${
            hasScrolled ? 'border border-gray-200 dark:border-gray-800' : ''
          }`}
        >
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="relative flex-1 md:max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 pl-10 text-gray-800 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-orange-400 dark:focus:ring-orange-900"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    selectedLanguage === null
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedLanguage(null)}
                >
                  All
                </button>
                {languages.slice(0, 5).map((language) => (
                  <button
                    key={language}
                    className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                      selectedLanguage === language
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedLanguage(language)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
            {selectedLanguage && (
              <button
                className="flex items-center text-sm text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                onClick={() => setSelectedLanguage(null)}
              >
                Clear filter
              </button>
            )}
          </div>
        </motion.div>

        {/* Loading state */}
        {isLoading ? (
          <div className="min-h-[60vh]">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-orange-500" />
              <p className="text-gray-600 dark:text-gray-400">
                Fetching projects from GitHub...
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-lg border-2 border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-7 w-1/2 rounded-md bg-gray-300 dark:bg-gray-700"></div>
                    <div className="h-5 w-16 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                  </div>
                  <div className="mb-4 space-y-2">
                    <div className="h-4 w-full rounded-md bg-gray-200 dark:bg-gray-800"></div>
                    <div className="h-4 w-5/6 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                  </div>
                  <div className="mb-4 flex gap-2">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-6 w-14 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                    ))}
                  </div>
                  <div className="mb-4 flex justify-start space-x-4">
                    <div className="h-4 w-8 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                    <div className="h-4 w-8 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                    <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-800"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-10 rounded-md bg-gray-300 dark:bg-gray-700"></div>
                    <div className="h-10 rounded-md bg-gray-300 dark:bg-gray-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex min-h-[40vh] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800/50"
              >
                <Code size={48} className="mb-4 text-gray-400" />
                <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">No projects found</h3>
                <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
                  {searchQuery 
                    ? `No projects matching "${searchQuery}"${selectedLanguage ? ` with ${selectedLanguage} language` : ''}.` 
                    : selectedLanguage 
                      ? `No projects using ${selectedLanguage} found.` 
                      : 'No projects available.'}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedLanguage(null)
                  }}
                  className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                >
                  Clear all filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.name} project={project} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}