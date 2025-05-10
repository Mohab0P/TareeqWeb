import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-slow-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow-delayed-2': 'float 6s ease-in-out 4s infinite',
        'subtle-move': 'subtle-move 20s ease-in-out infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'slide-down': 'slide-down 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'slide-up-delayed': 'slide-up 0.8s ease-out 0.2s forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-delayed': 'fade-in 0.8s ease-out 0.2s forwards',
        'fade-in-delayed-2': 'fade-in 0.8s ease-out 0.4s forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delayed': 'fade-in-up 0.8s ease-out 0.2s forwards',
        'fade-in-up-delayed-2': 'fade-in-up 0.8s ease-out 0.4s forwards',
        'scale-in': 'scale-in 0.8s ease-out forwards',
        'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-slow-delayed': 'pulse 4s ease-in-out 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'expand-width': 'expand-width 0.8s ease-out forwards',
        'expand-width-delayed': 'expand-width 0.8s ease-out 0.2s forwards',
        'wave': 'wave 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'subtle-move': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 10px)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,255,255,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255,255,255,0.8)' },
        },
        'expand-width': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'wave': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
      },
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
} satisfies Config;