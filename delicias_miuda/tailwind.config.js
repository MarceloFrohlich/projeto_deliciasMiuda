/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-rose': '#fecdd3',
        'heavy-rose': '#fb7185'
      },
      backgroundImage: {
        'web-main-banner': "url('/images/web_bg_large.jpeg')",
        'bem-casado': "url('/images/bem_casado.jpg')",
        'brigadeiro': "url('/images/brigadeiro.jpg')",
        'bolo-pote': "url('/images/bolo_pote.jpg')",
        'salgadinho': "url('/images/salgadinho.jpg')",
        'sobremesa': "url('/images/sobremesa.jpg')",
        'bolo-caseiro': "url('/images/bolo_caseiro.jpg')",
      },
      fontFamily: {
        sans: ['var(--font-yanone)'],
      },
    },
  },
  plugins: [],
}