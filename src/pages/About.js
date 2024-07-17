import React from 'react'
import AboutUs from '../components/AboutUs'
import Team from '../components/Team'
import FAQs from '../components/FAQs'
import Vision from '../components/Vision'
import { Gallery } from '../components/Gallery'
import Teamleadership from '../components/Teamleadership'




function About() {
  return (
    <div className=''>
      <AboutUs />
      <Teamleadership />
      < Team />
      <Vision />
      <Gallery />
      <FAQs />
    </div>
  )
}

export default About
