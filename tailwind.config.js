module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '150%': '150%',
      
    }
    // backgroundImage: {
    //   'pack-train': "url('./data/desk.jpg')",
    // }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: "class"
}
