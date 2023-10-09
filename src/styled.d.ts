import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      brand: string;
      brandSecondary: string;
      main: string;
      secondary: string;
      third: string;
      fontMain: string;
      fontSecondary: string;
    };

    gaps: {
      small: string;
      semiSmall: string;
      light: string;
      regular: string;
      normal: string;
      semiLarge: string;
      large: string;
    };

    medias: {
      smallPhone: string;
      mediumPhone: string;
      smallTablet: string;
      largeTablet: string;
      landscapePhone: string;
      landscapeTablet: string;
      desktop: string;
      wideScreen: string;
    };
  }
}
