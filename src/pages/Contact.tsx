import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react'
import { SOCIAL_URL, SOCIAL_DISPLAY } from '../data/constants'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function Contact() {
  const t = useTranslation()
  return (
    <div className="min-h-screen pt-16 pb-20 vg-organic-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header - 梵高风格 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-van-gogh-cadmium-yellow font-handwritten text-2xl block mb-4">
            联系我们
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-van-gogh-canvas mb-4 font-serif-vg">
            {t.contact.title}
          </h1>
          <p className="text-lg text-van-gogh-canvas/80">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info - 梵高风格 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-van-gogh-canvas mb-6 font-serif-vg">
                {t.contact.socialMedia}
              </h2>
              <div className="space-y-4">
                <a
                  href={SOCIAL_URL.email}
                  className="flex items-center gap-4 p-4 rounded-xl bg-van-gogh-canvas hover:bg-van-gogh-canvas/90 transition-all duration-300 border border-van-gogh-ochre/30 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-van-gogh-cobalt text-van-gogh-canvas group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-van-gogh-text-dark">Email</p>
                    <p className="text-van-gogh-text-dark/70">{SOCIAL_DISPLAY.email}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-van-gogh-canvas hover:bg-van-gogh-canvas/90 transition-all duration-300 border border-van-gogh-ochre/30 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-van-gogh-midnight text-van-gogh-canvas group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-van-gogh-text-dark">GitHub</p>
                    <p className="text-van-gogh-text-dark/70">{SOCIAL_DISPLAY.github}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-van-gogh-canvas hover:bg-van-gogh-canvas/90 transition-all duration-300 border border-van-gogh-ochre/30 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-van-gogh-cobalt text-van-gogh-canvas group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-van-gogh-text-dark">LinkedIn</p>
                    <p className="text-van-gogh-text-dark/70">{SOCIAL_DISPLAY.linkedin}</p>
                  </div>
                </a>

                <a
                  href={SOCIAL_URL.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-van-gogh-canvas hover:bg-van-gogh-canvas/90 transition-all duration-300 border border-van-gogh-ochre/30 hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-van-gogh-ochre text-van-gogh-canvas group-hover:scale-110 transition-transform duration-300">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-van-gogh-text-dark">Twitter</p>
                    <p className="text-van-gogh-text-dark/70">{SOCIAL_DISPLAY.twitter}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Location - 梵高风格 */}
            <motion.div
              className="flex items-center gap-3 text-van-gogh-canvas/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MapPin className="w-5 h-5" />
              <span>{t.contact.location}</span>
            </motion.div>
          </div>

          {/* Contact Form - 梵高风格 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl impasto-border">
              <h2 className="text-2xl font-bold text-van-gogh-text-dark mb-6 font-serif-vg">
                {t.contact.sendMessage}
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-van-gogh-text-dark mb-2 font-body-vg"
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-van-gogh-ochre/30 bg-van-gogh-canvas text-van-gogh-text-dark focus:outline-none focus:ring-2 focus:ring-van-gogh-cobalt focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-van-gogh-text-dark mb-2 font-body-vg"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-van-gogh-ochre/30 bg-van-gogh-canvas text-van-gogh-text-dark focus:outline-none focus:ring-2 focus:ring-van-gogh-cobalt focus:border-transparent transition-all duration-300"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-van-gogh-text-dark mb-2 font-body-vg"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-van-gogh-ochre/30 bg-van-gogh-canvas text-van-gogh-text-dark focus:outline-none focus:ring-2 focus:ring-van-gogh-cobalt focus:border-transparent transition:all duration-300 resize-none font-body-vg"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-van-gogh-cobalt text-van-gogh-canvas font-semibold hover:bg-van-gogh-cobalt/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-serif-vg"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.sendButton}
                </button>
              </form>

              <p className="mt-6 text-sm text-van-gogh-text-dark/60 text-center font-body-vg">
                {t.contact.orEmail}{' '}
                <a
                  href={SOCIAL_URL.email}
                  className="text-van-gogh-cobalt hover:underline"
                >
                  {SOCIAL_DISPLAY.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}