import Layout from '@/components/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'

//**root component where the different page componentsa are rendered in */

export default function MyApp({ Component, pageProps }) {
  return (  
  <Layout>
    <Head>
      <title>Next Events</title>
      <meta name='description' content='NextJs Events' />
      <meta name='viewport' content='initial-scale=1.0,
      width=device-width'/>
    </Head>
    <Component {...pageProps} />
    </Layout>
    )
}
