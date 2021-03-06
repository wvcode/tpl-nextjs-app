import Head from 'next/head'
import React from 'react'
import VercelLogo from '../assets/images/vercel.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <h1> Hello!!!!</h1>
        <VercelLogo />
      </div>
    </div>
  )
}

export default Home
