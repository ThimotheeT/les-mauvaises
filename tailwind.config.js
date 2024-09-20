module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl':'2560px',
    },
    extend: {
      fontFamily: {
        'soulmaze': ['Made Soulmaze', 'sans-serif'],
        'standrock': ['Stand Rock', 'sans-serif'],
      },
      colors: {
        'custom-yellow': '#F4FD15',
        'custom-dark': '#29282D',
        'custom-pink': '#C62369',
      },
    },
  },
  plugins: [],
}
