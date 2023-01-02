import '../styles/StylesGlobals'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { CourseProvider } from '../context/CourseContext'

const theme = {
  colors: {
    primary: '#355C7D',
    blue: '#2B4A79',
    cyan: '#008E88',
    red: '#BF0D0D',
    yellow: '#ED7203',
    purple: '#7F337F'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <CourseProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CourseProvider>
  )
}

export default MyApp
