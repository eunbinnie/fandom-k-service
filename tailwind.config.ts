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
          orange: 'var(--brand-orange)',
          pink: 'var(--brand-pink)',
        },
        black: {
          primary: 'var(--black-primary)',
          secondary: 'var(--black-secondary)',
        },
        gray: {
          dark: 'var(--gray-dark)',
          medium: 'var(--gray-medium)',
          light: 'var(--gray-light)',
        },
        white: {
          primary: 'var(--white-primary)',
          secondary: 'var(--white-secondary)',
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
