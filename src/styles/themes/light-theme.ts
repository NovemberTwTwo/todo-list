import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '20px',

  colors: {
    brand: '#4300D1',
    brandSecondary: '#7A4ED9',
    main: '#FFFFFF',
    secondary: '#999999',
    third: '#DBDBDB',
    fontMain: '#111111',
    fontSecondary: '#767676',
  },

  gaps: {
    small: '6px',
    semiSmall: '8px',
    light: '10px',
    regular: '12px',
    normal: '20px',
    semiLarge: '24px',
    large: '48px',
  },

  medias: {
    smallPhone: '320px',
    mediumPhone: '480px',
    smallTablet: '600px',
    largeTablet: '768px',
    landscapePhone: '800px',
    landscapeTablet: '1024px',
    desktop: '1280px',
    wideScreen: '1440px',
  },
};

export { lightTheme };
