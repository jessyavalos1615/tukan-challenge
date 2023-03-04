import "styled-components";

declare module "styled-components" {
  export interface color {
    black: string;
    white: string;
    bodyText: string;
    primaryColor: string;
    primaryColor_light: string;
  }

  export interface screen_size {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
  }

  export interface DefaultTheme {
    colors: color;
    screen_sizes: screen_size;
  }
}
