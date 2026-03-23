// 支持的语言类型
export type Language = 'zh-CN' | 'en-US'

// 中文翻译
export const zhCN = {
  // 导航栏
  nav: {
    home: '首页',
    projects: '作品',
    about: '关于',
    contact: '联系'
  },

  // 首页
  home: {
    welcome: '欢迎来到我的个人作品集',
    greeting: '你好，我是孙昕',
    title: '一名全栈开发者',
    description: '热爱创造优雅的用户体验和高效的解决方案。\n专注于 React、Node.js 和现代 Web 技术栈。',
    viewProjects: '查看作品',
    contactMe: '联系我',
    featuredProjects: '精选作品',
    featuredDescription: '以下是我的一些代表性项目，展示了我的技术能力和设计理念',
    viewAllProjects: '查看所有作品',
    techStack: '技术栈',
    techStackDescription: '我专注于现代 Web 开发技术栈，并持续学习新技术'
  },

  // 作品页
  projects: {
    title: '我的作品',
    description: '每一个项目都是一次学习和成长的机会',
    all: '全部作品',
    featured: '精选作品',
    noProjects: '没有找到匹配的项目'
  },

  // 关于页
  about: {
    title: '关于我',
    subtitle: '热爱编程，追求卓越',
    greeting: '你好！',
    intro: [
      '我是孙昕，一名充满激情的全栈开发者，拥有超过 5 年的软件开发经验。\n我热衷于构建优雅、高效的用户界面和健壮的后端系统。',
      '在职业生涯中，我曾参与过多个大型项目的开发，从初创公司的 MVP 到企业级应用。\n我擅长使用 React、TypeScript、Node.js 等现代技术栈，并且对性能优化、\n可访问性和用户体验有深入的理解。',
      '除了编程，我也是开源社区的积极贡献者。我相信通过分享知识和协作，\n我们可以共同推动技术进步，为更多人创造价值。'
    ],
    timelineTitle: '我的旅程',
    timelineDescription: '工作、学习和成就的时间轴',
    interests: '兴趣爱好',
    interestsList: [
      {
        title: '持续学习',
        description: '关注最新的技术趋势，阅读技术博客和书籍'
      },
      {
        title: '游戏开发',
        description: '偶尔尝试开发小型游戏，探索新的交互方式'
      },
      {
        title: '音乐',
        description: '享受各种类型的音乐，在编码时听音乐帮助专注'
      },
      {
        title: '摄影',
        description: '用相机记录生活中的美好瞬间'
      }
    ]
  },

  // 联系页
  contact: {
    title: '联系我',
    description: '有项目合作想法或想聊聊技术？随时联系我！',
    socialMedia: '社交媒体',
    location: '中国',
    sendMessage: '发送消息',
    name: '姓名',
    email: '邮箱',
    message: '消息',
    namePlaceholder: '你的姓名',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: '你想说些什么...',
    sendButton: '发送消息',
    orEmail: '或者直接发送邮件到'
  },

  // 通用
  common: {
    year: (year: number) => `© ${year} 孙昕. `,
    builtWith: '使用 React, TypeScript 和 Tailwind CSS 构建。'
  },

  // 页面标题
  siteTitle: '孙昕的个人作品集'
} as const

// 英文翻译
export const enUS = {
  // 导航栏
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact'
  },

  // 首页
  home: {
    welcome: 'Welcome to my portfolio',
    greeting: 'Hi, I\'m Samuel Sun',
    title: 'A Full-Stack Developer',
    description: 'Passionate about creating elegant user experiences and efficient solutions.\nFocused on React, Node.js and modern web technologies.',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    viewAllProjects: 'View All Projects',
    featuredProjects: 'Featured Projects',
    featuredDescription: 'Here are some of my representative projects showcasing my technical skills and design philosophy',
    techStack: 'Tech Stack',
    techStackDescription: 'I specialize in modern web development technologies and continuously learn new ones'
  },

  // 作品页
  projects: {
    title: 'My Projects',
    description: 'Every project is an opportunity for learning and growth',
    all: 'All Projects',
    featured: 'Featured',
    noProjects: 'No matching projects found'
  },

  // 关于页
  about: {
    title: 'About Me',
    subtitle: 'Passionate about coding, pursuing excellence',
    greeting: 'Hello!',
    intro: [
      'I am Sun Xin, a passionate full-stack developer with over 5 years of software development experience.\nI am enthusiastic about building elegant, efficient user interfaces and robust backend systems.',
      'Throughout my career, I have participated in the development of multiple large-scale projects, from startup MVPs to enterprise applications.\nI excel at using modern technology stacks like React, TypeScript, and Node.js, with deep understanding in performance optimization,\naccessibility, and user experience.',
      'Beyond coding, I am also an active contributor to the open-source community. I believe that through sharing knowledge and collaboration,\nwe can collectively advance technology and create value for more people.'
    ],
    timelineTitle: 'My Journey',
    timelineDescription: 'A timeline of work, learning, and achievements',
    interests: 'Interests & Hobbies',
    interestsList: [
      {
        title: 'Continuous Learning',
        description: 'Keeping up with the latest technology trends, reading tech blogs and books'
      },
      {
        title: 'Game Development',
        description: 'Occasionally developing small games to explore new interaction patterns'
      },
      {
        title: 'Music',
        description: 'Enjoying various types of music, listening to music while coding helps me focus'
      },
      {
        title: 'Photography',
        description: 'Capturing beautiful moments in life with a camera'
      }
    ]
  },

  // 联系页
  contact: {
    title: 'Contact Me',
    description: 'Have a project idea or want to talk tech? Feel free to reach out!',
    socialMedia: 'Social Media',
    location: 'China',
    sendMessage: 'Send Message',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'What would you like to say...',
    sendButton: 'Send Message',
    orEmail: 'Or send an email directly to'
  },

  // 通用
  common: {
    year: (year: number) => `© ${year} Samuel Sun. `,
    builtWith: 'Built with React, TypeScript & Tailwind CSS.'
  },

  // 页面标题
  siteTitle: 'Samuel Sun\'s Portfolio'
} as const

// 语言映射
export const locales = {
  'zh-CN': zhCN,
  'en-US': enUS
} as const

// 默认语言
export const DEFAULT_LANGUAGE: Language = 'zh-CN'

// localStorage 键名
export const LANGUAGE_STORAGE_KEY = 'portfolio-language'
