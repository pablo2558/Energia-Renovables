import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Historia from './Nosotros/Historia'
import LaEmpresa from './Nosotros/LaEmpresa'
import Renovables from './Sectores/Renovables'


const Rute = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>} />
                <Route path='LaEmpresa' element={ <LaEmpresa/> } />
                <Route path='Historia' element={ <Historia/> } />
                <Route path='Renovables' element={ <Renovables/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default Rute