import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#f96d69',
          pink: '#fe5493',
        },
        black: {
          primary: '#02000e',
          secondary: '#181d26',
        },
        gray: {
          dark: '#67666e',
          medium: '#828282',
          light: '#a3a5a8',
        },
        white: {
          primary: '#f7f7f8',
          secondary: '#8c92ab',
          pure: '#fff',
        },
      },
      fontFamily: {
        notosans: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['12px', '1.5'],
        xs: ['13px', '2'],
        sm: ['14px', '1.8'],
        md: ['15px', '1.6'],
        base: ['16px', '1.6'],
        lg: ['18px', 'normal'],
        xl: ['20px', '1.08'],
        '2xl': ['26px', 'normal'],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
