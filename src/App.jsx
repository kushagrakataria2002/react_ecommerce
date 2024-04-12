import React from 'react'
import Navbar from './components/Navbar'
import Hero_section from './components/Hero_section'
import Content from './components/Content'
import css from './index.css'; 
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <Navbar/>
    <Hero_section/>

    <p className='text-center text-xs font-semibold md:mb-20 max-sm:mb-20 sm:font-semibold max-sm:text-xl md:text-3xl' id='products'>Products</p>

    <Content/>
    <Footer/>
    </>
  )
}

export default App
