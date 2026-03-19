import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../types'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 group shadow-lg hover:shadow-xl"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 transform ${
            theme === 'dark' ? 'translate-y-6 rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
          }`}
          strokeWidth={2}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 transform ${
            theme === 'dark' ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-6 -rotate-90 opacity-0'
          }`}
          strokeWidth={2}
        />
      </div>
      <span className="sr-only">
        {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </button>
  )
}
