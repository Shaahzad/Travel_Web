import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import HeroImg from "../src/assets/hero.jpg"
import Explore from './Components/Explore/Explore'
import Journal from './Components/Journal/Journal'
import Footer from './Components/Footer/Footer'


const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  position: "relative",

}

const App = () => {
  return (
    <div className='overflow-x-hidden bg-brandDark text-white'>
      <div style={bgImage}>
      <Navbar/>
      <Hero/>
      </div>
      <Explore/>
      <Journal/>
      <Footer/>
    </div>
  )
}

export default App