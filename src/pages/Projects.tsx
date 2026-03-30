import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const t = useTranslation()

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured)

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-brutal-white dark:bg-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
            00 — {t.projects.title}
          </span>
          <h1 className="font-display text-6xl sm:text-8xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
            {t.projects.title}
          </h1>
          <p className="font-mono text-lg mt-6 max-w-2xl text-brutal-black/70 dark:text-brutal-white/70">
            {t.projects.description}
          </p>

          {/* 装饰线 */}
          <div className="w-full h-4 bg-brutal-black dark:bg-brutal-white mt-8" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-4 mb-16">
          {(['all', 'featured'] as const).map((filterType) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              className={`px-6 py-3 font-mono font-bold uppercase text-sm border-4 transition-all duration-100 ${
                filter === filterType
                  ? 'bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black border-brutal-black dark:border-brutal-white'
                  : 'bg-brutal-white dark:bg-brutal-black text-brutal-black dark:text-brutal-white border-brutal-black dark:border-brutal-white hover:bg-brutal-yellow'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filterType === 'all' ? t.projects.all : t.projects.featured}
              <span className="ml-2 opacity-50">
                ({filterType === 'all' ? projects.length : projects.filter(p => p.featured).length})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 border-4 border-brutal-black dark:border-brutal-white">
            <p className="font-mono text-xl text-brutal-black/50 dark:text-brutal-white/50">
              {t.projects.noProjects}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}