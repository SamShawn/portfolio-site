import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../i18n/locales'

// 语言显示名称
const LANGUAGE_LABELS: Record<Language, string> = {
  'zh-CN': '中',
  'en-US': 'EN'
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 font-mono font-bold text-sm uppercase border-2 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black text-brutal-black dark:text-brutal-white hover:bg-brutal-yellow dark:hover:bg-brutal-yellow transition-colors"
      aria-label="Toggle language"
    >
      {LANGUAGE_LABELS[language]}
    </button>
  )
}