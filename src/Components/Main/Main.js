import React from 'react'
import App from './Carrusel/App'
import AppMarcas from './CarruselMarcas/MarksApp'
import logo12 from "./Imagenes/logo12.png"
import TarjetaMap from './Tarjeta/CardMap'
import Texto from './Texto'

const Main = () => {
  return (
    <div className="lg:pt-40">
      <div className=" bg-cover bg-center bg-[url(https://img2.rtve.es/imagenes/memoria-delfin-energia-eolica-fuente-inagotable-12-10-20/1602422065497.jpg)] h-screen">
        <img src={logo12} alt="imagen" className='w-64 pt-40' />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700">
        Componentes electrónicos por áreas de trabajo
      </div>
      <TarjetaMap />
      <App />
      <div className='text-center text-4xl text-sky-700 mt-4'>
        Nuestras marcas y proveedores de electrónica:
      </div>
      <AppMarcas/>
      <Texto/>
    </div>
  );
}

export default Main