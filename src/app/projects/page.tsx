'use client'
import { useEffect, useState } from 'react'
import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
})

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics?: string[] // Made optional to match GitHub API response
}

interface ProjectData {
  name: string
  description: string
  repoUrl: string
  liveLink: string
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)

        const { data: repos } = await octokit.request('GET /user/repos', {
          per_page: 400,
          affiliation: 'owner',
          sort: 'updated',
          direction: 'desc',
        })

        const transformedProjects = repos
          .filter((repo: GitHubRepo) => !repo.topics?.includes('ignore'))
          .map((repo: GitHubRepo) => ({
            name: repo.name,
            description: repo.description || '',
            repoUrl: repo.html_url,
            liveLink: repo.homepage || repo.html_url,
          }))

        setProjects(transformedProjects)
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

  if (error) {
    return (
      <div className="my-4 rounded-base border-2 border-red-500 bg-red-50 p-4 text-red-700">
        {error}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-[400px]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-b-2 border-gray-500" />
          <p className="text-gray-600 dark:text-gray-400">
            Fetching projects from GitHub...
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-base border-2 border-border bg-main/50 p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5"
            >
              <div className="mb-4 h-7 w-3/4 rounded-base bg-gray-300 dark:bg-gray-700"></div>
              <div className="mb-2 h-4 w-full rounded-base bg-gray-200 dark:bg-gray-800"></div>
              <div className="mb-8 h-4 w-5/6 rounded-base bg-gray-200 dark:bg-gray-800"></div>
              <div className="grid grid-cols-2 gap-5">
                <div className="h-9 rounded-base bg-gray-300 dark:bg-gray-700"></div>
                <div className="h-9 rounded-base bg-gray-300 dark:bg-gray-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projects</h1>

      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <div
            className="h-full rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5"
            key={project.name}
          >
            <div className="flex h-full flex-col font-base text-text">
              <h2 className="text-xl font-heading sm:text-2xl">
                {project.name}
              </h2>

              <p className="mb-6 mt-2 flex-grow">{project.description}</p>

              <div className="grid grid-cols-2 gap-5">
                <a
                  className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
                <a
                  className="cursor-pointer rounded-base border-2 border-border bg-white px-4 py-2 text-center text-sm font-base shadow-light transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText dark:shadow-dark dark:hover:shadow-none sm:text-base"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
