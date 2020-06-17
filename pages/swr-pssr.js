import Head from 'next/head'
import { useState } from 'react';

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

  const { data, mutate } = useRequest({
    url: '/api/data'
  })

  const loadMore = async () => {
    const newData = await fetch('https://rickandmortyapi.com/api/character/?page=2')
    mutate(newData.results, false)
  }

  return (
    <div>
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={{ data }} onLoadMorePSSR={loadMore} />
      <Footer />
    </div>
  )
}

