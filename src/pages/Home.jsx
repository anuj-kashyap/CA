import React from 'react'
import Hero from '../Components/Hero'
import Feature from '../Components/Feature'
import WhoWeAre from '../Components/WhoWeAre'
import StaticItem from '../Components/StaticItem'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'


function Home() {
  return (
    <div>
         <Hero/>
      <Feature/>
      <WhoWeAre/>
      <StaticItem/>
      <Services/>
      <Testimonial/>
    </div>
  )
}

export default Home