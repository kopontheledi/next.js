import Layout from '@/components/layout/layout'
import '../styles/globals.css'

//**root component where the different page componentsa are rendered in */

export default function App({ Component, pageProps }) {
  return (  
  <Layout>
    <Component {...pageProps} />
    </Layout>
    )
}
