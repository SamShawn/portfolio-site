import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const t = useTranslation()

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured)

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t.projects.all} ({projects.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t.projects.featured} ({projects.filter(p => p.featured).length})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t.projects.noProjects}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
