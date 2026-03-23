import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useTranslation } from './i18n/LanguageContext'
import { useDocumentTitle } from './hooks/useDocumentTitle'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { motion, AnimatePresence } from 'framer-motion'

// Footer 组件（内部组件以使用 Hook）
function Footer() {
  const t = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          {t.common.year(currentYear)} {t.common.builtWith}
        </p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

// 页面过渡动画配置
const pageVariants = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as any
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as any
    }
  }
}

// 内部组件，以便在 LanguageProvider 中使用 hooks
function AppContent() {
  useDocumentTitle()
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AnimatePresence mode="popLayout">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Contact />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
