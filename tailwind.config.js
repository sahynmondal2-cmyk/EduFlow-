/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B14',
        surface: '#111625',
        primary: '#6366F1',
        secondary: '#8B5CF6',
        accent: '#22D3EE',
        text: '#F8FAFC',
        muted: '#94A3B8',
      }
    },
  },
  plugins: [],
}
