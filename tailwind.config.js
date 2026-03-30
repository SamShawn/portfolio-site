export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ===== 粗野主义色盘 (Brutalist Palette) =====
      brutalist: {
        // 核心色
        black: '#000000',
        white: '#FFFFFF',
        // 强调色
        orange: '#FF3300',
        lime: '#00FF00',
        yellow: '#FFFF00',
        cyan: '#00FFFF',
        magenta: '#FF00FF',
        // 辅助色
        red: '#FF0000',
        blue: '#0000FF',
      },

      colors: {
        // ===== 粗野主义色彩系统 =====
        brutal: {
          black: '#000000',
          white: '#FFFFFF',
          orange: '#FF3300',
          lime: '#00FF00',
          yellow: '#FFFF00',
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          red: '#FF0000',
          blue: '#0000FF',
        },

        // 亮色模式
        primary: {
          50: '#f0f5ff',
          100: '#e1e9ff',
          200: '#c4d4ff',
          300: '#96b4ff',
          400: '#5e8eff',
          500: '#3a6eff',
          600: '#2b54e6',
          700: '#1e3cb8',
          800: '#162c91',
          900: '#0f2375',
        },

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

        surface: {
          'light': '#ffffff',
          'elevated': '#f8fafc',
          'overlay': '#f1f5f9',
          'code': '#f8fafc',
          'dark': '#000000',
          'dark-elevated': '#0a0a0a',
          'dark-overlay': '#111111',
        },

        text: {
          'light': {
            primary: '#0f172a',
            secondary: '#475569',
            tertiary: '#94a3b8',
            'inverse': '#ffffff',
          },
          'dark': {
            primary: '#ffffff',
            secondary: '#e2e8f0',
            tertiary: '#94a3b8',
            'inverse': '#0f172a',
          },
        },

        border: {
          'light': '#000000',
          'subtle': '#e2e8f0',
          'dark': '#ffffff',
        },
      },

      fontFamily: {
        // 粗野主义字体 - 使用免费方案
        display: ['Anton', 'Impact', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'monospace'],
        body: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        code: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },

      fontSize: {
        'hero': ['clamp(4rem, 15vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'section': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },

      animation: {
        'shake': 'shake 0.5s ease-in-out',
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typewriter 3s steps(40) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px) rotate(-1deg)' },
          '75%': { transform: 'translateX(5px) rotate(1deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      boxShadow: {
        'brutal': '8px 8px 0px 0px #000000',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-white': '8px 8px 0px 0px #ffffff',
        'brutal-orange': '8px 8px 0px 0px #FF3300',
        'brutal-lime': '8px 8px 0px 0px #00FF00',
      },

      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
      },
    },
  },
  plugins: []
}