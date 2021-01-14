import { AppProps } from 'next/app';
import Head from 'next/head';
import '../style/global.css';
import Layout from '../components/Layout';
function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>롤검색</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
