import { SOCIAL_USERNAME } from './constants'

export interface Project {
  id: number
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl: string | null
  featured: boolean
  role?: string
  roleEn?: string
  type?: string
  typeEn?: string
  challenge?: string
  challengeEn?: string
  solution?: string
  solutionEn?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'TeamLink',
    titleEn: 'TeamLink',
    description:
      '实时聊天协作应用，对标Slack，支持频道聊天、私聊、实时消息、文件上传与权限管理，UI/UX达国际顶级设计水准。',
    descriptionEn:
      'A real-time chat collaboration app, benchmarking Slack, supporting channel chat, private chat, real-time messaging, file upload and permission management, with top international UI/UX standards.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'WebSocket',
      'Socket.IO',
    ],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/team-link`,
    demoUrl: 'https://demo.team-link.com',
    featured: true,
    role: '全栈开发',
    roleEn: 'Full-Stack',
    type: 'Web应用',
    typeEn: 'Web App',
    challenge: '高并发下实时消息延迟与在线状态同步不稳定',
    challengeEn:
      'Unstable real-time message latency and online status synchronization under high concurrency',
    solution:
      '微服务架构+消息队列+缓存优化，消息延迟<100ms，在线状态同步准确率100%',
  },
  {
    id: 2,
    title: 'Lumina Shop',
    titleEn: 'Lumina Shop',
    description:
      '响应式电商平台，具备商品管理、购物车、支付、会员中心等完整功能，设计可参评国际设计奖项，性能与体验超行业标准。',
    descriptionEn:
      'A responsive e-commerce platform with complete functions including product management, shopping cart, payment and member center, eligible for international design awards, with performance and experience beyond industry standards.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PWA', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/lumina-shop`,
    demoUrl: 'https://shop.example.com',
    featured: true,
    role: '前端负责人',
    roleEn: 'Frontend Lead',
    type: 'Web应用',
    typeEn: 'Web App',
    challenge: '首屏加载慢、多端适配不一致、Lighthouse评分偏低',
    challengeEn:
      'Slow first screen loading, inconsistent multi-end adaptation, low Lighthouse score',
    solution:
      '代码分割+图片优化+懒加载，首屏<1.5s，Lighthouse≥95分，全端完美响应',
  },
  {
    id: 3,
    title: 'NovaBoard',
    titleEn: 'NovaBoard',
    description:
      '项目管理与 Issue 追踪平台，融合 Trello 可视化与 Jira 企业能力，支持多视图看板、实时协作、自动化工作流与细粒度权限控制。',
    descriptionEn:
      'A project management and issue tracking platform, integrating Trello visualization and Jira enterprise capabilities, supporting multi-view kanban, real-time collaboration, automated workflow and fine-grained permission control.',
    technologies: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'WebSocket',
      'Recharts',
    ],
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/nova-board`,
    demoUrl: 'https://demo.nova-board.com',
    featured: true,
    role: '全栈开发',
    roleEn: 'Full-Stack',
    type: 'Web应用',
    typeEn: 'Web App',
    challenge: '看板拖拽卡顿、大数据量渲染性能差、实时协作冲突',
    challengeEn:
      'Kanban drag lag, poor rendering performance with large data volume, real-time collaboration conflicts',
    solution: '虚拟列表+性能优化+乐观更新，拖拽零卡顿，支持万级卡片流畅渲染',
  },
  {
    id: 4,
    title: 'NexusHR',
    titleEn: 'NexusHR',
    description:
      '人事管理平台，覆盖员工、考勤、薪酬、绩效、招聘全模块，支持数据可视化与RBAC细粒度权限，设计极简轻奢、符合无障碍标准。',
    descriptionEn:
      'A HR management platform covering all modules of employee, attendance, salary, performance and recruitment, supporting data visualization and RBAC fine-grained permissions, with minimal luxury design and accessibility compliance.',
    technologies: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'TailwindCSS v4',
      'ShadCN UI',
      'Framer Motion',
    ],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/nexus-hr`,
    demoUrl: 'https://demo.nexus-hr.com',
    featured: true,
    role: '前端架构师',
    roleEn: 'Frontend Architect',
    type: 'Web应用',
    typeEn: 'Web App',
    challenge: '人事数据安全风险高、多租户兼容难、复杂表单体验差',
    challengeEn:
      'High HR data security risk, difficult multi-tenant compatibility, poor complex form experience',
    solution:
      '数据加密+RBAC权限+一步式表单，安全合规，多租户无缝兼容，操作效率提升60%',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
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
