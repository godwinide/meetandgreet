import React from 'react'
import Hero from '@/components/hero/hero'
import Tickets from '@/components/tickets/tickets'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import Footer from '@/components/footer/footer'

const home = () => {
  return (
    <>
      <Hero/>
      <Tickets/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default home