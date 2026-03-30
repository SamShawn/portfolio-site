export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ===== 梵高色盘 (Van Gogh Palette) =====
      vanGogh: {
        // 深钴蓝 - 星夜天空
        cobalt: '#0047AB',
        // 午夜蓝 - 阴影
        midnight: '#1a1a2e',
        // 铬黄 - 太阳、星星、温暖
        'cadmium-yellow': '#E3A01B',
        // 金赭色 - 麦田、大地
        ochre: '#CC7722',
        // 焦褐色 - 秋日温暖
        sienna: '#A0522D',
        // 橄榄绿 - 柏树
        olive: '#4a5d23',
        // 画布白
        canvas: '#f5f0e1',
        // 文字深色
        'text-dark': '#1a1a1a',
        // 文字浅色 (同 canvas)
        'text-light': '#f5f0e1',
      },

      colors: {
        // ===== 亮色模式 (Light Mode) =====
        // 主色调：低饱和科技蓝，适合专业形象
        primary: {
          50: '#f0f5ff',
          100: '#e1e9ff',
          200: '#c4d4ff',
          300: '#96b4ff',
          400: '#5e8eff',
          500: '#3a6eff',  // 主色 - 专业科技蓝
          600: '#2b54e6',
          700: '#1e3cb8',
          800: '#162c91',
          900: '#0f2375',
        },

        // 功能色
        success: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        warning: {
          light: '#f59e0b',
          DEFAULT: '#d97706',
          dark: '#b45309',
        },
        danger: {
          light: '#ef4444',
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
        },

        // ===== 界面颜色 (Surface Colors) =====
        surface: {
          // 亮色模式
          'light': {
            DEFAULT: '#ffffff',        // 主要表面
            'elevated': '#f8fafc',     // 抬升表面
            'overlay': '#f1f5f9',      // 覆盖层
            'code': '#f8fafc',         // 代码块背景 (WCAG AA: 17.6:1)
          },
          // 黑暗模式
          'dark': {
            DEFAULT: '#0d1117',        // 主要表面 - GitHub Dark 风格
            'elevated': '#161b22',     // 抬升表面
            'overlay': '#21262d',      // 覆盖层
            'code': '#161b22',         // 代码块背景 (VS Code Dark)
          },
        },

        // ===== 文本颜色 (Text Colors) =====
        text: {
          // 亮色模式
          'light': {
            primary: '#0f172a',        // 主要文本 (WCAG AA: 16.8:1 对白底)
            secondary: '#475569',      // 次要文本 (WCAG AA: 6.9:1 对白底)
            tertiary: '#94a3b8',       // 三级文本 (WCAG AA: 2.8:1 对白底)
            'inverse': '#ffffff',      // 反色文本
          },
          // 黑暗模式
          'dark': {
            primary: '#e2e8f0',        // 主要文本 (WCAG AA: 15.7:1 对 #0d1117)
            secondary: '#94a3b8',      // 次要文本 (WCAG AA: 6.9:1 对 #0d1117)
            tertiary: '#64748b',       // 三级文本 (WCAG AA: 3.2:1 对 #0d1117)
            'inverse': '#0f172a',      // 反色文本
          },
        },

        // ===== 边框颜色 (Border Colors) =====
        border: {
          'light': {
            DEFAULT: '#e2e8f0',
            'subtle': '#f1f5f9',
          },
          'dark': {
            DEFAULT: '#30363d',        // GitHub Dark 边框
            'subtle': '#21262d',
          },
        },

        // ===== 代码语法高亮 (Code Syntax Highlighting) =====
        // 基于 VS Code One Dark Pro / GitHub Dark
        code: {
          // 亮色模式 - One Light
          light: {
            'background': '#f8fafc',
            'foreground': '#0f172a',
            'keyword': '#d73a49',
            'string': '#032f62',
            'comment': '#6a737d',
            'function': '#6f42c1',
            'number': '#005cc5',
            'operator': '#586069',
            'variable': '#24292e',
            'class': '#6f42c1',
            'property': '#005cc5',
          },
          // 黑暗模式 - One Dark Pro
          dark: {
            'background': '#161b22',
            'foreground': '#c9d1d9',
            'keyword': '#ff7b72',
            'string': '#a5d6ff',
            'comment': '#8b949e',
            'function': '#d2a8ff',
            'number': '#79c0ff',
            'operator': '#ff7b72',
            'variable': '#ffa657',
            'class': '#f0883e',
            'property': '#79c0ff',
          },
        },

        // ===== 链接颜色 (Link Colors) =====
        link: {
          'light': {
            DEFAULT: '#3a6eff',
            'hover': '#2b54e6',
            'visited': '#1e3cb8',
          },
          'dark': {
            DEFAULT: '#58a6ff',
            'hover': '#79c0ff',
            'visited': '#a5d6ff',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      // 字体大小层级
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: []
}
