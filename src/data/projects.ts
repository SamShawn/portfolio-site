import { SOCIAL_USERNAME } from './constants'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl: string | null
  featured: boolean
  role?: string
  type?: string
  challenge?: string
  solution?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'TaskFlow AI',
    description: '一个基于 AI 的任务管理应用，支持智能分类、优先级推荐和团队协作功能。',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/task-manager`,
    demoUrl: 'https://demo.task-manager.com',
    featured: true,
    role: '全栈开发',
    type: 'Web应用',
    challenge: '实时AI推荐延迟过高，用户体验差',
    solution: '引入Redis缓存+流式响应，用户等待时间从3s降至0.5s'
  },
  {
    id: 2,
    title: 'ShopMax',
    description: '全栈电商平台，包含商品管理、购物车、支付集成和订单追踪功能。',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/ecommerce-platform`,
    demoUrl: 'https://shop.example.com',
    featured: true,
    role: '技术负责人',
    type: 'Web应用',
    challenge: '大促期间数据库查询成为瓶颈',
    solution: '读写分离+SQL优化+QPS从500提升到5000'
  },
  {
    id: 3,
    title: 'ChatReal',
    description: '使用 WebSocket 实现的实时聊天应用，支持群组聊天、文件分享和消息搜索。',
    technologies: ['React', 'Socket.io', 'Express', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/chat-app`,
    demoUrl: 'https://chat.example.com',
    featured: false,
    role: '全栈开发',
    type: 'Web应用',
    challenge: '万人同时在线时消息延迟严重',
    solution: 'Redis Pub/Sub + 消息分片，延迟从2s降至100ms'
  },
  {
    id: 4,
    title: 'DataLens',
    description: '用于展示和分析复杂数据集的可视化工具。支持多种图表类型、数据过滤和导出功能。',
    technologies: ['D3.js', 'Vue.js', 'Python', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/data-viz`,
    demoUrl: 'https://dataviz.example.com',
    featured: false,
    role: '前端开发',
    type: '数据可视化',
    challenge: '百万级数据点渲染卡顿',
    solution: 'WebWorker + Canvas分页渲染，实现60fps流畅体验'
  },
  {
    id: 5,
    title: 'PocketFinance',
    description: '帮助用户追踪和管理个人财务的移动端应用。支持收支记录、预算设置和财务报表生成。',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/finance-tracker`,
    demoUrl: null,
    featured: false,
    role: '独立开发',
    type: '移动应用',
    challenge: '离线数据同步冲突',
    solution: 'CRDT算法实现离线优先，数据0丢失'
  },
  {
    id: 6,
    title: 'DocGen',
    description: '自动生成 API 文档的工具，支持多种框架和自定义模板。帮助团队快速维护接口文档。',
    technologies: ['TypeScript', 'Express', 'Handlebars'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/api-doc-generator`,
    demoUrl: 'https://apidocs.example.com',
    featured: false,
    role: '全栈开发',
    type: '开发者工具',
    challenge: '文档更新不及时，与代码不同步',
    solution: 'CI/CD集成，代码提交自动生成文档'
  }
]

export const featuredProjects = projects.filter(p => p.featured)

// 技术栈数据
export const techStack = [
  { name: 'React', years: 5, color: '#61DAFB' },
  { name: 'Node.js', years: 6, color: '#339933' },
  { name: 'Python', years: 4, color: '#3776AB' },
  { name: 'PostgreSQL', years: 4, color: '#336791' },
  { name: 'Docker', years: 4, color: '#2496ED' },
  { name: 'TypeScript', years: 5, color: '#3178C6' },
  { name: 'Next.js', years: 3, color: '#000000' },
  { name: 'MongoDB', years: 4, color: '#47A248' },
] as const