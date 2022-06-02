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
      'gray': '#464646',
      'blue':'#377DFF'
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
