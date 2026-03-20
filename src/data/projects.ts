import type { Project } from '../types'
import { SOCIAL_USERNAME } from './constants'

export const projects: Project[] = [
  {
    id: 1,
    title: '智能任务管理系统',
    description: '一个基于 AI 的任务管理应用，支持智能分类、优先级推荐和团队协作功能。使用 React 和 TypeScript 构建，后端采用 Node.js 和 MongoDB。',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/task-manager`,
    demoUrl: 'https://demo.task-manager.com',
    featured: true
  },
  {
    id: 2,
    title: 'E-Commerce 平台',
    description: '全栈电商平台，包含商品管理、购物车、支付集成和订单追踪功能。使用 Next.js 和 Stripe 实现无缝的购物体验。',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/ecommerce-platform`,
    demoUrl: 'https://shop.example.com',
    featured: true
  },
  {
    id: 3,
    title: '实时协作聊天室',
    description: '使用 WebSocket 实现的实时聊天应用，支持群组聊天、文件分享和消息搜索。界面简洁，性能优化出色。',
    technologies: ['React', 'Socket.io', 'Express', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/chat-app`,
    demoUrl: 'https://chat.example.com',
    featured: false
  },
  {
    id: 4,
    title: '数据分析可视化工具',
    description: '用于展示和分析复杂数据集的可视化工具。支持多种图表类型、数据过滤和导出功能。',
    technologies: ['D3.js', 'Vue.js', 'Python', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/data-viz`,
    demoUrl: 'https://dataviz.example.com',
    featured: false
  },
  {
    id: 5,
    title: '个人财务追踪器',
    description: '帮助用户追踪和管理个人财务的移动端应用。支持收支记录、预算设置和财务报表生成。',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/finance-tracker`,
    demoUrl: null,
    featured: false
  },
  {
    id: 6,
    title: 'API 接口文档生成器',
    description: '自动生成 API 文档的工具，支持多种框架和自定义模板。帮助团队快速维护接口文档。',
    technologies: ['TypeScript', 'Express', 'Handlebars'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    githubUrl: `https://github.com/${SOCIAL_USERNAME.github}/api-doc-generator`,
    demoUrl: 'https://apidocs.example.com',
    featured: false
  }
]

export const featuredProjects = projects.filter(p => p.featured)
