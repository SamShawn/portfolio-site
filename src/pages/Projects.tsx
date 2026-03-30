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
    <div className="min-h-screen pt-16 pb-20 vg-organic-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - 梵高风格 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-4">
            画廊
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-van-gogh-canvas mb-4 font-serif-vg">
            {t.projects.title}
          </h1>
          <p className="text-lg text-van-gogh-canvas/80 max-w-2xl mx-auto font-body-vg">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Filter Buttons - 梵高风格 */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <motion.button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-serif-vg ${
              filter === 'all'
                ? 'bg-van-gogh-cobalt text-van-gogh-canvas shadow-lg'
                : 'bg-van-gogh-midnight/50 text-van-gogh-canvas/80 border border-van-gogh-ochre/30 hover:border-van-gogh-cadmium-yellow hover:text-van-gogh-cadmium-yellow'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.projects.all} ({projects.length})
          </motion.button>
          <motion.button
            onClick={() => setFilter('featured')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 font-serif-vg ${
              filter === 'featured'
                ? 'bg-van-gogh-cobalt text-van-gogh-canvas shadow-lg'
                : 'bg-van-gogh-midnight/50 text-van-gogh-canvas/80 border border-van-gogh-ochre/30 hover:border-van-gogh-cadmium-yellow hover:text-van-gogh-cadmium-yellow'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.projects.featured} ({projects.filter(p => p.featured).length})
          </motion.button>
        </div>

        {/* Projects Grid - 非对称画廊布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // 画廊风格：交替旋转卡片
              style={{
                transform: index % 3 === 0 ? 'rotate(-2deg)' :
                          index % 3 === 1 ? 'rotate(1deg)' : 'rotate(-1deg)',
                marginTop: index % 2 === 1 ? '3rem' : '0'
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-van-gogh-canvas/80 font-body-vg">
              {t.projects.noProjects}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}