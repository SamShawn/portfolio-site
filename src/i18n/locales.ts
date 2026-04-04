// 支持的语言类型
export type Language = 'zh-CN' | 'en-US'

// 中文翻译 - 粗野主义风格
export const zhCN = {
  // 导航栏
  nav: {
    home: '首页',
    projects: '项目',
    about: '关于',
    contact: '联系',
    stack: '技术栈'
  },

  // 首页
  home: {
    greeting: '孙昕',
    nickname: '(SamShawn)',
    title: '全栈工程师',
    subtitle: '解决问题的人',
    location: '中国 / 远程',
    viewProjects: '看项目',
    contactMe: '联系我',
    scrollHint: '$ 向下滚动',
    featuredProjects: '精选项目',
    featuredDescription: '这些项目展示了我是如何解决问题的',
    viewAllProjects: '全部项目',
    techStack: '技术栈',
    techStackDescription: '我擅长并持续使用的技术'
  },

  // 技术栈页
  stack: {
    title: '技术栈',
    subtitle: '我用什么来构建',
    experience: '经验',
    years: '年',
    viewProjects: '查看相关项目'
  },

  // 作品页
  projects: {
    title: '项目',
    description: '每一个都是真实的、线上可访问的、解决过真实问题的',
    all: '全部',
    featured: '精选',
    noProjects: '没有找到项目',
    role: '角色',
    type: '类型',
    challenge: '核心挑战',
    solution: '解决方案',
    viewCode: '代码',
    viewDemo: '演示'
  },

  // 关于页
  about: {
    title: '关于',
    subtitle: '我是谁',
    intro: [
      '我是孙昕，一个写了7年代码的全栈工程师。',
      '我爱好解决问题。从前端交互到后端架构，从数据库设计到DevOps，我享受把想法变成可运行代码的过程。',
      '我相信好的代码首先是为人读的，其次才是为机器。所以我重视可维护性、可测试性和代码可读性。'
    ],
    beliefsTitle: '我的信念',
    beliefs: [
      '代码首先是为人读的，其次才是为机器',
      '好的产品源于对用户需求的深刻理解',
      '持续学习是技术人的核心竞争力'
    ],
    nowTitle: '现在',
    now: '在找工作 - 全栈/前端工程师职位',
    timelineTitle: '经历'
  },

  // 联系页
  contact: {
    title: '联系',
    description: '有项目找我？或者只是聊聊技术？',
    email: '邮箱',
    social: '社交',
    orEmail: '或者直接写邮件',
    location: '中国',
    name: '姓名',
    namePlaceholder: '你的名字',
    emailPlaceholder: 'your@email.com',
    message: '消息',
    messagePlaceholder: '想说什么...',
    sendButton: '发送消息',
    sending: '发送中...',
    sendSuccess: '消息已发送！',
    sendError: '发送失败，请重试'
  },

  // 通用
  common: {
    year: (year: number) => `© ${year} 孙昕.`,
    builtWith: '用 React + TypeScript + Tailwind 构建.'
  },

  // 页面标题
  siteTitle: '孙昕 | 全栈工程师'
} as const

// 英文翻译 - 粗野主义风格
export const enUS = {
  // 导航栏
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    stack: 'Stack'
  },

  // 首页
  home: {
    greeting: 'Samuel Sun',
    nickname: '(SamShawn)',
    title: 'Full-Stack Engineer',
    subtitle: 'Problem Solver',
    location: 'China / Remote',
    viewProjects: 'View Projects',
    contactMe: 'Contact',
    scrollHint: '$ scroll --down',
    featuredProjects: 'Featured',
    featuredDescription: 'Real projects that solved real problems',
    viewAllProjects: 'All Projects',
    techStack: 'Tech Stack',
    techStackDescription: 'Technologies I work with'
  },

  // 技术栈页
  stack: {
    title: 'Tech Stack',
    subtitle: 'What I build with',
    experience: 'Experience',
    years: 'yrs',
    viewProjects: 'Related Projects'
  },

  // 作品页
  projects: {
    title: 'Projects',
    description: 'Real projects. Live demos. Solved real problems.',
    all: 'All',
    featured: 'Featured',
    noProjects: 'No projects found',
    role: 'Role',
    type: 'Type',
    challenge: 'Challenge',
    solution: 'Solution',
    viewCode: 'Code',
    viewDemo: 'Demo'
  },

  // 关于页
  about: {
    title: 'About',
    subtitle: 'Who I am',
    intro: [
      "I'm Samuel Sun, a full-stack engineer with 7 years of coding experience.",
      'I love solving problems. From frontend interactions to backend architecture, database design to DevOps — I enjoy turning ideas into working code.',
      'I believe good code is written for humans first, machines second. So I value maintainability, testability, and readability.'
    ],
    beliefsTitle: 'What I Believe',
    beliefs: [
      'Code is for humans first, machines second',
      'Great products come from understanding user needs',
      'Continuous learning is a developer\'s super power'
    ],
    nowTitle: 'Now',
    now: 'Open to work — Full-stack / Frontend Engineer',
    timelineTitle: 'Journey'
  },

  // 联系页
  contact: {
    title: 'Contact',
    description: 'Have a project? Want to talk tech?',
    email: 'Email',
    social: 'Social',
    orEmail: 'Or just email me',
    location: 'China',
    name: 'Name',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'What you want to say...',
    sendButton: 'Send Message',
    sending: 'Sending...',
    sendSuccess: 'Message sent!',
    sendError: 'Failed to send, please try again'
  },

  // 通用
  common: {
    year: (year: number) => `© ${year} Samuel Sun.`,
    builtWith: 'Built with React + TypeScript + Tailwind.'
  },

  // 页面标题
  siteTitle: 'Samuel Sun | Full-Stack Engineer'
} as const

// 语言映射
export const locales = {
  'zh-CN': zhCN,
  'en-US': enUS
} as const

// 默认语言
export const DEFAULT_LANGUAGE: Language = 'en-US'

// localStorage 键名
export const LANGUAGE_STORAGE_KEY = 'portfolio-language'