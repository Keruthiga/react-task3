import React from 'react'
//import Header from './components/Header'
import Scroll from './components/Scroll'
import Place from './components/Place'
import Slider from './components/Slider'
//import PlacesToVisit from './pages/PlacesToVisit'


function Home() {
  return (
    <div>
        <Slider/>
        <Scroll />
        <Place/>
        {/* <PlacesToVisit/> */}
    </div>
  )
}

export default Home