import type { TimelineItem } from '../types'

interface TimelineProps {
  items: TimelineItem[]
}

const typeConfig = {
  work: {
    icon: '💼',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800'
  },
  education: {
    icon: '🎓',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    borderColor: 'border-green-200 dark:border-green-800'
  },
  achievement: {
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600 dark:text-yellow-400',
    borderColor: 'border-yellow-200 dark:border-yellow-800'
  }
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 rounded-full" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const config = typeConfig[item.type]
          return (
            <div
              key={item.id}
              className="relative pl-20 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-5 w-6 h-6 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 border-4 border-primary-500 shadow-lg z-10 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />

              {/* Card */}
              <article className={`p-6 rounded-xl ${config.bgColor} ${config.borderColor} border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Year Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${config.color} text-white shadow-md mb-3`}>
                  {item.year}
                </span>

                {/* Title & Company */}
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className={`text-sm font-semibold ${config.textColor} mt-1`}>
                    {config.icon} {item.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}
