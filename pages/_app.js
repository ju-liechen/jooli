import 'styles/index.scss'
import { Layouts } from 'layouts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layouts layouts={Component.Layouts || []} pageProps={pageProps}>
        <Component {...pageProps} />
      </Layouts>
    </>
  )
}

export default MyApp;