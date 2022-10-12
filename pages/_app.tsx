import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RecoilRoot } from 'recoil'
import { mainTheme } from '../utils/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
