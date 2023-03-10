import Head from 'next/head';
import Layout from '../components/layout';
import Home from '../components/home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Promote anything!</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
