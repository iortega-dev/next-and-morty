import Head from 'next/head'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import albumItems from '../data/album';
import { useState } from 'react';

export default function Home() {
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
      <Main album={albumItems} />
      <Footer />
    </div>
  )
}
