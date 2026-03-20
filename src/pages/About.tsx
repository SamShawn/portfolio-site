import { Timeline } from '../components/Timeline'
import { timelineItems } from '../data/timeline'
import { useTranslation } from '../i18n/LanguageContext'

export function About() {
  const t = useTranslation()
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.about.subtitle}
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16 animate-slide-up">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t.about.greeting}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.intro.map((paragraph, index) => (
                <p key={index}>
                  {paragraph.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < paragraph.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t.about.timelineTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {t.about.timelineDescription}
            </p>
          </div>
          <Timeline items={timelineItems} />
        </section>

        {/* Interests */}
        <section className="mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t.about.interests}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.about.interestsList.map((interest, index) => {
              const emojis = ['📚', '🎮', '🎵', '📷']
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-100 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl mb-3 block">{emojis[index]}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {interest.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
