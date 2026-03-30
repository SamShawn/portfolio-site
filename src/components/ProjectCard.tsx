import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden vg-card impasto-border"
      whileHover={{ scale: 1.03, rotate: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-van-gogh-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {project.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-van-gogh-cadmium-yellow text-van-gogh-text-dark text-sm font-semibold shadow-lg font-handwritten">
            精选
          </span>
        )}
      </div>

      {/* Content - 梵高风格画布背景 */}
      <div className="p-6 bg-van-gogh-canvas">
        <h3 className="text-xl font-bold text-van-gogh-text-dark mb-2 font-serif-vg group-hover:text-van-gogh-cobalt transition-colors">
          {project.title}
        </h3>

        <p className="text-van-gogh-text-dark/80 mb-4 line-clamp-2 font-body-vg">
          {project.description}
        </p>

        {/* Technologies - 梵高风格标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-van-gogh-cobalt/10 text-van-gogh-cobalt text-sm font-medium border border-van-gogh-cobalt/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-van-gogh-midnight/10 text-van-gogh-midnight hover:bg-van-gogh-midnight/20 transition-colors border border-van-gogh-ochre/30"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">代码</span>
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-van-gogh-cobalt text-van-gogh-canvas hover:bg-van-gogh-cobalt/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">演示</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}