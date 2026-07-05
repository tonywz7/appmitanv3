import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Canvas / outer background
        canvas: '#F3F4F6',

        // Surfaces
        surface: '#FFFFFF',
        'surface-secondary': '#F9FAFB',
        'surface-accent-tint': '#ECFDF5',

        // Text
        'text-primary': '#111827',
        'text-secondary': '#374151',
        'text-muted': '#9CA3AF',

        // Accent — locked to teal/emerald (Phase 3 decision)
        accent: {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#D1FAE5',
        },

        // Borders
        border: '#F3F4F6',
        'border-strong': '#E5E7EB',
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg-mobile': ['36px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'headline-lg': ['32px', { lineHeight: '1.2' }],
        'headline-md': ['24px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.5' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label-sm': ['11px', { lineHeight: '1', letterSpacing: '0.08em' }],
      },
      spacing: {
        'container-padding': '40px',
        'section-gap-sm': '64px',
        'section-gap-lg': '96px',
      },
      borderRadius: {
        canvas: '40px',
      },
      boxShadow: {
        canvas: '0 25px 50px -12px rgba(0,0,0,0.15)',
        primary: '0 8px 20px rgba(16, 185, 129, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
