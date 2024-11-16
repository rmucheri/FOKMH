import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HeroBottom from '../components/HeroBottom'
import Partner from '../components/Partner'
import Carousel from '../components/Carousel'
import KarandaVid from '../components/KarandaVid'
import Feature from '../components/Feature'

function Home() {
  return (
    <div>
     <Hero />
     <Feature />
     <Features />
     {/* <Carousel /> */}
     < HeroBottom />
     <KarandaVid />
     <Partner />
    </div>
  )
}

export default Home
