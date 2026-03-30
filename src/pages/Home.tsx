import { Link } from 'react-router-dom'
import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'
import { SOCIAL_URL } from '../data/constants'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

// 梵高风格背景星星组件
function StarField() {
  return (
    <div className="fixed inset-0 vg-organic-bg -z-10" />
  )
}

// 梵高风格装饰星星
function PaintStar({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute w-5 h-5 bg-van-gogh-cadmium-yellow ${className}`}
      style={{
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      }}
      animate={{
        opacity: [0.4, 1, 0.4],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
}

// 漩涡装饰
function Swirl({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 100 100" className="w-32 h-32" fill="none" stroke="#0047AB" strokeWidth="1">
        <path d="M50 50 Q60 30 50 10 Q40 30 50 50 Q70 40 90 50 Q70 60 50 50 Q60 70 50 90 Q40 70 50 50" />
      </svg>
    </motion.div>
  )
}

export function Home() {
  const t = useTranslation()

  return (
    <div className="min-h-screen pt-16">
      {/* 梵高风格背景 */}
      <StarField />

      {/* Hero Section - 梵高风格 */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* 装饰性漩涡 */}
        <Swirl className="top-20 left-10" reverse />
        <Swirl className="bottom-32 right-16" />

        {/* 装饰星星 */}
        <PaintStar className="top-32 right-1/4" delay={0} />
        <PaintStar className="top-48 left-1/3" delay={0.5} />
        <PaintStar className="bottom-40 right-1/3" delay={1} />
        <PaintStar className="bottom-60 left-1/4" delay={1.5} />

        {/* 画布纹理叠加 */}
        <div className="vg-canvas-texture" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* 头像区域 - 梵高风格头像框 */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full impasto-border flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: 'rotate(-2deg)' }}
            >
              <svg viewBox="0 0 100 100" className="w-20 h-20">
                <circle cx="50" cy="35" r="20" fill="#CC7722" />
                <path d="M30 70 Q50 50 70 70" stroke="#CC7722" strokeWidth="3" fill="none" />
                <circle cx="40" cy="32" r="3" fill="#1a1a2e" />
                <circle cx="60" cy="32" r="3" fill="#1a1a2e" />
                <path d="M45 45 Q50 50 55 45" stroke="#1a1a2e" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* 标题 - 梵高风格 */}
            <h1 className="vg-hero-title text-5xl sm:text-6xl lg:text-7xl mb-6">
              孙昕
            </h1>

            <p className="text-xl sm:text-2xl text-van-gogh-canvas/90 mb-4 font-body-vg">
              数字炼金术士 & 创意技术专家
            </p>

            <p className="text-lg font-handwritten text-van-gogh-cadmium-yellow mb-10" style={{ fontSize: '1.8rem' }}>
              "我梦想我的代码，然后我编写我的梦想。"
            </p>

            {/* 按钮 - 梵高风格 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="vg-button inline-flex items-center gap-2"
              >
                {t.home.viewProjects}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-van-gogh-ochre/50 text-van-gogh-canvas font-semibold hover:border-van-gogh-cadmium-yellow hover:text-van-gogh-cadmium-yellow transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                {t.home.contactMe}
              </Link>
            </div>

            {/* 社交链接 */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <motion.a
                href={SOCIAL_URL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-van-gogh-midnight/50 text-van-gogh-canvas/80 hover:text-van-gogh-cadmium-yellow hover:bg-van-gogh-midnight transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={SOCIAL_URL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-van-gogh-midnight/50 text-van-gogh-canvas/80 hover:text-van-gogh-cadmium-yellow hover:bg-van-gogh-midnight transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={SOCIAL_URL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-van-gogh-midnight/50 text-van-gogh-canvas/80 hover:text-van-gogh-cadmium-yellow hover:bg-van-gogh-midnight transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* 滚动指示器 */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
            <rect x="5" y="5" width="20" height="40" rx="10" stroke="#CC7722" strokeWidth="2"/>
            <motion.circle
              cx="15"
              cy="15"
              r="4"
              fill="#E3A01B"
              animate={{ cy: [15, 25, 15] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </section>

      {/* Featured Projects Section - 梵高风格 */}
      <section className="py-20 lg:py-32 relative">
        {/* 渐变背景过渡 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-van-gogh-midnight/50 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-4">
              精选作品
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-van-gogh-canvas mb-4 font-serif-vg">
              {t.home.featuredProjects}
            </h2>
            <p className="text-lg text-van-gogh-canvas/80 max-w-2xl mx-auto font-body-vg">
              {t.home.featuredDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ transform: index % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-van-gogh-cadmium-yellow text-van-gogh-cadmium-yellow font-semibold hover:bg-van-gogh-cadmium-yellow/10 transition-all duration-300 font-serif-vg"
            >
              {t.home.viewAllProjects}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - 梵高风格 */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-4">
              技术栈
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-van-gogh-canvas mb-4 font-serif-vg">
              {t.home.techStack}
            </h2>
            <p className="text-lg text-van-gogh-canvas/80 max-w-2xl mx-auto font-body-vg">
              {t.home.techStackDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'React', color: 'from-cyan-500 to-blue-500' },
              { name: 'TypeScript', color: 'from-blue-600 to-indigo-600' },
              { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
              { name: 'Next.js', color: 'from-gray-800 to-black' },
              { name: 'MongoDB', color: 'from-green-600 to-teal-500' },
              { name: 'Docker', color: 'from-blue-500 to-cyan-500' },
              { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
              { name: 'Git', color: 'from-orange-600 to-red-500' },
              { name: 'GraphQL', color: 'from-pink-500 to-rose-500' },
              { name: 'Tailwind', color: 'from-cyan-400 to-blue-400' },
              { name: 'Figma', color: 'from-purple-500 to-pink-500' },
              { name: 'Vite', color: 'from-yellow-400 to-orange-400' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`group p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span className="text-lg font-bold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}