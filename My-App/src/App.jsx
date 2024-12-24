import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Course from './Components/Courses'
import Contact from './Components/Contact'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Router>
      
        <Route path='/'Component={Home}/>
        <Route path='/courses' Component={Course}/>
        <Route path='/contact' Component={Contact}/>
    
    </Router>
    </BrowserRouter>
  )
}

export default App