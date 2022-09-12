import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
      
      </Head>
      {/* Header */}
      <Header />
      {/* Banner  */}
      <Banner />
     
    </div>
  )
}

export default Home
