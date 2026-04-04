import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage()
  const isEnglish = language === 'en-US'

  return (
    <motion.article
      className="group relative border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      style={{ boxShadow: '8px 8px 0px 0px #000000' }}
    >
      {/* 悬停时的额外阴影效果 */}
      <motion.div
        className="absolute inset-0 border-4 border-brutal-orange pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        style={{ transform: 'translate(4px, 4px)' }}
      />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden border-b-4 border-brutal-black dark:border-brutal-white">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* 叠加图案 */}
        <div className="absolute inset-0 bg-brutal-black/0 group-hover:bg-brutal-black/20 transition-colors" />

        {/* 项目编号 */}
        <span className="absolute top-0 left-0 px-4 py-2 font-mono text-sm font-bold bg-brutal-yellow text-brutal-black border-b-4 border-r-4 border-brutal-black">
          #{String(project.id).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* 标题 */}
        <h3 className="font-display text-2xl sm:text-3xl uppercase text-brutal-black dark:text-brutal-white group-hover:text-brutal-orange transition-colors">
          {isEnglish && project.titleEn ? project.titleEn : project.title}
        </h3>

        {/* 描述 */}
        <p className="font-mono text-sm mt-3 text-brutal-black/70 dark:text-brutal-white/70 line-clamp-2">
          {isEnglish && project.descriptionEn ? project.descriptionEn : project.description}
        </p>

        {/* 项目元信息 */}
        {(project.role || project.type) && (
          <div className="flex gap-4 mt-4 font-mono text-xs">
            {project.role && (
              <span className="px-2 py-1 border-2 border-brutal-black dark:border-brutal-white">
                {isEnglish && project.roleEn ? project.roleEn : project.role}
              </span>
            )}
            {project.type && (
              <span className="px-2 py-1 bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black">
                {isEnglish && project.typeEn ? project.typeEn : project.type}
              </span>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 font-mono text-xs uppercase border-2 border-brutal-black dark:border-brutal-white text-brutal-black dark:text-brutal-white"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 font-mono text-xs bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-6 relative z-10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold uppercase border-2 border-brutal-black dark:border-brutal-white hover:bg-brutal-black dark:hover:bg-brutal-white hover:text-brutal-white dark:hover:text-brutal-black transition-colors cursor-pointer relative z-10"
          >
            <Github className="w-4 h-4" />
            {t.projects.viewCode}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 font-mono text-sm font-bold uppercase bg-brutal-orange text-white border-2 border-brutal-black hover:bg-brutal-black transition-colors cursor-pointer relative z-10"
            >
              <ExternalLink className="w-4 h-4" />
              {t.projects.viewDemo}
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}