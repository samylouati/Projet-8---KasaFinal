import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom" 

import { Header } from './layouts/header/header'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Error404 } from './pages/Error404'
import { Footer } from './layouts/footer/footer'
import { Location } from './pages/locations'

function App() {

  return (
   <div className='Projet8'>
    <Header />
    <main>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error404 />}/>
          <Route path='/location/:id' element={<Location />}></Route>
      </Routes>
    </main>
    <Footer /> 
   </div>
  )
}

export default App