import "../styles/globals.css"

import type { AppProps } from "next/app"
import Providers from "../src/providers"
import { Provider } from "react-redux"
import { store } from "../src/app/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Providers>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Providers>
    </>
  )
}

export default MyApp
