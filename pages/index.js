import { useState } from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { fetchData } from '../api/fullSSR';

//  allCharactersDate will be populated at build time by getStaticProps()
export default function Home(allCharactersData) {
  const [collapsed, setCollapsed] = useState(true) // Status of top navbar

  // Toggle top navbar
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

/*
* Exporting a function called getStaticProps from a page, NextJS will pre-render this page at build time using the props returned by this method
*/
export const getStaticProps = async () => {
  const allCharactersData = await fetchData(); // Simple fetch async function which returns a characters Array
  return {
    props: allCharactersData // it should have this structure { props: {} }
  };
}

