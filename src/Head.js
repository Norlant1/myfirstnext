import React from 'react'
import Head from 'next/head'

const AppHead = ({children}) => {
  return (
    <Head>
    <title>{children}</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
  )
}

export default AppHead