import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useTranslation } from './i18n/LanguageContext'
import { useDocumentTitle } from './hooks/useDocumentTitle'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Stack } from './pages/Stack'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { motion, AnimatePresence } from 'framer-motion'

// Footer 组件
function Footer() {
  const t = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brutal-black dark:bg-brutal-white border-t-4 border-brutal-black dark:border-brutal-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center font-mono text-sm text-brutal-white dark:text-brutal-black">
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

// 页面过渡动画配置 - 粗野主义风格
const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
}

// 内部组件，以便在 LanguageProvider 中使用 hooks
function AppContent() {
  useDocumentTitle()
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants as any}
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
                  variants={pageVariants as any}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/stack"
              element={
                <motion.div
                  variants={pageVariants as any}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Stack />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants as any}
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
                  variants={pageVariants as any}
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