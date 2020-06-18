import { useState } from 'react';
import Head from 'next/head'

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import fetch from '../libs/fetch'
import useRequest from '../libs/useRequest';

export default function SWR() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  /* Use custom hook useRequest (WSR+Axios), it returns data and a function to mutate that data  */
  const { data, mutate } = useRequest({
    url: '/api/data'
  })

  /* Asynct
   function to load data from second page and mutate the data */
  const loadMore = async () => {
    const newData = await fetch('https://rickandmortyapi.com/api/character/?page=2')
    mutate(newData.results, false) // Mutate function receives two params, the new data and a boolean if you want to revalidate the data
  }

  return (
    <div>
      <Head>
        <title>Next & Morty - PSSR</title>
        <meta name="author" content="Nacho Ortega" />
        <meta name="description" content="NextJS Demo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={{ data }} onLoadMorePSSR={loadMore} />
      <Footer />
    </div>
  )
}

