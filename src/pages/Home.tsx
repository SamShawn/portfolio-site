import { Link } from 'react-router-dom'
import { ArrowRight, Github, Twitter, Linkedin, Mail, Sparkles } from 'lucide-react'
import { ProjectCard } from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'

export function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 animate-gradient-x blur-3xl opacity-20 dark:opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-6">
              <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                欢迎来到我的个人作品集
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              你好，我是
              <span className="block mt-2 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                全栈开发者
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              热爱创造优雅的用户体验和高效的解决方案。专注于 React、Node.js 和现代 Web 技术栈。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold hover:from-primary-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                查看作品
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                联系我
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              精选作品
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              以下是我的一些代表性项目，展示了我的技术能力和设计理念
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300"
            >
              查看所有作品
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-primary-50/50 dark:via-primary-900/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              技术栈
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我专注于现代 Web 开发技术栈，并持续学习新技术
            </p>
          </div>

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
              <div
                key={skill.name}
                className={`group p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default animate-slide-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-lg font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
