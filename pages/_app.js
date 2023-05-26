import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import store from '@/reduxFolder/store';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fcb900'
    }
  }
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>

    </>
  )
}
