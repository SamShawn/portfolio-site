import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function About() {
  const t = useTranslation()

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-brutal-white dark:bg-brutal-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
            00 — {t.about.title}
          </span>
          <h1 className="font-display text-6xl sm:text-8xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
            {t.about.title}
          </h1>
          <p className="font-mono text-lg mt-4 text-brutal-black/70 dark:text-brutal-white/70">
            {t.about.subtitle}
          </p>

          {/* 装饰线 */}
          <div className="w-full h-4 bg-brutal-black dark:bg-brutal-white mt-8" />
        </motion.div>

        {/* Introduction */}
        <section className="mb-16">
          <motion.div
            className="border-4 border-brutal-black dark:border-brutal-white bg-brutal-yellow dark:bg-brutal-black p-8"
            style={{ boxShadow: '8px 8px 0px 0px #000000' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl uppercase text-brutal-black dark:text-brutal-white mb-6">
              {t.about.subtitle}
            </h2>
            <div className="space-y-4 font-mono text-base leading-relaxed text-brutal-black dark:text-brutal-white">
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

        {/* Beliefs */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
              01 — {t.about.beliefsTitle}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-2 mb-8 text-brutal-black dark:text-brutal-white">
              {t.about.beliefsTitle}
            </h2>

            <div className="space-y-4">
              {t.about.beliefs.map((belief, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black font-display text-xl">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 border-4 border-brutal-black dark:border-brutal-white p-4 bg-brutal-white dark:bg-brutal-black">
                    <p className="font-mono text-lg text-brutal-black dark:text-brutal-white">
                      {belief}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Now */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
              02 — {t.about.nowTitle}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase mt-2 mb-6 text-brutal-black dark:text-brutal-white">
              {t.about.nowTitle}
            </h2>

            <div className="border-4 border-brutal-orange bg-brutal-orange p-6">
              <p className="font-display text-2xl sm:text-3xl uppercase text-brutal-white">
                {t.about.now}
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}