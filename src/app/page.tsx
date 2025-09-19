import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Format from './components/Format'
import Why from './components/Why'
import Speakers from './components/Speakers'
import Details from './components/Details'
import Connected from './components/Connected'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className="bg-[url('/bg-main.svg')] bg-fixed bg-cover pt-10 min-h-screen overflow-x-hidden">
      <Home />
      <About />
      <Format />
      <Why />
      <Speakers />
      <Details />
      <Connected />
      <Footer />
    </div>
  )
}

export default page