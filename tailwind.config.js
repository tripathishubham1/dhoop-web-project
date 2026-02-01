/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-indigo': '#292497',
        'periwinkle': '#a8a6fa',
        'charcoal': '#282828',
        'cream': '#faf9f7',
        'light-gray': '#f5f4f2',
      },
      fontFamily: {
        sans: ['var(--font-acumin)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-vastago)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #292497 0%, #3d35b5 50%, #a8a6fa 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(41, 36, 151, 0.08)',
        'medium': '0 8px 40px rgba(41, 36, 151, 0.12)',
        'strong': '0 20px 60px rgba(41, 36, 151, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
