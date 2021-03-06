// import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <html lang='en'>
      <Head>
        <title>Daniel Loos</title>
        <meta name="description" content="Personal website of Daniel Loos" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous" />
      </Head>

      <body>
        <div className="container">
          <Nav />
          <main >
            <Component {...pageProps} />
          </main>
        </div>
      </body>
    </html>
  )
}

export default MyApp
