import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu.jsx'

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <About></About>
      <Qualities></Qualities>
      <Menu></Menu>
    </>
  )
}

export default Home