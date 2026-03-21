import { Routes, Route } from 'react-router-dom'
import { LanguageProvider, useTranslation } from './i18n/LanguageContext'
import { useDocumentTitle } from './hooks/useDocumentTitle'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

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

// 内部组件，以便在 LanguageProvider 中使用 hooks
function AppContent() {
  useDocumentTitle()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
