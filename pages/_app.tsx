import { AppProps } from 'next/app';
import Head from 'next/head';

import { storeWrapper } from '../store';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/styles/global.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default storeWrapper.withRedux(MyApp);
