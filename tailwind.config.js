/** @type {import('tailwindcss').Config} */
import theme from './configuration.json';
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: theme.light,
        dark: theme.dark,
      },
      borderRadius: theme.borderRadius,
      spacing: theme.spacing,
    },
  },
  plugins: [],
}