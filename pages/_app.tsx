import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
// import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

// https://github.com/i18next/next-i18next#unserialisable-configs
export default appWithTranslation(MyApp/*, nextI18NextConfig */)
