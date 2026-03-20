import { Timeline } from '../components/Timeline'
import { timelineItems } from '../data/timeline'

export function About() {
  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            关于我
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            热爱编程，追求卓越
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16 animate-slide-up">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              你好！
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                我是孙昕，一名充满激情的全栈开发者，拥有超过 5 年的软件开发经验。
                我热衷于构建优雅、高效的用户界面和健壮的后端系统。
              </p>
              <p>
                在职业生涯中，我曾参与过多个大型项目的开发，从初创公司的 MVP 到企业级应用。
                我擅长使用 React、TypeScript、Node.js 等现代技术栈，并且对性能优化、
                可访问性和用户体验有深入的理解。
              </p>
              <p>
                除了编程，我也是开源社区的积极贡献者。我相信通过分享知识和协作，
                我们可以共同推动技术进步，为更多人创造价值。
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              我的旅程
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              工作、学习和成就的时间轴
            </p>
          </div>
          <Timeline items={timelineItems} />
        </section>

        {/* Interests */}
        <section className="mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            兴趣爱好
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                emoji: '📚',
                title: '持续学习',
                description: '关注最新的技术趋势，阅读技术博客和书籍'
              },
              {
                emoji: '🎮',
                title: '游戏开发',
                description: '偶尔尝试开发小型游戏，探索新的交互方式'
              },
              {
                emoji: '🎵',
                title: '音乐',
                description: '享受各种类型的音乐，在编码时听音乐帮助专注'
              },
              {
                emoji: '📷',
                title: '摄影',
                description: '用相机记录生活中的美好瞬间'
              }
            ].map((interest, index) => (
              <div
                key={interest.title}
                className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border border-primary-100 dark:border-primary-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-3xl mb-3 block">{interest.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
