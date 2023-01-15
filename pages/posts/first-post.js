import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout';

export default function FirstPost({data}) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <pre>
        {JSON.stringify(data)}
      </pre>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}