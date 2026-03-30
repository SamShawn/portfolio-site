import { Mail, Github, Linkedin, Twitter, MapPin, Send, ArrowRight } from 'lucide-react'
import { SOCIAL_URL, SOCIAL_DISPLAY } from '../data/constants'
import { useTranslation } from '../i18n/LanguageContext'
import { motion } from 'framer-motion'

export function Contact() {
  const t = useTranslation()

  const socialLinks = [
    { name: 'GitHub', url: SOCIAL_URL.github, display: SOCIAL_DISPLAY.github, icon: Github },
    { name: 'LinkedIn', url: SOCIAL_URL.linkedin, display: SOCIAL_DISPLAY.linkedin, icon: Linkedin },
    { name: 'Twitter', url: SOCIAL_URL.twitter, display: SOCIAL_DISPLAY.twitter, icon: Twitter },
  ]

  return (
    <div className="min-h-screen pt-16 lg:pt-20 bg-brutal-cyan dark:bg-brutal-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
            00 — {t.contact.title}
          </span>
          <h1 className="font-display text-6xl sm:text-8xl uppercase mt-2 text-brutal-black dark:text-brutal-white">
            {t.contact.title}
          </h1>
          <p className="font-mono text-lg mt-4 text-brutal-black/70 dark:text-brutal-white/70">
            {t.contact.description}
          </p>

          {/* 装饰线 */}
          <div className="w-full h-4 bg-brutal-black dark:bg-brutal-white mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
                01 — {t.contact.email}
              </span>
              <h2 className="font-display text-4xl uppercase mt-2 mb-6 text-brutal-black dark:text-brutal-white">
                {t.contact.email}
              </h2>

              {/* Email Card */}
              <a
                href={SOCIAL_URL.email}
                className="block border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black p-6 hover:bg-brutal-black dark:hover:bg-brutal-white hover:text-brutal-white dark:hover:text-brutal-black transition-colors group"
                style={{ boxShadow: '8px 8px 0px 0px #000000' }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brutal-black dark:bg-brutal-white text-brutal-white dark:text-brutal-black">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-mono text-sm opacity-60">EMAIL</p>
                    <p className="font-mono text-lg">{SOCIAL_DISPLAY.email}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 ml-auto group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-mono text-sm text-brutal-black/50 dark:text-brutal-white/50">
                02 — {t.contact.social}
              </span>
              <h2 className="font-display text-4xl uppercase mt-2 mb-6 text-brutal-black dark:text-brutal-white">
                {t.contact.social}
              </h2>

              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black p-4 hover:bg-brutal-yellow dark:hover:bg-brutal-yellow transition-colors group"
                    style={{ boxShadow: '4px 4px 0px 0px #000000' }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="font-mono">{link.display}</span>
                    <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 font-mono text-lg border-4 border-brutal-black dark:border-brutal-white p-4 bg-brutal-lime dark:bg-brutal-lime"
            >
              <MapPin className="w-6 h-6" />
              <span>{t.contact.location}</span>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-4 border-brutal-black dark:border-brutal-white bg-brutal-white dark:bg-brutal-black p-8"
                 style={{ boxShadow: '12px 12px 0px 0px #000000' }}>
              <h2 className="font-display text-3xl uppercase text-brutal-black dark:text-brutal-white mb-8">
                {t.contact.title}
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-sm font-bold uppercase mb-2 text-brutal-black dark:text-brutal-white"
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-brutal"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-sm font-bold uppercase mb-2 text-brutal-black dark:text-brutal-white"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input-brutal"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-sm font-bold uppercase mb-2 text-brutal-black dark:text-brutal-white"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input-brutal resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-brutal-orange w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t.contact.sendButton}
                </button>
              </form>

              <p className="mt-6 font-mono text-sm text-center text-brutal-black/60 dark:text-brutal-white/60">
                {t.contact.orEmail}{' '}
                <a
                  href={SOCIAL_URL.email}
                  className="underline hover:text-brutal-orange"
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