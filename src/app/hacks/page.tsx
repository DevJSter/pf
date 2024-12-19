'use client'

import { useEffect, useState } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Links from '@/components/links'
import { Octokit } from '@octokit/core'

// Initialize Octokit
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
})

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

interface ProjectData {
  name: string
  description: string
  repoUrl: string
  liveLink: string
  previewImage: string
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
          per_page: 100,
          affiliation: 'owner',
          sort: 'updated',
          direction: 'desc',
        })

        // Transform GitHub data to match your project structure
        const transformedProjects = repos
          .filter((repo) => !repo.topics.includes('ignore'))
          .map((repo) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            repoUrl: repo.html_url,
            liveLink: repo.homepage || repo.html_url,
            previewImage: `/project-previews/${repo.name}.png`,
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
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-gray-500" />
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projects</h1>

      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <div
            className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5"
            key={project.name}
          >
            <AspectRatio
              className="!-bottom-[2px] rounded-base border-2 border-border shadow-light dark:border-darkBorder dark:shadow-dark"
              ratio={71 / 26}
            >
              <img
                className="w-full rounded-base object-cover"
                src={project.previewImage}
                alt={project.name}
                onError={(e) => {
                  e.currentTarget.src = '/project-fallback.png'
                }}
              />
            </AspectRatio>

            <div className="mt-5 font-base text-text">
              <h2 className="text-xl font-heading sm:text-2xl">
                {project.name}
              </h2>

              <p className="mt-2">{project.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-5">
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
        <Links />
      </div>
    </div>
  )
}
