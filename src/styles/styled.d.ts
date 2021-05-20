import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      'primary-color': string;
      'secondary-color': string;
      
      'text-color': string;

      "background-body": string;
      "background-header": string;
      "background-primary": string;
      "background-secondary": string;

      white: string;
      alpha: string;
      black: string;

      success: string;
      info: string;
      warning: string;
      danger: string;
    }
  }
}
