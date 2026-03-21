import { useTranslation } from '../i18n/LanguageContext'
import { useEffect } from 'react'

/**
 * 自动设置文档标题，随语言切换而变化
 */
export function useDocumentTitle() {
  const { siteTitle } = useTranslation()

  useEffect(() => {
    document.title = siteTitle
  }, [siteTitle])
}
