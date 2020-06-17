import { useState } from 'react';
import useSWR from 'swr';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import fetch from '../libs/fetch'
import useRequest from '../libs/useRequest';

export default function SWR(props) {
  const initialData = props.data // resolve props to initialData
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  // Make use of useRequest to return data with the first data already loaded and gives you a "mutate" function to mutate the data later
  const { data, mutate } = useRequest(
    { url: '/api/data' }, 
    { initialData }
  )

  // Function called by button to load more data from second page and update the content
  const loadMore = async () => {
    // Fetch data from external API
    const newData = await fetch('https://rickandmortyapi.com/api/character/?page=2')
    // Mutate previous data with new data and false means "ignore" data validation
    mutate({data: newData.results}, false)
  }

  return (
    <div>
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={data} onLoadMoreSSR={loadMore} />
      <Footer />
    </div>
  )
}

/* If you export an async function called getServerSideProps from a page, NextJS will pre-render this page on
each request using the data returned by getServerSideProps */
/* Done following the instructions of https://github.com/vercel/swr#ssr-with-nextjs */
export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetch('https://rickandmortyapi.com/api/character/')
  // Pass data to the page via props
  return { props: { data: data.results } }
}
