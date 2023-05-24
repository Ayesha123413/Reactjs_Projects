import React from 'react'
import About from './Components/About/About.js'
import Banner from './Components/Banner/Banner.js'
import Services from './Components/Services/Services.js'
import Contact from './Components/ContactUs/Contact.js'

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default Home
