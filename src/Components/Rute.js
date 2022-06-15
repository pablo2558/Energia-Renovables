import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartMap from './Cart/CartMap'
import Payment from './Cart/Payment'
import PaymentMap from './Cart/PaymentMap'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Historia from './Nosotros/Historia'
import LaEmpresa from './Nosotros/LaEmpresa'
import Productos from './Productos/Productos'
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
                <Route path='Productos' element={ <Productos/> } />
                <Route path='Carrito' element={ <CartMap/> } />
                <Route path='Carrito/Information' element={ <PaymentMap/> } />
                <Route path='Productos/Informacion' element="" />
                <Route path='Productos/Todos-1' element="" />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
            </Routes>
        </Router>
    </div>
  )
}

export default Rute