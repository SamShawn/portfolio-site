import { createContext, useContext, useState, ReactNode } from 'react'
import type { Language } from './locales'
import { locales as localeData, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY } from './locales'

// 导出类型
export type { Language }
export type Locales = typeof localeData
export type I18n = typeof localeData[keyof typeof localeData]

// 语言上下文类型
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: I18n
}

// 创建上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// 获取初始语言
function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (stored === 'zh-CN' || stored === 'en-US') {
      return stored as Language
    }
  } catch (error) {
    console.warn('Failed to read language from localStorage:', error)
  }

  // 检测浏览器语言
  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('zh')) return 'zh-CN'
  if (browserLang.startsWith('en')) return 'en-US'

  return DEFAULT_LANGUAGE
}

// Provider 组件
interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  // 设置语言
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    } catch (error) {
      console.warn('Failed to save language to localStorage:', error)
    }
  }

  // 当前语言的翻译
  const t = localeData[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook 用于使用语言上下文
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook 用于获取翻译
export function useTranslation(): I18n {
  const { t } = useLanguage()
  return t
}
