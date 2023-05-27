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
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>

    </>
  )
}
