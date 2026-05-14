import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: 'var(--ivory)',
        sand: 'var(--sand)',
        sea: 'var(--sea)',
        eucalyptus: 'var(--eucalyptus)',
        gold: 'var(--gold)',
        clay: 'var(--clay)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(22, 58, 85, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
