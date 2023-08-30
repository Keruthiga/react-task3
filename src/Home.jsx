import React from 'react'
import Scroll from './components/Scroll'
import Place from './components/Place'
import Slider from './components/Slider'


function Home() {
  return (
    <div>
        <Slider/>
        <Scroll />
        <Place/>
    </div>
  )
}

export default Home