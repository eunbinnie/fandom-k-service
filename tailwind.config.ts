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
          red: '#f96868',
          orange: '#f96d69',
          pink: '#fe5493',
          yellow: '#d2c030',
        },
        black: {
          primary: '#02000e',
          secondary: '#181d26',
          background: '#000000cc',
        },
        gray: {
          dark: '#67666e',
          medium: '#828282',
          light: '#f6f6f8',
        },
        white: {
          primary: '#f7f7f8',
          secondary: '#8c92ab',
          pure: '#fff',
          lavendar: '#f1eef9cc',
        },
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['12px', '1.5'],
        xs: ['13px', '2'],
        sm: ['14px', '1.8'],
        md: ['15px', '1.6'],
        base: ['16px', '1.6'],
        lg: ['18px', 'normal'],
        xl: ['20px', '1.08'],
        '2xl': ['24px', '1.08'],
        '3xl': ['26px', 'normal'],
      },
      backgroundImage: {
        'pink-background':
          'linear-gradient(271.36deg,rgba(249, 110, 104, 0.5) -9.84%,rgba(254, 87, 143, 0.5) 107.18%)',
        'button-background':
          'linear-gradient(91deg, #F77063 3.33%, #FE5790 99.37%)',
        'radial-background':
          'radial-gradient(50% 50% at 50% 50%, rgba(2, 0, 14, 0.00) 0%, rgba(2, 0, 14, 0.18) 37.5%, rgba(2, 0, 14, 0.50) 79.5%, #02000E 100%)',
        'blue-background':
          'linear-gradient(180deg, #030615 0%, #051D31 42.67%, #051E32 53.12%, #051C30 74.27%, #030B1C 100%)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
