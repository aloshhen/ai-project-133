export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'electric-coffee': {
          from: '#fb923c',   // orange-400
          via: '#f59e0b',    // amber-500
          to: '#eab308'      // yellow-600
        }
      },
      backgroundImage: {
        'electric-gradient': 'linear-gradient(to right, #fb923c, #f59e0b, #eab308)'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}