/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './inertia/**/*.{ts,tsx}',
    './resources/views/**/*.edge',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}
