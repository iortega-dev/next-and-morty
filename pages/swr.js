import Head from 'next/head'
import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import useRequest from '../libs/useRequest';

export default function SWR() {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  const data = useRequest({
    url: '/api/data'
  })

  return (
    <div>
      <Header
        collapsed={collapsed}
        toggleNavbar={toggleNavbar}
      />
      <Main allCharactersData={data} />
      <Footer />
    </div>
  )
}

