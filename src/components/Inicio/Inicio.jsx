import React from 'react'
import {BrowserRouter as Router,Routes,Navigate,Route,} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Inicio = () => {
  return (
    <div>
      <Router>
      <Navbar>
        <Routes>
        <h2>Inicio</h2>
        </Routes>
      </Navbar>
      </Router>
      
    </div>
  )
}

export default Inicio;
