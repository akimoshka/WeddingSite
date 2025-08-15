export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        body:  ['Raleway', 'sans-serif'],
        geo: ['"Raleway"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { card: '20px' },
    },
  },
  plugins: [],
}
