import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { LanguageToggle } from './LanguageToggle'
import { useTranslation } from '../i18n/LanguageContext'
import { SOCIAL_URL } from '../data/constants'
import { motion } from 'framer-motion'
import type { NavItem } from '../types'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const t = useTranslation()

  const navItems: NavItem[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.projects, path: '/projects' },
    { label: t.nav.stack, path: '/stack' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' }
  ]

  return (
    <>
      {/* 顶部粗野主义导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-white dark:bg-brutal-black border-b-4 border-brutal-black dark:border-brutal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo - 粗野主义风格 */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-12 h-12 bg-brutal-black dark:bg-brutal-white flex items-center justify-center border-4 border-brutal-black dark:border-brutal-white group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                <span className="text-brutal-white dark:text-brutal-black font-display text-2xl tracking-wider">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl uppercase tracking-wider text-brutal-black dark:text-brutal-white">
                  {t.home.greeting}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 font-mono font-bold uppercase text-sm tracking-wider border-2 transition-all duration-100 ${
                    location.pathname === item.path
                      ? 'bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black border-brutal-black dark:border-brutal-white'
                      : 'text-brutal-black dark:text-brutal-white border-transparent hover:border-brutal-black dark:hover:border-brutal-white hover:bg-brutal-yellow'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <LanguageToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-brutal-black dark:text-brutal-white" />
                ) : (
                  <Menu className="w-6 h-6 text-brutal-black dark:text-brutal-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - 全屏覆盖 */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.2 }}
          className="fixed inset-0 z-40 lg:hidden bg-brutal-yellow dark:bg-brutal-black"
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 font-display text-lg uppercase tracking-wider border-4 ${
                      location.pathname === item.path
                        ? 'bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black border-brutal-black dark:border-brutal-white'
                        : 'text-brutal-black dark:text-brutal-white border-brutal-black dark:border-brutal-white hover:bg-brutal-black dark:hover:bg-brutal-white hover:text-brutal-white dark:hover:text-brutal-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="mt-auto pb-8">
              <div className="flex gap-4 justify-center">
                <a
                  href={SOCIAL_URL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black hover:bg-brutal-black dark:hover:bg-brutal-white transition-colors"
                >
                  <Github className="w-6 h-6 text-brutal-black dark:text-brutal-white" />
                </a>
                <a
                  href={SOCIAL_URL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black hover:bg-brutal-black dark:hover:bg-brutal-white transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-brutal-black dark:text-brutal-white" />
                </a>
                <a
                  href={SOCIAL_URL.email}
                  className="p-4 border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black hover:bg-brutal-black dark:hover:bg-brutal-white transition-colors"
                >
                  <Mail className="w-6 h-6 text-brutal-black dark:text-brutal-white" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}