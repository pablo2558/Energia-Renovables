import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartMap from './Cart/CartMap'
import PaymentMap from './Cart/PaymentMap'
import Cookies from './Footer/Cookies'
import Footer from './Footer/Footer'
import LegalNotice from './Footer/LegalNotice'
import Privacy from './Footer/Privacy'
import Navbar from './Header/Navbar'
import Main from './Main/Main'
import Historia from './Nosotros/Histori'
import LaEmpresa from './Nosotros/TheCompany'
import Productos from './Productos/Products'
import Iluminacion from './Sectores/Ilumination'
import Industrial from './Sectores/Industrial'
import Renovables from './Sectores/Renewable'
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
                <Route path='Productos/Informacion' element={ <Main/> } />
                <Route path='Cookies' element={ <Cookies/> } />
                <Route path='Privacy' element={ <Privacy/> } />
                <Route path='LegalNotice' element={ <LegalNotice/> } />
                <Route path='Productos/Todos' element="" />
                <Route path='Productos/Todos' element="" />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default Rute