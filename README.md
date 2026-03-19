# 个人作品集网站

一个基于 React + TypeScript + Tailwind CSS + Vite 构建的响应式个人作品集网站。

## 功能特点

- ✨ 现代化的 UI 设计，包含渐变色、阴影和悬停效果
- 🌓 完整的暗黑模式支持，基于 localStorage 持久化
- 📱 响应式布局，适配移动端、平板和桌面设备
- 🚀 基于 Vite 构建，快速开发和热更新
- 🎨 使用 Tailwind CSS 进行样式设计
- 🔀 使用 React Router v6 进行路由管理
- 📦 TypeScript 类型安全
- 🚀 支持一键部署到 GitHub Pages

## 技术栈

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3
- React Router 6
- Lucide React Icons

## 项目结构

```
src/
├── components/
│   ├── Navbar.tsx          # 导航栏组件（含暗黑模式切换）
│   ├── ProjectCard.tsx     # 作品卡片组件
│   ├── Timeline.tsx        # 时间轴组件
│   └── ThemeToggle.tsx     # 暗黑模式切换按钮
├── pages/
│   ├── Home.tsx           # 首页
│   ├── Projects.tsx       # 作品页
│   ├── About.tsx          # 关于页
│   └── Contact.tsx        # 联系页
├── data/
│   ├── projects.ts        # 作品数据
│   └── timeline.ts        # 时间轴数据
├── App.tsx                # 主应用组件
├── main.tsx               # 入口文件
├── index.css              # 全局样式
└── types.ts               # TypeScript 类型定义
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 部署到 GitHub Pages

1. 修改 `vite.config.js` 中的 `base` 为你的仓库名称：

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
  // ...
})
```

2. 运行部署命令：

```bash
npm run deploy
```

或手动运行：

```bash
npm run build
gh-pages -d dist
```

## 路由页面

- `/` - 首页：展示精选作品、技能栈和社交链接
- `/projects` - 作品页：展示所有项目，支持筛选
- `/about` - 关于页：个人介绍和时间轴
- `/contact` - 联系页：联系表单和社交媒体链接

## 自定义内容

### 修改作品数据

编辑 `src/data/projects.ts` 文件，修改 `projects` 数组：

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: '你的项目名称',
    description: '项目描述',
    technologies: ['React', 'TypeScript'],
    image: 'https://example.com/image.jpg',
    githubUrl: 'https://github.com/yourusername/repo',
    demoUrl: 'https://demo.example.com',
    featured: true
  },
  // ...
]
```

### 修改时间轴数据

编辑 `src/data/timeline.ts` 文件：

```typescript
export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: '职位名称',
    company: '公司名称',
    description: '工作描述',
    type: 'work' // 'work' | 'education' | 'achievement'
  },
  // ...
]
```

### 修改联系方式

编辑 `src/pages/Contact.tsx` 文件，更新社交媒体链接和邮箱

## 主题定制

在 `tailwind.config.js` 中自定义主题颜色和样式：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // 自定义主色调
        },
      },
    },
  },
}
```

## 许可证

MIT
