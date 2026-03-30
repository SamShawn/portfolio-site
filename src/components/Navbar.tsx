import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { useTranslation } from '../i18n/LanguageContext'
import type { NavItem } from '../types'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const t = useTranslation()

  // 根据当前语言生成导航项
  const navItems: NavItem[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.projects, path: '/projects' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.contact, path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-van-gogh-midnight/80 backdrop-blur-lg border-b border-van-gogh-ochre/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - 梵高风格 */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="w-10 h-10 rounded-lg bg-van-gogh-cobalt flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 border-2 border-van-gogh-cadmium-yellow">
              <span className="text-van-gogh-canvas font-bold text-xl font-serif-vg">S</span>
            </div>
            <span className="hidden sm:block text-xl font-bold text-van-gogh-cadmium-yellow font-serif-vg">
              孙昕
            </span>
          </Link>

          {/* Desktop Navigation - 梵高风格 */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group font-serif-vg ${
                  location.pathname === item.path
                    ? 'text-van-gogh-cadmium-yellow bg-van-gogh-cobalt/30'
                    : 'text-van-gogh-canvas/80 hover:text-van-gogh-cadmium-yellow hover:bg-van-gogh-midnight/50'
                }`}
              >
                {item.label}
                {location.pathname !== item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-van-gogh-cadmium-yellow group-hover:w-full transition-all duration-300 rounded-full" style={{ transform: 'rotate(-1deg)' }} />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <ThemeToggle />
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-van-gogh-midnight/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-van-gogh-canvas" />
              ) : (
                <Menu className="w-6 h-6 text-van-gogh-canvas" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-van-gogh-ochre/20 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 font-serif-vg ${
                    location.pathname === item.path
                      ? 'text-van-gogh-cadmium-yellow bg-van-gogh-cobalt/30'
                      : 'text-van-gogh-canvas/80 hover:text-van-gogh-cadmium-yellow hover:bg-van-gogh-midnight/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}