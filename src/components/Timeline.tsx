import type { TimelineItem } from '../types'
import { motion } from 'framer-motion'

interface TimelineProps {
  items: TimelineItem[]
}

const typeConfig = {
  work: {
    icon: '💼',
    color: 'from-van-gogh-cobalt to-van-gogh-midnight',
    bgColor: 'bg-van-gogh-canvas',
    textColor: 'text-van-gogh-cobalt',
    borderColor: 'border-van-gogh-cobalt/30'
  },
  education: {
    icon: '🎓',
    color: 'from-van-gogh-ochre to-van-gogh-sienna',
    bgColor: 'bg-van-gogh-canvas',
    textColor: 'text-van-gogh-ochre',
    borderColor: 'border-van-gogh-ochre/30'
  },
  achievement: {
    icon: '🏆',
    color: 'from-van-gogh-cadmium-yellow to-van-gogh-ochre',
    bgColor: 'bg-van-gogh-canvas',
    textColor: 'text-van-gogh-cadmium-yellow',
    borderColor: 'border-van-gogh-cadmium-yellow/30'
  }
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* 梵高风格垂直线 - 使用赭色 */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-van-gogh-cobalt via-van-gogh-ochre to-van-gogh-sienna rounded-full" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const config = typeConfig[item.type]
          return (
            <motion.div
              key={item.id}
              className="relative pl-20 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline Node - 梵高风格 */}
              <div className="absolute left-5 w-6 h-6 rounded-full bg-van-gogh-cadmium-yellow border-4 border-van-gogh-ochre shadow-lg z-10 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />

              {/* Card - 梵高风格 Impasto 边框 */}
              <article className={`p-6 rounded-xl ${config.bgColor} ${config.borderColor} border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Year Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${config.color} text-white shadow-md mb-3 font-serif-vg`}>
                  {item.year}
                </span>

                {/* Title & Company */}
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-van-gogh-text-dark font-serif-vg">
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold ${config.textColor} mt-1`}>
                    {config.icon} {item.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-van-gogh-text-dark/80 mt-3 leading-relaxed font-body-vg">
                  {item.description}
                </p>
              </article>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}