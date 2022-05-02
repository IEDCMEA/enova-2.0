import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Workshop from '../../Components/Workshops/Workshop'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Footer/Footer'
import Speaker from '../../Components/Speakers/Speaker'

function Enova() {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Workshop/>
        <Speaker/>
        <Footer/>
    </div>
  )
}

export default Enova