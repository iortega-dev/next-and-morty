import Head from 'next/head'
import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { fetchData } from '../api/fullSSR';

export default function Home(allCharactersData) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={allCharactersData} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const allCharactersData = await fetchData();
  return {
    props: allCharactersData
  };
}

