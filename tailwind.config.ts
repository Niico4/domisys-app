import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'var( --gradient-primary)',
        'background-gradient': 'var(--gradient-background)',
        'logo-gradient': 'var(--gradient-logo)',
        'title-gradient': 'var(--gradient-title)',
      },

      colors: {
        landing: 'var(--background-color)',
        'custom-primary': '#9d2eef',
        'custom-secondary': '#3582fc',
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        'custom-theme': {
          extend: 'light',
          colors: {
            primary: {
              100: '#ebd4ff',
              200: '#dcb2ff',
              300: '#c781ff',
              400: '#b151fb',
              500: '#9d2eef',
              600: '#871ed2',
              700: '#721eab',
              800: '#5e198a',
              900: '#400566',
              DEFAULT: '#9d2eef',
              foreground: '#ffffff',
            },
            secondary: {
              100: '#bddbff',
              200: '#90c6ff',
              300: '#5ba5ff',
              400: '#3582fc',
              500: '#1f63f1',
              600: '#174cde',
              700: '#193fb4',
              800: '#1b398d',
              900: '#152456',
              DEFAULT: '#3582fc',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
