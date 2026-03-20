import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react'
import { SOCIAL_URL, SOCIAL_DISPLAY } from '../data/constants'
import { useTranslation } from '../i18n/LanguageContext'

export function Contact() {
  const t = useTranslation()
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.socialMedia}
              </h2>
              <div className="space-y-4">
                <a
                  href={SOCIAL_URL.email}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">{SOCIAL_DISPLAY.email}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 text-white group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-400">{SOCIAL_DISPLAY.github}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-400">{SOCIAL_DISPLAY.linkedin}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 text-white group-hover:scale-110 transition-transform duration-300">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Twitter</p>
                    <p className="text-gray-600 dark:text-gray-400">{SOCIAL_DISPLAY.twitter}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{t.contact.location}</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.sendMessage}
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition:all duration-300 resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold hover:from-primary-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.sendButton}
                </button>
              </form>

              <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
                {t.contact.orEmail}{' '}
                <a
                  href={SOCIAL_URL.email}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {SOCIAL_DISPLAY.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
