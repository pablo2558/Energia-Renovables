import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import * as style from "./Style";
import { BsCartDash } from "react-icons/bs";
import { useState, useEffect } from 'react';
import Inicio from './Start';
import Nosotros from './Us';
import Sectores from './Sectors';
import Productos from './Products';
import Contacto from './Contact';
import logo from "./Image/logo.png";
import { CartContainer } from '../Cart/ShopingCart';
import logo12 from "../Main/Imagenes/logo12.png"

const Navbar = () => {
    const [Open, setOpen] = useState(false)
    const [productsLength, setproductsLength] = useState(0)
    const {cart} = useContext(CartContainer)
    useEffect(() => {
      setproductsLength(
        cart?.reduce((previous, current) => previous + current.quantity, 0)
      );
    }, [cart]);
    
  return (
    <div className={style.ENCABEZADO}>
    <a className="flex items-center h-36 w-36 ml-2" href="/">
      <img src={logo} alt="logo" className="right-1" />
      <h3 className="text-slate-100 text-2xl font-bold"></h3>
    </a>
    <nav className="">
      <section className="MOBILE-MENU flex mr-8 lg:hidden ">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setOpen((el) => !el)}
        >
          <span className={style.SPAN}></span>
          <span className={style.SPAN}></span>
          <span className={style.SPAN}></span>
        </div>

        <div className={Open ? "showMenuNav" : "hideMenuNav"}>
          <div //cruz
            className="absolute top-0 right-0 px-8 py-8 bg-sky-700"
            onClick={() => setOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" className="text-white" />
              <line x1="6" y1="6" x2="18" y2="18" className='text-white' />
            </svg>
          </div>
          <ul className={style.NAVBAR_INTEMS_1}>
           <img src={logo12} alt='image' className='w-24'/>
           <li className={style.NAVBAR_INTEMS}>
              <Link to="/" onClick={() => setOpen(false)} >
                <Inicio/>
              </Link>
            </li>
            <li className={style.NAVBAR_INTEMS}>
              <Link to="LaEmpresa" onClick={() => setOpen(false)}> La Empresa </Link>
            </li>
            <li className={style.NAVBAR_INTEMS}>
              <Link to="Historia" onClick={() => setOpen(false)} > Historia </Link>
            </li>
            <li className={style.NAVBAR_INTEMS}>
                <Link to="Renovables" onClick={() => setOpen(false)} > Renovables </Link> 
            </li>
            <li className={style.NAVBAR_INTEMS}>
                <Link to="Iluminacion" onClick={() => setOpen(false)} > Iluminacion </Link> 
            </li>
            <li className={style.NAVBAR_INTEMS}>
                <Link to="Industrial" onClick={() => setOpen(false)} > Industrial </Link> 
            </li>
            <li className={style.NAVBAR_INTEMS}>
                <Link to="Almacenamiento" onClick={() => setOpen(false)} > Alm. Energia </Link> 
            </li>
            <li className={style.NAVBAR_INTEMS}>
              <Link to="Productos" onClick={() => setOpen(false)}><Productos/></Link>
            </li>
            <li className={style.NAVBAR_INTEMS}>
              <Link to="Carrito" onClick={() => setOpen(false)} >
                <div>
                  <BsCartDash className='text-white' />
                </div>
                <div>{productsLength}</div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden space-x-8 lg:flex pr-16 ">
        <li className="">
          <Link to="/">
            <Inicio/>
          </Link>
        </li>
        <li className="">
          <Nosotros/>
        </li>
        <li className="">
          <Sectores/>
        </li>
        <li className="">
          <Link to="Productos"><Productos/></Link>
        </li>
        <li className="">
          <a href="Contacto"><Contacto/></a>
        </li>
        <li className="">
          <Link to="Carrito">
            <div>
              <BsCartDash className='text-white' />
            </div>
            <div>{productsLength}</div>
          </Link>
        </li>
      </ul>
    </nav>
    <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: black;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
  </div>
  )
}

export default Navbar