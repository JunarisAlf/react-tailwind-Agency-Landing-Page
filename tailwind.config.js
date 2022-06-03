module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'black': '#1D1D1D',
      'grey': '#464646',
      'blue':'#377DFF',
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'quicksand': ['quicksand', 'sans-serif']
    },
    extend: {
      dropShadow: {
        'btn': '0px 4px 8px rgba(55, 125, 255, 0.5)',
        'top-left': '0px 8px 24px rgba(0, 0, 0, 0.15)',
        'bottom-right': '0px 3.85542px 11.5663px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: [],
}
