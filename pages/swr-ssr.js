import { useState } from 'react';
import useSWR from 'swr';


import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import useRequest from '../libs/useRequest';
import fetch from '../libs/fetch'

export default function SWR(props) {
  const initialData = props.data
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const { data, mutate } = useSWR('/api/data', fetch, { initialData })

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
      <Main allCharactersData={{data}} onLoadMoreSSR={loadMore} />
      <Footer />
    </div>
  )
}

/* https://github.com/vercel/swr#ssr-with-nextjs */
export async function getServerSideProps() {
  const data = await fetch('https://rickandmortyapi.com/api/character/')
  return { props: { data: data.results } }
}
