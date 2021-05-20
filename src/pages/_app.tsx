import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles'
import darkTheme from '../styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
