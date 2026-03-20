import { useState } from 'react'
import { Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../i18n/locales'

// 语言显示名称
const LANGUAGE_LABELS: Record<Language, string> = {
  'zh-CN': '中文',
  'en-US': 'EN'
}

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* 主按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium text-sm"
        aria-label="Change language"
      >
        <Languages className="w-4 h-4" />
        <span>{LANGUAGE_LABELS[language]}</span>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <>
          {/* 遮罩层 - 点击关闭 */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* 菜单 */}
          <div className="absolute right-0 top-full mt-2 z-50 py-2 px-1 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 min-w-[120px] animate-fade-in">
            {(['zh-CN', 'en-US'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  language === lang
                    ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
