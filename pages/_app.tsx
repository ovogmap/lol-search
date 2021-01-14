import { AppProps } from 'next/app';
import Head from 'next/head';
import '../style/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>롤검색</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
