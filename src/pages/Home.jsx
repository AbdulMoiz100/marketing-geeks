import React from 'react'
import Hero from "../components/Hero"
import Company from '../components/Company'
import Services from '../components/Services'
import Work from '../components/Work'
import Teams from '../components/Teams'
import Contact from '../components/Contact'


const Home = () => {
  return (
    <div id='home'>
      
      <Hero />
      <Company />
      <Services />
      <Work />
      <Teams />
      <Contact />
      
    </div>
    
  )
}

export default Home
