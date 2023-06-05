import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/reduxFolder/store';
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress';
NProgress.configure({
  minimum: 0.2,
  easing: 'ease-in-out',
  speed: 500,
  template: `<div class="bar" role="bar" style="height: 4px; z-index: 9999;"></div>`,
});
Router.events.on('routeChangeStart', () => {console.log('start');NProgress.start()});
Router.events.on('routeChangeComplete', () => {console.log('start');NProgress.done()});
Router.events.on('routeChangeError', () => {console.log('error');NProgress.done()});


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
      <Head >
        <title>MyCraft</title>
        <link rel="icon" href="/icons/mainIcon.png" />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>

          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>

    </>
  )
}
