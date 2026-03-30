import { Timeline } from '../components/Timeline'
import { timelineItems } from '../data/timeline'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function About() {
  const t = useTranslation()
  return (
    <div className="min-h-screen pt-16 pb-20 vg-organic-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - 梵高风格 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-4">
            故事
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-van-gogh-canvas mb-4 font-serif-vg">
            {t.about.title}
          </h1>
          <p className="text-lg text-van-gogh-canvas/80">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Introduction - 梵高风格卡片 */}
        <section className="mb-16">
          <motion.div
            className="p-8 rounded-2xl impasto-border"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-van-gogh-text-dark mb-4 font-serif-vg">
              {t.about.greeting}
            </h2>
            <div className="space-y-4 text-van-gogh-text-dark/90 leading-relaxed font-body-vg">
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
          </motion.div>
        </section>

        {/* Timeline - 梵高风格 */}
        <section>
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-2">
              旅程
            </span>
            <h2 className="text-3xl font-bold text-van-gogh-canvas mb-2 font-serif-vg">
              {t.about.timelineTitle}
            </h2>
            <p className="text-van-gogh-canvas/80">
              {t.about.timelineDescription}
            </p>
          </motion.div>
          <Timeline items={timelineItems} />
        </section>

        {/* Interests - 梵高风格 */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-van-gogh-canvas mb-8 font-serif-vg">
              {t.about.interests}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.about.interestsList.map((interest, index) => {
                const colors = ['from-van-gogh-cobalt/20', 'from-van-gogh-ochre/20', 'from-van-gogh-olive/20', 'from-van-gogh-sienna/20']
                return (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl bg-gradient-to-br ${colors[index]} border border-van-gogh-ochre/20 hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <h3 className="text-lg font-bold text-van-gogh-canvas mb-2 font-serif-vg">
                      {interest.title}
                    </h3>
                    <p className="text-van-gogh-canvas/80 text-sm font-body-vg">
                      {interest.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}