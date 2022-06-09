import React from 'react'
import logo12 from "../Main/Imagenes/logo12.png"
import ProductLisMap from './ProductLisMap';
import Button from "./Button"

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
          que necesitas. Clic aquí para descargar el listado.
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
            <Button/>
          </div>
            <ProductLisMap />
        </div>
      </div>
    </div>
  );
}

export default Productos