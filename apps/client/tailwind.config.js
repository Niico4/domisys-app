import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/components/(button|card|input|input-otp|chip|number-input|popover).js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-brand-primary)',
        secondary: 'var(--color-brand-secondary)',
      },

      backgroundColor: {
        glass: 'var(--color-surface-glass)',
      },

      textColor: {
        light: 'var(--color-light)',
        'custom-neutral': 'var(--color-custom-neutral)',
        gray: 'var(--color-gray)',
        'gray-light': 'var(--color-gray-light)',
        dark: 'var(--color-dark)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        grandstander: 'var(--font-grandstander)',
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        'custom-theme': {
          extend: 'dark',
          colors: {
            primary: {
              50: '#f4f9fb',
              100: '#e8f2f6',
              200: '#cde4ea',
              300: '#a0ced8',
              400: '#6eb4c2',
              500: '#4c9cab',
              600: '#397f90',
              700: '#2f6675',
              800: '#2a5662',
              900: '#284952',
              950: '#1a2f37',
              DEFAULT: '#a0ced8',
              foreground: '#121212',
            },
            secondary: {
              50: '#faf8fc',
              100: '#f4eef9',
              200: '#ebe1f3',
              300: '#dbc9e9',
              400: '#bfa0d8',
              500: '#ab82ca',
              600: '#9466b7',
              700: '#7f529e',
              800: '#6a4782',
              900: '#573a69',
              950: '#3a214a',
              DEFAULT: '#bfa0d8',
              foreground: '#121212',
            },
          },
        },
      },
    }),
  ],
};
