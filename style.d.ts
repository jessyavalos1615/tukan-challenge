import "styled-components";

declare module "styled-components" {
  export interface color {
    black: string;
    white: string;
    bodyText: string;
    primaryColor: string;
    primaryColor_light: string;
  }

  export interface DefaultTheme {
    colors: color;
  }
}
