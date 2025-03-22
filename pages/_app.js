import 'styles/index.scss'
import { Layouts } from 'layouts'
import { ThemeProvider } from 'contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Layouts layouts={Component.Layouts || []} pageProps={pageProps}>
          <Component {...pageProps} />
        </Layouts>
      </div>
    </ThemeProvider>
  )
}

export default MyApp;