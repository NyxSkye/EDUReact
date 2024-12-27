import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Course from './Components/Courses'
import Contact from './Components/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path='/'Component={Home}/>
        <Route path='/courses' Component={Course}/>
        <Route path='/contact' Component={Contact}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App