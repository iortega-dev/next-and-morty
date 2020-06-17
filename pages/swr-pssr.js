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
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={{ data }} onLoadMorePSSR={loadMore} />
      <Footer />
    </div>
  )
}

