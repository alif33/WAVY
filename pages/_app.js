import { React } from 'react';
import Head from 'next/head';
import MainLayout from './../layouts/MainLayout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.deshibazaarbd.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
