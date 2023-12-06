/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: { backgroundImage: {
      'site': "url('C:/Users/Karan Sharma/Documents/GitHub/SpendWise.io/src/assets/bg.png')",
    }},
  },
  plugins: [
    require('flowbite/plugin')
]
}

