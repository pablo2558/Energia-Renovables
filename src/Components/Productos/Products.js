import React from 'react'
import logo12 from "../Main/Imagenes/logo12.png"
import { Link, Route, Routes } from 'react-router-dom';
import AllMap from './AllMap';
import RenewableMap from './RenewableMap';
import IndustrialMap1 from './IndustrialMap1';
import StorageMap1 from './StorageMap1';
import ProductLisMap from './ProductLisMap';



const Productos = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-[url(https://mecaluxar.cdnwm.com/casos-practicos/deposito-supermercado-online-super-nosso.1.13.jpg?imageThumbnail=3)] bg-cover bg-center h-screen">
        <img src={logo12} alt="imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div>
        <div className="text-center text-4xl text-sky-700 mt-8">
          Productos electrónicos que ofrecemos
        </div>
        <div className="text-lg mt-4 w-5/6 ml-7">
          En Inelec disponemos de una amplia selección de productos en stock. <strong><a href="https://www.inelec.net/wp-content/uploads/2021/02/Stock-Excesivo-Enero-2022.pdf"
            className="titulo" target="_blank">Consulta aquí nuestro listado de productos en stock</a></strong> 
          . Si necesitas asesoramiento no dudes en contactar con nosotros,
          estaremos encantados de ayudarte a encontrar el componente electrónico
          que necesitas. <strong><a href='Stock-Excesivo-Enero-2022.xlsx' download>Clic aquí para descargar el listado.</a></strong>
        </div>
        <div className="text-center text-4xl text-sky-700 mt-8">
          Catálogo online de productos de electrónica
        </div>
        <div className='className="text-lg mt-4 w-5/6 ml-7'>
          Navega por nuestro catálogo de productos electrónicos y encontrarás
          una solución para cada una de las necesidades que tu proyecto precise;
          si no la encuentras…¡¡ cuenta con nosotros!!
        </div>
        <div>
          <div className='flex justify-center'>
           <div className="flex space-x-6 flex-wrap">
              <Link to="Todos"  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Todos</Link>  
              <Link to="Renovables-1"  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Renovables</Link>
              <Link to="Iluminacion-1" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Iluminacion</Link>
              <Link to="Industrial-1"  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Industrial</Link>
              <Link to="Alm-Energia" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Alm. Energia</Link>
           </div>
          </div>
          <Routes>
            <Route path="Todos" element={ <ProductLisMap/> } />
            <Route path="Renovables-1" element={ <RenewableMap/> } />
            <Route path="Iluminacion-1" element={ <AllMap/> } />
            <Route path="Industrial-1" element={ <IndustrialMap1/> } />
            <Route path="Alm-Energia" element={ <StorageMap1/> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Productos