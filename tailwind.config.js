import { createThemes } from 'tw-colors';
import { dark, light } from './themes/index.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    mono: ['Consolas']
  },
  plugins: [
    require('@tailwindcss/forms'),
    createThemes({
      light,
      dark
    })
  ]
};
