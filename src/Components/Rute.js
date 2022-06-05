import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartMap from './Cart/CartMap'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Historia from './Nosotros/Historia'
import LaEmpresa from './Nosotros/LaEmpresa'
import Iluminacion from './Sectores/Iluminacion'
import Industrial from './Sectores/Industrial'
import Renovables from './Sectores/Renovables'
import Storage from './Sectores/Storage'


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
                <Route path='Iluminacion' element={ <Iluminacion/> } />
                <Route path='Industrial' element={ <Industrial/> } />
                <Route path='Almacenamiento' element={ <Storage/> } />
                <Route path='Carrito' element={ <CartMap/> } />
            </Routes>
        </Router>
    </div>
  )
}

export default Rute