import React from 'react'
import Navbar from './components/navbar/navbar'

import HomeTop from './components/Home/home_top'
import HomeMiddle from './components/Home/home_middle'


export const App = () => {
  return (
    <div>
      <Navbar />
      <HomeTop />
      <HomeMiddle />
    </div>
    
  )
}
export default App
