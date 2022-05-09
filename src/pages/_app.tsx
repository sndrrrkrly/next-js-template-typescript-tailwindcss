import '../styles/index.css';
import Head from 'next/head';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function _app({ Component, pageProps }: AppProps) {
     return (
          <>   
               <ThemeProvider attribute = 'class'>
                    <Head>
                         <meta name = 'viewport' content = 'width=device-width, initial-scale=1, user-scalable=no, user-scalable=0' />
                    </Head>

                    <Component { ... pageProps} />
               </ThemeProvider>
          </>
     );
};

export default _app;