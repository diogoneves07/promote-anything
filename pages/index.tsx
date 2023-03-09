import Head from "next/head";
import ExampleProducts from "../components/example-products";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Promote everything!</title>
      </Head>
      <Layout>
        <h2>Promote everything you want!</h2>

        <ExampleProducts />
      </Layout>
    </>
  );
}
