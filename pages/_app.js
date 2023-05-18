import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main:'#fcb900'
    }
  }
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}
