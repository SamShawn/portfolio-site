import { techStack, projects } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Stack() {
  const t = useTranslation()

  // 获取每个技术相关的项目
  const getRelatedProjects = (techName: string) => {
    return projects.filter(p =>
      p.technologies.some(tech => tech.toLowerCase().includes(techName.toLowerCase()))
    ).slice(0, 2)
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-brutal-lime dark:bg-brutal-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
            00 — {t.stack.title}
          </span>
          <h1 className="font-display text-6xl sm:text-8xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
            {t.stack.title}
          </h1>
          <p className="font-mono text-lg mt-6 max-w-2xl text-brutal-black/70 dark:text-brutal-white/70">
            {t.stack.subtitle}
          </p>

          {/* 装饰线 */}
          <div className="w-full h-4 bg-brutal-black dark:bg-brutal-white mt-8" />
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black p-6 h-full hover:bg-brutal-black dark:hover:bg-brutal-white transition-colors"
                   style={{ boxShadow: '6px 6px 0px 0px #000000' }}>
                {/* 颜色指示器 */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-8 h-8 border-2 border-brutal-black dark:border-brutal-white"
                    style={{ backgroundColor: tech.color }}
                  />
                  <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50 group-hover:text-brutal-white/50 dark:group-hover:text-brutal-black/50">
                    {t.stack.experience}: {tech.years} {t.stack.years}
                  </span>
                </div>

                {/* 技术名称 */}
                <h3 className="font-display text-3xl uppercase text-brutal-black dark:text-brutal-white group-hover:text-brutal-white dark:group-hover:text-brutal-black">
                  {tech.name}
                </h3>

                {/* 相关项目 */}
                <div className="mt-4 pt-4 border-t-2 border-brutal-black dark:border-brutal-white">
                  <span className="font-mono text-xs text-brutal-black/50 dark:text-brutal-white/50 group-hover:text-brutal-white/50 dark:group-hover:text-brutal-black/50">
                    {t.stack.viewProjects}:
                  </span>
                  <div className="mt-2 space-y-1">
                    {getRelatedProjects(tech.name).map(p => (
                      <div
                        key={p.id}
                        className="font-mono text-sm text-brutal-black dark:text-brutal-white group-hover:text-brutal-white dark:group-hover:text-brutal-black truncate"
                      >
                        → {p.title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Projects */}
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="btn-brutal inline-flex items-center gap-2"
          >
            {t.home.viewAllProjects}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}