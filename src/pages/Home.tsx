import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { featuredProjects, techStack } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function Home() {
  const t = useTranslation()

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section - 粗野主义核心 */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-brutal-white dark:bg-brutal-black">

        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 大号装饰文字 - 仅在大屏幕显示 */}
          <div className="hidden lg:block absolute top-[15%] left-[10%] text-[10vw] font-display text-brutal-black dark:text-brutal-white opacity-[0.1] select-none leading-none">
            {'</>'}
          </div>
          <div className="hidden lg:block absolute bottom-[15%] right-[10%] text-[8vw] font-display text-brutal-orange opacity-[0.1] select-none leading-none">
            CODE
          </div>

          {/* 装饰线 */}
          {/* <div className="absolute top-1/3 left-0 w-full h-2 bg-brutal-black dark:bg-brutal-white" /> */}
          {/* <div className="absolute bottom-1/3 left-0 w-full h-2 bg-brutal-black dark:bg-brutal-white" /> */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

          {/* 主标题 - 超大字号 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[12vw] leading-[0.85] uppercase tracking-[-0.03em] text-brutal-black dark:text-brutal-white break-words">
              {t.home.greeting}
            </h1>
            <p className="font-mono text-xl sm:text-2xl text-brutal-orange mt-4 ml-2">
              {t.home.nickname}
            </p>
          </motion.div>

          {/* 装饰分隔线 */}
          <motion.div
            className="w-32 h-4 bg-brutal-black dark:bg-brutal-white my-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'left' }}
          />

          {/* 副标题 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-baseline gap-x-6 gap-y-2"
          >
            <span className="font-display text-3xl sm:text-4xl uppercase text-brutal-black dark:text-brutal-white">
              {t.home.title}
            </span>
            <span className="font-mono text-lg text-brutal-black/60 dark:text-brutal-white/60">
              // {t.home.subtitle}
            </span>
          </motion.div>

          {/* 位置信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 ml-2"
          >
            <span className="inline-flex items-center gap-2 font-mono text-sm px-3 py-1 border-2 border-brutal-black dark:border-brutal-white">
              <span className="w-2 h-2 bg-brutal-lime animate-pulse" />
              {t.home.location}
            </span>
          </motion.div>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-12 mb-16 sm:mb-8"
          >
            <Link
              to="/projects"
              className="btn-brutal-orange group"
            >
              {t.home.viewProjects}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="btn-brutal"
            >
              {t.home.contactMe}
            </Link>
          </motion.div>

          {/* 滚动提示 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 font-mono text-sm">
              <span className="text-brutal-black/50 dark:text-brutal-white/50">{t.home.scrollHint}</span>
              <ChevronDown className="w-6 h-6 text-brutal-orange animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32 bg-brutal-yellow dark:bg-brutal-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 区块标题 */}
          <div className="mb-12">
            <span className="font-mono text-sm text-brutal-black/60 dark:text-brutal-white/60">
              01 — {t.home.featuredProjects}
            </span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
              {t.home.featuredProjects}
            </h2>
            <p className="font-mono text-lg mt-4 text-brutal-black/70 dark:text-brutal-white/70">
              {t.home.featuredDescription}
            </p>
          </div>

          {/* 项目卡片网格 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* 查看全部按钮 */}
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="btn-brutal inline-flex items-center gap-2"
            >
              {t.home.viewAllProjects}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 lg:py-32 bg-brutal-white dark:bg-brutal-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 区块标题 */}
          <div className="mb-12">
            <span className="font-mono text-sm text-brutal-black/60 dark:text-brutal-white/60">
              02 — {t.home.techStack}
            </span>
            <h2 className="font-display text-5xl sm:text-7xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
              {t.home.techStack}
            </h2>
            <p className="font-mono text-lg mt-4 text-brutal-black/70 dark:text-brutal-white/70">
              {t.home.techStackDescription}
            </p>
          </div>

          {/* 技术栈卡片 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="border-4 border-brutal-black dark:border-brutal-white p-6 bg-brutal-white dark:bg-brutal-black hover:bg-brutal-black dark:hover:bg-brutal-white transition-colors">
                  <div
                    className="w-4 h-4 mb-4"
                    style={{ backgroundColor: tech.color }}
                  />
                  <h3 className="font-display text-2xl uppercase text-brutal-black dark:text-brutal-white group-hover:text-brutal-white dark:group-hover:text-brutal-black">
                    {tech.name}
                  </h3>
                  <p className="font-mono text-sm mt-2 text-brutal-black/60 dark:text-brutal-white/60 group-hover:text-brutal-white/60 dark:group-hover:text-brutal-black/60">
                    {tech.years} {t.stack.years}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 跳转链接 */}
          <div className="mt-12 text-center">
            <Link
              to="/stack"
              className="btn-brutal inline-flex items-center gap-2"
            >
              {t.stack.viewProjects}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}