module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: (theme) => ({
      // 'hero-pattern': "url('/ribbon.png')",
    }),
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      heading: ['Nuito', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
